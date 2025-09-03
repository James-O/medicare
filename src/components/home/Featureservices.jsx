import React from 'react'
import { Bone, Brain, Divide, FlaskConical, PersonStanding, Ribbon, RibbonIcon } from 'lucide-react';







function Featureservices() {
  return (
    <div className='bg-gray-100 text-gray-800'>
                <div className="py-12 px-6 max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-2">Featured Services</h2>
                        <p className="text-gray-600">Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                
                        <div class=" flex ml-130 h-1 w-64 bg-gradient-to-r from-black via-teal-300 to-black text-sm "></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">
                            <div className='relative'>
                                <img src="../images/cardiology-2.webp" alt="Cardiology" className="w-full h-48 object-cover border-b-black" />
                                <div className='border-2 absolute top-3 right-3 bg-teal-600 border-teal-600 p-2 rounded-full'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-pulse-fill text-white " viewBox="0 0 16 16">
                                        <path d="M1.475 9C2.702 10.84 4.779 12.871 8 15c3.221-2.129 5.298-4.16 6.525-6H12a.5.5 0 0 1-.464-.314l-1.457-3.642-1.598 5.593a.5.5 0 0 1-.945.049L5.889 6.568l-1.473 2.21A.5.5 0 0 1 4 9z" />
                                        <path d="M.88 8C-2.427 1.68 4.41-2 7.823 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C11.59-2 18.426 1.68 15.12 8h-2.783l-1.874-4.686a.5.5 0 0 0-.945.049L7.921 8.956 6.464 5.314a.5.5 0 0 0-.88-.091L3.732 8z" />
                                    </svg>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Cardiology Excellence</h3>
                                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus.</p>
                                <a href="#" class="text-teal-600 font-semibold mt-4 inline-block  transition-all duration-300 hover:tracking-wide hover:scale-105">Learn More →</a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">

                            <div className='relative'>
                                <img src="../images/neurology-3.webp" alt="Neurology"
                                    className="w-full h-48 object-cover" />
                                <div className='border-2 absolute top-3 right-3 bg-teal-600 border-teal-600 p-2 rounded-full h-10 w-10 flex items-center justify-center'>
                                    <div className='w-16 h-16 text-white flex items-center'><Brain /></div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Neurology Care</h3>
                                <p className="text-gray-600 text-sm">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                <a href="#" className="text-teal-600 font-semibold mt-4 inline-block  transition-all duration-300 hover:tracking-wide hover:scale-105">Learn More →</a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">


                            <div className='relative'>
                                <img src="../images/orthopedics-1.webp" alt="Orthopedics"
                                    className="w-full h-48 object-cover" />
                                <div className='border-2 absolute top-3 right-3 bg-teal-600
                                 border-teal-600 p-2 rounded-full h-10 w-10 flex items-center justify-center rotate-50'>
                                    <div className='w-16 h-16 text-white flex items-center  '><Bone /></div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Orthopedic Surgery</h3>
                                <p className="text-gray-600 text-sm">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                <a href="#" class="text-teal-600 font-semibold mt-4 inline-block  transition-all duration-300 hover:tracking-wide hover:scale-105">Learn More →</a>
                            </div>
                        </div>

                        {/* Card 4  */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">

                            <div className='relative'>
                                <img src="../images/pediatrics-4.webp" alt="Pediatric"
                                    className="w-full h-48 object-cover" />
                                <div className='border-2 absolute top-3 right-3 bg-teal-600 border-teal-600 p-2 rounded-full h-10 w-10 flex items-center justify-center'>
                                    <div className='w-16 h-16 text-white flex items-center'><PersonStanding /></div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Pediatric Care</h3>
                                <p className="text-gray-600 text-sm">Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.</p>
                                <a href="#" className="text-teal-600 font-semibold mt-4 inline-block  transition-all duration-300 hover:tracking-wide hover:scale-105">Learn More →</a>
                            </div>
                        </div>

                        {/* Card 5  */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">


                            <div className='relative'>
                                <img src="../images/oncology-2.webp" alt="Oncology"
                                    className="w-full h-48 object-cover" />
                                <div className='border-2 absolute top-3 right-3 bg-teal-600 border-teal-600 p-2 rounded-full h-10 w-10 flex items-center justify-center'>
                                    <div className='w-16 h-16 text-white flex items-center'><RibbonIcon /></div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Oncology Treatment</h3>
                                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <a href="#" className="text-teal-600 font-semibold mt-4 inline-block  transition-all duration-300 hover:tracking-wide hover:scale-105">Learn More →</a>
                            </div>
                        </div>

                        {/* Card 6  */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">
                            <div className='relative'>
                                <img src="../images/laboratory-3.webp" alt="laboratory"
                                    className="w-full h-48 object-cover" />
                                <div className='border-2 absolute top-3 right-3 bg-teal-600 border-teal-600 p-2 rounded-full h-10 w-10 flex items-center justify-center'>
                                    <div className='w-16 h-16 text-white flex items-center'><FlaskConical /></div>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2">Laboratory Services</h3>
                                <p className="text-gray-600 text-sm">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae.</p>
                                <a href="#" className="text-teal-600 font-semibold mt-4 inline-block  transition-all duration-300 hover:tracking-wide hover:scale-105">Learn More →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

  )
}

export default Featureservices
