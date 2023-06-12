import React from "react";
import { techStack } from "../Constants";
import { motion } from "framer-motion";
import dpSai from "./dpSai1.jpg";
import "../index.css";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import Footer from "./Footer";

export default function AboutMe() {
  return (
    <>
      <div className="w-10/12 sm:w-8/12 container mx-auto mt-9">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl my-3"
          style={{ color: "var(--primary)" }}
        >
          Hi, I'm Chakri👋
        </h1>
        <div className="info flex flex-col-reverse sm:grid sm:grid-cols-2">
          <div className="info-text sm:span-col-8 lg:mt-5">
            <p>
              I'm a Full Stack Developer Trainee based in Bangalore, India. I'm
              pursuing Full Stack Developer Programme at GUVI Zen-Class IITM
              Research Park.
            </p>
            <br />
            <p>
              I've graduated from RV College of Engineering, Bangalore with
              degree in Telecommunication Engineering. I always had fond of
              learning new skills and technologies, that’s how I got into Web
              Development while studying in college. I mainly use React for
              frontend and NodeJS for backend.
            </p>
            <br />
            <p>
              When I am not coding, I like to explore about new smartphones and
              gadgets, listen some music, play mobile games, play badminton,
              learn new skills.
            </p>

            <div className="resume-button mt-6">
              <a
                href="https://drive.google.com/file/d/1idtjYC9_pr5C5TuOouH5RhSMC3L3GXph/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                >
                  Download Resume
                  <FileDownloadOutlinedIcon className="ml-1" />
                </button>
              </a>
            </div>
          </div>
          <img
            src={dpSai}
            alt="dp"
            className="relative mx-auto my-8 w-10/12 sm:w-1/2 lg:block img-wrapper justify-content sm:my-0 sm:span-col-4 lg:flex-wrap-reverse rounded-lg shadow-lg"
          />
        </div>

        <div className="tech-list mt-9">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl my-3"
            style={{ color: "var(--primary)" }}
          >
            Technologies I work with
          </h1>
          {
            <div className="flex justify-center pb-6">
              <motion.div className="flex flex-wrap mt-4 justify-center sm:justify-between ">
                {techStack.map((el, index) => (
                  <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={{
                      visible: {
                        y: 0,
                        opacity: 1,
                        transition: {
                          type: "spring",
                        },
                      },
                      hidden: { opacity: 1, y: 80 },
                    }}
                    className="px-3 py-2 m-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded-lg flex items-center md:w-48 w-40 shadow-md cursor-pointer hover:shadow-lg hover:scale-105 ease-in-out"
                    key={index}
                    style={{ backgroundColor: "var(--backbox)" }}
                  >
                    <img alt={`pic${index}`} src={el.link} className="w-12" />
                    <h4 className="text-md ml-3 text-center">{el.name}</h4>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
