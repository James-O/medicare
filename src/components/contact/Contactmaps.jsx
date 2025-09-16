import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect,} from "react";




function Contactmaps() {

    useEffect(() => {
        AOS.init({
        duration: 1000,
        delay: 50,
        });
        }, []);

  return (
    <div className='py-16 pt-26 bg-gray-50 left-0 right-0 px-18' >
      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8'>
        <div className='rounded-xl shadow-xl h-[500px] w-[550px]' data-aos="fade-right">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.0861883701905!2d3.3518028470978285!3d6.636218105286323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b93b76bb4f36f%3A0xb0f14aa9165d2a9f!2sIJAN%20AFRICA!5e0!3m2!1sen!2sng!4v1757069438248!5m2!1sen!2sng" width="550" height="500" style={{ border:0 }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>          
          </div>

        <div className='bg-gray-50 p-6 rounded-xl shadow-lg' data-aos="fade-left">
          <form className='space-y-8 flex items-center flex-col relative'>
            <div className='flex flex-row gap-6 w-full justify-between'>
              
              <input 
              type="text" 
              id="name"
              name="name"
              placeholder="Your Name"
              required
              autoComplete="name"
               className="w-1/2 px-3 py-2 border-1 border-gray-300 rounded-lg transition 
               focus:border-teal-500 focus:shadow-sm focus:shadow-teal-400 focus:ring-1 focus:ring-teal-500 focus:outline-none"/>       

             <input type="email"
             id="email"
              name="email" 
             placeholder="Your Email"
             required
             autoComplete="email" 
             className="w-1/2 px-3 py-2 border-1 border-gray-300 rounded-lg  transition focus:border-teal-500 focus:shadow-sm focus:shadow-teal-400 focus:ring-1 focus:ring-teal-500 focus:outline-none"/>
            </div>
            

            <input type="text" placeholder='Subject' className='w-full p-3 border-2 border-gray-300  rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none focus:shadow-sm focus:shadow-teal-400'/>

            <textarea placeholder='Message' rows="8" className='w-full p-3 border-2 border-gray-300  rounded-lg focus:ring-1 focus:ring-teal-500 focus:outline-none focus:shadow-sm focus:shadow-teal-400'></textarea>

            <button type="submit" className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )}

  export default Contactmaps