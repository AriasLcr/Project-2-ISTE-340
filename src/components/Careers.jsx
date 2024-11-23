import React from "react";

const Careers = ({ careers }) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-4">{careers.title}</h2>
      <ul className="list-disc list-inside text-gray-700">
        {careers.careerNames.map((career, index) => (
          <li key={index} className="mb-1">{career}</li>
        ))}

      </ul>
    </section>
  );
};

export default Careers;
