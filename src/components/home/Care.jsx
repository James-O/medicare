import { ArrowRight } from "lucide-react";
import React from "react";

function Care() {
  return (
    <div className="bg-white w-full h-full" data-aos="fade-up">
      <section
        data-aos="fade-up"
        className="bg-white w-full max-w-6xl lg:max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-10 justify-center"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-8 py-28 pb-10 ">
          {/* Left Text Section */}
          <div className="space-y-8">
            <h1 className="md:text-4xl text-3xl lg:text-5xl text-center lg:text-left font-sans text-gray-900 mb-4">
              Exceptional Care for Your Health Journey
            </h1>
            <p className="text-gray-500 leading-loose text-center lg:text-left">
              Discover comprehensive healthcare services delivered with <br />
              compassion and expertise. Our dedicated team is committed to{" "}
              <br />
              providing personalized medical care that puts <br />
              you first.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-8">
              <a
                href="#"
                className="py-4 px-6 text-white rounded-md bg-teal-600 transition-transform duration-300 ease-in-out hover:-translate-y-2 text-center"
              >
                Schedule Consultation
              </a>

              <a
                href="#"
                className="group flex items-center text-teal-600 font-semibold text-lg justify-center lg:justify-start"
              >
                <span>Explore Services</span>
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-2" />
              </a>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative w-full  mx-auto ">
            <div className="w-full h-full shadow-lg bg-teal-50 rounded-2xl relative"></div>

            <div className="absolute lg:top-4 lg:w-full lg:h-full  lg:-right-7 lg:left-4 rounded-2xl overflow-hidden">
              <img
                src="images/hospital.webp"
                alt="University Hospitals Building"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gray-50 py-20 mt-20 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10 px-4 border-t border-b border-t-gray-300 border-b-gray-300 lg:px-20">
          <div className="text-center">
            <h2 className="text-4xl text-teal-600">25K+</h2>
            <p className="text-gray-500">Years Experience</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl text-teal-600">15K+</h2>
            <p className="text-gray-500">Happy Patients</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl text-teal-600">50+</h2>
            <p className="text-gray-500">Medical Experts</p>
          </div>

          <div className="text-center">
            <h2 className="text-4xl text-teal-600">24/7</h2>
            <p className="text-gray-500">Emergency Care</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Care;
