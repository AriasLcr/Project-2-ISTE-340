import React, { useState, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import getData from "../utils/getData";

const Degrees = () => {
    const [degrees, setDegrees] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        getData('degrees/').then((json) => {
            setDegrees(json);
            setLoaded(true);
        });
    }, []);

    if (!loaded) {
        return <div>Loading...</div>;
    }

    return (
        <div
            id="Degrees"
            className="w-full flex flex-col justify-center items-center p-4"
        >
            <h1 className="mb-10 text-5xl font-bold text-center">
                Degrees Offered
            </h1>

            {/* Undergraduate Section */}
            <h2 className="mt-5 mb-10 text-3xl font-semibold text-center">
                Undergraduate Degrees
            </h2>
            {degrees.undergraduate.map((degree) => (
                <Accordion
                    key={degree.degreeName}
                    className="w-4/5 mx-auto mb-4 border border-gray-300 shadow-md rounded-lg"
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`${degree.degreeName}-content`}
                        id={`${degree.degreeName}-header`}
                        className="bg-gray-100"
                    >
                        <p className="text-lg font-medium">{degree.title}</p>
                    </AccordionSummary>
                    <AccordionDetails className="bg-white">
                        <p className="mb-4 text-gray-700">{degree.description}</p>
                        <p className="mt-2 font-bold text-gray-900">
                            Concentrations:
                        </p>
                        <ul className="list-disc ml-6 text-gray-700">
                            {degree.concentrations.map((concentration, index) => (
                                <li key={index} className="text-sm">
                                    {concentration}
                                </li>
                            ))}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            ))}

            {/* Graduate Section */}
            <h2 className="my-10 text-3xl font-semibold text-center">
                Graduate Degrees
            </h2>
            {degrees.graduate.map((degree) =>
                degree.degreeName !== "graduate advanced certificates" ? (
                    <Accordion
                        key={degree.degreeName}
                        className="w-4/5 mx-auto mb-4 border border-gray-300 shadow-md rounded-lg"
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${degree.degreeName}-content`}
                            id={`${degree.degreeName}-header`}
                            className="bg-gray-100"
                        >
                            <p className="text-lg font-medium">{degree.title}</p>
                        </AccordionSummary>
                        <AccordionDetails className="bg-white">
                            <p className="mb-4 text-gray-700">{degree.description}</p>
                            <p className="mt-2 font-bold text-gray-900">
                                Concentrations:
                            </p>
                            <ul className="list-disc ml-6 text-gray-700">
                                {degree.concentrations.map((concentration, index) => (
                                    <li key={index} className="text-sm">
                                        {concentration}
                                    </li>
                                ))}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                ) : (
                    <Accordion
                        key={degree.degreeName}
                        className="w-4/5 mx-auto mb-4 border border-gray-300 shadow-md rounded-lg"
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`${degree.degreeName}-content`}
                            id={`${degree.degreeName}-header`}
                            className="bg-gray-100"
                        >
                            <p className="text-lg font-medium">
                                Graduate Advanced Certificates
                            </p>
                        </AccordionSummary>
                        <AccordionDetails className="bg-white">
                            <p className="mt-2 font-bold text-gray-900">
                                Available Certificates:
                            </p>
                            <ul className="list-disc ml-6 text-gray-700">
                                {degree.availableCertificates.map(
                                    (certificate, index) => (
                                        <li key={index} className="text-sm">
                                            {certificate}
                                        </li>
                                    )
                                )}
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                )
            )}
        </div>
    );
};

export default Degrees;
