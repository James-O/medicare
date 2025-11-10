import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Award, CheckCircle2, Phone } from "lucide-react";
import { BsAward, BsCheckCircleFill, BsHeartPulseFill } from "react-icons/bs";

function Excellentservices() {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="w-full bg-white overflow-hidden" data-aos="fade-up" data-aos-delay="100">
      <section
        className="bg-white 
            w-full  max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-10"
      >
        {/* Section Header */}
        <div
          className="max-w-7xl mx-auto text-center mb-12 "
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-6 bg-linear-180 bg-black from-teal-600 bg-clip-text text-transparent mt-10 ">
            Excellence in Healthcare Since 1985
          </h2>
          <p className="text-center text-gray-600 max-w-3xl  mx-auto leading-relaxed">
            We are committed to providing world-class medical care through{" "}
            <br />
            innovation, compassion, and unwavering dedication to our
            <br />
            patients' wellbeing and recovery.
          </p>
        </div>

        {/* Content Grid */}
       
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-20 bg-white w-full items-center mx-auto overflow-x-hidden   max-w-7xl">
          {/* Left Image Section - 7 of 12 columns */}
          <div className="lg:col-span-7 grid grid-cols-1 lg:grid-cols-[68%_32%] gap-4 items-stretch" data-aos="fade-right" data-aos-delay="300" >
            {/* Big Image */}
            <div className="relative overflow-hidden">
                <img
              src="/images/lab-1.jpg"
              alt="Lab"
              className="rounded-2xl object-cover w-full h-64 lg:h-[500px] col-span-1 row-span-2 transition-transform duration-500 ease-in-out hover:scale-105 active:scale-105 hover:rounded-2xl"
            />

            <span className='absolute top-5 left-4 bg-white bg-opacity-80 text-gray-700 px-4 py-2 rounded-full flex items-center gap-2 text-md font-semibold shadow-xl'>
                 <BsAward className='text-teal-400 w-5 h-5' />
                 JCI Accredited
                 </span>
            </div>

            {/* Two stacked smaller images */}
            <div className="grid grid-rows-2 gap-4 grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 overflow-hidden">
              <img
                src="/images/doctor-pat.png"
                alt="Doctor"
                className="rounded-2xl object-cover w-full h-48 lg:h-[240px] transition-all duration-500 ease-in-out hover:scale-105 active:scale-105"
              />
              <img
                src="/images/surgery-2.png"
                alt="Consultation"
                className="rounded-2xl object-cover w-full h-48 lg:h-[240px] transition-all duration-500 ease-in-out hover:scale-105 active:scale-105"
              />
            </div>
          </div>

          {/* Right Content Section - 5 of 12 columns */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6 h-full -mt-32 md:-mt-32 lg:mt-0" data-aos-delay="400" data-aos="fade-left">
            {/* Info Card */}
            <div className="bg-white py-12 px-8 flex rounded-2xl border-l-4 border-teal-500 items-start gap-4 shadow-lg">
              <div className="bg-teal-100 p-3 rounded-lg flex items-center justify-center">
                <BsHeartPulseFill className="text-teal-600 w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">
                  Patient-Centered Approach
                </h2>
                <p className="text-gray-500 mt-2">
                  Every treatment plan is carefully customized to meet
                  individual patient needs and medical history.
                </p>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-3">
              <li className="flex items-start gap-2 lg:text-left text-center">
                <BsCheckCircleFill className="text-teal-600 w-5 h-5 mt-1" />
                <span className="text-gray-500">
                  Advanced diagnostic technology and imaging
                </span>
              </li>
              <li className="flex items-start gap-2 lg:text-left text-center">
                <BsCheckCircleFill className="text-teal-600 w-5 h-5 mt-1" />
                <span className="text-gray-500">
                  Board-certified physicians and specialists
                </span>
              </li>
              <li className="flex items-start gap-2 lg:text-left text-center">
                <BsCheckCircleFill className="text-teal-600 w-5 h-5 mt-1" />
                <span className="text-gray-500">
                  Comprehensive rehabilitation programs
                </span>
              </li>
              <li className="flex items-start gap-2 lg:text-left text-center">
                <BsCheckCircleFill className="text-teal-600 w-5 h-5 mt-1" />
                <span className="text-gray-500">
                  24/7 emergency and critical care services
                </span>
              </li>
            </ul>

            {/* Stats */}
            <div className="flex gap-8 pt-4 lg:justify-start justify-center ">
              <div>
                <h3 className="text-5xl  text-teal-600">98%</h3>
                <p className="text-sm text-gray-500">Patient Satisfaction</p>
              </div>
              <div>
                <h3 className="text-5xl text-teal-600">35K+</h3>
                <p className="text-sm text-gray-500">Lives Improved</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="pt-6 gap-6 w-[100%] flex lg:flex-row flex-col">
              <button className="bg-teal-600 text-white px-[10px] py-4 rounded-lg gap-2 shadow-lg items-center flex justify-center hover:bg-teal-700 hover:translate-y-1 transition-transform duration-500  w-[100%]">
                Explore Our Services
              </button>

              <button className="bg-white text-black px-[10px] py-4 justify-center flex gap-2 items-center border rounded-lg border-teal-500 hover:border-teal-400 shadow-sm hover:translate-x-1 transition-transform duration-500 hover:bg-gray-100  w-[100%]">
                <Phone className="text-teal-200 w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Excellentservices;
