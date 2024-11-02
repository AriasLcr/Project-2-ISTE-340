import { useState, useEffect } from "react";
import getData from "../utils/getData";
import PeopleTabs from "./PeopleTabs";
import './People.css';

const People = () => {
    const [peopleObj, setPeopleObj] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData('people/').then((json) => {
            setPeopleObj(json);
            setLoaded(true);
        });
    }, []);

    if (!loaded) return <><h1>People Loading...</h1></>;

    return (
        <>
            <h1>{peopleObj.title}</h1>
            <h3>{peopleObj.subtitle}</h3>
            <PeopleTabs faculty={peopleObj.faculty} staff={peopleObj.staff} />
        </>
    );
};

export default People;