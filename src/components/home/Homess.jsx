import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { MapPin, Phone, Users } from "lucide-react";
import { FaRegCalendarCheck } from "react-icons/fa";
import { BsAward, BsChatDots, BsFileMedical } from "react-icons/bs";

const Homess = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [rotated, setRotated] = useState(false);

  const handleImageClick = () => {
    setRotated(true);
    setTimeout(() => setRotated(false), 400); // reset rotation after 400ms
  };

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50 ">
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-10 py-34 lg:py-40 bg-gradient-to-b from-white to-gray-50 ">
        {/* GRID SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ========== LEFT SECTION (IMAGE) ========== */}
         
          {/* Image and Floating Cards Section */}
        <div className="relative flex flex-col items-center w-full  lg:mt-8">
          {/* Image */}
          <div
            data-aos="fade-right"
            className="relative flex w-full justify-center"
            onClick={handleImageClick}
          >
            <img
              src="/images/staff-8.png"
              alt="Doctor"
              className={`rounded-3xl shadow-lg w-full md:w-[100%] lg:w-full transition-transform duration-500 ease-in-out shadow-teal-200 object-cover cursor-pointer hover:rotate-0 ${
                rotated ? "rotate-0" : "-rotate-2"
              }`}
            />
          </div>

          {/* Floating Cards Container */}
          <div className="flex flex-col items-center justify-center gap-8 mt-6 w-full lg:mt-0">
            {/* Emergency Card */}
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="bg-white shadow-lg rounded-xl px-10  py-8 flex items-left gap-3 w-full sm:w-[90%] md:w-[100%] lg:w-auto lg:absolute lg:top-6 lg:-left-8 justify-left text-left"
            >
              <div className="bg-blue-100 p-2 rounded-2xl mb-2">
                <Phone className="fill-teal-600 w-8 h-8 stroke-teal-600 mb-2" />
              </div>
              <div>
                <p className="text-md text-gray-500">24/7 Emergency</p>
                <p className="font-semibold">+1 (555) 911-2468</p>
              </div>
            </div>

            {/* Stats Card */}
            <div
              data-aos="fade-down"
              data-aos-delay="300"
              className="bg-white shadow-lg rounded-2xl py-4 px-6   flex flex-col sm:flex-row items-center justify-center w-full sm:w-[90%] md:w-[100%] lg:w-auto text-center lg:absolute lg:bottom-6 lg:-right-6"
            >
              <div className="text-center px-4">
                <p className="text-2xl font-bold text-teal-600">25K+</p>
                <p className="text-sm text-gray-600">Patient Treated</p>
              </div>
              <div className="text-center px-4">
                <p className="text-2xl font-bold text-teal-600">98%</p>
                <p className="text-sm text-gray-600">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>


          {/* ========== RIGHT SECTION (TEXT) ========== */}
          <div data-aos="fade-left" className="space-y-8 w-full">
            <div className="flex justify-center lg:justify-start">
              <span className="text-teal-100 bg-teal-700 text-md font-semibold px-4  py-2 rounded-full">
              TRUSTED HEALTHCARE PROVIDER
            </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold mt-8 text-gray-800 leading-tight lg:text-left">
              Excellence in Medical Care Since 1985
            </h1>

            <p className="text-gray-600 leading-relaxed md:tracking-wider text-center lg:text-left lg:tracking-tight lg:text-lg">
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo,
              lacinia eget consectetur sed, convallis at tellus.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 w-full">
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="flex flex-row items-center gap-2 max-w-full"
              >
                <div className="bg-blue-100 rounded-2xl px-3 py-4 mb-2">
                  <BsAward className="w-10 h-10 text-teal-600" />
                </div>
                <div className="lg:text-left md:text-center">
                  <p className="font-bold text-2xl text-gray-800">35+</p>
                  <p className="text-sm text-gray-500">Years Experience</p>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="flex flex-row items-center gap-2 max-w-full"
              >
                <div className="bg-blue-100 rounded-2xl py-4 px-3 mb-2 ">
                  <Users className="w-10 h-10 text-teal-600" />
                </div>
                <div className="lg:text-left md:text-center">
                  <p className="font-bold text-2xl text-gray-800">150+</p>
                  <p className="text-sm text-gray-500 flex flex-row"><span>Medical </span><span>Specialists</span></p>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="400"
                className="flex flex-row items-center gap-2"
              >
                <div className="bg-blue-100 rounded-2xl px-3 py-4 mb-2">
                  <MapPin className="w-9 h-9 text-teal-600" />
                </div>
                <div className="lg:text-left md:text-center">
                  <p className="font-bold text-2xl text-gray-800">12</p>
                  <p className="text-sm text-gray-500">Clinic Locations</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex lg:flex-row flex-col  gap-4 pt-4 w-[100%] lg:w-md">
              
                <button className="bg-teal-600 text-white px-6 py-3 rounded-xl shadow hover:shadow-teal-500 hover:bg-teal-700 transition-transform duration-500 hover:-translate-y-1 w-[100%]">
                Schedule Consultation
              </button>
              
              
                <button className="border border-gray-300 px-6 py-3 rounded-xl shadow-sm hover:bg-teal-600 hover:text-white transition w-[100%]">
                Watch Our Story
              </button>       
              
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pt-4 font-medium text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <FaRegCalendarCheck size={20} className="text-teal-600" />
                <button className="hover:text-teal-600 cursor-pointer transition-transform duration-500 hover:-translate-y-1">
                  Find Available Times
                </button>
              </div>

              <div className="flex items-center gap-2">
                <BsChatDots size={20} className="text-teal-600" />
                <button className="hover:text-teal-600 cursor-pointer transition-transform duration-500 hover:-translate-y-1 text-md">
                  Chat with Support
                </button>
              </div>

              <div className="flex items-center gap-2">
                <BsFileMedical size={20} className="text-teal-600" />
                <button className="hover:text-teal-600 cursor-pointer transition-transform duration-500 hover:-translate-y-1 text-md">
                  Patient Portal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homess;
