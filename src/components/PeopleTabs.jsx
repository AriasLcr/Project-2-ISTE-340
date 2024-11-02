import { TabPane, Tab } from 'semantic-ui-react';
import './People.css';
import PropTypes from 'prop-types';
import './People.css'

const PeopleTabs = ({ faculty = [], staff = [] }) => {

    const facultyPane = (
        <div className="peopleList">
        {faculty && faculty.map((p) => (
            <div className="peopleListItem" key={p.username}>
                <h3>{p.name}</h3>
                <img src={p.imagePath} alt="Faculty member" />
            </div>
        ))}
        </div>
    );

    const staffPane = (
        <div className="peopleList">
        {staff && staff.map((p) => (
            <div className="peopleListItem" key={p.username}>
                <h3>{p.name}</h3>
                <img src={p.imagePath} alt="Staff member" />
            </div>
        ))}
        </div>
    );

  const panes = [
      {menuItem: 'Faculty', render: () => <TabPane>{facultyPane}</TabPane>},
      {menuItem: 'Staff', render: () => <TabPane>{staffPane}</TabPane>},
  ];

  return <Tab panes={panes} />;
};

PeopleTabs.propTypes = {
  faculty : PropTypes.array,
  staff : PropTypes.array
}

export default PeopleTabs;