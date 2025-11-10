import { CircleSmall } from 'lucide-react'
import React from 'react'
import { HiOutlineInformationCircle } from 'react-icons/hi2'

function Privacies() {
  return (
    <div className='py-20 mt-10 bg-white top-10 left-0 right-0'>
      <div className='flex justify-center items-center text-center py-20 flex-col lg:px-28 flex-1 px-4' data-aos="zoom-in">
        <h1 className='text-4xl font-bold mb-2 text-blue-950'>Privacy</h1>
        <p className='text-gray-700 lg:px-25 text-xl px-4'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </div>
      <div className='left-0 right-0 py-4 bg-gray-100'>
       <div className='flex justify-between items-center lg:px-28'>
        <div><h1 className='text-blue-950'>Privacy</h1></div>
        <ul className='flex gap-2'><li className='text-teal-600'><a href='/'>Home</a></li><li>/ <a href='/about'>Privacy</a></li></ul>
       </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 mt-12 space-y-10">
              {/* 1. Agreement to Terms */}
              <section className="space-y-4">
                <h2 className="text-gray-800 text-xl sm:text-2xl font-bold">
                  Information We Collect
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
      
                <div className="w-full py-6 px-5 bg-teal-50 shadow-sm rounded-2xl">
                  <span className="flex items-center gap-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                    <HiOutlineInformationCircle
                      size={26}
                      className="text-teal-600"
                    />
                    These terms apply to all users, visitors, and others who access or
                    use our services.
                  </span>
                </div>
              </section>
      
              {/* 2. Intellectual Property Rights */}
              <section className="space-y-4">
                <h2 className="text-gray-800 text-xl sm:text-2xl font-bold">
                  Personal Information
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Our service and its original content, features, and functionality
                  are owned by us and are protected by international copyright,
                  trademark, patent, trade secret, and other intellectual property
                  laws.
                </p>
      
                <div className="w-full py-6 space-y-3">
                  {[
                    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
                    "Excepteur sint occaecat cupidatat non proident sunt in culpa",
                    "Qui officia deserunt mollitia animi id est laborum",
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-3 text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                      <CircleSmall size={18} className="text-teal-600 fill-teal-600" />
                      {item}
                    </span>
                  ))}
                </div>
              </section>
      
              {/* 3. Disclaimers */}
              <section className="space-y-4">
                <h2 className="text-gray-800 text-xl sm:text-2xl font-bold">
                  Usage Data
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Your use of our service is at your sole risk. The service is
                  provided "AS IS" and "AS AVAILABLE" without warranties of any kind,
                  whether express or implied.
                </p>
      
                <div className="w-full py-6 space-y-3">
                  {[
                    "The service will meet your requirements",
                    "The service will be uninterrupted or error-free",
                    "Results from using the service will be accurate",
                    "Results from using the service will be reliable",
                  ].map((item, index) => (
                    <span
                      key={index}
                      className="flex items-center gap-3 text-gray-600 text-sm sm:text-base leading-relaxed"
                    >
                      <CircleSmall size={16} className="text-teal-600 fill-teal-600" />
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </div>
        </div>
  )
}

export default Privacies