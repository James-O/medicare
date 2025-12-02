import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function OurReference() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className='py-16 bg-white w-full left-0 right-0 overflow-hidden'>
      
      {/* Header */}
      <div className='flex text-center items-center flex-col px-4 md:px-10 lg:px-24'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-gray-700 mb-4 font-semibold'>
          Recognized Excellence
        </h1>
        <p className='text-gray-500 text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed'>
          Our commitment to quality is validated by prestigious healthcare organizations
        </p>
      </div>

      {/* Logos Grid */}
      <div className='max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 pt-16 px-4 md:px-8 lg:px-12'>
        
        {/* Logo 1 */}
        <div className='group' data-aos="fade-up" data-aos-delay="100">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-2xl hover:shadow-gray-200 hover:border-transparent hover:scale-105'>
            <img
              src='/images/clients-6.webp'
              alt='Client 1'
              className='max-h-14 max-w-14 h-auto grayscale group-hover:grayscale-0 transition duration-300'
            />
          </div>
        </div>

        {/* Logo 2 */}
        <div className='group' data-aos="fade-up" data-aos-delay="150">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-2xl hover:shadow-gray-200 hover:border-transparent hover:scale-105'>
            <img
              src='/images/clients-7.webp'
              alt='Client 2'
              className='max-h-14 max-w-14 h-auto grayscale group-hover:grayscale-0 transition duration-300'
            />
          </div>
        </div>

        {/* Logo 3 */}
        <div className='group' data-aos="fade-up" data-aos-delay="200">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-2xl hover:shadow-gray-200 hover:border-transparent hover:scale-105'>
            <img
              src='/images/clients-8.webp'
              alt='Client 3'
              className='max-h-14 max-w-14 h-auto grayscale group-hover:grayscale-0 transition duration-300'
            />
          </div>
        </div>

        {/* Logo 4 */}
        <div className='group' data-aos="fade-up" data-aos-delay="250">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-2xl hover:shadow-gray-200 hover:border-transparent hover:scale-105'>
            <img
              src='/images/clients-9.webp'
              alt='Client 4'
              className='max-h-14 max-w-14 h-auto grayscale group-hover:grayscale-0 transition duration-300'
            />
          </div>
        </div>

        {/* Logo 5 */}
        <div className='group' data-aos="fade-up" data-aos-delay="300">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-2xl hover:shadow-gray-200 hover:border-transparent hover:scale-105'>
            <img
              src='/images/clients-10.webp'
              alt='Client 5'
              className='max-h-14 max-w-14 h-auto grayscale group-hover:grayscale-0 transition duration-300'
            />
          </div>
        </div>

        {/* Logo 6 */}
        <div className='group' data-aos="fade-up" data-aos-delay="350">
          <div className='flex items-center justify-center py-8 px-6 border border-gray-200 rounded-lg bg-white transition-all duration-300 ease-in-out shadow-sm hover:shadow-2xl hover:shadow-gray-200 hover:border-transparent hover:scale-105'>
            <img
              src='/images/clients-11.webp'
              alt='Client 6'
              className='max-h-14 max-w-14 h-auto grayscale group-hover:grayscale-0 transition duration-300'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurReference
