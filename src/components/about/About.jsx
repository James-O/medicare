import React from 'react'
import Abouthome from './Abouthome'
import Navbars from '../home/Navbars'
import Navbar from '../home/Navbar'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'
import Aboutnav from './Aboutnav'
import OurPerformance from './OurPerformance'
function About() {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <Navbars/>
      <Aboutnav/>
      <OurPerformance/>
      <Abouthome/>
      <Infosection/>
      <Footersection/></div>
  )
}

export default About