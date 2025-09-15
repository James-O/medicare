import { Activity, CalendarPlus2, Eye, HeartPulse, ShieldPlus } from 'lucide-react'
import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";

function Departmentdetailcardiology() {

   useEffect(() => {
          AOS.init({
          duration: 1000,
          delay: 50,
          });
          }, []);
  return (
    <div className='py-4 mt-10 bg-white top-10  left-0 right-0'>
    
      <div className='w-full left-0 right-0 lg:px-28 px-4'>
        <div data-aos="zoom-in">
          <button className='py-3 px-4 bg-teal-600 rounded-full text-white flex items-center gap-1.5 font-semibold'><HeartPulse/><span>Cardiology</span></button>
          <h1 className='text-5xl font-bold text-gray-700 mt-6 leading-15'>Comprehensive Heart Care <br/> Center</h1>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 max-w-8xl mx-auto gap-18 bg-white border-b-1 border-b-gray-300 pb-28'>
            <div className='w-full' data-aos="fade-right">
              <p className='text-gray-500 text-lg leading-loose mb-8 pt-6'>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.</p>

              <h1 className='font-bold text-gray-700  mb-8 text-3xl'>Specialized Services</h1>

               <div className='gap-6 grid grid-rows-3  max-w-7xl mx-auto grid-cols-1'>
                
            <div className='flex flex-row gap-3 items-center bg-white border-l-6 rounded-2xl border-l-teal-600 transition-transform duration-300 ease-in-out hover:translate-x-2 py-2 max-w-2xl mx-auto hover:shadow-md hover:shadow-gray-200'>
              <div className='flex flex-row gap-3 px-4 py-6 items-center'>
                <span className='bg-teal-600 text-white rounded-lg p-4 font-bold flex items-center'><Activity size={20}/></span>
                <h4 className='font-bold text-gray-800'>Cardiac Surgery</h4>     
              </div>
              <div className='text-gray-500 '><p>Donec rutrum congue leo eget malesuada vestibulum ac diam sit amet quam.</p></div>
            </div>

            <div className='flex flex-row gap-3 items-center bg-white border-l-6 rounded-2xl border-l-teal-600 transition-transform duration-300 ease-in-out hover:translate-x-2 py-2 max-w-2xl mx-auto hover:shadow-md hover:shadow-gray-200'>
              <div className='flex flex-row gap-3 px-4 py-6 items-center'>
                <span className='bg-teal-600 text-white rounded-lg p-4 font-bold flex items-center'><Eye size={24}/></span>
                <h4 className='font-bold text-gray-800'>Diagnostic Testing</h4>     
              </div>
              <div className='text-gray-500'><span>Curabitur arcu erat accumsan id imperdiet et porttitor at sem mauris blandit.</span></div>
            </div>

           <div className='flex flex-row gap-3 items-center bg-white border-l-6 rounded-2xl border-l-teal-600 transition-transform duration-300 ease-in-out hover:translate-x-2 py-2 max-w-2xl mx-auto hover:shadow-md hover:shadow-gray-200'>
              <div className='flex flex-row gap-3 px-4 py-6 items-center'>
                <span className='bg-teal-600 text-white rounded-lg p-4 font-bold flex items-center'><ShieldPlus size={24}/></span>
                <h4 className='font-bold text-gray-800'>Preventive Care</h4>     
              </div>
              <div className='text-gray-500'><span>Nulla quis lorem ut libero malesuada feugiat cras ultricies ligula sed magna.</span></div>
            </div>
          </div>

           <div className='mt-8 flex flex-row items-center gap-8'>
          <a href='/appointment' className='text-white py-5 px-6 bg-teal-600 rounded-lg flex flex-row gap-2 items-center transition-transform ease-in-out duration-300 hover:-translate-y-2'><CalendarPlus2 size={20}/><span className='font-bold'>Book Appointment</span></a>
          <div>
            <p className='text-gray-500'>Emergency Line</p>
            <p className='text-teal-600 font-bold mt-2 text-lg'>+1 (555) 987-6543</p>
          </div>
        </div>
            </div>


            <div className='relative'><img src="/images/cardiology-3.webp" alt='Cardiology' className='rounded-3xl object-cover h-130 relative' data-aos="fade-left"/>
            <div className='absolute bg-white rounded-3xl py-7 px-7 top-9 right-9 divide-y divide-gray-200' data-aos="fade-left" data-aos-delay="350">
              <div className='flex text-center flex-col pb-2'>
                <h1 className='text-teal-600 font-bold text-3xl mb-1'>98%</h1>
              <p className='text-gray-500'>Success Rate</p>
              </div>

               <div className='flex text-center flex-col pt-2'>
                  <h1 className='text-teal-600 font-bold text-3xl mb-1'>12K+</h1>
              <p className='text-gray-500'>Patients Treated</p>
               </div>
            </div>
            </div>
          </div>       
      </div>

      
    
    </div>
  )
}

export default Departmentdetailcardiology