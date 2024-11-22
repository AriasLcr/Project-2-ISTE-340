import { TabPane, Tab } from 'semantic-ui-react';
import getData from '../utils/getData';
import { useEffect, useState } from 'react';
import PeopleGroup from './PeopleGroup';

const PeopleTabs = () => {
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

    useEffect(() => {
        getData('people/').then((json) => {
            setPeopleObj(json);
            setLoaded(true);
        });
    }, []);

    if(!loaded) return (
        <div className='w-full m-20 '>
            <h1>Loading People...</h1>
        </div>
    );

    return (
        <div id='People' className='w-full flex flex-col justify-center items-center mt-20'>
            <h1 className='text-5xl '>{peopleObj.title}</h1>
            <h3>{peopleObj.subTitle}</h3>
            <Tab panes={panes} />
        </div>
    )
};


export default PeopleTabs;