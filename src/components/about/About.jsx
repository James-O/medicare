import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import Navbars from '../home/Navbars'
import Navbar from '../home/Navbar'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'
import Aboutnav from './Aboutnav'
import OurPerformance from './OurPerformance'
import WhatWestandfor from './WhatWestandfor';
import OurSpecialization from './OurSpecialization';
function About() {
  useEffect(() => {
        AOS.init({
        duration: 1000,
        delay: 50,
        });
        }, []);
  return (
    <div className="min-h-screen" data-aos-easing="ease-in-out" data-aos-duration="600" data-aos-delay="0">
      <Navbar/>
      <Navbars/>
      <Aboutnav/>
      <OurPerformance/>
      <WhatWestandfor/>
      <OurSpecialization/>
      <Infosection/>
      <Footersection/></div>
  )
}

export default About