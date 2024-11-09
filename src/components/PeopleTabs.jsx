import { TabPane, Tab } from 'semantic-ui-react';
import getData from '../utils/getData';
import { useEffect, useState } from 'react';
import PeopleGroup from './PeopleGroup';

const PeopleTabs = () => {
      //set up vars (useState)
    const [peopleObj, setPeopleObj] = useState();
    const [loaded, setLoaded] = useState(false);

    const panes = [
        {menuItem: 'Faculty', render: () => <TabPane>
            <PeopleGroup title="Faculty" obj={peopleObj.faculty}/>
        </TabPane>},
        {menuItem: 'Staff', render: () => <TabPane>
            <PeopleGroup title="Staff" obj={peopleObj.staff}/>
        </TabPane>},
    ];

    //go get data
    useEffect(() => {
        getData('people/').then((json) => {
            setPeopleObj(json);
            setLoaded(true);
        });
    }, []);

    if(!loaded) return <h1>Loading People...</h1>

    return (
        <>
            <h1 id='People'>{peopleObj.title}</h1>
            <h3>{peopleObj.subTitle}</h3>
            <Tab panes={panes} />
        </>
    )
};


export default PeopleTabs;