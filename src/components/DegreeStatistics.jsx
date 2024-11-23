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
