import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { Award, CheckCircle2, Phone } from 'lucide-react';
import { BsAward, BsCheckCircleFill, BsHeartPulseFill } from 'react-icons/bs';

function Excellentservices() {
    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);
    return (
        <div>
            <section className='bg-gradient-to-b from-white to-gray-100 py-16 px-6 md:px-12 lg:px-29'>

                {/* Section Header */}
                <div className='max-w-7xl mx-auto text-center mb-12 '
                    data-aos='fade-up'>

                    <h2 className='text-2xl md:text-4xl lg:text-5xl font-medium text-center mb-6 bg-linear-180 bg-black from-teal-600 bg-clip-text text-transparent mt-10 '>
                        Excellence in Healthcare Since 1985
                    </h2>
                    <p className='text-center text-gray-600 max-w-3xl  mx-auto leading-relaxed'>
                        We are committed to providing world-class medical care through <br />
                        innovation, compassion, and unwavering dedication to our<br />patients'
                        wellbeing and recovery.
                    </p>
                </div>

                {/* Content Grid */}
                <div className='mx-auto grid md:grid-cols-3 lg:grid-cols-3 sm:grid-cols-3 grid-cols-3 gap-8'>

                    {/* Left Images */}
                    <div>
                        <div className='relative overflow-hidden col-span-2 rounded-2xl'
                            // data-aos='fade-right'
                            data-aos-delay='100'>
                            <img
                                src="/images/lab-1.jpg"
                                alt="lab"
                                className='rounded-2xl shadow-lg transition-transform duration-500 ease-in-out hover:scale-110 h-[420px] w-full object-cover shadow-gray-300'
                            />
                            <span className='absolute top-4 left-4 bg-white bg-opacity-80 text-gray-700 px-4 py-1 rounded-full flex items-center gap-2 text-sm font-semibold shadow-lg'>
                                <BsAward className='text-teal-400 w-4 h-4' />
                                JCI Accredited
                            </span>
                        </div>
                    </div>

                    <div className='grid grid-rows-2 gap-4 h-[420px] w-[250px] col-span-1 md:col-span-2 lg:col-span-1'>
                        <div className='overflow-hidden rounded-2xl '>
                            <img
                                // data-aos="zoom-in"
                                src="/images/doctor-pat.png"
                                alt="Doctor with patient"
                                className="rounded-2xl shadow-lg w-full h-full transition-transform  duration-500 ease-in-out hover:scale-110 shadow-gray-300  "
                            />
                        </div>


                        <div className='overflow-hidden rounded-2xl '>
                            <img
                                // data-aos="zoom-in"
                                data-aos-delay="200"
                                src="/images/surgery-2.png"
                                alt="Surgery"
                                className="rounded-2xl shadow-lg transition-transform ease-in-out h-full w-full duration-500 hover:scale-110 shadow-gray-300"
                            />
                        </div>

                    </div>

                    {/* Right Images */}
                    <div data-aos="fade-left" data-aos-delay="5" className='flex flex-col justify-between' >

                        {/*Approach Card*/}
                        <div className='bg-white py-4 px-8 flex rounded-2xl border-l-4 border-teal-500 items-start gap-4 shadow-lg '>
                            {/*Icon */}

                            <div className="bg-teal-100 p-3 rounded-lg flex items-center justify-center">
                                <BsHeartPulseFill className='text-teal-600 w-6 h-6' />
                            </div>

                            {/*Texts */}
                            <div>
                                <h3 className='font-semibold  text-lg text-gray-900 mb-1'>
                                    Patient-Centered Approach
                                </h3>
                                <p className='text-gray-600 text-sm leading-relaxed '>
                                    Every treatment plan is carefully customized to meet individual patients needs, ensuring compassionate and personalized care.
                                </p>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mt-12">
                            {[
                                "Advanced diagnostic technology and imaging",
                                "Board-certified physicians and specialists",
                                "Comprehensive rehabilitation programs",
                                "24/7 emergency and critical care services",
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-gray-700 w-full">
                                    <BsCheckCircleFill className="text-teal-600 w-5 h-5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        {/* Stats */}
                        <div className="flex gap-12 pt-6">
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
                        <div className='inline-flex  pt-6 gap-6 flex-col w-[60%]'>
                            <button className='bg-teal-600 text-white px-[10px] py-4 rounded-lg gap-2 shadow-lg items-center flex justify-center hover:bg-teal-700 hover:translate-y-1 transition-transform duration-500'>
                                Explore Our Services
                            </button>

                            <button className='bg-white text-black px-[10px] py-4 justify-center flex gap-2 items-center border rounded-lg border-cyan-500 hover:border-cyan-400 shadow-sm hover:translate-x-1 transition-transform duration-500 hover:bg-gray-100 '>
                                <Phone className='text-teal-200 w-5 h-5' />
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Excellentservices
