/**
 * Minors component fetches and displays a list of undergraduate minors.
 * Each minor is displayed in an accordion with its title, description, courses,
 * and optional note. Courses are further expanded into individual accordions
 * with detailed course information fetched from the API.
 *
 * @component
 *
 * @returns {JSX.Element} The rendered component.
 */

import React, { useState, useEffect } from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import getData from "../utils/getData";

// Utility function to decode HTML entities
const decodeHtmlEntities = (text) => {
  const parser = new DOMParser();
  const dom = parser.parseFromString(`<!doctype html><body>${text}`, "text/html");
  return dom.body.textContent;
};

const Minors = () => {
  const [minors, setMinors] = useState([]);
  const [courses, setCourses] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Fetch minors data
    getData("minors/").then((json) => {
      setMinors(json.UgMinors);
    });

    // Fetch courses data
    getData("course/").then((json) => {
      const coursesById = {};
      json.forEach((course) => {
        coursesById[course.courseID] = {
          ...course,
          title: decodeHtmlEntities(course.title),
          description: decodeHtmlEntities(course.description),
        }; // Decode HTML entities
      });
      setCourses(coursesById);
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
                {minor.courses.map((courseID) => (
                  <Accordion
                    key={courseID}
                    className="mb-2 border border-gray-200 shadow-sm rounded"
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`${courseID}-content`}
                      id={`${courseID}-header`}
                      className="bg-gray-50"
                    >
                      <p className="text-sm font-medium">
                        {courseID || ""} {courses[courseID]?.title || "Course Title Not Found"}
                      </p>
                    </AccordionSummary>
                    <AccordionDetails>
                      <p className="text-sm text-gray-700">
                        {courses[courseID]?.description || "No description available."}
                      </p>
                    </AccordionDetails>
                  </Accordion>
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
