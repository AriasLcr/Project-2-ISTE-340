import { useState } from "react";
import getData from "../utils/getData";

const People = () => {
    const [peopleObj, setPeopleObj] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData('people/')
            .then((json) => {
                setPeopleObj(json)
                setLoaded(true)
            })
    }, [])

    if (!loaded) return (<>
        <h1>People loading...</h1>
    </>)

    return (
        <>
            <p>hi</p>
        </>
    )
}

export default People;