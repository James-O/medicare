import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect} from "react";

function Departmentdetailh() {
  useEffect(() => {
            AOS.init({
            duration: 1000,
            delay: 50,
            });
            }, []);
  return (
    <div className='py-16 mt-10 bg-white top-10  left-0 right-0'>          

       <div className='flex justify-center items-center text-center py-20 flex-col lg:px-28 flex-1 px-4' data-aos="zoom-in">
        <h1 className='text-4xl font-semibold mb-2 text-blue-950'>Department Details</h1>
        <p className='text-gray-700 lg:px-25 text-xl px-4'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </div>

      <div className='left-0 right-0 py-4  bg-gray-100 lg:px-28'>
        <div className='left-0 right-0 flex justify-between items-center text-center'>
        <div><h3 className='text-blue-950'>Department Details</h3></div>
        <div><ul className='flex gap-2'><li className='text-teal-600'><a href='/'>Home</a></li><li>/ <a href='/morepage'>Department Details</a></li></ul></div>
      </div>
      </div>
    </div>
  )
}

export default Departmentdetailh