<<<<<<< HEAD
import React from 'react'
import FindADoctor from './FindADoctor'

function Home() {
  return (
    <div>
      <FindADoctor/>
    </div>
  )
=======
import React from "react";
import Navbar from "./Navbar"
import Navbars from "./Navbars"
import Homehome from "./Homehome";
import Infosection from "./Infosection";
import Footersection from "./Footersection";
import Featureddepartment from "./Featureddepartment";

let Home = ()=>{
  return(
    <div className="lg:min-h-screen md:min-h-screen sm:min-h-screen">        
        <Navbar />
        <Navbars />
        <Homehome/>
        <Featureddepartment/>
        <Infosection/>
        <Footersection/>       
    </div>
  );
>>>>>>> 56c12c18ce6a554f7cd34bbd35852f2d0446b820
}

export default Home;