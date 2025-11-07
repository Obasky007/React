import React from "react";
import Cards from "./Card";
import Jobs from "../Jobs";

function Body() {
  return (
    <div>
      <div className="text-white text-center bg-pink-700 py-20">
        <h1 className="font-bold text-5xl mb-5">Become a React Dev</h1>
        <p>Find the React job that fits your skill set</p>
      </div>
      <div className="md:flex block justify-center items-center gap-[150px] mt-16">
        <Cards
          title="For Developers"
          description="Browse our React jobs and start your career today"
        />

        <Cards
          title="For Employers"
          description="Browse our React jobs and start your career today"
        />
      </div>
      <div className="bg-gray-50 pt-14">
        <h1 className="font-bold text-5xl text-gray-700 w-fit m-auto mb-12">
          Jobs For You
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-10">
          {Jobs.map(({ title, id, description, salary, location, type }) => (
            <div
              key={id}
              className="border border-gray-300 shadow-md rounded-2xl p-5 bg-white hover:shadow-2xl transition-shadow duration-300 mb-3"
            >
              <div className="flex justify-between items-center mb-3 flex-wrap gap-2">
                <span className="text-xs sm:text-sm font-medium px-3 py-1 rounded-full bg-pink-600 text-white">
                  {type}
                </span>
                <span className="text-xs sm:text-sm text-gray-500">
                  {location}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-900 leading-snug">
                {title}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5">
                {description}
              </p>
              <div className="flex justify-between items-center flex-wrap gap-3">
                <span className="text-gray-900 font-semibold text-base sm:text-lg m-auto">
                  {salary}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div> 

      <div>

      </div>
    </div>
  );
}

export default Body;
