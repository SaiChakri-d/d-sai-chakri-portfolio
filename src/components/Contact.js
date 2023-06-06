import React, { useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

function Contact() {
  const initialValues = {
    userName: "",
    userEmail: "",
    message: "",
  };
  const form = useRef();

  const userDataSchema = Yup.object().shape({
    userName: Yup.string()
      .min(3, "Minimum 3 Charcters Required")
      .max(15, "Max 15 Charcters Allowed")
      .required("Name is Required"),
    userEmail: Yup.string()
      .email("Invalid Email")
      .min(3, "Minimum 3 Charcters Required")
      .max(30, "Max 30 Charcters Allowed")
      .required("Email is Required"),
    message: Yup.string()
      .min(5, "Minimum 5 Charcters Required")
      .max(150, "Max 150 Characters Allowed")
      .required("Message is Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);
      emailjs
        .sendForm(
          "service_5jl6qc8",
          "template_qrmof3s",
          form.current,
          "ct63DqsRo3ogx5WbP"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      resetForm();
      alert("Successfully submitted!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Contact">
      <Formik
        initialValues={initialValues}
        validationSchema={userDataSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          isValid,
        }) => (
          <Form ref={form} onSubmit={handleSubmit}>
            <section className="text-gray-600 body-font">
              <div className="text-center px-auto"></div>
              <div className="container px-7 sm:py-14 mx-auto flex">
                <div className="lg:w-1/3 md:w-1/2 mt-0 bg-yellow-50 rounded-lg p-8 flex flex-col md:mx-auto w-full md:mt-0 z-10 shadow-md">
                  <h2 className="text-center text-gray-900 text-3xl mb-3 font-medium title-font">
                    Send me a message
                  </h2>
                  <div className="relative mb-4">
                    <label
                      htmlFor="name"
                      className="leading-10 text-lg text-gray-600"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="userName"
                      placeholder="Enter your name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="errorMessage">
                      {touched.userName && errors.userName}
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="email"
                      className="leading-10 text-lg text-gray-600"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="userEmail"
                      placeholder="Enter your email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      value={values.userEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <div className="errorMessage">
                      {touched.userEmail && errors.userEmail}
                    </div>
                  </div>
                  <div className="relative mb-4">
                    <label
                      htmlFor="message"
                      className="leading-10 text-lg text-gray-600"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Write your message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    ></textarea>
                    <div className="errorMessage">
                      {touched.message && errors.message}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="focus:outline-none text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900"
                  >
                    Submit
                  </button>
                </div>
              </div>
              {/* Links */}
              <div className="h-24 bg-slate-300 mt-5 flex justify-center space-x-5">
                <div className="w-10 md:w-16">
                  <a
                    href="https://www.linkedin.com/in/sai-chakri-d-ba3546278/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {
                      <LinkedInIcon
                        sx={{
                          height: "100%",
                          width: "100%",
                          "&:hover": {
                            color: "#0A66C2",
                          },
                          "&:active": {
                            color: "#FEFCE8",
                          },
                        }}
                      />
                    }
                  </a>
                </div>
                <div className="w-10 md:w-16">
                  <a
                    href="https://github.com/SaiChakri-d/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {
                      <GitHubIcon
                        sx={{
                          height: "100%",
                          width: "100%",
                          "&:hover": {
                            color: "#6e5494",
                          },
                          "&:active": {
                            color: "#FEFCE8",
                          },
                        }}
                      />
                    }
                  </a>
                </div>
                <div className="w-10 md:w-16">
                  <a
                    href="https://twitter.com/dschakri117/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {
                      <TwitterIcon
                        sx={{
                          height: "100%",
                          width: "100%",
                          "&:hover": {
                            color: "#1da1f2",
                          },
                          "&:active": {
                            color: "#FEFCE8",
                          },
                        }}
                      />
                    }
                  </a>
                </div>
              </div>
            </section>
          </Form>
        )}
      </Formik>
      {/* <Footer /> */}
    </div>
  );
}

export default Contact;
