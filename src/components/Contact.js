import React, { useRef } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Footer from "./Footer";

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
    <>
      <div
        className="flex flex-col content-between"
        style={{marginTop: '3.5rem'}}
      >
        <h1
          className="text-6xl text-center"
          style={{ color: "var(--primary)" }}
        >
          Contact Me
        </h1>
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
              <section className="body-font">
                <div className="text-center"></div>
                <div className="container px-9 my-6 py-3 mx-auto flex">
                  <div
                    className="lg:w-1/3 md:w-1/2 mt-0 rounded-lg p-8 flex flex-col content-between md:mx-auto w-full md:mt-0 z-10 shadow-md hover:shadow-lg"
                    style={{ backgroundColor: "var(--backbox)"}}
                  >
                    <div className="relative mb-3">
                      <label htmlFor="name" className="leading-10 text-lg">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="userName"
                        placeholder="Enter your name"
                        className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={values.userName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="text-sm text-red-500 mt-1">
                        {touched.userName && errors.userName}
                      </div>
                    </div>
                    <div className="relative mb-3">
                      <label htmlFor="email" className="leading-10 text-lg">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="userEmail"
                        placeholder="Enter your email"
                        className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        value={values.userEmail}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <div className="text-sm text-red-500 mt-1">
                        {touched.userEmail && errors.userEmail}
                      </div>
                    </div>
                    <div className="relative mb-4">
                      <label htmlFor="message" className="leading-10 text-lg">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message.."
                        className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      ></textarea>
                      <div className="text-sm text-red-500">
                        {touched.message && errors.message}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-md px-5 py-2.5 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900 shadow-md hover:shadow-lg transition duration-150 ease-in-out"
                    >
                      Send Message
                      <SendRoundedIcon className="ml-1" />
                    </button>
                  </div>
                </div>
              </section>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
