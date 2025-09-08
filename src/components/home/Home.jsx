
import React from "react";
import Navbar from "./Navbar"
import Navbars from "./Navbars"

import Infosection from "./Infosection";
import Footersection from "./Footersection";
import FeaturedDepartments from "./FeaturedDepartments";

import FindADoctor from "./FindADoctor";
import Viewalldepartment from "./Viewalldepartment";
import Featureservices from "./Featureservices";
import  Homess from "./Homess";


let Home = ()=>{
  return(
    <div className="lg:min-h-screen md:min-h-screen sm:min-h-screen" data-aos-easing="ease-in-out" data-aos-duration="600" data-aos-delay="0">        
        <Navbar />
        <Navbars />
        <Homess/>           
        <FeaturedDepartments/>
        <Viewalldepartment/>
        <Featureservices/>
        <FindADoctor/>               
        <Infosection/>
        <Footersection/>       
    </div>
  );
}


export default Home;