import React, {useState, useEffect} from "react";
import Introduction from "./Introduction";
import getData from "../utils/getData";
import DegreeStatistics from "./DegreeStatistics";
import Employers from "./Employers";
import Careers from "./Careers";
import CoopTable from "./CoopTable";

const Employment = () => {
    const [employment, setEmployment] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData("employment/").then((json) => {
            setEmployment(json);
            setLoaded(true);
        });
    }, []);

    if (!loaded) {
        return (
            <div className="flex w-full justify-center items-center">
                <h1>Loading...</h1>
            </div>
        );
    }
    return (
        <section id="Employment" className="w-full flex justify-center flex-col items-center py-10">
            <h1 className="text-5xl">Employment</h1>
            <div className="p-6 w-2/3">
            <Introduction introduction={employment.introduction} />
            <DegreeStatistics degreeStatistics={employment.degreeStatistics} />
            <Employers employers={employment.employers} />
            <Careers careers={employment.careers} />
            <CoopTable coopData={employment.coopTable} />
            </div>
          </section>
      );
}

export default Employment;