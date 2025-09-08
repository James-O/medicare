import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function OurReference() {

  useEffect(() => {
      AOS.init({
      duration: 1000,
      delay: 50,
      });
      }, []);
  return (
    <div className='py-16 pt-16 bg-white left-0 right-0'>
      
      <div className='flex text-center items-center flex-col px-4'>
        <h1 className='text-4xl text-gray-700 mb-2 '>Recognized Excellence</h1>
        <p className='text-gray-500  text-xl px-4'>Our commitment to quality is validated by prestigious healthcare organizations</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-6 lg:px-86 pt-20 md:px-4 sm:px-4 '>
        
        <div className='group' data-aos="fade-up" data-aos-delay="150">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition shadow-sm duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-0 hover:scale-105 group'><img src='/images/clients-6.webp' className='max-h-14 max-w-14 h-auto overflow-y-clip overflow-x-clip grayscale group-hover:grayscale-0 transition duration-300'/></div>
        </div>

        <div className='group' data-aos="fade-up" data-aos-delay="150">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition shadow-sm duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-0 hover:scale-105 group'>
            <img src='/images/clients-7.webp' className='max-h-14 max-w-14 h-auto overflow-y-clip overflow-x-clip grayscale group-hover:grayscale-0 transition duration-300'/></div>
        </div>

        <div className='group' data-aos="fade-up" data-aos-delay="150">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition shadow-sm duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-0 hover:scale-105 group'>
            <img src='/images/clients-8.webp' className='max-h-14 max-w-14 h-auto overflow-y-clip overflow-x-clip grayscale group-hover:grayscale-0 transition duration-300'/></div>
        </div>

        <div className='group' data-aos="fade-up" data-aos-delay="150">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition shadow-sm duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-0 hover:scale-105 group'>
          <img src='/images/clients-9.webp' className='max-h-14 max-w-14 h-auto overflow-y-clip overflow-x-clip grayscale group-hover:grayscale-0 transition duration-300'/></div>
          </div>

        <div className='group' data-aos="fade-up" data-aos-delay="150">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition shadow-sm duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-0 hover:scale-105 group'>
            <img src='/images/clients-10.webp' className='max-h-14 max-w-14 h-auto overflow-y-clip overflow-x-clip grayscale group-hover:grayscale-0 transition duration-300'/></div>
        </div>
        <div className='group' data-aos="fade-up" data-aos-delay="150">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition shadow-sm duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-0 hover:scale-105 group'>
            <img src='/images/clients-11.webp' className='max-h-14 max-w-14 h-auto overflow-y-clip overflow-x-clip grayscale group-hover:grayscale-0 transition duration-300'/></div>
        </div>
      </div>
    </div>
  )}

  export default OurReference