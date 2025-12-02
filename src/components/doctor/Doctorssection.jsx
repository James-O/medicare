import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import Alldoctors from "./Alldoctors";
import { BsAward, BsFillFileEarmarkTextFill } from "react-icons/bs";
import {
  Calendar,
  CalendarCheck,
  CircleCheckBig,
  GraduationCap,
  Hospital,
} from "lucide-react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";

function Doctorssection() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [selectAlldepartment, setSelectAlldepartment] =
    useState("All Departments");
  const departmentsOptions = [
    "All Departments",
    "Cardiology",
    "Pediatrics",
    "Dermatology",
    "Orthopedics",
  ];

  const [allLocations, setAllLocations] = useState("All Locations");
  const locationOptions = [
    "All locations",
    "Downtown Clinic",
    "Westside Clinic",
    "Riverside Campus",
  ];

  const [activeSection, setActiveSection] = useState("bio");

  return (
    <div id="doctor">
      <div className="w-full h-full mt-30">
        <div className="text-center py-16">
          <h1 className="text-4xl font-bold"> Doctors</h1>
          <p className="text-center text-sm mt-4 max-w-3xl mx-auto text-gray-600 lg:px-0 px-4">
            Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
            odio <br />
            sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis
            veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
            dolorem.
          </p>
        </div>
        <div className="bg-gray-200 px-3 py-5 rounded max-w-full mx-auto flex">
          <nav className="text-sm text-gray-600 ml-[8%]">
            <ol className="flex items-center space-x-2">
              <li>
                <a
                  href="#"
                  className="text-teal-500 hover:text-teal-600 ml-[4%]"
                >
                  Home
                </a>
              </li>
              <li>
                <span>/</span>
              </li>
              <li className="text-gray-800">Doctors</li>
            </ol>
          </nav>
        </div>
      </div>

      {/*search section*/}

      <div
        data-aos="fade-up"
        className="flex items-center justify-center mt-14 px-4"
      >
        <div
          data-aos="fade-up"
          className="max-w-7xl mx-auto gap-2 space-y-2 p-4 md:p-8 px-6 border border-teal-400 rounded-2xl flex flex-col lg:flex-row items-center shadow-lg justify-between md:space-y-0 md:space-x lg:w-[84%]  bg-teal-50"
        >
          <div className="w-full lg:w-1/3">
            <label
              htmlFor="practitioner"
              className="block text-gray-700 font-bold mb-2"
            >
              Search Doctors
            </label>
            <div className="relative flex items-center">
              <i className="absolute left-3 text-gray-400">
                <FaSearch />
              </i>
              <input
                type="text"
                placeholder="Type a name or keyword"
                className="w-full pl-10 pr-4 py-3 border-1 border-gray-300 font-normal appearance-none rounded-lg focus:border-teal-500 focus:shadow focus:outline-none focus:ring-3 focus:ring-teal-500"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <label
              htmlFor="alldepartments"
              className="block text-gray-700 font-bold mb-2"
            >
              Department
            </label>
            <div className="relative flex items-center">
              <select
                id="departments"
                value={selectAlldepartment}
                onChange={(e) => setSelectAlldepartment(e.target.value)}
                className="w-full pl-4 pr-4 py-3 rounded-lg focus:border-teal-500 focus:shadow focus:ring-3 focus:ring-teal-500 border-1 border-gray-300 font-normal appearance-none focus:outline-none"
              >
                {departmentsOptions.map((departments, idx) => (
                  <option key={idx} value={departments}>
                    {departments}
                  </option>
                ))}
              </select>
              <div></div>
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <label
              htmlFor="location"
              className="block text-gray-700 font-bold mb-2"
            >
              Location
            </label>
            <div className="relative flex items-center">
              <select
                id="location"
                value={allLocations}
                onChange={(e) => setAllLocations(e.target.value)}
                className="w-full pl-4 pr-4 py-3 rounded-lg focus:border-teal-500 focus:shadow focus:ring-3 focus:ring-teal-500 border-1 border-gray-300 font-normal appearance-none focus:outline-none"
              >
                {locationOptions.map((location, idx) => (
                  <option key={idx} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <div></div>
            </div>
          </div>

          <div className="w-full lg:w-auto  lg:mt-0">
            <button className="w-full  bg-teal-600 mt-7 transition-all text-white rounded-lg flex items-center justify-center p-3 hover:bg-teal-700 hover:shadow-[#099aa75a] duration-300 hover:shadow-lg hover:-translate-y-0.5 flex-row gap-1">
              <span>Apply </span>
              <span>Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* specialists Section */}
      <div>
        <Alldoctors />
      </div>

      {/* chief surgeon Section */}
      <div className="w-full py-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[45%_55%] md:grid-cols-1 sm:grid-cols-1 gap-2 px-4 md:px-8 ">
          {/* Image Section */}
          <div className="grid grid-cols-1 gap-4" data-aos="fade-right">
            {/* Main Image */}
            <img
              src="/images/staff-12.webp"
              alt="Hospital Bed"
              className="rounded-lg w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover relative"
            />
            <div className="absolute bottom-3 left-3">
              <span className="flex items-center gap-1 text-gray-800  font-bold px-2 py-1 rounded-lg bg-white">
                <span className="p-2 rounded-full bg-teal-600"></span>
                <button>Available this week</button>
              </span>{" "}
            </div>
          </div>

          {/* Text + Stats Section */}
          <div
            className="flex flex-col justify-center space-y-6 text-left lg:pl-6"
            data-aos="fade-left"
          >
            {/*Tags*/}
            <div className="flex gap-2 mb-3 flex-wrap">
              <span className="bg-teal-600 text-white px-3 py-1 text-sm rounded-full font-medium border border-teal-600">
                Chief Surgeon
              </span>
              <span className="px-3 py-1 font-medium text-sm rounded-full text-teal-800 bg-teal-100 border border-teal-600">
                12+ Years Experience
              </span>
              <span className="px-3 py-1 font-medium rounded-full text-teal-800 text-sm bg-teal-100 border border-teal-600">
                Board Certified
              </span>
            </div>

            {/*Doctor Info*/}
            <div>
              <h2 className="text-2xl font-bold font-sans text-gray-800">
                Dr. Natalia Rivera
              </h2>
              <p className="text-gray-500 mb-4">General Surgery • MD, FACS</p>
              <p className="text-gray-600 mb-2">
                Commodo incididunt aliqua minim, eiusmod in laboris nulla. Amet
                do occaecat quis, excepteur in magna id dolore incididunt.
                Tempor in aute ullamco, irure officia aliqua nostrud.
              </p>
            </div>

            {/* Bullet Points */}
            <ul className="space-y-2  items-center gap-2 text-gray-700 mb-6 ">
              <li className="flex gap-1">
                {" "}
                <GraduationCap size={18} className=" text-teal-700" />
                Residency: St. Mary's Medical Center
              </li>
              <li className="flex gap-1">
                <Hospital size={18} className="text-teal-700" /> Fellowship:
                Advanced Laparoscopy
              </li>
              <li className="flex gap-1">
                <BsAward size={18} className="text-teal-700" /> Publications: 14
                peer-reviewed articles
              </li>
            </ul>

            {/* Contact Button */}
            <div className="flex gap-8 flex-wrap">
              <button className="bg-teal-600 text-white transition-transform duration-500 ease-in-out hover:-translate-y-1 font-semibold px-4 py-2 rounded-md flex items-center gap-2 hover:bg-teal-700 shadow-teal-700">
                <CalendarCheck /> Book Appointment
              </button>
              <button className="bg-gray-100 text-teal-700 font-semibold border border-teal-600 transition-transform duration-500 ease-in-out hover:-translate-y-1 shadow-teal-700 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200">
                <BsFillFileEarmarkTextFill className="" />
                View CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Doctors Section */}
      <div className="w-full py-10 bg-white">
        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 mx-auto max-w-7xl gap-6 px-4  lg:px-8">
          {/* card 1 Section */}
          <div className="flex justify-center items-center gap-2 flex-col border py-3 px-5 bg-white rounded-2xl border-gray-300 transition-all ease-in-out delay-500 hover:-translate-y-2 shadow-md text-center">
            <img
              src="/images/staff-2.jpg"
              alt="Dr. Oliver Hayes"
              className="object-cover rounded-full w-15 h-15 border-2 border-teal-600 mt-2"
            />
            <span className="font-semibold text-gray-700">
              Dr. Oliver Hayes
            </span>
            <span className="text-md font-medium text-gray-400">
              Pediatrics
            </span>
          </div>

          {/* card 2 Section */}
          <div className="flex justify-center items-center gap-2 flex-col border py-3 px-5 bg-white rounded-2xl border-gray-300 transition-all ease-in-out delay-500 hover:-translate-y-2 shadow-md text-center">
            <img
              src="/images/staff-5.jpg"
              alt="Dr. Oliver Hayes"
              className="object-contain rounded-full w-15 h-15 border-2 border-teal-600 mt-2"
            />
            <span className="font-semibold text-gray-700">Dr. Noah Turner</span>
            <span className="text-md font-medium text-gray-400">
              Pediatrics
            </span>
          </div>

          {/* card 3 Section */}
          <div className="flex justify-center items-center gap-2 flex-col border py-3 px-5 bg-white rounded-2xl border-gray-300 transition-all ease-in-out delay-500 hover:-translate-y-2 shadow-md text-center">
            <img
              src="/images/staff-6.jpg"
              alt="Dr. Oliver Hayes"
              className="object-cover rounded-full w-15 h-15 border-2 border-teal-600 mt-2"
            />
            <span className="font-semibold text-gray-700">Dr. Liam Carter</span>
            <span className="text-md font-medium text-gray-400">
              Orthopedics
            </span>
          </div>

          {/* card 4 Section */}
          <div className="flex justify-center items-center gap-2 flex-col border py-3 px-5 bg-white rounded-2xl border-gray-300 transition-all ease-in-out delay-500 hover:-translate-y-2 shadow-md text-center">
            <img
              src="/images/staff-3.jpg"
              alt="Dr. Oliver Hayes"
              className="object-cover rounded-full w-15 h-15 border-2 border-teal-600 mt-2"
            />
            <span className="font-semibold text-gray-700">
              Dr. Amelia Brooks
            </span>
            <span className="text-md font-semibold text-gray-400">
              Cardiology
            </span>
          </div>

          {/* card 5 Section */}
          <div className="flex justify-center items-center gap-2 flex-col border py-3 px-5 bg-white rounded-2xl border-gray-300 transition-all ease-in-out delay-500 hover:-translate-y-2 shadow-md text-center">
            <img
              src="/images/staff-9.jpg"
              alt="Dr. Oliver Hayes"
              className="object-cover rounded-full w-15 h-15 border-2 border-teal-600 mt-2"
            />
            <span className="font-semibold text-gray-700">Dr. Harper Lane</span>
            <span className="text-md font-medium text-gray-400">
              Dermatology
            </span>
          </div>

          {/* card 6 Section */}
          <div className="flex justify-center items-center gap-2 flex-col border py-3 px-5 bg-white rounded-2xl border-gray-300 transition-all ease-in-out delay-500 hover:-translate-y-2 shadow-md text-center">
            <img
              src="/images/staff-8.png"
              alt="Dr. Oliver Hayes"
              className="object-cover rounded-full w-15 h-15 border-2 border-teal-600 mt-2"
            />
            <span className="font-semibold text-gray-700">Dr. Lucas Grant</span>
            <span className="text-md font-medium text-gray-400">
              Pulmonology
            </span>
          </div>
        </div>
      </div>

      {/* last Section */}
      <div className="w-full py-16">
        {/* === Top Layout === */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[45%_55%] md:grid-cols-1 gap-6 px-4 md:px-8 items-start">
          {/* === Doctor Card Section (LEFT) === */}
          <div
            className="relative bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
            data-aos="fade-right"
          >
            <div className="p-6">
              <img
                src="/images/staff-9.jpg"
                alt="Dr. Henry"
                className="w-full h-[350px] object-cover rounded-2xl"
              />
            </div>

            {/* Doctor Info Overlay */}
            <div className="p-6 flex flex-col items-start space-y-2">
              <h3 className="text-2xl font-bold text-gray-800">
                Dr. Henry James
              </h3>
              <p className="text-teal-600 font-medium text-sm">
                Oncology • MBBS, MD
              </p>

              {/* Bottom Buttons */}
              <div className="flex gap-3 mt-4 flex-wrap">
                <button className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-teal-700 transition">
                  Board Certified
                </button>
                <button className="bg-teal-50 text-teal-600 border border-teal-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-teal-600 hover:text-white transition">
                  8 Years
                </button>
              </div>
            </div>
          </div>

          {/* === Text + Hidden Sections (RIGHT) === */}
          <div
            className="flex flex-col justify-start items-start space-y-6 text-left lg:pl-6"
            data-aos="fade-left"
          >
            {/* Section Tabs */}
            <div className="flex gap-2 mb-3 flex-wrap">
              <button
                onClick={() => setActiveSection("bio")}
                className={`px-3 py-1 text-sm font-medium rounded-full border ${
                  activeSection === "bio"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-teal-100 text-teal-800 border-teal-600"
                }`}
              >
                Bio
              </button>

              <button
                onClick={() => setActiveSection("schedule")}
                className={`px-3 py-1 text-sm font-medium rounded-full border ${
                  activeSection === "schedule"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-teal-100 text-teal-800 border-teal-600"
                }`}
              >
                Schedule
              </button>

              <button
                onClick={() => setActiveSection("reviews")}
                className={`px-3 py-1 text-sm font-medium rounded-full border ${
                  activeSection === "reviews"
                    ? "bg-teal-600 text-white border-teal-600"
                    : "bg-teal-100 text-teal-800 border-teal-600"
                }`}
              >
                Reviews
              </button>
            </div>

            {/* === Hidden Sections === */}
            <div className="relative mt-2 w-full">
              {activeSection === "bio" && (
                <div
                  data-aos="fade-up"
                  key="bio"
                  className="p-4 bg-white shadow rounded-xl border border-gray-100 w-full"
                >
                  <div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dr. Henry is a highly skilled oncology specialist with
                      over 8 years of clinical experience in cancer treatment
                      and research.
                    </p>
                    <div className="mt-3">
                      <p className="flex gap-1 items-center text-gray-600">
                        <span>
                          <CircleCheckBig size={15} />
                        </span>
                        Special interest in immunotherapy
                      </p>

                      <p className="flex gap-1 items-center text-gray-600">
                        <span>
                          <CircleCheckBig size={15} />
                        </span>
                        Member of ASCO
                      </p>

                      <p className="flex gap-1 items-center text-gray-600">
                        <span>
                          <CircleCheckBig size={15} />
                        </span>{" "}
                        Community outreach programs
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "schedule" && (
                <div
                  data-aos="fade-up"
                  key="schedule"
                  className="p-4 bg-white shadow rounded-xl border border-gray-100 w-full"
                >
                  <div className="text-gray-700 text-sm w-full flex flex-col md:flex-row gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4 w-full">
                      <div className="flex justify-between border border-teal-600 p-3 rounded-lg items-center">
                        <h4 className="font-bold text-teal-700">Mon</h4>
                        <p className="font-semibold">9:00 AM - 1:00 PM</p>
                      </div>

                      <div className="flex justify-between border border-teal-600 p-3 rounded-lg items-center">
                        <h4 className="font-bold text-teal-700">Wed</h4>
                        <p className="font-semibold">9:00 AM - 3:00 PM</p>
                      </div>

                      <div className="flex justify-between border border-teal-600 p-3 rounded-lg items-center">
                        <h4 className="font-bold text-teal-700">Fri</h4>
                        <p className="font-semibold text-gray-500">Closed</p>
                      </div>

                      {/* Reserve Button */}
                      <div>
                        <button className="flex items-center justify-center gap-2 bg-teal-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-teal-700 transition-all text-sm duration-300 mt-2">
                        <Calendar size={18} />
                        Reserve Slots
                      </button>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4 w-full">
                      <div className="flex justify-between border border-teal-600 p-3 rounded-lg items-center">
                        <h4 className="font-bold text-teal-700">Tue</h4>
                        <p className="font-semibold">12:00 PM - 6:00 PM</p>
                      </div>

                      <div className="flex justify-between border border-teal-600 p-3 rounded-lg items-center">
                        <h4 className="font-bold text-teal-700">Thu</h4>
                        <p className="font-semibold">10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "reviews" && (
                <div
                  data-aos="fade-up"
                  key="reviews"
                  className="p-4 bg-white shadow rounded-xl border border-gray-100 w-full"
                >
                  <p className="text-gray-600 text-sm mb-3 flex flex-row gap-2 items-center">
                    <span className="flex flex-row gap-1 items-center">
                      <IoIosStar
                        size={14}
                        className="text-yellow-400 fill-amber-400"
                      />
                      <IoIosStar
                        size={14}
                        className="text-yellow-400 fill-amber-400"
                      />
                      <IoIosStar
                        size={14}
                        className="text-yellow-400 fill-amber-400"
                      />
                      <IoIosStarHalf
                        size={14}
                        className="text-yellow-400 fill-amber-400"
                      />
                    </span>{" "}
                    <span>4.5/5 • 32 reviews</span>
                  </p>
                  <p className="text-gray-600 text-sm">
                    Id magna consequat minim in, lorem dolore fugiat. Officia
                    irure ex anim, velit nulla cupidatat laboris enim.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctorssection;
