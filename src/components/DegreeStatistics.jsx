/**
 * DegreeStatistics component displays a section with degree statistics.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.degreeStatistics - The degree statistics data.
 * @param {string} props.degreeStatistics.title - The title of the statistics section.
 * @param {Array} props.degreeStatistics.statistics - An array of statistics.
 * @param {Object} props.degreeStatistics.statistics[] - A single statistic.
 * @param {string|number} props.degreeStatistics.statistics[].value - The value of the statistic.
 * @param {string} props.degreeStatistics.statistics[].description - The description of the statistic.
 *
 * @returns {JSX.Element} The rendered DegreeStatistics component.
 */

import React from "react";

const DegreeStatistics = ({ degreeStatistics }) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-4">{degreeStatistics.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {degreeStatistics.statistics.map((stat, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md text-center">
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-gray-700">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DegreeStatistics;
