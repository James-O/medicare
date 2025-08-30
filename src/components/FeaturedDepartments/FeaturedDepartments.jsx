import React from 'react'
import { ArrowRight, Check, MoveRight } from 'lucide-react'
export default function FeaturedDepartments() {
  return (
    <div >
      <div> {/*header*/}
        <h1 className='justify-center items-center text-4xl inline-block font-semibold border-b-2 border-gray-300 pb-4 ml-110 '>Featured Departments</h1>
        <p className='items-center justify-center flex pt-4'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>
      <div className='pt-10 pl-15'>
        <h4 className='text-blue-500'>EMERGENCY MEDICINE</h4>
        <h1 className='text-5xl text-gray-700'>
          24/7 Emergency Care <br />
          Services
        </h1>
        <p className='pt-4 text-[1.2rem] leading-relaxed text-gray-500'>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br />
          accusantium doloremque laudantium, totam rem aperiam,<br />
          eaque ipsa quae ab illo inventore veritatis et quasi architecto <br />
          beatae vitae dicta sunt explicabo.
        </p>
        <div className='flex pt-10 '>
          <Check className='bg-blue-500 rounded-full text-white w-4 h-4 mt-1 mr-3 p-0.5' /><span className='text-gray-700'>24/7 Emergency response</span>
        </div>
        <div className='flex pt-5 '>
          <Check className='bg-blue-500 rounded-full text-white w-4 h-4 mt-1 mr-3 p-0.5' /><span className='text-gray-700'>Advanced Life Support</span>
        </div>
        <div className='flex pt-5 '>
          <Check className='bg-blue-500 rounded-full text-white w-4 h-4 mt-1 mr-3 p-0.5' /><span className='text-gray-700'>Trauma Care Specialists</span>
        </div>
        <div className='flex pt-10'>
          <span className='font-bold'>Learn More</span><ArrowRight className='mt-0.9 ml-1' />
        </div>
        <div className='ml-150'>
          <img className='w-64 h-32' src="/images/emergency-3.webp/" alt="image" />
        </div>
      </div>
    </div>
  )
}
