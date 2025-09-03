
import React from "react";
import Navbar from "./Navbar"
import Navbars from "./Navbars"

<<<<<<< HEAD
import Viewalldepartment from './Viewalldepartment'
import Featureservices from './Featureservices'
=======
>>>>>>> 6706956031990d420b6c88eec165a12d1ad4d35c
import Infosection from "./Infosection";
import Footersection from "./Footersection";
import FeaturedDepartments from "./FeaturedDepartments";

import FindADoctor from "./FindADoctor";

let Home = ()=>{
  return(
    <div className="lg:min-h-screen md:min-h-screen sm:min-h-screen">        
        <Navbar />
<<<<<<< HEAD
        <Navbars />
         <Viewalldepartment/>
        <Featureservices/>
        
        <Featureddepartment/>
=======
        <Navbars />        
        <FeaturedDepartments/>
        <FindADoctor/>        
>>>>>>> 6706956031990d420b6c88eec165a12d1ad4d35c
        <Infosection/>
        <Footersection/>       
    </div>
  );
}


export default Home;