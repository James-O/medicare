import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { CgArrowLongUp, CgArrowTopRightO } from 'react-icons/cg'


function Footersection() {
  const [showButton, setShowButton] =
  useState(false);

  useEffect(() => {
   AOS.init({duration: 1000, once:true});

   const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);
    }else {
      setShowButton(false);
    }
   };
   window.addEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  };
   
  return (
    <div className='left-0 right-0 text-gray-500 text-sm pt-6 bg-gray-50 '>
      <div className='flex items-center justify-center flex-col pb-4'>
        
        <p>© Copyright <span className='font-bold'>MediCare</span> All Rights Reserved</p>
        <p className='mt-1'>Designed by <a href='/' className='text-teal-600'>BootstrapMade</a></p>
      </div>
      {showButton && (
        <button onClick={scrollToTop}
        data-aos="zoom-in" className='fixed bottom-4 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transtion z-50'><CgArrowLongUp size={20} className='h-4 w-4'/></button>
      )}        
      </div>
  )
}

export default Footersection