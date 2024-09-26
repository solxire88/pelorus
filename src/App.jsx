import { useState } from 'react'
import {Helmet} from "react-helmet";
import logo from './assets/Pelorus.png'
import AboutUs from './Components/aboutUs.jsx'
import Benefits from './Components/benefits.jsx'
import Projects from './Components/projects.jsx'
import ContactUs from './Components/contactUs.jsx'
import './App.css'

export default function App() {

  return (
    <div className='bigContainer'>
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
  )
}


function Title(){

  return (
    <div className='titlePelorus'>
      <img className='pelorusImage' draggable='false' src={logo} height="100"></img>
    </div>
  )
}