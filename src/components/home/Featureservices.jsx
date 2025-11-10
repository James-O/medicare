import React, { useEffect } from 'react';
import { ArrowRight, Bone, Brain, PersonStanding, RibbonIcon, FlaskConical } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";
import { BsHeartPulseFill } from 'react-icons/bs';
import { FaBrain, FaFlask } from 'react-icons/fa';
import { FaBaby, FaBone, FaRibbon } from 'react-icons/fa6';

function Featureservices() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            delay: 50,
        });
    }, []);

    return (
        <div className="bg-white text-gray-800" data-aos="fade-up">
            <div className="py-12 px-6 max-w-7xl mx-auto">
                {/* ===== Section Header ===== */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-2">Featured Services</h2>
                    <div className="mx-auto flex justify-center mt-2 h-1 w-40 bg-gradient-to-r from-black via-teal-300 to-black"></div>
                    <p className="text-gray-600">
                        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
                    </p>
                    
                </div>

                {/* ===== Cards Grid ===== */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
                    
                    {/* ===== Card 1: Cardiology ===== */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">
                        <div className="relative overflow-hidden">
                            <img
                                src="../images/cardiology-2.webp"
                                alt="Cardiology"
                                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute top-3 right-3 bg-teal-600 p-4 justify-center flex items-center rounded-full">
                               <BsHeartPulseFill size={30} className='text-white ' />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Cardiology Excellence</h3>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus.
                            </p>
                            <a href="#" className="group flex items-center text-teal-600 font-semibold mt-4 transition-all duration-300 hover:tracking-wide">
                                Learn More <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>

                    {/* ===== Card 2: Neurology ===== */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">
                        <div className="relative overflow-hidden">
                            <img
                                src="../images/neurology-3.webp"
                                alt="Neurology"
                                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute top-3 right-3 bg-teal-600 p-4 rounded-full">
                               <FaBrain size={30} className='text-white' />
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Neurology Care</h3>
                            <p className="text-gray-600 text-sm">
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                            <a href="#" className="group flex items-center text-teal-600 font-semibold mt-4 transition-all duration-300 hover:tracking-wide">
                                Learn More <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>

                    {/* ===== Card 3: Orthopedic ===== */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">
                        <div className="relative overflow-hidden">
                            <img
                                src="../images/orthopedics-1.webp"
                                alt="Orthopedics"
                                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute top-3 right-3 bg-teal-600 p-4 rounded-full">
                                
                                <FaBone size={30} className='text-white'/>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Orthopedic Surgery</h3>
                            <p className="text-gray-600 text-sm">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>
                            <a href="#" className="group flex items-center text-teal-600 font-semibold mt-4 transition-all duration-300 hover:tracking-wide">
                                Learn More <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>

                    {/* ===== Card 4: Pediatrics ===== */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">
                        <div className="relative overflow-hidden">
                            <img
                                src="../images/pediatrics-4.webp"
                                alt="Pediatric"
                                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute top-3 right-3 bg-teal-600 p-4 rounded-full">
                                
                                <FaBaby size={30} className='text-white'/>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Pediatric Care</h3>
                            <p className="text-gray-600 text-sm">
                                Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error.
                            </p>
                            <a href="#" className="group flex items-center text-teal-600 font-semibold mt-4 transition-all duration-300 hover:tracking-wide">
                                Learn More <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>

                    {/* ===== Card 5: Oncology ===== */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">
                        <div className="relative overflow-hidden">
                            <img
                                src="../images/oncology-2.webp"
                                alt="Oncology"
                                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute top-3 right-3 bg-teal-600 p-4 rounded-full">
                                
                                <FaRibbon size={30} className='text-white'/>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Oncology Treatment</h3>
                            <p className="text-gray-600 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                            <a href="#" className="group flex items-center text-teal-600 font-semibold mt-4 transition-all duration-300 hover:tracking-wide">
                                Learn More <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>

                    {/* ===== Card 6: Laboratory ===== */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-lg">
                        <div className="relative overflow-hidden">
                            <img
                                src="../images/laboratory-3.webp"
                                alt="Laboratory"
                                className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                            />
                            <div className="absolute top-3 right-3 bg-teal-600 p-4 rounded-full">
                               
                                <FaFlask size={30} className='text-white'/>
                            </div>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">Laboratory Services</h3>
                            <p className="text-gray-600 text-sm">
                                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet.
                            </p>
                            <a href="#" className="group flex items-center text-teal-600 font-semibold mt-4 transition-all duration-300 hover:tracking-wide">
                                Learn More <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Featureservices;
