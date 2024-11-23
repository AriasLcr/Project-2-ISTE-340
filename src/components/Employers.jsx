import React from "react";

const Employers = ({ employers }) => {
  return (
    <section className="mb-10">
      <h2 className="text-3xl font-bold mb-4">{employers.title}</h2>
      <ul className="list-disc list-inside text-gray-700">
        {employers.employerNames.map((employer, index) => (
          <li key={index} className="mb-1">{employer}</li>
        ))}
      </ul>
    </section>
  );
};

export default Employers;
