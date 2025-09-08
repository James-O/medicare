import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
import { CircleCheck, MoveRight } from 'lucide-react';

function Departmentexperts() {

   useEffect(() => {
          AOS.init({
          duration: 1000,
          delay: 50,
          });
          }, []);
  return (
    <div className='py-10 mt-10 bg-gray-100 top-10  left-0 right-0'>
    
      <div className='w-full left-0 right-0 lg:px-28 px-4'>
       <h1 className='font-bold text-gray-900 text-2xl'>Expert Care You Can Trust</h1>
       <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-28'>
        <div className='flex-1 max-w-7xl mx-auto'>
          <div className='leading-7 text-gray-500 text-xl mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
          <div className='space-y-6 mt-8'>
            <span className='flex flex-row items-center gap-5 text-lg text-gray-500 text-center'><CircleCheck className='text-teal-600'/>State-of-the-art cardiac catheterization laboratory</span>
            <span className='flex flex-row items-center gap-5 text-lg text-gray-500 text-center'><CircleCheck className='text-teal-600'/> Advanced imaging and diagnostic capabilities</span>
            <span className='flex flex-row items-center gap-5 text-lg text-gray-500 text-center'><CircleCheck className='text-teal-600'/> Minimally invasive surgical procedures</span>
            <span className='flex flex-row items-center gap-5 text-lg text-gray-500 text-center'><CircleCheck className='text-teal-600'/> Comprehensive rehabilitation programs</span>
          </div>
        </div>


        <div className='gap-10 flex flex-col float-end'>
          <div className='py-8 px-6 bg-white shadow-md shadow-gray-100 rounded-2xl  space-y-5'>
            <div>
               <h1 className='font-bold text-gray-900 text-2xl pb-2'>Department Hours</h1>
            <div class="flex  h-0.5 w-full bg-gradient-to-r from-black via-teal-300 to-black "></div>
            </div>
            <div className=' divide-y divide-gray-200  space-y-5'>
              <div className='flex flex-row gap-10 text-center pb-2'><span className='text-gray-500'>Monday - Friday</span> <span className='font-bold text-gray-900'>7:00 AM - 8:00 PM</span></div>
            <div className='flex flex-row gap-18 text-center pb-2'><span className='text-gray-500'>Saturday</span> <span className='font-bold text-gray-900'>8:00 AM - 5:00 PM</span></div>
            <div className='flex flex-row gap-10 text-center'><span className='text-gray-500'>Sunday</span> <span className='font-bold text-gray-900'>Emergency Only</span></div>
            </div>
            
          </div>

          <div className='py-8 px-6 bg-white shadow-md shadow-gray-200 rounded-2xl  space-y-5'>
            <div><h1 className='font-bold text-gray-900 text-2xl pb-2'>Quick Links</h1>
            <div class="flex  h-0.5 w-full bg-gradient-to-r from-black via-teal-300 to-black "></div></div>
            
            <div className='mt-6  divide-y divide-gray-100  space-y-5'>
              <a href="service" className='flex flex-row text-center items-center gap-2 text-gray-500 pb-2'><MoveRight className='text-teal-600'/><span>All Cardiology Services</span></a>
              <a href="doctor" className='flex flex-row text-center items-center gap-2 text-gray-500 pb-2'><MoveRight className='text-teal-600'/><span>Meet Our Specialists</span></a>
              <a href="contact" className='flex flex-row text-center items-center gap-2 text-gray-500'><MoveRight className='text-teal-600'/><span>Insurance Information</span></a>
            </div>
          </div>
        </div>
       </div>
      </div>

      
    
    </div>
  )
}

export default Departmentexperts