import { ArrowRight } from 'lucide-react';
import React from 'react'

function Care() {
  return (
    <div className="py-16 pt-20 bg-gray-100 left-0 right-0 lg:px-28 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 px-4 md:grid-cols-1 sm:grid-cols-1 gap-8 max-w-6xl">
        <div className='space-y-8'>
          <h1 className="text-5xl text-gray-900 leading-14">Exceptional Care for <br /> Your Health Journey</h1>
          <p className="text-gray-500 leading-loose">Discover comprehensive healthcare services delivered with <br />compassion and expertise. Our dedicated team is committed to <br />providing personalized medical care that puts <br />you first .</p>
          <div className="flex flex-row gap-4 items-center text-center">
            <div className='transition-transform duration-300 ease-in-out hover:-translate-y-2'><a href="#" className="py-4 px-6 text-white rounded-md bg-teal-600">Schedule Consultation</a></div>

            <div><a href="#" className="group flex items-center text-teal-600 font-semibold  py-4 px-5 text-lg"><span>Explore Services</span><ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" /> </a></div>

          </div>
        </div>

       
            

  <div className=" max-w-6xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg bg-teal-200 bgtr bg-cover bg-center">
    
  
    <div className="relative mt-6 ml-6 object-cover w-full h-full rounded-2xl shadow-lg ">
      <img 
        src="images/hospital.webp" 
        alt="University Hospitals Building" 
        clasNames="w-full h-auto object-cover"
      />

          
    </div>

  </div>

      </div>


      <div className="bg-gray-100 py-10 mt-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-8 mx-auto px-4 max-w-6xl border-t-1 border-b-1 border-t-gray-500 border-b-gray-500">

        <div>
          <h2 className="text-3xl text-teal-600">25K+</h2>
          <p className="text-gray-500">Years Experience</p></div>

        <div>
          <h2 className="text-teal-600 text-3xl">15K+</h2>
          <p className="text-gray-500">Happy Patients</p>
        </div>

        <div>
          <h2 className="text-teal-600 text-3xl">50+</h2>
          <p className="text-gray-500">Medical Experts</p></div>

        <div>
          <h2 className="text-3xl text-teal-600">24\7</h2>
          <p className="text-gray-500">Emergency Care</p>
        </div>
      </div>
    </div>
  );
}

export default Care;