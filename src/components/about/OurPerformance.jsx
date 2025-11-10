import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function OurPerformance() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="py-16 bg-white w-full overflow-hidden">
      {/* Header Section */}
      <div
        className="flex flex-col justify-center items-center text-center px-4 md:px-10 lg:px-24"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl md:text-5xl mb-4 text-blue-950">
          Excellence in Healthcare Since 1985
        </h1>
        <p className="max-w-4xl text-gray-500 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
          We believe that exceptional medical care begins with understanding.
          Our dedicated team of professionals combines cutting-edge technology
          with compassionate, personalized treatment to ensure every patient
          receives the highest standard of care.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[60%_40%] md:grid-cols-1 sm:grid-cols-1 gap-6 px-4 md:px-8 ">
          {/* Image Section */}
          <div className="grid grid-cols-1 gap-4" data-aos="fade-right">
            {/* Main Image */}
            <div>
              <img
                src="/images/about-wide-1.webp"
                alt="Hospital Bed"
                className="rounded-lg w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Two Smaller Images */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div data-aos="zoom-in">
                <img
                  src="/images/staff-12.webp"
                  alt="Doctor"
                  className="rounded-lg w-full h-60 sm:h-64 md:h-72 object-cover"
                />
              </div>
              <div data-aos="zoom-in">
                <img
                  src="/images/consultation-4.webp"
                  alt="Consultation"
                  className="rounded-lg w-full h-60 sm:h-64 md:h-72 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text + Stats Section */}
          <div
            className="flex flex-col justify-center space-y-6 text-left lg:pl-12"
            data-aos="fade-left"
          >
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-gray-800  leading-snug">
              Trusted Healthcare Provider
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg md:text-lg lg:text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-1 gap-8 mt-6 w-full">
              {/* Stat 1 */}
              <div className="flex items-start gap-4">
                <h3 className="text-4xl sm:text-5xl text-teal-600 font-light">
                  22,000
                </h3>
                <div>
                  <p className="text-lg font-semibold text-gray-700 mb-1">
                    Successful Treatments
                  </p>
                  <p className="text-gray-600 text-sm tracking-wide">
                    Completed with excellent patient outcomes
                  </p>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-6">
                <h3 className="text-4xl sm:text-5xl text-teal-600 font-light">
                  95%
                </h3>
                <div className="lg:ml-12 ml-4">
                  <p className="text-lg font-semibold text-gray-700 mb-1">
                    Patient Satisfaction
                  </p>
                  <p className="text-gray-600 text-sm tracking-wide">
                    Based on comprehensive feedback surveys
                  </p>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-6">
                <h3 className="text-4xl sm:text-5xl text-teal-600 font-light">
                  85%
                </h3>
                <div className="lg:ml-12 ml-4">
                  <p className="text-lg font-semibold text-gray-700 mb-1">
                    Medical Professionals
                  </p>
                  <p className="text-gray-600 text-sm tracking-wide">
                    Specialists across various departments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPerformance;
