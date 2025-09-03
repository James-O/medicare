import React from "react";
import Navbar from "./Navbar"
import Navbars from "./Navbars"
import Infosection from "./Infosection";
import Footersection from "./Footersection";
import FeaturedDepartments from "./FeaturedDepartments";

let Home = ()=>{
  return(
    <div className="lg:min-h-screen md:min-h-screen sm:min-h-screen">        
        <Navbar />
        <Navbars />
        <FeaturedDepartments/>
        <Infosection/>
        <Footersection/>       
    </div>
  );
}

export default Home