import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Award, MapPin, MessageCircleMore, Phone, Users } from 'lucide-react';
import { FaRegCalendarCheck } from "react-icons/fa";
import { BsChatDots, BsFileMedical } from "react-icons/bs";
const Homess = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (


    <section className='bg-gradient-to-b from-white to-gray-50 py-12 px-6 md:px-12 lg:px-20'>
      <div className='mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>


        {/* Image and Overlay Cards */}
        <div className='relative flex justify-center'>
          <div data-aos="fade-right " className='relative flex justify-center'>
            <img
              src="/images/staff-8.png"
              alt="Doctor"
              className="rounded-2xl shadow-lg w-full max-w-sm md:max-w-md box-shadow transition-transform duration-500 
             hover:animate-shake shadow-teal-200"
            />
          </div>

          {/* Emergency Card */}
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="absolute top-6 left-6 bg-white shadow-lg rounded-xl p-4 px-3 py-2 flex items-center gap-3"
          >
            <div className='bg-blue-100  p-2 rounded-2xl mb-2'>
              <Phone className="fill-teal-600 w-8 h-8 stroke-teal-600 mb-2" />
            </div>
            <div>
              <p className="text-sm text-gray-500">24/7 Emergency</p>
              <p className="font-semibold">+1 (555) 911-2468</p>
            </div>
          </div>

          {/* Stats Card */}
          <div
            data-aos="fade-down"
            data-aos-delay="300"
            className="absolute bottom-6 right-6 bg-white shadow-lg rounded-2xl py-4 px-6 flex text-center"
          >
            <div className='text-center px-4 '>
              <p className="text-2xl font-bold text-teal-600">25K+ </p>
              <p className="text-sm  text-gray-600">Patient Treated </p>
            </div>
            <div className='text-center px-4'>
              <p className="text-2xl font-bold text-teal-600">98%</p>
              <p className="text-sm text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>


        <div>
          <div data-aos="fade-left" className="space-y-6">
            <span className="bg-teal-100 text-teal-700 text-sm font-semibold px-4 py-1 rounded-full">
              TRUSTED HEALTHCARE PROVIDER
            </span>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Excellence in Medical <br /> Care Since 1985
            </h1>

            <p className="text-gray-600 leading-relaxed">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tell

            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6  flex-wrap mt-8">
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="flex flex-col items-center ">
              <div className='bg-blue-100 rounded-2xl p-2 mb-2'>
                <Award className="w-7 h-7 text-teal-600 mb-2  " />
              </div>
              <div className='min-w-[200px] p-2 flex-1 text-center backup-blur  '>
                <p className="font-bold text-2xl text-gray-800">35+</p>
                <p className="text-sm text-gray-500 ">Years Experience</p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="200"
              className="flex flex-col items-center"
            >
              <div className='bg-blue-100 rounded-2xl p-2 mb-2'>
                <Users className="w-8 h-8 text-teal-600 mb-2" />
              </div>
              <div className='text-center'>
                <p className="font-bold text-2xl text-gray-800">150+</p>
                <p className="text-sm text-gray-500">Medical Specialists</p>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="flex flex-col items-center"
            >
              <div className='bg-blue-100 rounded-2xl p-2 mb-2'>
                <MapPin className="w-8 h-8 text-teal-600 mb-2" />
              </div>
              <div className='text-center'>
                <p className="font-bold text-xl text-gray-800">12</p>
                <p className="text-sm text-gray-800 "> Clinic Locations</p>
              </div>
            </div>

          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              data-aos="fade-up"
              className="bg-teal-600 text-white px-6 py-3 rounded-xl shadow hover:bg-teal-700 transition-transform duration-500 
             hover:-translate-y-1"
            >
              Schedule Consultation
            </button>
            <button
              data-aos="fade-up"
              data-aos-delay="200"
              className="border border-gray-300 px-6 py-3 rounded-xl shadow-sm hover:bg-teal-600 transition"
            >
              Watch Our Story
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-600">
            <div className='flex items-center gap-2'>
              <FaRegCalendarCheck className='text-teal-600' />
              <button className="hover:text-teal-600 cursor-pointer transition-transform duration-500 ease-in-out 
             hover:-translate-y-1 ">Find Available Times</button>
            </div>

            <div className='flex items-center gap-2'>
              <BsChatDots className='text-teal-600 ' />
              <button className="hover:text-teal-600 cursor-pointer transition-transform duration-500 ease-in-out 
             hover:-translate-y-1">Chat with Support</button>
            </div>

            <div className='flex items-center gap-2'>
              <BsFileMedical className='text-teal-600' />
              <button className="hover:text-teal-600 cursor-pointer transition-transform duration-500 ease-in-out 
             hover:-translate-y-1">Patient Portal</button>
            </div>

          </div>
        </div>
      </div >
    </section >


  )
}

export default Homess
