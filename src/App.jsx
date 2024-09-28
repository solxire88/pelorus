import { useState } from "react";
import { Helmet } from "react-helmet";
import logo from "./assets/Pelorus.png";
import AboutUs from "./Components/aboutUs.jsx";
import Benefits from "./Components/benefits.jsx";
import Projects from "./Components/projects.jsx";
import ContactUs from "./Components/contactUs.jsx";
import { motion, useInView, useAnimation } from "framer-motion";
import "./App.css";

export default function App() {
  return (
    <div className="bigContainer">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Pelorus</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="icon" type="image/svg+xml" href="facicon.svg" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Title></Title>
      <AboutUs></AboutUs>
      {/* <Benefits></Benefits> */}
      <Projects></Projects>
      <ContactUs></ContactUs>
    </div>
  );
}

function Title() {
  return (
    <motion.div className="titlePelorus"
    variants={{
      hidden: {opacity: 0, y: -50},
      visible: {opacity: 1, y: 0}
    }}
    initial="hidden"
    animate="visible"
    transition={{ duration: 1.5, delay:0.25}}>
      <img
        className="pelorusImage"
        draggable="false"
        src={logo}
        height="100"
      ></img>
    </motion.div>
  );
}
