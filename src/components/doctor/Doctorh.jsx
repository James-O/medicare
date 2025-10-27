import React from 'react'

function Doctorh() {
  return (
    <div className='w-full h-full mt-44'>
      <div className='text-center py-16'>
        <h1 className='text-4xl font-bold'> Doctors</h1>
        <p className='text-center text-sm mt-4 max-w-3xl mx-auto text-gray-600'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio <br />
          sint voluptas consequatur ut a odio voluptatem.
          Sit dolorum debitis veritatis natus dolores.
          Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>
      </div>
      <div className='bg-gray-200 px-3 py-5 rounded max-w-full mx-auto flex'>
        <nav className='text-sm text-gray-600 ml-[8%]'>
          <ol className='flex items-center space-x-2'>
            <li>
              <a href="#" className="text-teal-500 hover:text-teal-600 ml-[4%]">Home</a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li className='text-gray-800'>Doctors
            </li>
          </ol>
        </nav>
      </div>
    </div>
  )
}

export default Doctorh