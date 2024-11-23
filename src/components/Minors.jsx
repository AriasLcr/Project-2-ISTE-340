import React, { useState, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import getData from "../utils/getData";

const Minors = () => {
    const [minors, setMinors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData("minors/").then((json) => {
            setMinors(json.UgMinors);
            setLoaded(true);
        });
    }, []);

    if (!loaded) {
        return <div>Loading...</div>;
    }

    return (
        <div
            id="Minors"
            className="w-full flex flex-col justify-center items-center p-4 mt-20"
        >
            <div className="w-2/3 xl:w-3/5 flex flex-col justify-center items-center">
                <h1 className="mb-10 text-5xl font-bold text-center">
                    Undergraduate Minors
                </h1>

                {minors.map((minor) => (
                    <Accordion
                    key={minor.name}
                    className="w-4/5 mx-auto mb-4 border border-gray-300 shadow-md rounded-lg"
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${minor.name}-content`}
                            id={`${minor.name}-header`}
                            className="bg-gray-100"
                            >
                            <p className="text-lg font-medium">{minor.title}</p>
                        </AccordionSummary>
                        <AccordionDetails className="bg-white">
                            <p className="mb-4 text-gray-700">{minor.description}</p>
                            <p className="mt-2 font-bold text-gray-900">Courses:</p>
                            <ul className="list-disc ml-6 text-gray-700">
                                {minor.courses.map((course, index) => (
                                    <li key={index} className="text-sm">
                                        {course}
                                    </li>
                                ))}
                            </ul>
                            {minor.note && (
                                <>
                                    <p className="mt-2 font-bold text-gray-900">Note:</p>
                                    <p className="text-sm text-gray-700">{minor.note}</p>
                                </>
                            )}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
};

export default Minors;
