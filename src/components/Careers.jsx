/**
 * Careers component renders a list of career names.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.careers - The careers data.
 * @param {string} props.careers.title - The title of the careers section.
 * @param {string[]} props.careers.careerNames - An array of career names.
 * @returns {JSX.Element} The rendered Careers component.
 */

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
