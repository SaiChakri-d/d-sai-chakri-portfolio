import React from "react";
import ParticlesBg from "./ParticlesBg";
import "../index.css";

const styles = {
  centerFit: {
    height: "calc(100vh - 3.5rem)",
  },
  container: {
    display: "flex",
    height: "85%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  textHeading: {
    fontWeight: "bold",
    color: "var(--fontcolor)",
  },
  textDescription: {
    padding: "5px 20px",
    color: "var(--fontcolor)",
  },
};

function Home() {
  return (
    <div className="bg" style={styles.centerFit}>
      <div
        className="container-lg text-center text-white flex"
        style={styles.container}
      >
        <div
          className="text-4xl py-1 mx-3 md:text-7xl"
          style={styles.textHeading}
        >
          Hi! My name is Sai Chakri D<span class="wave">👋</span>
        </div>
        <div className="text-xl md:text-3xl" style={styles.textDescription}>
          I'm a Full Stack Developer Trainee
        </div>
      </div>
      <ParticlesBg />
    </div>
  );
}

export default Home;
