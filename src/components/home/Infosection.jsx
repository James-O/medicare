import React from 'react'

import {BsFacebook, BsTwitterX } from 'react-icons/bs'
import {  CgInstagram,  CgTwitter } from 'react-icons/cg'
import { RxLinkedinLogo, } from 'react-icons/rx'
function Infosection() {
  return (
    <div className='left-0 right-0 bg-gray-100 py-10 px-6'>
      <div className='gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-auto max-w-6xl grid'>
        <div>
          <h1 className="text-blue-950 font-bold text-4xl mb-8">Medi<span className="font-bold text-teal-600 text-4xl">Care</span></h1>
          <p className='w-40 mb-4'>A108 Adam Street New York, NY 535022</p>
          <p><span className='font-bold'>Phone:</span> +1 5589 55488 55</p>
          <p><span className='font-bold'>Email:</span> info@example.com</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 max-w-4xl w-50 md:gap-2 sm:gap-2 gap-2">

            <div><a href='#' className="p-2 rounded-full bg-gray-300 text-gray-800 hover:border-teal-600 hover:text-teal-600  inline-flex items-center justify-center  border-1"><BsTwitterX size={20} strokeWidth={0.5}/></a></div>
            <div><a href='#' className="p-2 rounded-full bg-gray-300 text-gray-800 hover:border-teal-600 hover:text-teal-600  inline-flex items-center justify-center  border-1"><BsFacebook size={20} strokeWidth={0.5}/> </a></div>
            <div><a href='#' className="p-2 rounded-full bg-gray-300 text-gray-800 hover:border-teal-600 hover:text-teal-600  inline-flex items-center justify-center  border-1"><CgInstagram size={20} strokeWidth={0.5}/></a></div>
            
            <div><a href='#' className="p-2 rounded-full bg-gray-300 text-gray-600 hover:border-teal-600 hover:text-teal-600 inline-flex items-center justify-center border-1"><RxLinkedinLogo size={20} strokeWidth={0.5}/></a></div>
          </div>
        </div>
         <div className='whitespace-nowrap'>
            <h3 className="font-medium text-lg text-blue-950 mb-4 hover:text-teal-600">Useful Links</h3>
            <ul className="text-gray-500 text-sm flex flex-col space-y-3">
              <li className='hover:text-teal-600'><a href='/' className="relative hover:border-b-1 hover:border-b-teal-600">Home</a></li>
              <li className='hover:text-teal-600'><a href='/about' className="relative hover:border-b-1 hover:border-b-teal-600">About us</a></li>
              <li className='hover:text-teal-600'><a href='/service' className="relative hover:border-b-1 hover:border-b-teal-600">Services</a></li>
              <li className='hover:text-teal-600'><a href='/terms' className="relative hover:border-b-1 hover:border-b-teal-600">Terms of service</a></li>
              <li className='hover:text-teal-600'><a href='/privacy' className="relative hover:border-b-1 hover:border-b-teal-600">Privacy policy</a></li>
            </ul>
          </div>
          <div className='whitespace-nowrap'>
            <h3 className="font-medium text-lg text-blue-950 mb-4 hover:text-teal-900">Our Services</h3>
            <ul className="text-gray-500 text-sm flex flex-col space-y-3">
              <li className='hover:text-teal-600'><a href='/service' className="relative hover:border-b-1 hover:border-b-teal-600">Web Design</a></li>
              <li className='hover:text-teal-600'><a href='/service' className="relative hover:border-b-1 hover:border-b-teal-600">Web Development</a></li>
              <li className='hover:text-teal-600'><a href='/service' className="relative hover:border-b-1 hover:border-b-teal-600">Product Management</a></li>
              <li className='hover:text-teal-600'><a href='/service' className="relative hover:border-b-1 hover:border-b-teal-600">Marketing</a></li>
              <li className='hover:text-teal-600'><a href='/service' className="relative hover:border-b-1 hover:border-b-teal-600">Graphic Design</a></li>
            </ul>
          </div>

          <div className='whitespace-nowrap'>
            <h3 className="font-medium text-lg text-blue-950 mb-4 hover:text-teal-900">More Pages</h3>
            <ul className="text-gray-500 text-sm flex flex-col space-y-3">
              <li className='hover:text-teal-600'><a href='/' className="relative hover:border-b-1 hover:border-b-teal-600">Molestiae accusamus</a></li>
              <li className='hover:text-teal-600'><a href='/' className="relative hover:border-b-1 hover:border-b-teal-600">Excepturi dignissimos</a></li>
              <li className='hover:text-teal-600'><a href='/' className="relative hover:border-b-1 hover:border-b-teal-600">Suscipit distinctio</a></li>
              <li className='hover:text-teal-600'><a href='/' className="relative hover:border-b-1 hover:border-b-teal-600">Dilecta</a></li>
              <li className='hover:text-teal-600'><a href='/' className="relative hover:border-b-1 hover:border-b-teal-600">Sit quas consectetur</a></li>
            </ul>
          </div>

          <div className='whitespace-nowrap'>
            <h3 className="font-medium text-lg text-blue-950 mb-4 hover:text-teal-900">Company</h3>
            <ul className="text-gray-500 text-sm flex flex-col space-y-3">
              <li className='hover:text-teal-600'><a href='/contact' className="relative hover:border-b-1 hover:border-b-teal-600">Ipsam</a></li>
              <li className='hover:text-teal-600'><a href='/contact' className="relative hover:border-b-1 hover:border-b-teal-600">Laudantium dolorum</a></li>
              <li className='hover:text-teal-600'><a href='/contact' className="relative hover:border-b-1 hover:border-b-teal-600">Dinera</a></li>
              <li className='hover:text-teal-600'><a href='/contact' className="relative hover:border-b-1 hover:border-b-teal-600">Trodelas</a></li>
              <li className='hover:text-teal-600'><a href='/contact' className="relative hover:border-b-1 hover:border-b-teal-600">Flexo</a></li>
            </ul>
          </div>

       
      </div>
      </div>
  )
}

export default Infosection