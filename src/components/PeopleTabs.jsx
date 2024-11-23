/**
 * PeopleTabs component fetches and displays people data categorized into tabs.
 * 
 * @component
 * @returns {JSX.Element} The PeopleTabs component.
 * 
 * @description
 * This component uses the `useEffect` hook to fetch data from the 'people/' endpoint
 * and stores it in the `peopleObj` state. It displays a loading message until the data
 * is fully loaded. Once loaded, it renders a tabbed interface with two tabs: Faculty and Staff.
 * Each tab displays a `PeopleGroup` component with the respective data.
 * 
 * @requires semantic-ui-react
 * @requires ../utils/getData
 * @requires react
 * @requires ./PeopleGroup
 */
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
        <div id='People' className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-5xl '>{peopleObj.title}</h1>
            <h3>{peopleObj.subTitle}</h3>
            <Tab panes={panes} />
        </div>
    )
};


export default PeopleTabs;