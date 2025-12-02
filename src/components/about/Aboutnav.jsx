import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";


function Aboutnav() {

  
    useEffect(() => {
        AOS.init({
        duration: 1000,
        delay: 50,
        });
        }, []);
  return (
    <div className='py-16 pt-26 bg-white left-0 right-0'>
      
      <div className='flex justify-center items-center text-center py-20 flex-col lg:px-28 flex-1 px-2  max-w-6xl mx-auto' data-aos="zoom-in">
        <h1 className='text-4xl font-semibold mb-2 text-blue-950'>About</h1>
        <p className='text-gray-700  text-lg text-center'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </div>
      <div className='left-0 right-0 py-4 bg-gray-100'>
       <div className='flex ml-[9%] items-center'>
        
        <ul className='flex gap-2'><li className='text-teal-600'><a href='/'>Home</a></li><li>/ <a href='/about'>About</a></li></ul>
       </div>
      </div>
      </div>
  )
}

export default Aboutnav