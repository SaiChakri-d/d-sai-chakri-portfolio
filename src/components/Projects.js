import React from "react";
import { projects } from "../Constants";
import LaunchRoundedIcon from "@mui/icons-material/LaunchRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import Footer from "./Footer";

const Projects = () => {
  return (
    <>
      <div
        className="container mx-auto w-10/12 mb-9"
        style={{ marginTop: "3.5rem" }}
      >
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

                  <div className="buttons flex mx-4 mt-2 mb-4 space-x-5">
                    <a href={item.github} target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="px-3 py-2 text-sm font-medium text-center text-white bg-purple-700 rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800 shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                      >
                        Code
                        <CodeRoundedIcon className="ml-1" />
                      </button>
                    </a>
                    <a href={item.netlify} target="_blank" rel="noreferrer">
                      <button
                        type="button"
                        className="px-3 py-2 text-sm font-medium text-center text-white bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                      >
                        Live
                        <LaunchRoundedIcon className="ml-1" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
