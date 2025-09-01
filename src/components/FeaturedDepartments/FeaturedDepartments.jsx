import React from 'react'
import { ArrowRight, Check, HeartPulse, MoveRight } from 'lucide-react'

export default function FeaturedDepartments() {
  return (
    <div className="px-10 pt-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-semibold border-b-2 inline-block border-gray-300 pb-4">
          Featured Departments
        </h1>
        <p className="pt-4 text-gray-600">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      {/* Flex container for content + image */}
      <div className="flex justify-between items-start mt-16">
        {/* Text Content */}
        <div className="w-[55%]">
          <h4 className="text-blue-500">EMERGENCY MEDICINE</h4>
          <h1 className="text-5xl text-gray-700 mt-2">
            24/7 Emergency Care <br />
            Services
          </h1>
          <p className="pt-4 text-[1.2rem] leading-relaxed text-gray-500">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
            accusantium doloremque laudantium, totam rem aperiam,<br />
            eaque ipsa quae ab illo inventore veritatis et quasi architecto <br />
            beatae vitae dicta sunt explicabo.
          </p>
          <div className="flex pt-10">
            <Check className="bg-blue-500 rounded-full text-white w-4 h-4 mt-1 mr-3 p-0.5" />
            <span className="text-gray-700">24/7 Emergency response</span>
          </div>
          <div className="flex pt-5">
            <Check className="bg-blue-500 rounded-full text-white w-4 h-4 mt-1 mr-3 p-0.5" />
            <span className="text-gray-700">Advanced Life Support</span>
          </div>
          <div className="flex pt-5">
            <Check className="bg-blue-500 rounded-full text-white w-4 h-4 mt-1 mr-3 p-0.5" />
            <span className="text-gray-700">Trauma Care Specialists</span>
          </div>
          <div className="flex items-center pt-10 space-x-2">
            <span className="font-bold">Learn More</span>
            <MoveRight className="w-5 h-5" />
          </div>
        </div>

        {/* Image */}
        <div className="w-[50%]">
          <img
            src="/images/emergency-3.webp"
            alt="Emergency Department"
            className="w-full h-[540px] object-cover rounded-md"
          />
        </div>
      </div>
      {/*cards*/}
      <div className='grid grid-cols-12 mx-10 gap-5 py-8'>
        <div>
          <div className='bg-blue-500 border-5'>
            <HeartPulse className=' rounded-full text-white  w-10 h-10 m-5 mr-6'/>
          </div>
          <span></span>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
