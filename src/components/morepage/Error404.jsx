import { CircleArrowRight, CircleQuestionMark } from 'lucide-react'
import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

function Error404() {
  return (
    <div className='py-20 mt-10 bg-white top-10 left-0 right-0'>
      <div className='flex justify-center items-center text-center py-20 flex-col lg:px-28 flex-1 px-4' data-aos="zoom-in">
        <h1 className='text-4xl font-bold mb-2 text-blue-950'>404</h1>
        <p className='text-gray-700 lg:px-25 text-xl px-4'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </div>
      <div className='left-0 right-0 py-4 bg-gray-100'>
       <div className='flex justify-between items-center lg:px-28'>
        <div><h1 className='text-blue-950'>404</h1></div>
        <ul className='flex gap-2'><li className='text-teal-600'><a href='/'>Home</a></li><li>/ <a href='/about'>404</a></li></ul>
       </div>
      </div>


      <div className='grid grid-cols-1 lg:grid-cols-2 py-20 mt-10 left-0 right-0 bg-white gap-8 lg:28'>
        <div className='flex items-center justify-center h-screen'>
          <div className='relative flex items-center justify-center animate-pulse'>
            <div className='rounded-full relative z-2 text-teal-600 opacity-0.2'><BsFillExclamationTriangleFill  size={150}/></div>    
            <div className='absolute w-52 h-52 bg-cyan-100 rounded-full opacity-0.6 animation-float transition-transform translate-y-infinite ease-in-out duration-700'></div>
            <div className='absolute w-32 h-32 rounded-full opacity-[15%] top-[10%] bg-neutral-700 right-[90%] '></div>
            <div className='absolute w-20 h-20  rounded-full opacity-[10%] animation-float transition-transform translate-y-infinite ease-in-out duration-300 bg-teal-600 bottom-[10%] left-[88%]'></div>            
          </div>          
          </div>

        <div className='px-'>
          <button className='bg-teal-200 text-teal-600 rounded-full py-2 text-sm px-6 font-bold'>ERROR</button>

          <div className='flex text-center items-center'>
            <div className='relative w-[300px] h-[300px] flex items-center'>
              <h1 className='text-9xl  font-bold  md:text-6xl lg:text-9xl ml-6 bg-linear-200 bg-black from-teal-600 bg-clip-text to-yellow-700 text-transparent'>404</h1>

              <svg className="absolute inset-0"
              viewBox="0 0 300 300"
              width="280"
              height="280">
                <defs>
                  <path
                id="circlePath"
                d="M 150, 150
                m -120, 0
                a 120, 120 0 1,1 240,0
                a 120,120 0 1,1 -240,0"
                fill="none"/>
                </defs>
                
                <text
                fill="tomato"
                fontSize="18"
                fontWeight="bold">
                  <textPath href="#circlePath" startOffset="0%">
                    <animate
                    attributeName="startOffset"
                    from="0%"
                    to="100"
                    dur="15s"
                    repeatCount="indefinite"/>
                    ERROR • ERROR • ERROR • ERROR • ERROR • ERROR • ERROR • ERROR • ERROR • ERROR •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
          
          <h1 className='font-bold text-gray-800 text-4xl'>Page Not Found</h1>
          <p className='text-gray-500 text-lg mt-8 lg:mr-38'>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
          <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-8 mt-4 lg:mr-48'>
            <a href='/' className='py-6 px-8 bg-teal-600 text-white flex gap-2 items-center font-bold rounded-lg transition-transform ease-in-out duration-300 hover:-translate-y-2'><IoHomeOutline size={20}/><span>Back To Home</span></a>

            <a href='#' className='py-6 px-8 border-teal-600 border text-teal-600 flex gap-2 items-center font-bold rounded-lg transition-transform ease-in-out duration-300 hover:-translate-y-2'><CircleQuestionMark/> <span>Help Center</span></a>
          </div>

          <div className='mt-15'>
        <h2 className='text-lg font-bold mb-2'>You might want to:</h2>
        <div className='space-y-4'>
          <div className='group'><a href="#" className='flex items-center gap-4 group-hover:text-teal-600 font-medium'><span className='transition-transform ease-in-out duration-300 group-hover:-translate-x-2 text-teal-600'><CircleArrowRight/></span><span>Check our Sitemap</span></a></div>
          
         <div className='group'>
          <a href="#" className='flex items-center gap-4 group-hover:text-teal-600 font-medium'><span className='transition-transform ease-in-out duration-300 group-hover:-translate-x-2 text-teal-600'><CircleArrowRight/></span><span>Contact support</span></a>
         </div>
          
         <div className='group'>
          <a href="#" className='flex items-center gap-4 group-hover:text-teal-600 font-medium'><span className='transition-transform ease-in-out duration-300 group-hover:-translate-x-2 text-teal-600'><CircleArrowRight/></span><span>Return to previous page</span></a>
         </div>         
        </div>
      </div>
        </div>
      </div>      
        </div>
  )
}

export default Error404