import React from 'react'

function Aboutnav() {
  return (
    <div className='py-16 pt-26 bg-white left-0 right-0'>
      <div className='left-0 right-0 py-4 bg-gray-300 px-28'>
       <div className='flex justify-between items-center'>
        <div><h1 className='text-blue-950 font-bold'>About</h1></div>
        <ul className='flex gap-2 font-bold'><li className='text-teal-600'><a href='/'>Home</a></li><li>/ <a href='/about'>About</a></li></ul>
       </div>
      </div>
      <div className='flex justify-center items-center text-center p-20 flex-col'>
        <h1 className='text-4xl font-bold mb-2 text-blue-950'>About</h1>
        <p className='text-gray-800 w-170 text-xl'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </div>
      </div>
  )
}

export default Aboutnav