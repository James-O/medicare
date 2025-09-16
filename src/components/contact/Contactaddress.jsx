import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { BsEnvelope, BsGeoAlt, BsMap, BsTelephone } from 'react-icons/bs';


function Contactaddress() {

  
    useEffect(() => {
        AOS.init({
        duration: 1000,
        delay: 50,
        });
        }, []);
  return (
    <div className='py-10 pt-26 bg-gray-50 left-0 right-0' data-aos="zoom-in">
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-10 px-29'>
        <div className='flex flex-col items-center px-10 py-12 rounded-xl shadow-xl shadow-gray-300 bg-white transition-transform transform ease-in-out duration-400 hover:-translate-y-3'>
          <div className='mb-4 text-teal-600 p-4 rounded-full bg-teal-100'><BsGeoAlt size={30}/></div>
        <h1 className='font-bold mb-2 text-gray-800'>Our Address</h1>
        <p className='text-gray-500'>4582 Magnolia Avenue</p>
        <p className='text-gray-500'>Riverside, CA 92506</p>
        </div>

        <div className='flex flex-col items-center px-10 py-12 rounded-xl shadow-xl shadow-gray-300 bg-white transition-transform transform ease-in-out duration-400 hover:-translate-y-3'>
          <div className='mb-4 text-teal-600 p-4 rounded-full bg-teal-100'><BsTelephone size={30}/></div>
          <h1 className='font-bold mb-2 text-gray-800'>Call Us</h1>
          <p className='text-gray-500'>+1 (951) 684-9123</p>
          <p className='text-gray-500'>+1 (951) 787-4534</p>
          </div>

        <div className='flex flex-col items-center px-10 py-12 rounded-xl shadow-xl shadow-gray-300 bg-white transition-transform transform ease-in-out duration-400 hover:-translate-y-3'>
          <div className='mb-4 text-teal-600 p-4 rounded-full bg-teal-100'><BsEnvelope size={30}/></div>
          <h1 className='font-bold mb-2 text-gray-800'>Email Us</h1>
          <p className='text-gray-500'>contact@example.com</p>
          <p className='text-gray-500'>support@example.com</p>
          </div>
      </div>
    </div>
  )}

  export default Contactaddress