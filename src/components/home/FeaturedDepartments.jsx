import React from 'react'
import { ArrowRight, Baby, Brain, BrainIcon, Check, Eye, EyeIcon, HeartPulse, MoveRight, Scissors, ScissorsIcon } from 'lucide-react'
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";


export default function FeaturedDepartments() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);
  return (
    <div data-aos='fade-up' className="px-10 pt-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl py-30 font-semibold border-b-2 inline-block border-gray-300 pb-4">
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
          <h4 className="text-teal-500">EMERGENCY MEDICINE</h4>
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
            <Check className="bg-teal-500 rounded-full text-white w-4 h-4 mt-1 mr-3 p-0.5" />
            <span className="text-gray-700">24/7 Emergency response</span>
          </div>
          <div className="flex pt-5">
            <Check className="bg-teal-500 rounded-full text-white w-4 h-4 mt-1 mr-3 p-0.5" />
            <span className="text-gray-700">Advanced Life Support</span>
          </div>
          <div className="flex pt-5">
            <Check className="bg-teal-500 rounded-full text-white w-4 h-4 mt-1 mr-3 p-0.5" />
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
      <div className='flex mx-[0.3] mt-40 gap-5 py-8  space-x-12'>
        {/*card1*/}
        <div className='inline-block ml-5 p-6 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className='bg-teal-100  border-1   border-teal-100 justify-center items-center w-20 h-20 inline-flex rounded-full'>
            <HeartPulse className='fill-teal-600 stroke-teal-100  w-13 h-13 ' />
          </div>
          <span>
            <h2 className='mt-5 text-2xl text-black'>Cardiology</h2>
            <p className=' text-gray-500 flex mt-4 leading-relaxed'>
              Nemo enim ipsam voluptatem quia <br />
              voluptas sit aspernatur aut odit aut fugit,<br />
              sed quia consequuntur magni dolores.<br />
            </p>
            <div className="mt-8 flex space-x-30">
              <div className="inline-block">
                <span className="ml-5 text-teal-600 font-bold text-2xl">15 +</span>
                <p className="text-[15px] text-gray-500">SPECIALISTS</p>
              </div>
              <div className="inline-block">
                <span className="ml-5 text-teal-600 font-bold text-2xl">500 +</span>
                <p className="text-[15px] text-gray-500">PROCEDURES</p>
              </div>
            </div>
          </span>
        </div>

        {/*card 2*/}
        <div className='inline-block ml-5 p-6 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className='bg-teal-100 justify-center items-center w-20 h-20 inline-flex rounded-full'>
            <BrainIcon className=' fill-teal-600 stroke-teal-100 w-13 h-13 ' />
          </div>
          <span>
            <h2 className='mt-5 text-2xl text-black'>Neurology</h2>
            <p className=' text-gray-500 flex mt-4 leading-relaxed'>
              Eos qui ratione voluptatem sequi <br />
              nesciunt neque porro quisquam est, qui<br />
              dolorem ipsum quia dolor sit amet.<br />
            </p>
            <div className="mt-8 flex space-x-30">
              <div className="inline-block">
                <span className="ml-5 text-teal-600 font-bold text-2xl">8 +</span>
                <p className="text-[15px] text-gray-500">SPECIALISTS</p>
              </div>
              <div className="inline-block">
                <span className="ml-5 text-teal-600 font-bold text-2xl">200 +</span>
                <p className="text-[15px] text-gray-500">TREATMENTS</p>
              </div>
            </div>
          </span>
        </div>
        {/*card3*/}
        <div className='inline-block ml-5 p-6 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className='bg-teal-100 justify-center items-center w-20 h-20 inline-flex rounded-full'>
            <ScissorsIcon className=' fill-teal-600 stroke-teal-600 w-13 h-13' />
          </div>
          <span>
            <h2 className='mt-5 text-2xl text-black'>Surgery</h2>
            <p className=' text-gray-500 flex mt-4 leading-relaxed'>
              Consectetur adipisci velit sed quia non <br />
              numquam eius modi tempora incidunt ut<br />
              labore et dolore magnam aliquam.<br />
            </p>
            <div className="mt-8 flex space-x-31">
              <div className="inline-block">
                <span className="ml-5 text-teal-600 font-bold text-2xl">12 +</span>
                <p className="text-[15px] text-gray-500">SURGEONS</p>
              </div>
              <div className="inline-block">
                <span className="ml-5 text-teal-600 font-bold text-2xl">1000+</span>
                <p className="text-[15px] text-gray-500">OPERATIONS</p>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className='space-x-12 flex  mx-[0.3] mt-10 gap-5 py-8' > {/* 2nd cards*/}
        {/*card4*/}
        <div className="flex flex-col">
          <div className='inline-block ml-5 p-6 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105'>
            <div className='bg-teal-100 justify-center items-center w-20 h-20 inline-flex rounded-full'>
              <Baby className=' fill-teal-600 stroke-teal-100 w-13 h-13' />
            </div>
            <span>
              <h2 className='mt-5 text-2xl text-black'>Pediatrics</h2>
              <p className=' text-gray-500 flex mt-4 leading-relaxed'>
                Quaerat voluptatem ut enim ad minima <br />
                veniam quis nostrum exercitationem <br />
                ullam corporis suscipit laboriosam.
              </p>
              <div className="mt-8 flex space-x-20">
                <div className="inline-block">
                  <span className="ml-5 text-teal-600 font-bold text-2xl">10 +</span>
                  <p className="text-[15px] text-gray-500">PEDIATRICIANS</p>
                </div>
                <div className="mr-5 inline-block">
                  <span className="ml-5 text-teal-600 font-bold text-2xl">2000+</span>
                  <p className="text-[15px] text-gray-500">YOUNG PATIENTS</p>
                </div>
              </div>
            </span>
          </div>
        </div>
        {/*card 5*/}
        <div className='inline-block ml-5 p-6 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105'>
          <div className='bg-teal-100 justify-center items-center w-20 h-20 inline-flex rounded-full'>
            <EyeIcon className=' fill-teal-600 stroke-teal-100 w-13 h-13' />
          </div>
          <span>
            <h2 className='mt-5 text-2xl text-black'>Opthamology</h2>
            <p className=' text-gray-500 flex mt-4 leading-relaxed'>
              Nisi ut aliquid ex ea commodi <br />
              consequatur quis autem vel eum iure <br />
              reprehenderit qui in ea voluptate velit <br />
              esse.
            </p>
            <div className="mt-1 flex space-x-31">
              <div className="inline-block">
                <span className="ml-5 text-teal-600 font-bold text-2xl">6 +</span>
                <p className="text-[15px] text-gray-500">EYE DOCTORS</p>
              </div>
              <div className="inline-block">
                <span className="ml-5 text-teal-600 font-bold text-2xl">800+</span>
                <p className="text-[15px] text-gray-500">EYE EXAMS</p>
              </div>
            </div>
          </span>
        </div>
        {/*card6*/}
        <div className='inline-block ml-5 p-6 text-white rounded-lg shadow-lg transform transition-transform hover:scale-105 '>
          <div className='bg-teal-100 justify-center items-center w-20 h-20 inline-flex rounded-full'>
            <ScissorsIcon className=' fill-teal-600 stroke-teal-600 w-13 h-13' />
          </div>
          <div>
            <h2 className='mt-5 text-2xl text-black'>Dermatology</h2>
            <p className=' text-gray-500 flex mt-4 leading-relaxed'>
              Quam nihil molestiae consequatur vel <br />
              illum qui dolorem eum fugiat quo <br />
              voluptas nulla pariatur at vero eos. <br />
            </p>
            <div className="mt-8 flex space-x-20">
              <div className="inline-block">
                <span className="ml-5 text-teal-600 font-bold text-2xl">7 +</span>
                <p className="text-[15px] text-gray-500">DERMATOLOGIST</p>
              </div>
              <div className="flex flex-col">
                <span className="ml-5 text-teal-600 font-bold text-2xl">600+</span>
                <p className="text-[11px] text-gray-500 ">SKIN TREATMENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
