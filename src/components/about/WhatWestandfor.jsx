import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BiHeart,  BiStar } from 'react-icons/bi';
import { BsEye } from "react-icons/bs";

function WhatWestandfor() {

  
    useEffect(() => {
        AOS.init({
        duration: 1000,
        delay: 50,
        });
        }, []);
  return (
    <div className='py-10 pt-6 bg-white left-0 right-0' data-aos="zoom-in">
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 lg:px-28 px-4'>
        <div className='flex items-center text-center flex-col group'>
          <div className='p-4 rounded-full bg-teal-600 text-white mb-4  transition-transform duration-300 ease-in-out group-hover:-translate-y-2'><BiHeart size={40} strokeWidth={0.1}/></div>          
          <h1 className='text-gray-700 mb-6 text-xl px-4'>Our Mission</h1>
          <p className='text-gray-500 lg:px-10 px-4'>To provide comprehensive, patient-centered healthcare that combines medical excellence with genuine compassion, ensuring every individual receives personalized care tailored to their unique needs.</p>
        </div>

        <div className='flex items-center text-center flex-col group md:mt-4 sm:mt-4'>
          <div className='p-4 rounded-full bg-teal-600 text-white mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2'><BsEye size={40}/></div>          
          <h1 className='text-gray-700 mb-6 text-xl'>Our Vision</h1>
          <p className='text-gray-500 lg:px-10 px-4'>To be the leading healthcare provider in our region, recognized for innovative treatments, exceptional outcomes, and our unwavering commitment to improving lives in our community.</p>
        </div>

        <div className='flex items-center text-center flex-col group md:mt-4 sm:mt-4'>
          <div className='p-4 rounded-full bg-teal-600 text-white mb-4 transition-transform duration-300 ease-in-out group-hover:-translate-y-2'><BiStar size={40}/></div>          
          <h1 className='text-gray-700 mb-6 text-xl'>Our Promise</h1>
          <p className='lg:px-10 text-gray-500 px-4'>Every patient will receive the highest quality care in a comfortable, supportive environment where their health, dignity, and well-being are our top priorities.</p>
        </div>
      </div>
      </div>
  )
}

export default WhatWestandfor