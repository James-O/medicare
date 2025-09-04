import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { Award, CheckCircle2, Phone } from 'lucide-react';
import { BsAward, BsHeartPulseFill } from 'react-icons/bs';

function Excellentservices() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);
    return (
        <div>
            <section className='bg-gradient-to-b from-white to-gray-50 py-16 px-6 md:px-12 lg:px-20'>
                <div className='max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center mb-12 ' data-aos='fade-up'>
                    <h2 className='text-2xl md:text-5xl lg:text-4xl font-bold text-center mb-8 text-gray-900 mt-20'>
                        Excellence in Healthcare Since 1985
                    </h2>
                    <p className='text-center text-gray-600 max-w-3xl mt-4 mx-auto mb-12 px-4 md:px-0'>
                        We are committed to providing world-class medical care through <br />
                        innovation, compassion, and unwavering dedication to our<br />patients'
                        wellbeing and recovery.
                    </p>
                </div>
                <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {/* Left Images */}
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='relative overflow-hidden col-span-2 rounded-2xl'
                            // data-aos='fade-right'
                            data-aos-delay='100'>
                            <img
                                src="/images/lab-1.jpg"
                                alt="lab"
                                className='rounded-2xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 h-80 w-96 object-cover shadow-gray-300'
                            />
                            <span className='absolute top-4 left-4 bg-white bg-opacity-75 text-gray-700 px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg'>
                                <BsAward className='text-teal-400 w-4 h-4' />
                                JCI Accredited
                            </span>
                        </div>
                    </div>

                    <div>
                        <div className='overflow-hidden rounded-2xl '>
                            <img
                                // data-aos="zoom-in"
                                src="/images/doctor-pat.png"
                                alt="Doctor with patient"
                                className="rounded-2xl shadow-lg w-44 transition-transform  duration-500 ease-in-out h-40 hover:scale-110 shadow-gray-300  "
                            />
                        </div>


                        <div className='overflow-hidden rounded-2xl '>
                            <img
                                // data-aos="zoom-in"
                                data-aos-delay="200"
                                src="/images/surgery-2.png"
                                alt="Surgery"
                                className="rounded-2xl shadow-lg w-44 transition-transform ease-in-out h-40 duration-500 hover:scale-110 shadow-gray-300"
                            />
                        </div>

                    </div>

                    {/* Right Images */}
                    <div data-aos="fade-left" data-aos-delay="300" className='space-y-6'>
                        {/*Approach Card*/}
                        <div className='bg-white p-6 flex rounded-2xl border-l-4 border-teal-500 items-start shadow-lg '>
                            <h3 className='font-semibold flex text-lg text-gray-900 mb-2'>
                                <BsHeartPulseFill className='text-teal-600 text-2xl bg-teal-100 w-6 h-6' />
                                Patient-Centered Approach
                            </h3>
                            <p className='text-gray-600 text-sm'>
                                Every treatment plan is carefully customized to meet individual patients needs, ensuring compassionate and personalized care.
                            </p>
                        </div>
                        {/* Features */}
                        <ul className="space-y-3">
                            {[
                                "Advanced diagnostic technology and imaging",
                                "Board-certified physicians and specialists",
                                "Comprehensive rehabilitation programs",
                                "24/7 emergency and critical care services",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700">
                                    <CheckCircle2 className="text-teal-600 w-5 h-5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        {/* Stats */}
                        <div className="flex gap-12 pt-4">
                            <div>
                                <p className="text-3xl font-light text-teal-600">98%</p>
                                <p className="text-gray-600 text-sm">Patient Satisfaction</p>
                            </div>
                            <div>
                                <p className="text-3xl font-light text-teal-600">35K+</p>
                                <p className="text-gray-600 text-sm">Lives Improved</p>
                            </div>
                        </div>
                        {/*Buttons*/}
                        <div className='flex flex-wrap pt-6 gap-4'>
                            <button className='bg-teal-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-teal-700 hover:translate-y-1 transition-transform duration-500'>
                                Explore Our Services

                            </button>
                            <button className='bg-white text-black px-6 py-3 border rounded-xl border-gray-300 shadow-sm hover:translate-x-1 transition-transform duration-500 hover:bg-gray-100 '>
                                Schedule Consultation 
                                 <div className='flex text-teal-400'><Phone/></div>
                            </button>
                            
                        </div>

                    </div>




                </div>

            </section>
        </div>
    )
}

export default Excellentservices
