import React from "react";
import { techStack } from "../Constants";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <div className="w-10/12 sm:w-8/12 container mx-auto mt-9">
      <h1
        className="text-3xl sm:text-4xl lg:text-5xl my-3"
        style={{ color: "var(--primary)" }}
      >
        Hey, I'm Chakri 👋
      </h1>
      <div className="info flex flex-col-reverse sm:grid sm:grid-cols-2">
        <div className="info-text sm:span-col-8 lg:mt-5">
          <p>I'm a Full Stack Developer based in Bangalore, IN.</p>
          <br />
          <p>
            I've graduated from RV College of Engineering with degree in
            Telecommunication Engineering. I always had fond of learning new skills and
            technologies, that’s how I got into Web Development while studying
            in college. I mainly use React for frontend and NodeJS for backend.
          </p>
          <br />
          <p>
            When I am not coding, I like to explore about new Smartphones and Gadgets, listen some music, play mobile games, play badminton, learn new skills.
          </p>
        </div>
        <div className="hidden lg:block img-wrapper my-12 sm:my-0 sm:span-col-4 lg:flex-row-reverse">
          <div className="mx-auto w-10/12 sm:w-2/3 lg:w-1/2 xl:w-1/3">
            {/* <img src="https://cdn3.vectorstock.com/i/1000x1000/48/37/web-developer-design-vector-5884837.jpg"></img> */}
          </div>
        </div>
      </div>

      <div className="tech-list mt-20">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl my-3"
          style={{ color: "var(--primary)" }}
        >
          Technologies I work with
        </h1>
        {
          <div className="flex justify-center">
            <motion.div className="flex flex-wrap mt-4 justify-center sm:justify-between">
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
                  className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
                  key={index}
                >
                  <img alt={`image${index}`} src={el.link} className="w-12" />
                  <h4 className="text-md ml-4">{el.name}</h4>
                </motion.div>
              ))}
            </motion.div>
          </div>
        }
      </div>
    </div>
  );
}
