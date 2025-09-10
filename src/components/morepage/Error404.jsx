import React from 'react'

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
        </div>
  )
}

export default Error404