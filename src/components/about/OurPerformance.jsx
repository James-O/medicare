import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function OurPerformance() {

  useEffect(() => {
      AOS.init({
      duration: 1000,
      delay: 50,
      });
      }, []);
  return (
    <div className='py-16 pt-16 bg-white left-0 right-0 lg:px-30 md:px-4 sm:px-4'>
       <div className='flex justify-center items-center text-center  flex-col' data-aos="zoom-in">
        <h1 className='text-4xl mb-2 text-blue-950 lg:px-70 text-center px-4'>Excellence in Healthcare Since 1985</h1>
        <p className='lg:px-58 text-center text-xl text-gray-500 leading-loose font-light'>We believe that exceptional medical care begins with understanding. Our dedicated team of professionals combines cutting-edge technology with compassionate, personalized treatment to ensure every patient receives the highest standard of care.</p>
      </div>

      <div className='w-full py-12 bg-white'>
        <div className='max-w-7xl mx-auto py-16 grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10'>
        <div className='grid grid-cols-1 grid-rows-2  gap-4 px-4' data-aos="fade-right" >
          <div>
            <img src='/images/about-wide-1.webp'
          alt='Hospital Bed'
          className='rounded-lg w-full h-full object-cover'/>
          </div>
          
         <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4'>
          <div data-aos="zoom-in"><img src='/images/staff-12.webp'
          alt='Doctor'
          className='rounded-lg w-full h-64 object-cover '/></div>

          <div data-aos="zoom-in"> <img src='/images/consultation-4.webp'
          alt='Consultation'
          className='rounded-lg w-full h-64 object-cover'/></div>         
         </div>
          
        </div>

        <div className='space-y-4 flex flex-col md:text-left sm:text-left md:px-6 sm:px-6 pt-8' data-aos="fade-left">
          <h2 className='text-4xl text-gray-800 lg:px-10 leading-12 px-4'>Trusted Healthcare Provider</h2>
          <p className='text-gray-600 text-xl leading-loose md:px-4 sm:px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

          <div className='grid grid-row-1 sm:grid-row-3 gap-6 mt-4 md:px-4 sm:px-4'>
            <div className='flex flex-row items-center gap-20'>
              <div><h3 className='text-5xl  text-teal-600 font-light'>22000</h3></div>
              <div className='text-left'><p className='text-lg font-semibold text-gray-700 mb-2'>Successful Treatments</p>
              <p className='text-gray-600 '>Completed with excellent patient outcomes</p></div>
              
            </div>
            <div className='flex flex-row items-center gap-28'>
              <div><h3 className='text-5xl  text-teal-600 font-light'>95%</h3></div>
              <div><p className='text-lg font-semibold text-gray-700 mb-2'>Patient Satisfaction</p>
              <p className=' text-gray-600'>Based on comprehensive feedback surveys</p></div>
              
            </div>
            <div className='flex flex-row items-center gap-28 md:px-4 sm:px-4'>
              <div><h3 className='text-5xl  text-teal-600 font-light'>85%</h3></div>
              <div><p className='text-lg font-semibold text-gray-700 mb-2'>Medical Professionals</p>
              <p className=' text-gray-600'>Specialists across various departments</p></div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
  )
}

export default OurPerformance