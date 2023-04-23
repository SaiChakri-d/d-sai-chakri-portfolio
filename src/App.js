import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import ParticlesBg from "./components/ParticlesBg";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bg" element={<ParticlesBg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
