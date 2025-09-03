
import React from "react";
import Navbar from "./Navbar"
import Navbars from "./Navbars"

import Infosection from "./Infosection";
import Footersection from "./Footersection";
import FeaturedDepartments from "./FeaturedDepartments";

import FindADoctor from "./FindADoctor";
import Homess from "./Homess";

let Home = ()=>{
  return(
    <div className="lg:min-h-screen md:min-h-screen sm:min-h-screen">        
        <Navbar />
        <Navbars />
        <Homess/>        
        <FeaturedDepartments/>
        <FindADoctor/>        
        <Infosection/>
        <Footersection/>       
    </div>
  );
}

export default Home