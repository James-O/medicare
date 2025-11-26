import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsHeartFill, BsHeartPulseFill } from "react-icons/bs";
import { ArrowRight, Phone, TestTubes } from "lucide-react";
import { BiSolidInjection } from "react-icons/bi";
import { FaBaby, FaPhone, FaTruckMedical } from "react-icons/fa6";

function Serviceh() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <div className="w-full min-h-screen from-white to-gray-50 pt-32">
        {/* ====== HEADER SECTION ====== */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Services
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm sm:text-base">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
            debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat
            ipsum dolorem.
          </p>
        </div>

        {/* ====== BREADCRUMB SECTION ====== */}
          <div className="bg-gray-200   py-5 rounded max-w-full mx-auto flex  ">
            <nav className="text-sm text-gray-600 ml-[9%] ">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="text-teal-500 hover:text-teal-600">
                    Home
                  </a>
                </li>
                <li>
                  <span>/</span>
                </li>
                <li className="text-gray-800">Services</li>
              </ol>
            </nav>
          </div>
       
        <div className="px-4">
          {/* ====== SERVICES GRID ====== */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 w-full max-w-7xl mx-auto"
            data-aos="fade-up"
          >
            {/* ---CARD 1--- */}
            <div className="group  bg-white rounded-3xl transition-all duration-500 hover:-translate-y-2 border-2 focus:border-teal-600 border-transparent group-hover:border-teal-600 active:border-teal-600">
              <div
                data-aos="fade-up"
                className="group-hover:border group-hover:border-teal-600 mt-6 rounded-3xl px-6 py-6 
                     group-hover:shadow-xl group-hover:shadow-[#099aa73a] transition-all ease-in-out duration-500 
                     group-hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start relative pt-3 ">
                  <div className="pb-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-teal-600 py-3 px-3">
                      <BsHeartPulseFill
                        size={28}
                        className="text-white transition-all ease-in-out duration-300 group-hover:rotate-10"
                      />
                    </span>
                  </div>
                  <span className="rounded-full bg-teal-100 text-teal-600 text-[12px] font-medium py-1 px-4">
                    PRIMARY CARE
                  </span>
                </div>

                <div className="mt-4 mb-6 lg:text-left text-center">
                  <h3 className="font-bold text-2xl text-gray-800 mb-4">
                    General Consultation
                  </h3>
                  <p className="text-md text-gray-500">
                    Comprehensive health assessments and preventive care
                    planning for all family members.
                  </p>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full mt-10">
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-2">
                    Health Monitoring
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Wellness Programs
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Preventive Care
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="#"
                    className="flex flex-row gap-1 rounded-full bg-white border border-teal-600 py-3 
                         w-full text-center items-center justify-center font-bold transition-all duration-300 ease-in-out 
                         group-hover:translate-x-2 group-hover:bg-teal-600 group-hover:text-white"
                  >
                    Schedule Visit
                    <span>
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== Card 2 ===== */}
            <div className="group bg-white  rounded-3xl transition-all duration-500 hover:-translate-y-2 border-2 border-teal-600 shadow-[#099aa73a] group-hover:shadow-xl">
              <div
                data-aos="fade-up"
                className=" mt-6 rounded-3xl px-6 py-6 
                       transition-all ease-in-out duration-500 
                     group-hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start relative pt-3">
                  <div className="pb-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-teal-600 py-3 px-3">
                      <BsHeartFill
                        size={28}
                        className="text-white group-hover:rotate-12 transition-all"
                      />
                    </span>
                  </div>
                  <div className="relative">
                    <span className="rounded-full bg-teal-100 text-teal-600 text-[10px] font-medium py-1 px-4">
                      SPECIALTY
                    </span>
                  </div>

                  <span className="rounded-full text-white bg-teal-600 text-[10px] font-medium py-1 px-2 absolute -top-1 -right-2">
                    Most Popular
                  </span>
                </div>

                {/* Title & Text */}
                <div className="mt-4 mb-6 lg:text-left text-center">
                  <h3 className="font-bold text-2xl text-gray-800 mb-4">
                    Cardiology Services
                  </h3>
                  <p className="text-md text-gray-500">
                    Advanced heart care including diagnostics, treatment, and
                    post-operative rehabilitation programs.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full mt-10">
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-2">
                    Heart Surgery
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    ECG Testing
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Cardiac Rehab
                  </div>
                </div>

                {/* Button */}
                <div className="mt-10">
                  <a
                    href="#"
                    className="flex flex-row gap-1 rounded-full bg-white border border-teal-600 py-3 
                         w-full text-center items-center justify-center font-bold transition-all duration-300 ease-in-out 
                         group-hover:translate-x-2 group-hover:bg-teal-600 group-hover:text-white"
                  >
                    Book Appointment
                    <span>
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== Card 3 ===== */}
            <div className="group bg-white  rounded-3xl transition-all duration-500 hover:-translate-y-2">
              <div
                data-aos="fade-up"
                className="group-hover:border group-hover:border-teal-600 mt-6 rounded-3xl px-6 py-6 
                     group-hover:shadow-xl group-hover:shadow-[#099aa73a] transition-all ease-in-out duration-500 
                     group-hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start relative pt-3">
                  <div className="pb-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-teal-600 py-3 px-3">
                      <TestTubes
                        size={28}
                        className="text-white transition-all ease-in-out duration-300 group-hover:rotate-10"
                      />
                    </span>
                  </div>
                  <span className="rounded-full bg-teal-100 text-teal-600 text-[12px] font-medium py-1 px-4">
                    DIAGNOSTICS
                  </span>
                </div>

                <div className="mt-4 mb-6 lg:text-left text-center">
                  <h3 className="font-bold text-2xl text-gray-800 mb-4">
                    Laboratory Testing
                  </h3>
                  <p className="text-md text-gray-500">
                    Complete range of diagnostic tests with quick turnaround
                    times and accurate results.
                  </p>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full mt-10">
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-2">
                    Blood Work
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Pathology
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Same-Day Results
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="#"
                    className="flex flex-row gap-1 rounded-full bg-white border border-teal-600 py-3 
                         w-full text-center items-center justify-center font-bold transition-all duration-300 ease-in-out 
                         group-hover:translate-x-2 group-hover:bg-teal-600 group-hover:text-white"
                  >
                    Order Tests
                    <span>
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ---CARD 4--- */}
            <div className="group bg-white  rounded-3xl  transition-all duration-500 hover:-translate-y-2">
              <div
                data-aos="fade-up"
                className="group-hover:border group-hover:border-teal-600 mt-6 rounded-3xl px-6 py-6 
                     group-hover:shadow-xl group-hover:shadow-[#099aa73a] transition-all ease-in-out duration-500 
                     group-hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start relative pt-3">
                  <div className="pb-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-teal-600 py-3 px-3">
                      <FaTruckMedical
                        size={28}
                        className="text-white transition-all ease-in-out duration-300 group-hover:rotate-10"
                      />
                    </span>
                  </div>
                  <span className="rounded-full bg-teal-100 text-teal-600 text-[12px] font-medium py-1 px-4 pt-2">
                    {" "}
                    EMERGENCY{" "}
                  </span>{" "}
                  <span className="rounded-full bg-green-600 text-teal-100 text-[12px] font-medium py-1 px-4 mt-3">
                    {" "}
                    24/7 AVAILABLE{" "}
                  </span>
                </div>

                <div className="mt-4 mb-6 lg:text-left text-center">
                  <h3 className="font-bold text-2xl text-gray-800 mb-4">
                    Emergency Care
                  </h3>
                  <p className="text-md text-gray-500">
                    Round-the-clock emergency services with trauma center and
                    critical care capabilities.
                  </p>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full mt-10">
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-2">
                    Trauma Center
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Critical Care
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Emergency Surgery
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="#"
                    className="flex flex-row gap-1 rounded-full bg-red-600 text-white border border-red-600 py-3 
                         w-full text-center items-center justify-center font-bold transition-all duration-300 ease-in-out 
                         group-hover:translate-x-2 group-hover:bg-teal-600 group-hover:text-white"
                  >
                    Call Emergency
                    <span>
                      <FaPhone />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== Card 5 ===== */}
            <div className="group bg-white rounded-3xl transition-all duration-500 hover:-translate-y-2">
              <div
                data-aos="fade-up"
                className="group-hover:border group-hover:border-teal-600 mt-6 rounded-3xl px-6 py-6 
                     group-hover:shadow-xl group-hover:shadow-[#099aa73a] transition-all ease-in-out duration-500 
                     group-hover:-translate-y-2"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start relative pt-3">
                  <div className="pb-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-teal-600 py-3 px-3">
                      <FaBaby
                        size={28}
                        className="text-white transition-all ease-in-out duration-300 group-hover:rotate-10"
                      />
                    </span>
                  </div>
                  <span className="rounded-full bg-teal-100 text-teal-600 text-[12px] font-medium py-1 px-4">
                    MATERNAL HEALTH
                  </span>
                </div>

                <div className="mt-4 mb-6 lg:text-left text-center">
                  <h3 className="font-bold text-2xl text-gray-800 mb-4">
                    Women's Health
                  </h3>
                  <p className="text-md text-gray-500">
                    Comprehensive maternal care from prenatal checkups to
                    delivery and postnatal support.
                  </p>
                </div>

                <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full mt-10">
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-2">
                    Prenatal Care
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Delivery Support
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Family Planning
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="#"
                    className="flex flex-row gap-1 rounded-full bg-white border border-teal-600 py-3 
                         w-full text-center items-center justify-center font-bold transition-all duration-300 ease-in-out 
                         group-hover:translate-x-2 group-hover:bg-teal-600 group-hover:text-white"
                  >
                    Learn More
                    <span>
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== Card 6 ===== */}
            <div className="group  bg-white rounded-3xl  transition-all duration-500 hover:-translate-y-2">
              <div
                data-aos="fade-up"
                className="group-hover:border group-hover:border-teal-600 mt-6 rounded-3xl px-6 py-6 
                     group-hover:shadow-xl group-hover:shadow-[#099aa73a] transition-all ease-in-out duration-500 
                     group-hover:-translate-y-2"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start relative pt-3">
                  <div className="pb-4">
                    <span className="inline-flex items-center justify-center rounded-full bg-teal-600 py-3 px-3">
                      <BiSolidInjection
                        size={28}
                        className="text-white transition-all ease-in-out duration-300 group-hover:rotate-10"
                      />
                    </span>
                  </div>
                  <span className="rounded-full bg-teal-100 text-teal-600 text-[12px] font-medium py-1 px-4">
                    PREVENTION
                  </span>
                </div>

                {/* Title & Text */}
                <div className="mt-4 mb-6 lg:text-left text-center">
                  <h3 className="font-bold text-2xl text-gray-800 mb-4">
                    Vaccination Services
                  </h3>
                  <p className="text-md text-gray-500">
                    Complete immunization programs for all ages including travel
                    vaccines and seasonal shots.
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full mt-10">
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-2">
                    Travel Vaccines
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Flu Shots
                  </div>
                  <div className="text-[10px] text-teal-700 rounded-full bg-teal-100 py-1 px-3">
                    Child Immunizations
                  </div>
                </div>

                {/* Button */}
                <div className="mt-10">
                  <a
                    href="#"
                    className="flex flex-row gap-1 rounded-full bg-white border border-teal-600 py-3 
                         w-full text-center items-center justify-center font-bold transition-all duration-300 ease-in-out 
                         group-hover:translate-x-2 group-hover:bg-teal-600 group-hover:text-white"
                  >
                    Schedule Shots
                    <span>
                      <ArrowRight />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ====== STATISTICS SECTION ====== */}
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 text-center lg:justify-between mt-16 bg-white shadow-lg w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16 py-12 rounded-3xl">
            <span className="text-lg text-gray-500">Patients Served</span>
            <span className="text-lg text-gray-500 mt-4 lg:mt-0">
              Medical Experts
            </span>
            <span className="text-lg text-gray-500 mt-4 lg:mt-0">
              Specializations
            </span>
            <span className="text-lg text-gray-500 mt-4 lg:mt-0">
              Hours Service
            </span>
          </div>

          {/* ====== CALL TO ACTION ====== */}
          <div
            className="bg-teal-600 text-white rounded-2xl py-12 px-6 sm:px-10 lg:px-16 mt-16 flex flex-col lg:flex-row items-center justify-between gap-6 max-w-7xl mx-auto"
            data-aos="zoom-in"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20">
              <Phone />
            </div>

            <div className="text-center lg:text-left flex-1">
              <h1 className="text-2xl font-bold">Need Medical Attention?</h1>
              <p className="text-white/80 mt-2">
                Book your appointment with our qualified healthcare
                professionals and get the care you deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="font-medium cursor-pointer hover:bg-teal-600 bg-white text-teal-600 px-8 py-3 rounded-full border border-white hover:text-white transition-all duration-300 ease-in-out hover:-translate-y-0.5 text-center">
                Book Appointment
              </div>

              <div className="bg-teal-600 text-white border border-white px-8 py-3 rounded-full shadow flex items-center justify-center gap-2 font-semibold transition-all duration-300 ease-in-out hover:-translate-y-0.5">
                <Phone /> <span>Call Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Serviceh;
