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
              <div
                className="flex flex-col justify-between md:m-4 mx-2 my-6 rounded-lg shadow-md hover:shadow-lg overflow-hidden"
                style={{ backgroundColor: "var(--backbox)" }}
              >
                <img
                  className="h-full w-full object-fill hover:scale-105 transition-scale duration-200 ease-in items-center"
                  src={item.image}
                  alt="project"
                />
                <div className="px-5 pt-5 pb-2">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <p className="text-base">{item.description}</p>
                </div>

                <div className="buttons flex mx-4 my-2 space-x-3">
                  <a href={item.github} target="_blank" rel="noreferrer">
                    <button
                      type="button"
                      class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                    >
                      GitHub Code
                    </button>
                  </a>
                  <a href={item.netlify} target="_blank" rel="noreferrer">
                    <button className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 shadow-md hover:shadow-lg transition duration-150 ease-in-out">
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
            <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out">
              Find More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
