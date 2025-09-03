import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BiHeart,  BiStar } from 'react-icons/bi';
import { BsActivity, BsFillClipboard2PulseFill, BsFileMedical,  BsPersonHearts, BsScissors } from "react-icons/bs";

function OurSpecialization() {

  
    useEffect(() => {
        AOS.init({
        duration: 1000,
        delay: 50,
        });
        }, []);
  return (
    <div className='py-16 pt-30 bg-white left-0 right-0' data-aos="zoom-in">
     <div>
      <div className='flex text-center items-center flex-col'>
        <h1 className='text-4xl text-gray-700 mb-2'>Areas of Excellence</h1>
        <p className='text-gray-500 px-85 text-xl'>Our specialized departments work together to provide comprehensive care across multiple medical disciplines</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-3 gap-8 px-28 pt-20'>
        <div className='group'>
          <div className='flex flex-col px-8 py-10 border border-gray-500 rounded-lg transform transition-transform duration-300 ease-in-out group-hover:-translate-y-3 items-center justify-between hover:shadow-lg group-hover:shadow-teal-100 group-hover:text-teal-600 group-hover:border-teal-600'><span className="text-teal-600"><BsActivity size={30}/></span><span className="font-bold pt-4">Cardiology</span></div>
        </div>
        
       <div className='group'>
        <div className='flex flex-col px-8  py-10 border border-gray-500 rounded-lg transform  transition-transform duration-300 ease-in-out hover:translate-y-2 group group-hover:border-teal-600 group-hover:text-teal-600 shadow-sm shadow-teal-600'><p className="font-bold pt-12">Neurology</p></div>
       </div>
        
        <div className='group'>
          <div className='flex flex-col px-8 py-10 border border-gray-500 rounded-lg  transition-transform duration-300 ease-in-out hover:-translate-y-2 items-center justify-between shadow-sm shadow-teal-600'><span className='text-teal-600'><BsPersonHearts size={30}/></span><span className="font-bold pt-4">Pediatrics</span></div>
        </div>
        
        <div className='group'>
          <div className='flex flex-col px-8 py-10 border border-gray-500 rounded-lg  transition-transform duration-300 ease-in-out hover:-translate-y-2 items-center justify-between shadow-sm shadow-teal-600'><span className='text-teal-600'><BsScissors size={30}/></span><span className="font-bold pt-4">Surgery</span></div>
        </div>
        
        <div className='group'>
          <div className='flex flex-col px-8 py-10 border border-gray-500 rounded-lg  transition-transform duration-300 ease-in-out hover:-translate-y-2 items-center justify-between shadow-sm shadow-teal-600'><span className='text-teal-600'><BsFileMedical size={30}/></span><span className="font-bold pt-4">Oncology</span></div>
        </div>
        
         <div className='group'>
          <div className='flex flex-col px-8 py-10 border border-gray-500 rounded-lg  transition-transform duration-300 ease-in-out hover:-translate-y-2 items-center justify-between font-bold shadow-sm shadow-teal-600'>
            <span className='text-teal-600'><BsFillClipboard2PulseFill size={30}/></span>
            <span className="font-bold pt-4">Emergency</span> </div>
            </div>
        
      </div>
      
     </div>
    </div>
  )
}

export default OurSpecialization