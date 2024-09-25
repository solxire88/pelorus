import { useState } from 'react'
import logo from './assets/Pelorus.png'
import AboutUs from './Components/aboutUs.jsx'
import Benefits from './Components/benefits.jsx'
import Projects from './Components/projects.jsx'
import ContactUs from './Components/contactUs.jsx'
import './App.css'

export default function App() {

  return (
    <div className='bigContainer'>
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
      <img className='pelorusImage' src={logo} height="100"></img>
    </div>
  )
}