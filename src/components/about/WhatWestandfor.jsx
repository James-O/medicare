import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { BiHeart, BiStar } from 'react-icons/bi';
import { BsEye } from "react-icons/bs";

function WhatWestandfor() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className='bg-white w-full left-0 right-0' data-aos="zoom-in">
    

      {/* Cards Section */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:px-24 md:px-10 px-6'>
        
        {/* Mission */}
        <div className='flex flex-col items-center text-center group rounded-2xl p-8 hover:shadow-xl transition duration-300 ease-in-out'>
          <div className='p-5 rounded-full bg-teal-600 text-white mb-4 transition-transform duration-300 group-hover:-translate-y-2'>
            <BiHeart size={40} strokeWidth={0.1} />
          </div>
          <h1 className='text-gray-700 mb-4 text-2xl font-medium'>Our Mission</h1>
          <p className='text-gray-500'>
            To provide comprehensive, patient-centered healthcare that combines medical excellence with genuine compassion, ensuring every individual receives personalized care tailored to their unique needs.
          </p>
        </div>

        {/* Vision */}
        <div className='flex flex-col items-center text-center group rounded-2xl p-8 hover:shadow-xl transition duration-300 ease-in-out'>
          <div className='p-5 rounded-full bg-teal-600 text-white mb-4 transition-transform duration-300 group-hover:-translate-y-2'>
            <BsEye size={40} />
          </div>
          <h1 className='text-gray-700 mb-4 text-2xl font-medium'>Our Vision</h1>
          <p className='text-gray-500'>
            To be the leading healthcare provider in our region, recognized for innovative treatments, exceptional outcomes, and our unwavering commitment to improving lives in our community.
          </p>
        </div>

        {/* Promise */}
        <div className='flex flex-col items-center text-center group rounded-2xl p-8  hover:shadow-xl transition duration-300 ease-in-out'>
          <div className='p-5 rounded-full bg-teal-600 text-white mb-4 transition-transform duration-300 group-hover:-translate-y-2'>
            <BiStar size={40} />
          </div>
          <h1 className='text-gray-700 mb-4 text-2xl font-medium'>Our Promise</h1>
          <p className='text-gray-500'>
            Every patient will receive the highest quality care in a comfortable, supportive environment where their health, dignity, and well-being are our top priorities.
          </p>
        </div>

      </div>
    </div>
  )
}

export default WhatWestandfor
