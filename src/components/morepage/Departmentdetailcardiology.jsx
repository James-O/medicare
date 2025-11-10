import { Activity, CalendarPlus2, Eye, HeartPulse, ShieldPlus } from 'lucide-react';
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Departmentdetailcardiology() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="py-10 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 ">
        {/* Header */}
        <div data-aos="zoom-in">
          <button className="py-3 px-4 bg-teal-600 rounded-full text-white flex items-center gap-2 font-semibold">
            <HeartPulse size={18} />
            <span>Cardiology</span>
          </button>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mt-6 leading-snug">
            Comprehensive Heart Care <br className="hidden md:block" /> Center
          </h1>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 border-b border-gray-200 pb-16">
          {/* Left Text Section */}
          <div className="flex flex-col" data-aos="fade-right">
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
              Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
            </p>

            <h2 className="font-bold text-gray-700 mb-6 text-2xl md:text-3xl">Specialized Services</h2>

            {/* Services */}
            <div className="flex flex-col gap-6">
              {/* Service 1 */}
              <div className="flex flex-col sm:flex-row gap-4 items-start bg-white border-l-4 rounded-xl border-l-teal-600 p-5 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <span className="bg-teal-600 text-white rounded-lg p-4 flex items-center justify-center">
                    <Activity size={20} />
                  </span>
                  <h4 className="font-bold text-gray-800 text-lg">Cardiac Surgery</h4>
                </div>
                <p className="text-gray-500 text-sm md:text-base">
                  Donec rutrum congue leo eget malesuada vestibulum ac diam sit amet quam.
                </p>
              </div>

              {/* Service 2 */}
              <div className="flex flex-col sm:flex-row gap-4 items-start bg-white border-l-4 rounded-xl border-l-teal-600 p-5 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <span className="bg-teal-600 text-white rounded-lg p-4 flex items-center justify-center">
                    <Eye size={22} />
                  </span>
                  <h4 className="font-bold text-gray-800 text-lg">Diagnostic Testing</h4>
                </div>
                <p className="text-gray-500 text-sm md:text-base">
                  Curabitur arcu erat accumsan id imperdiet et porttitor at sem mauris blandit.
                </p>
              </div>

              {/* Service 3 */}
              <div className="flex flex-col sm:flex-row gap-4 items-start bg-white border-l-4 rounded-xl border-l-teal-600 p-5 hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <span className="bg-teal-600 text-white rounded-lg p-4 flex items-center justify-center">
                    <ShieldPlus size={22} />
                  </span>
                  <h4 className="font-bold text-gray-800 text-lg">Preventive Care</h4>
                </div>
                <p className="text-gray-500 text-sm md:text-base">
                  Nulla quis lorem ut libero malesuada feugiat cras ultricies ligula sed magna.
                </p>
              </div>
            </div>

            {/* Appointment + Contact */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-8">
              <a
                href="/appointment"
                className="text-white py-4 px-6 bg-teal-600 rounded-lg flex flex-row gap-2 items-center transition-transform ease-in-out duration-300 hover:-translate-y-2"
              >
                <CalendarPlus2 size={20} />
                <span className="font-bold">Book Appointment</span>
              </a>
              <div>
                <p className="text-gray-500 text-sm md:text-base">Emergency Line</p>
                <p className="text-teal-600 font-bold mt-1 text-lg md:text-xl">+1 (555) 987-6543</p>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex justify-center" data-aos="fade-left">
            <img
              src="/images/cardiology-3.webp"
              alt="Cardiology"
              className="rounded-3xl object-cover w-full h-[280px] sm:h-[400px] lg:h-[500px]"
            />

            {/* Floating Stats Card */}
            <div
              className="absolute bg-white rounded-3xl shadow-lg py-6 px-6 top-6 right-6 sm:top-10 sm:right-10 divide-y divide-gray-200 w-[160px] sm:w-[200px]"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="flex flex-col text-center pb-2">
                <h1 className="text-teal-600 font-bold text-2xl sm:text-3xl mb-1">98%</h1>
                <p className="text-gray-500 text-sm">Success Rate</p>
              </div>

              <div className="flex flex-col text-center pt-2">
                <h1 className="text-teal-600 font-bold text-2xl sm:text-3xl mb-1">12K+</h1>
                <p className="text-gray-500 text-sm">Patients Treated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departmentdetailcardiology;
