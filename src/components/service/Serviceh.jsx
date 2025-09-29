// import React from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";
// import { Link } from 'react-router-dom';
// import { BsHeartPulse } from 'react-icons/bs';
// import { HeartPulse } from 'lucide-react';

// function Serviceh() {
//   return (
//     <div>
//       <div className=' flex mb-5 text-5xl mt-50 items-center justify-center'>
//         <h1>Services</h1>
//       </div>
//       <div className='flex text-1x1 items-center justify-center'>
//         <p>
//           Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut<br />
//           <div className='ml-5'>
//             a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
//           </div>
//           <div className='ml-80'>
//             dolorem.
//           </div>
//         </p>
//       </div>
//       <div className='flex max-w-8x1 py-5 px-4 mt-30 mb-30 pl-10 border-10 border-gray-100 bg-gray-100'>
//         <div>
//           <Link to={'/'} className='text-teal-500'>Home</Link>
//         </div>
//         <div>
//           / Services
//         </div>
//       </div>
//       {/*cards*/}
//       <div className='flex mx-[0.3] mt-40 gap-5 py-8  space-x-12'>
//         {/*card1*/}
//         <div className='ml-10 hover:border-6 hover:border-teal-600 rounded-lg p-6'>
//           <div className='flex'>
//             <div className='bg-teal-600  border-1  border-teal-600 justify-center items-center w-18 h-18 inline-flex rounded-full'>
//               <HeartPulse className='stroke-teal-600 fill-white w-12 h-12' />
//             </div>
//             <span className="ml-4 inline-block bg-teal-100 text-teal-600 text-xs font-semibold px-2.5 py-1 rounded">
//               PRIMARY CARE
//             </span>

//           </div>
//           <h2 className='text-2xl font-bold mt-5'>General Consultation</h2>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Serviceh

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { Heart, HeartPulse, MoveRight } from 'lucide-react';

function Serviceh() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="px-4 py-8 max-w-7xl mx-auto mt-50">
      {/* Header */}
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-5xl font-bold">Services</h1>
      </div>

      {/* Description */}
      <div className="text-center text-base leading-relaxed max-w-3xl mx-auto mb-10">
        <p>
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem.
        </p>
        <p className="mt-2">
          Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-100 px-6 py-4 rounded mb-12">
        <Link to="/" className="text-teal-500 hover:underline">Home</Link>
        <span>/</span>
        <span>Services</span>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="border-2 border-gray-200 rounded-lg p-6 group hover:border-teal-600 shadow-lg transform transition-transform hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="bg-teal-600 inline-flex items-center justify-center w-16 h-16 rounded-full">
              <HeartPulse className="stroke-teal-600 fill-white w-10 h-10 group-hover:rotate-6 group-hover:scale-110 transition-transform" />
            </div>
            <span className="bg-teal-100 text-teal-600 text-xs font-semibold px-3 py-1 rounded">
              PRIMARY CARE
            </span>
          </div>
          <h2 className="text-xl font-bold mt-4">General Consultation</h2>
          <p>Comprehensive health assessments and preventive care planning for all family members.</p>
          <div className='space-x-3 flex mt-7 ml-2'>
            <div className='rounded-full bg-gray-100 p-1 '>
              <p className='text-[10px] font-bold text-gray-600 '>Health Monitoring</p>
            </div>
            <div className=' rounded-full bg-gray-100 p-1 '>
              <p className='text-[10px] font-bold text-gray-600'>Wellness Programs</p>
            </div>
          </div>
          <div className='space-x-3 flex ml-2 mt-3'>
            <div className=' rounded-full bg-gray-100 p-1'>
              <p className='text-[10px] font-bold text-gray-600'>Preventive Care</p>
            </div>
          </div>
          <div >
            <div className='flex mx-15 mt-12 px-8 py-2 rounded-full border group-hover:bg-teal-600 group-hover:text-white font-bold'>
              <span className=''>Schedule Visit</span>
              <MoveRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </div>
        {/*card 2*/}
        <div className="border-2  rounded-lg p-6 group border-teal-600 shadow-lg transform transition-transform hover:scale-105">
          <div className="flex relative items-center space-x-4">
            <div className="bg-teal-600 inline-flex items-center justify-center w-16 h-16 rounded-full">
              <Heart className="stroke-teal-600 fill-white w-10 h-10 group-hover:rotate-6 group-hover:scale-110 transition-transform" />
            </div>
            {/* <div className='relative'>
              <span className="bg-teal-100 text-teal-600 text-xs font-semibold z-0 px-5 py-1 rounded">
                SPECIALTY
              </span>
              <span className="bg-teal-600 text-white text-xs z-10 font-semibold px-3 py-1 rounded">
                Most Popular
              </span>
            </div> */}
            
            <div className="absolute top-4 right-4 flex flex-col items-end ">
              <span className="bg-teal-100 text-teal-600 text-xs font-semibold px-5 py-1 rounded-full z-0">
                 SPECIALTY
              </span>
              <span className="bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full translate-x-4 -mt-10 z-10 shadow-md">
                 Most Popular
              </span>
           </div>
          </div>
          <h2 className="text-xl font-bold mt-4">Cardiology Services</h2>
          <p>Advanced heart care including diagnostics, treatment, and post-operative rehabilitation programs.</p>
          <div className='space-x-3 flex mt-7 ml-2'>
            <div className='rounded-full bg-gray-100 p-1 '>
              <p className='text-[10px] font-bold text-gray-600 '>Heart Surgery</p>
            </div>
            <div className=' rounded-full bg-gray-100 p-1 '>
              <p className='text-[10px] font-bold text-gray-600'>ECG Testing</p>
            </div>
            <div className=' rounded-full bg-gray-100 p-1'>
              <p className='text-[10px] font-bold text-gray-600'>Cardiac Rehab</p>
            </div>
          </div>
          <div >
            <div className='flex mx-13 mt-12 px-8 py-2 rounded-full border group-hover:bg-teal-600 group-hover:text-white font-bold'>
              <div className='gap-1 flex'>
                <span>Book</span>
                <span>Appointment</span>
                <MoveRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serviceh;
