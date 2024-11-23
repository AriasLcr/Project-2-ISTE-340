/**
 * Employers component renders a list of employer names.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.employers - The employers data.
 * @param {string} props.employers.title - The title for the employers section.
 * @param {string[]} props.employers.employerNames - The list of employer names.
 * @returns {JSX.Element} The rendered Employers component.
 */

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
