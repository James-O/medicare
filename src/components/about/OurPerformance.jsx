import React from 'react'

function OurPerformance() {
  return (
    <div className='py-16 pt-16 bg-white top-10 left-0 right-0 min-h-screen'>
       <div className='flex justify-center items-center text-center p-8 flex-col'>
        <h1 className='text-4xl font-semibold mb-2 text-blue-950 w-130 text-center'>Excellence in Healthcare Since 1985</h1>
        <p className='w-170 text-center text-xl text-gray-500'>We believe that exceptional medical care begins with understanding. Our dedicated team of professionals combines cutting-edge technology with compassionate, personalized treatment to ensure every patient receives the highest standard of care.</p>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 gap-10 items-center'>
        <div className='grid grid-cols-2 grid-rows-2 gap-4'>
          <img src='/images/about-wide-1.webp'
          alt='Hospital Bed'
          className='rounded-lg w-full h-full object-cover col-span-2 row-span-1'/>

          <img src='/images/staff-12.webp'
          alt='Doctor'
          className='rounded-lg w-full h-1/2 object-cover col-span-1 row-span-1'/>

          <img src='/images/consultation-4.webp'
          alt='Consultation'
          className='rounded-lg w-full h-1/2 object-cover col-span-1 row-span-1'/>
        </div>

        <div className='space-y-8'>
          <h2 className='text-3xl font-semibold text-gray-900'>Trusted Healthcare Provider</h2>
          <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

          <div className='grid grid-row-1 sm:grid-row-3 gap-6 mt-8'>
            <div className='flex flex-row items-center gap-20 '>
              <div><h3 className='text-4xl  text-teal-600'>22000</h3></div>
              <div className='text-left'><p className='text-lg font-semibold text-gray-700 mb-2'>Successful Treatments</p>
              <p className='text-gray-600 text-sm'>Completed with excellent patient outcomes</p></div>
              
            </div>
            <div className='flex flex-row items-center gap-20'>
              <div><h3 className='text-4xl  text-teal-600'>95%</h3></div>
              <div><p className='text-lg font-semibold text-gray-700 mb-2'>Patient Satisfaction</p>
              <p className='text-sm text-gray-600'>Based on comprehensive feedback surveys</p></div>
              
            </div>
            <div className='flex flex-row items-center gap-20'>
              <div><h3 className='text-4xl  text-teal-600'>85%</h3></div>
              <div><p className='text-lg font-semibold text-gray-700 mb-2'>Medical Professionals</p>
              <p className='text-sm text-gray-600'>Specialists across various departments</p></div>
              
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}

export default OurPerformance