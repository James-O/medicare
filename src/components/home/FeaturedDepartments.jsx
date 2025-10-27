import React from 'react'
import { ArrowRight, CircleCheck } from 'lucide-react'
import { FaBrain, FaScissors, FaBaby, FaEye, FaBandage  } from "react-icons/fa6";

import Aos from "aos";
import "aos/dist/aos.css";// Import AOS styles
import { useEffect } from "react";
import { BsHeartPulseFill } from 'react-icons/bs';


export default function FeaturedDepartments() {
  useEffect(() => {
          Aos.init({ duration: 1000, once: true });
      }, []);
  return (
    <div className="px-28 pt-15 w-full bg-white">
      {/* Header */}
      <h1 className='text-3xl font-medium pb-2 relative text-[#1f2f31] text-center'>Featured Departments</h1>
      <div className='relative w-40 mt-2 mx-auto mb-5' data-aos="fade-up" data-aos-delay="100">
                <div className='w-full h-[1px] bg-gray-400'></div>
                <div className='absolute inset-y-0 w-12 h-1 bg-teal-600 translate-x-15 transform transform-transition'></div>
            </div>
            <p className='text-[16px] text-center mb-20'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8'>
        <div data-aos="fade-right">
          <h1 className='tracking-widest text-teal-600 mb-4'>EMERGENCY MEDICINE</h1>

          <h3 className='text-5xl leading-13 text-gray-700 mb-8'>24/7 Emergency Care Services</h3>
          <p className='text-gray-500 leading-8 mb-4 text-xl'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,<br/> eaque ipsa quae ab illo inventore veritatis et quasi architecto <br/> beatae vitae dicta sunt explicabo.</p>
          <div className='space-y-4'>
            <div className='flex items-center gap-4'><CircleCheck size={22} className='text-white fill-teal-600'/><span className='text-gray-500 text-lg'>24/7 Emergency Response</span></div>
            <div className='flex items-center gap-4'><CircleCheck size={22} className='text-white fill-teal-600'/><span className='text-gray-500 text-lg'>Advanced Life Support</span></div>
            <div className='flex items-center gap-4'><CircleCheck size={22} className='text-white fill-teal-600'/><span className='text-gray-500 text-lg'>Trauma Care Specialists</span></div>
            
            <a href='/about' className='flex items-center mt-6 hover:text-teal-600 transition-transform font-bold group px-2'>Learn More <span className='transition-transform ease-in-out duration-300 group-hover:translate-x-2'><ArrowRight size={20}/></span></a>
            </div>
        </div>

        <div className='overflow-hidden' data-aos="fade-left"> <img
            src="/images/emergency-3.webp"
            alt="Emergency Department"
            className="w-full h-[540px] object-cover rounded-md transition-transform duration-500 hover:scale-105"
          />
        </div>

      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-18 py-26 mt-20'>
        <div className='relative w-90 bg-white p-6 rounded-2xl transition-transform ease-in-out hover:-translate-2 hover:shadow-md overflow-hidden group duration-300' data-aos="fade-up" data-aos-delay="200">

          <span className='absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-600 via-teal-600 to-transparent group-hover:w-full transition-all duration-500'></span>
          <span className='rounded-full py-6 px-6 bg-teal-100 inline-flex items-centers justify-center'><BsHeartPulseFill size={35} className='text-white fill-teal-600'/></span>
        <h3 className='text-xl text-gray-800 mb-4 mt-3'>Cardiology</h3>
        <p className='text-gray-500'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
        <div className='flex flex-row gap-10 items-center mt-8'>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>15+</h1> <p className='text-sm text-gray-500'>SPECIALISTS</p></div>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>500+</h1> <p className='text-sm text-gray-500'>PROCEDURES</p></div>
        </div>
        </div>

        <div className='relative w-90 bg-white p-6 rounded-2xl transition-transform ease-in-out hover:-translate-2 hover:shadow-md overflow-hidden group duration-300' data-aos="fade-up" data-aos-delay="200">
          <span className='absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-600 via-teal-600 to-transparent group-hover:w-full transition-all duration-500'></span>
          <span className='rounded-full py-6 px-6 bg-teal-100 inline-flex items-centers justify-center'><FaBrain size={35} className='text-white fill-teal-600'/></span>
        <h3 className='text-xl text-gray-800 mb-4 mt-3'>Neurology</h3>
        <p className='text-gray-500'>Eos qui ratione voluptatem sequi nesciunt neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>
        <div className='flex flex-row gap-10 items-center mt-8'>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>8+</h1> <p className='text-sm text-gray-500'>SPECIALISTS</p></div>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>200+</h1> <p className='text-sm text-gray-500'>TREATMENTS</p></div>
        </div></div>

        <div className='relative w-90 bg-white p-6 rounded-2xl transition-transform ease-in-out hover:-translate-2 hover:shadow-md overflow-hidden group duration-300' data-aos="fade-up" data-aos-delay="200">
          <span className='absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-600 via-teal-600 to-transparent group-hover:w-full transition-all duration-500'></span>
          <span className='rounded-full py-6 px-6 bg-teal-100 inline-flex items-centers justify-center'><FaScissors size={35} className='text-white fill-teal-600'/></span>
        <h3 className='text-xl text-gray-800 mb-4 mt-3'>Surgery</h3>
        <p className='text-gray-500'>Consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam.</p>
        <div className='flex flex-row gap-10 items-center mt-8'>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>12+</h1> <p className='text-sm text-gray-500'>SURGEONS</p></div>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>1000+</h1> <p className='text-sm text-gray-500'>OPERATIONS</p></div>
        </div></div>

        <div className='relative w-90 bg-white p-6 rounded-2xl transition-transform ease-in-out hover:-translate-2 hover:shadow-md overflow-hidden group duration-300'  data-aos="fade-up" data-aos-delay="300">
          <span className='absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-600 via-teal-600 to-transparent group-hover:w-full transition-all duration-500'></span>
           <span className='rounded-full py-6 px-6 bg-teal-100 inline-flex items-centers justify-center'><FaBaby size={35} className='text-white fill-teal-600'/></span>
        <h3 className='text-xl text-gray-800 mb-4 mt-3'>Pediatrics</h3>
        <p className='text-gray-500'>Quaerat voluptatem ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam.</p>
        <div className='flex flex-row gap-10 items-center mt-8'>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>10+</h1> <p className='text-sm text-gray-500'>PEDIATRICIANS</p></div>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>2000+</h1> <p className='text-sm text-gray-500'>YOUNG PATIENTS</p></div>
        </div></div>

        <div className='relative w-90 bg-white p-6 rounded-2xl transition-transform ease-in-out hover:-translate-2 hover:shadow-md overflow-hidden group duration-300' data-aos="fade-up" data-aos-delay="300">
          <span className='absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-600 via-teal-600 to-transparent group-hover:w-full transition-all duration-500'></span>
          <span className='rounded-full py-6 px-6 bg-teal-100 inline-flex items-centers justify-center'><FaEye size={35} className='text-white fill-teal-600'/></span>
        <h3 className='text-xl text-gray-800 mb-4 mt-3'>Ophthalmology</h3>
        <p className='text-gray-500'>Nisi ut aliquid ex ea commodi consequatur quis autem vel eum iure reprehenderit qui in ea voluptate velit esse.</p>
        <div className='flex flex-row gap-10 items-center mt-8'>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>6+</h1> <p className='text-sm text-gray-500'>EYE DOCTORS</p></div>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>800+</h1> <p className='text-sm text-gray-500'>EYE EXAMS</p></div>
        </div></div>

        <div className='relative w-90 bg-white p-6 rounded-2xl transition-transform ease-in-out hover:-translate-2 hover:shadow-md overflow-hidden group duration-300' data-aos="fade-up" data-aos-delay="300">
          <span className='absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-teal-600 via-teal-600 to-transparent group-hover:w-full transition-all duration-500'></span>
          <span className='rounded-full py-6 px-6 bg-teal-100 inline-flex items-centers justify-center'><FaBandage size={35} className='text-white fill-teal-600'/></span>
        <h3 className='text-xl text-gray-800 mb-4 mt-3'>Dermatology</h3>
        <p className='text-gray-500'>Quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur at vero eos.</p>
        <div className='flex flex-row gap-10 items-center mt-8'>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>7+</h1> <p className='text-sm text-gray-500'>DERMATOLOGISTS</p></div>
          <div className='flex flex-col items-center'><h1 className='font-bold text-teal-600 text-xl'>600+</h1> <p className='text-sm text-gray-500'>SKIN TREATMENTS</p></div>
        </div></div>
      </div>
    </div>
  )
}
