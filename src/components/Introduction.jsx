import React from "react";
const Introduction = ({introduction}) => {
    return (
        <section className="mb-10">
          <h2 className="text-3xl font-bold mb-10">{introduction.title}</h2>
          <div className="space-y-4">
            {introduction.content.map((item, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Introduction;