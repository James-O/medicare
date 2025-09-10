import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";
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
      <div className='flex text-center items-center flex-col px-4'>
        <h1 className='text-4xl text-gray-700 mb-2 '>Areas of Excellence</h1>
        <p className='text-gray-500 lg:px-85 text-xl px-4'>Our specialized departments work together to provide comprehensive care across multiple medical disciplines</p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8 lg:px-28 pt-20 md:px-4 sm:px-4 px-4'>
        <div className='group' data-aos="fade-up" data-aos-delay="100">
          <div className='flex border rounded-lg bg-white duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-1 hover:scale-105 group flex-col px-8 py-10  border-gray-500 transition-all shadow-md  items-center justify-between group-hover:shadow-lg group-hover:shadow-teal-200 group-hover:text-teal-600 group-hover:border-teal-400'><span className="text-teal-600"><BsActivity size={30}/></span><span className="font-bold pt-4">Cardiology</span></div>
        </div>
        
       <div className='group' data-aos="fade-up" data-aos-delay="150">
        <div className='flex border rounded-lg bg-white duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-1 hover:scale-105 group flex-col px-8 py-10  border-gray-500 transition-all shadow-md  items-center justify-between group-hover:shadow-lg group-hover:shadow-teal-200 group-hover:text-teal-600 group-hover:border-teal-400'><p className="font-bold pt-12">Neurology</p></div>
       </div>
        
        <div className='group' data-aos="fade-up" data-aos-delay="200">
          <div className='flex border rounded-lg bg-white duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-1 hover:scale-105 group flex-col px-8 py-10  border-gray-500 transition-all shadow-md  items-center justify-between group-hover:shadow-lg group-hover:shadow-teal-200 group-hover:text-teal-600 group-hover:border-teal-400'><span className='text-teal-600'><BsPersonHearts size={30}/></span><span className="font-bold pt-4">Pediatrics</span></div>
        </div>
        
        <div className='group' data-aos="fade-up" data-aos-delay="250">
          <div className='flex border rounded-lg bg-white duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-1 hover:scale-105 group flex-col px-8 py-10  border-gray-500 transition-all shadow-md  items-center justify-between group-hover:shadow-lg group-hover:shadow-teal-200 group-hover:text-teal-600 group-hover:border-teal-400'><span className='text-teal-600'><BsScissors size={30}/></span><span className="font-bold pt-4">Surgery</span></div>
        </div>
        
        <div className='group' data-aos="fade-up" data-aos-delay="300">
          <div className='flex border rounded-lg bg-white duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-1 hover:scale-105 group flex-col px-8 py-10  border-gray-500 transition-all shadow-md  items-center justify-between group-hover:shadow-lg group-hover:shadow-teal-200 group-hover:text-teal-600 group-hover:border-teal-400'><span className='text-teal-600'><BsFileMedical size={30}/></span><span className="font-bold pt-4">Oncology</span></div>
        </div>
        
         <div className='group' data-aos="fade-up" data-aos-delay="350">
          <div className='flex border rounded-lg bg-white duration-300 ease-in-out  hover:shadow-2xl hover:shadow-gray-300 hover:border-1 hover:scale-105 group flex-col px-8 py-10  border-gray-500 transition-all shadow-md  items-center justify-between group-hover:shadow-lg group-hover:shadow-teal-200 group-hover:text-teal-600 group-hover:border-teal-400'>
            <span className='text-teal-600'><BsFillClipboard2PulseFill size={30}/></span>
            <span className="font-bold pt-4">Emergency</span> </div>
            </div>
        
      </div>
      
     </div>
    </div>
  )
}

export default OurSpecialization