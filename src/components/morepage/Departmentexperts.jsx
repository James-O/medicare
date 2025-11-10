import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CircleCheck, MoveRight } from "lucide-react";

function Departmentexperts() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="py-16 bg-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div data-aos="zoom-in">
          <h1 className="font-bold text-gray-900 text-2xl sm:text-3xl md:text-4xl mb-6">
            Expert Care You Can Trust
          </h1>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <div
            className="flex flex-col justify-center"
            data-aos="fade-right"
          >
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="space-y-5">
              {[
                "State-of-the-art cardiac catheterization laboratory",
                "Advanced imaging and diagnostic capabilities",
                "Minimally invasive surgical procedures",
                "Comprehensive rehabilitation programs",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-gray-600 text-base sm:text-lg"
                >
                  <CircleCheck className="text-teal-600 flex-shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-8" data-aos="fade-left">
            {/* Department Hours */}
            <div className="py-8 px-6 bg-white shadow-md rounded-2xl space-y-6">
              <div>
                <h2 className="font-bold text-gray-900 text-xl sm:text-2xl pb-2">
                  Department Hours
                </h2>
                <div className="h-0.5 w-full bg-teal-600"></div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-700">
                  <span>Monday - Friday</span>
                  <span className="font-semibold text-gray-900">
                    7:00 AM - 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Saturday</span>
                  <span className="font-semibold text-gray-900">
                    8:00 AM - 5:00 PM
                  </span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Sunday</span>
                  <span className="font-semibold text-gray-900">
                    Emergency Only
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="py-8 px-6 bg-white shadow-md rounded-2xl space-y-6">
              <div>
                <h2 className="font-bold text-gray-900 text-xl sm:text-2xl pb-2">
                  Quick Links
                </h2>
                <div className="h-0.5 w-full bg-teal-600"></div>
              </div>

              <div className="flex flex-col gap-4">
                <a
                  href="service"
                  className="flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-transform duration-300 ease-in-out hover:translate-x-2"
                >
                  <MoveRight size={18} className="text-teal-600" />
                  <span>All Cardiology Services</span>
                </a>

                <a
                  href="doctor"
                  className="flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-transform duration-300 ease-in-out hover:translate-x-2"
                >
                  <MoveRight size={18} className="text-teal-600" />
                  <span>Meet Our Specialists</span>
                </a>

                <a
                  href="contact"
                  className="flex items-center gap-3 text-gray-600 hover:text-teal-600 transition-transform duration-300 ease-in-out hover:translate-x-2"
                >
                  <MoveRight size={18} className="text-teal-600" />
                  <span>Insurance Information</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Departmentexperts;
