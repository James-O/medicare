import React from 'react'
import AOS from "aos";
import { useEffect,  } from "react";
import "aos/dist/aos.css";

function Viewalldepartment() {
useEffect(() => {
        AOS.init({
        duration: 1000,
        delay: 50,
        });
        }, []);
  return (
    <div className=' bg-white w-full h-full' data-aos=" fade-up"> 
      <div className=" bg-[#f7fcfd] rounded py-16 px-2 text-center max-w-6xl mx-auto" >
        <h2 className="text-9xl md:text-5xl font-sans text-gray-600 mb-4">
          Explore All Our Medical Departments
        </h2>
        <p className="text-gray-600 text-sm mb-8 max-w-2xl mx-auto">
          Et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores.
        </p>
        <button
          className="  bg-teal-600 hover:bg-white text-white font-semibold
            px-8 py-3  hover:text-teal-600  border transition-all duration-300 hover:scale-105 border-t-teal-600"
        >
         <a href="" >View All Departments</a> 
        </button>
      </div>
    </div>

  )
}

export default Viewalldepartment