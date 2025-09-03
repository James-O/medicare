
import React from "react";
import Navbar from "./Navbar"
import Navbars from "./Navbars"

import Viewalldepartment from './Viewalldepartment'
import Featureservices from './Featureservices'
import Infosection from "./Infosection";
import Footersection from "./Footersection";
import Featureddepartment from "./Featureddepartment";

let Home = ()=>{
  return(
    <div className="lg:min-h-screen md:min-h-screen sm:min-h-screen">        
        <Navbar />
        <Navbars />
         <Viewalldepartment/>
        <Featureservices/>
        
        <Featureddepartment/>
        <Infosection/>
        <Footersection/>       
    </div>
  );
}


export default Home;