import React from "react";
import { projects } from "../Constants";

const Projects = () => {
  return (
    <div className="container mx-auto w-10/12" style={{ marginTop: "3.5rem" }}>
      <div className="container-2xl text-center align-items-center my-3">
        <h1 className="text-6xl" style={{ color: "var(--primary)" }}>
          My Projects
        </h1>
      </div>
      <div className="projects-container container mx-auto mt-6">
        <div className="container-wrapper rounded-2xl grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {projects.map((item, index) => (
            <div
              className="card-wrapper mx-auto my-0 flex justify-center"
              key={index}
            >
              <div className="flex flex-col justify-between bg-yellow-50 md:m-4 mx-2 my-6 rounded-lg">
                <div className="px-5 pt-5 pb-2">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-gray-700 text-base">{item.description}</p>
                </div>

                <div className="flex flex-col justify-between bg-slate-300 md:m-4 mx-2 my-6 rounded-lg">
                  <div className="p-2">
                    <img src={item.image} alt="project" />
                  </div>
                </div>

                <div className="buttons flex mx-4 my-2 space-x-3">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      GitHub Code
                    </button>
                  </a>
                  <a href={item.netlify} target="_blank" rel="noreferrer">
                    <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                      Live Link
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="buttons flex justify-center mt-3 mb-9 pb-9">
          <a
            href="https://github.com/SaiChakri-d?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <button className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900">
              Find More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
