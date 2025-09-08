
import React from "react";
import Navbar from "./Navbar"
import Navbars from "./Navbars"

import Infosection from "./Infosection";
import Features from "./Features";
import Footersection from "./Footersection";

import FindADoctor from "./FindADoctor";

let Home = ()=>{
  return(
    <div className="lg:min-h-screen md:min-h-screen sm:min-h-screen">        
        <Navbar />
        <Navbars />
        <FindADoctor/>
        <Features/>
        <Infosection/>
        <Footersection/>       
    </div>
  );
}

export default Home;