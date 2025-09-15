
import React from "react";
import Navbar from "./Navbar"
import Navbars from "./Navbars"
import  Homess from "./Homess";
import Excellentservices from "./Excellentservices";
import Infosection from "./Infosection";
import Features from "./Features";
import Footersection from "./Footersection";
import FeaturedDepartments from "./FeaturedDepartments";
import FindADoctor from "./FindADoctor";
import Viewalldepartment from "./Viewalldepartment";
import Featureservices from "./Featureservices";
import Care from "./Care";


let Home = ()=>{
  return(
    <div className="lg:min-h-screen md:min-h-screen sm:min-h-screen" data-aos-easing="ease-in-out" data-aos-duration="600" data-aos-delay="0">        
        <Navbar />
        <Navbars />
        <Homess/>    
        <Excellentservices/>         
        <FeaturedDepartments/>
        <Viewalldepartment/>
        <Featureservices/>
        <FindADoctor/>
        <Care/>
        <Features/>               
        <Infosection/>
        <Footersection/>   
          
    </div>
  );
}
export default Home