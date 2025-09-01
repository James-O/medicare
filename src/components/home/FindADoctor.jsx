import React from 'react';
import { FaSearch, FaMapMarkerAlt, FaStar, FaCircle, FaRegStar } from "react-icons/fa";
import { LuCirclePlus } from "react-icons/lu";
import { FaArrowRightLong, FaRegStarHalfStroke } from "react-icons/fa6";
import { RiArrowRightSLine } from "react-icons/ri";


function FindADoctor() {
  return (
    <div>
        
        <div className='items-center justify-center text-center p-8'>
            <h2 className='text-3xl font-medium pb-5 relative text-[#1f2f31]'>Find A Doctor</h2>
            <div className='relative w-40 mt-2 mx-auto mb-5'>
                <div className='w-full h-[1px] bg-gray-400'></div>
                <div className='absolute inset-y-0 w-12 h-1 bg-[#099aa7] translate-x-15 transform transform-transition'></div>
            </div>
            <p className='mb-0 text-[16px]'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
        </div>
        <div className='items-center justify-center text-center mt-7 mb-6'>
            <h2 className='text-4xl font-bold text-[#1f2f31] mb-4 leading-relaxed'>Discover Your Ideal Medical Specialist</h2>
            <p className='text-[1.125rem] max-w-[600px] mt-8 mx-auto leading-relaxed text-gray-500'>Connect with our network of certified healthcare professionals across all medical disciplines</p>
        </div>

        <div className='flex items-center justify-center mt-14'>
            <div className='max-w-4xl mx-auto gap-5 space-y-4 p-4 md:p-8 border border-gray-300 rounded-2xl flex flex-col md:flex-row items-center justify-between md:space-y-0 md:space-x'>
                <div className='w-full md:w-1/3'>
                    <label htmlFor="practitioner" className='block text-gray-700 font-semibold mb-2' >Practitioner Name</label>
                    <div className='relative flex items-center'>
                        <i className='absolute left-3 text-gray-400'><FaSearch /></i>
                        <input type='text' placeholder='Search by name...' className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500' />
                    </div>
                </div>

                <div className='w-full md:w-1/3'>
                    <label htmlFor="specialty" className='block text-gray-700 font-semibold mb-2' >Medical Specialty</label>
                    <div className='relative flex items-center'>
                        <i className='absolute left-3 text-gray-400'><LuCirclePlus /></i>
                        <input type='text' placeholder='Select specialty' className='placeholder-black w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500' />
                    </div>
                </div>
                
                <div className='w-full md:w-1/3'>
                    <label htmlFor="location" className='block text-gray-700 font-semibold mb-2' >Location</label>
                    <div className='relative flex items-center'>
                        <i className='absolute left-3 text-gray-400'><FaMapMarkerAlt /></i>
                        <input type='text' placeholder='All Locations' className='placeholder-black w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-500' />
                    </div>
                </div>

                <div className='w-full md:w-auto mt-4 md:mt-0'>
                    <button className='w-full md:w-12 md:h-12 bg-[#099aa7] mt-8 transition-colors text-white rounded-lg flex items-center justify-center p-3 hover:bg-[#099aa73e] duration-200'>
                        <FaArrowRightLong />
                    </button>
                </div>


            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-8 mt-10'>
            <div className='border border-[#099aa7] mt-6 inline-block rounded-2xl px-6 py-6 shadow-xl shadow-[#099aa73a]'>
                <div className='flex mt-2'>
                    <div className='relative overflow-hidden'>
                        <img src='images/jennifer-staff.webp' alt='Dr Jennifer Morgan' className='h-18 w-18 rounded-2xl '></img>
                        <div className='absolute top-14 -right-0.5  md:bottom-6 md:-right-0.5 w-5 h-5 bg-green-500 rounded-full border-4 border-white'></div>
                    </div>
                   <div className='ml-4'>
                        <h3 className='text-2xl font-bold'>Dr. Jennifer Morgan</h3>
                        <p className='text-[16px] mt-1 font-normal text-gray-700'>Senior Cardiologist</p>
                        <div className='flex mt-3 gap-3'>
                            <div className='rounded-md bg-[#099aa71a] px-2 inline-block'>
                                <span className='text-sm text-[#099aa7] font-bold'>MD, FACC</span>
                            </div>
                            <div className=''>
                                <span className='text-sm font-normal text-gray-600'>18 years</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 mt-3'>
                    <div className='flex text-amber-400 transform transition-transform translate-y-2'>
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                    </div>
                    <span className='text-md font-semibold transform transition-transform translate-y-1'>4.9</span>
                    <span className='text-sm font-light text-gray-500 transform transition-transform translate-y-2'> (142 patients) </span>
                </div>
                <div className='flex gap-4 mt-7 mb-3'>
                    <a href='profile' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-gray-100 w-full bg-white hover:border-gray-400 border border-gray-300 py-2 px-4'>Profile</a>
                    <a href='consult' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-[#0a808b] w-full bg-[#099aa7] text-white py-2 px-4 transform transition-all duration-300'>Consult</a>
    
                </div>
            </div>





            <div className='border inline-block border-gray-200 mt-6 rounded-2xl px-6 py-6 hover:border-[#099aa76f] hover:shadow-lg transform transition-colors duration-300'>
                <div className='flex mt-2'>
                    <div className='relative overflow-hidden'>
                        <img src='images/Robert-staff.webp' alt='Dr. Robert Kim' className='h-18 w-18 rounded-2xl '></img>
                        <div className='absolute top-14 -right-0.5 md:bottom-6 md:-right-0.5 w-5 h-5 bg-amber-400 rounded-full border-4 border-white'></div>
                    </div>
                   <div className='ml-4'>
                        <h3 className='text-2xl font-bold'>Dr. Robert Kim</h3>
                        <p className='text-[16px] mt-1 font-normal text-gray-700'>Neurosurgeon</p>
                        <div className='flex mt-3 gap-3'>
                            <div className='rounded-md bg-[#099aa71a] px-2 inline-block'>
                                <span className='text-sm text-[#099aa7] font-bold'>MD, PhD</span>
                            </div>
                            <div className=''>
                                <span className='text-sm font-normal text-gray-600'>24 years</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 mt-3'>
                    <div className='flex text-amber-400 transform transition-transform translate-y-2'>
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaRegStarHalfStroke />
                    </div>
                    <span className='text-md font-semibold transform transition-transform translate-y-1'>4.8</span>
                    <span className='text-sm font-light text-gray-500 transform transition-transform translate-y-2'> (98 patients) </span>
                </div>
                <div className='flex gap-4 mt-7 mb-3'>
                    <a href='profile' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-gray-100 w-full bg-white hover:border-gray-400 border border-gray-300 py-2 px-4'>Profile</a>
                    <a href='Schedule' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-[#0a808b] w-full bg-[#099aa7] text-white py-2 px-4 transform transition-all duration-300'>Schedule</a>
    
                </div>
            </div>





            <div className='inline-block border border-gray-200 mt-6 rounded-2xl px-6 py-6 hover:border-[#099aa76f] hover:shadow-lg transform transition-colors duration-300'>
                <div className='flex mt-2'>
                    <div className='relative overflow-hidden'>
                        <img src='images/Sarah-staff.webp' alt='Dr. Sarah Thompson' className='h-18 w-18 rounded-2xl '></img>
                        <div className='absolute top-14 -right-0.5 md:bottom-6 md:-right-0.5 w-5 h-5 bg-green-500 rounded-full border-4 border-white'></div>
                    </div>
                   <div className='ml-4'>
                        <h3 className='text-2xl font-bold'>Dr. Sarah Thompson</h3>
                        <p className='text-[16px] mt-1 font-normal text-gray-700'>Pediatric Specialist</p>
                        <div className='flex mt-3 gap-3'>
                            <div className='rounded-md bg-[#099aa71a] px-2 inline-block'>
                                <span className='text-sm text-[#099aa7] font-bold'>MD, FAAP</span>
                            </div>
                            <div className=''>
                                <span className='text-sm font-normal text-gray-600'>12 years</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 mt-3'>
                    <div className='flex text-amber-400 transform transition-transform translate-y-2'>
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                    </div>
                    <span className='text-md font-semibold transform transition-transform translate-y-1'>5.0</span>
                    <span className='text-sm font-light text-gray-500 transform transition-transform translate-y-2'> (156 patients) </span>
                </div>
                <div className='flex gap-4 mt-7 mb-3'>
                    <a href='profile' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-gray-100 w-full bg-white hover:border-gray-400 border border-gray-300 py-2 px-4'>Profile</a>
                    <a href='Book Now' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-[#0a808b] w-full bg-[#099aa7] text-white py-2 px-4 transform transition-all duration-300'>Book Now</a>
    
                </div>
            </div>




            <div className='border inline-block border-gray-200 mt-6 rounded-2xl px-6 py-6 hover:border-[#099aa76f] hover:shadow-lg transform transition-colors duration-300'>
                <div className='flex mt-2'>
                    <div className='relative overflow-hidden'>
                        <img src='images/Michael-staff.webp' alt='Dr. Michael Rivera' className='h-18 w-18 rounded-2xl '></img>
                        <div className='absolute top-13 -right-0.5 md:bottom-6 md:-right-0.5 w-5 h-5 rounded-full border-4 border-white'></div>
                    </div>
                   <div className='ml-4'>
                        <h3 className='text-2xl font-bold'>Dr. Michael Rivera</h3>
                        <p className='text-[16px] mt-1 font-normal text-gray-700'>Orthopedic Surgeon</p>
                        <div className='flex mt-3 gap-3'>
                            <div className='rounded-md bg-[#099aa71a] px-2 inline-block'>
                                <span className='text-sm text-[#099aa7] font-bold'>MD, FAAOS</span>
                            </div>
                            <div className=''>
                                <span className='text-sm font-normal text-gray-600'>20 years</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 mt-3'>
                    <div className='flex text-amber-400 transform transition-transform translate-y-2'>
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaRegStarHalfStroke />
                    </div>
                    <span className='text-md font-semibold transform transition-transform translate-y-1'>4.7</span>
                    <span className='text-sm font-light text-gray-500 transform transition-transform translate-y-2'> (134 patients) </span>
                </div>
                <div className='flex gap-4 mt-7 mb-3'>
                    <a href='profile' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-gray-100 w-full bg-white hover:border-gray-400 border border-gray-300 py-2 px-4'>Profile</a>
                    <a href='request' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-[#0a808b] w-full bg-[#099aa7] text-white py-2 px-4 transform transition-all duration-300'>Request</a>
    
                </div>
            </div>




            <div className='border inline-block border-gray-200 mt-6 rounded-2xl px-6 py-6 hover:border-[#099aa76f] hover:shadow-lg transform transition-colors duration-300'>
                <div className='flex mt-2'>
                    <div className='relative overflow-hidden'>
                        <img src='images/Lisa-staff.webp' alt='Dr. Lisa Garcia' className='h-18 w-18 rounded-2xl '></img>
                        <div className='absolute top-14 -right-0.5 md:bottom-6 md:-right-0.5 w-5 h-5 bg-green-500 rounded-full border-4 border-white'></div>
                    </div>
                   <div className='ml-4'>
                        <h3 className='text-2xl font-bold'>Dr. Lisa Garcia</h3>
                        <p className='text-[16px] mt-1 font-normal text-gray-700'>Dermatologist</p>
                        <div className='flex mt-3 gap-3'>
                            <div className='rounded-md bg-[#099aa71a] px-2 inline-block'>
                                <span className='text-sm text-[#099aa7] font-bold'>MD, FAAD</span>
                            </div>
                            <div className=''>
                                <span className='text-sm font-normal text-gray-600'>15 years</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 mt-3'>
                    <div className='flex text-amber-400 transform transition-transform translate-y-2'>
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaRegStar />
                    </div>
                    <span className='text-md font-semibold transform transition-transform translate-y-1'>4.6</span>
                    <span className='text-sm font-light text-gray-500 transform transition-transform translate-y-2'> (89 patients) </span>
                </div>
                <div className='flex gap-4 mt-7 mb-3'>
                    <a href='profile' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-gray-100 w-full bg-white hover:border-gray-400 border border-gray-300 py-2 px-4'>Profile</a>
                    <a href='consult' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-[#0a808b] w-full bg-[#099aa7] text-white py-2 px-4 transform transition-all duration-300'>Consult</a>
    
                </div>
            </div>




            <div className='border inline-block border-gray-200 mt-6 rounded-2xl p-6 hover:border-[#099aa76f] hover:shadow-lg transform transition-colors duration-300'>
                <div className='flex mt-2'>
                    <div className='relative overflow-hidden'>
                        <img src='images/Daniel-staff.webp' alt='Dr. Daniel Wong' className='h-18 w-18 rounded-2xl '></img>
                        <div className='absolute top-14 -right-0.5 md:bottom-6 md:-right-0.5 w-5 h-5 bg-green-500 rounded-full border-4 border-white'></div>
                    </div>
                   <div className='ml-4'>
                        <h3 className='text-2xl font-bold'>Dr. Daniel Wong</h3>
                        <p className='text-[16px] mt-1 font-normal text-gray-700'>Oncology Expert</p>
                        <div className='flex mt-3 gap-3'>
                            <div className='rounded-md bg-[#099aa71a] px-2 inline-block'>
                                <span className='text-sm text-[#099aa7] font-bold'>MD, FASCO</span>
                            </div>
                            <div className=''>
                                <span className='text-sm font-normal text-gray-600'>21 years</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex gap-3 mt-3'>
                    <div className='flex text-amber-400 transform transition-transform translate-y-2'>
                        <FaStar/> <FaStar/> <FaStar/> <FaStar/> <FaStar/>
                    </div>
                    <span className='text-md font-semibold transform transition-transform translate-y-1'>4.9</span>
                    <span className='text-sm font-light text-gray-500 transform transition-transform translate-y-2'> (211 patients) </span>
                </div>
                <div className='flex gap-4 mt-7 mb-3'>
                    <a href='profile' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-gray-100 w-full bg-white hover:border-gray-400 border border-gray-300 py-2 px-4'>Profile</a>
                    <a href='appointment' className='text-center justify-center rounded-lg text-sm font-semibold hover:bg-[#0a808b] w-full bg-[#099aa7] text-white py-2 px-4 transform transition-all duration-300'>Appointment</a>
    
                </div>
            </div>
        </div>

        <div className='flex justify-center mt-4'>
            <div className='inline-flex gap-2 items-center justify-center py-3.5 px-7 mt-12 rounded-xl text-[#099aa7] bg-white border-2 border-[#099aa7] hover:text-white hover:bg-[#099aa7] transform transition-colors duration-300'>
            <a href='medinest-specialists' className='text-lg font-medium'>Browse Complete Directory </a>
            <RiArrowRightSLine />
        </div>
        </div>
        
    </div>
  )
}


export default FindADoctor