import React, { useEffect, useState } from 'react';
import {
  BsShieldCheck,
  BsStopwatch,
  BsPersonFill,
  BsCalendarEvent,
  BsCalendarPlus,
} from 'react-icons/bs';
import {
  FaPhone,
  FaRegCalendarCheck,
  FaRegCircleCheck,
} from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaHeartbeat } from 'react-icons/fa';

function Appointmenth() {
  const [selectDepartment, setSelectDepartment] = useState('Select Department');
  const [selectDoctor, setSelectDoctor] = useState('Select Doctor');

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 100,
    });
  }, []);

  return (
    <div className="bg-gray-50 w-full overflow-hidden mt-30">
      {/* Header Section */}
      <div data-aos="zoom-in" className="px-4 py-16  text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-5 text-gray-800">Appointment</h1>
        <p className="text-[16px] md:text-[18px] text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>

      {/* Breadcrumb Section */}
      <div className="bg-gray-200 w-full px-4 py-4 flex ">
        <nav className="text-sm text-gray-600">
          <ol className="flex items-center space-x-2 ml-30">
            <li>
              <a href="#" className="text-teal-600 hover:underline">
                Home
              </a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li className="text-gray-800">Appointment</li>
          </ol>
        </nav>
      </div>

      {/* Appointment Info + Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-7xl mx-auto mt-10 px-4">
        {/* Left Info Section */}
        <div data-aos="fade-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
            Quick & Easy Online Booking
          </h3>
          <p className="text-gray-600 text-[15px] md:text-[16px] mb-6 leading-relaxed">
            Book your appointment in just a few simple steps. Our healthcare
            professionals are ready to provide you with the best medical care
            tailored to your needs.
          </p>

          <div className="space-y-6">
            {/* Feature Items */}
            {[
              {
                icon: <FaRegCalendarCheck size={25} />,
                title: 'Flexible Scheduling',
                text: 'Choose from available time slots that fit your busy schedule.',
              },
              {
                icon: <BsStopwatch size={25} />,
                title: 'Quick Response',
                text: 'Get confirmation within 15 minutes of submitting your request.',
              },
              {
                icon: <BsShieldCheck size={25} />,
                title: 'Expert Medical Care',
                text: 'Board-certified doctors and specialists at your service.',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex rounded-full w-12 h-12 items-center justify-center text-teal-600 bg-[#099aa71a]">
                  {item.icon}
                </div>
                <div>
                  <h5 className="text-gray-800 text-lg font-semibold mb-1">
                    {item.title}
                  </h5>
                  <p className="text-gray-600 text-sm md:text-[15px] leading-6">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hotline */}
          <div className="bg-[#099aa71a] rounded-2xl p-6 mt-8 border-l-4 border-teal-600">
            <div className="flex items-center gap-2 mb-2">
              <FaPhone className="text-teal-600" />
              <h6 className="font-semibold text-gray-800">Emergency Hotline</h6>
            </div>
            <p className="text-gray-700 text-[15px] md:text-[16px] leading-6">
              Call <strong className="text-teal-600">+1 (555) 911-4567</strong> for urgent
              medical assistance
            </p>
          </div>
        </div>

        {/* Right Form Section */}
        <form
          data-aos="fade-up"
          data-aos-delay="300"
          className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Name */}
            <input
              type="text"
              placeholder="Your Full Name"
              required
              className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-teal-600"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-teal-600"
            />

            {/* Phone */}
            <input
              type="text"
              placeholder="Your Phone Number"
              required
              className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-teal-600"
            />

            {/* Department */}
            <div className="relative">
              <select
                value={selectDepartment}
                onChange={(e) => setSelectDepartment(e.target.value)}
                className="w-full pl-4 pr-10 py-3 text-gray-600 rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-teal-600"
              >
                <option>Select Department</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
                <option>Dermatology</option>
                <option>General Medicine</option>
              </select>
              <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            {/* Date */}
            <input
              type="date"
              className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-teal-600"
            />

            {/* Doctor */}
            <div className="relative">
              <select
                value={selectDoctor}
                onChange={(e) => setSelectDoctor(e.target.value)}
                className="w-full pl-4 pr-10 py-3 text-gray-600 rounded-lg border border-gray-300 appearance-none focus:outline-none focus:border-teal-600"
              >
                <option>Select Doctor</option>
                <option>Dr. Sarah Johnson</option>
                <option>Dr. Michael Martinez</option>
                <option>Dr. Lisa Chen</option>
                <option>Dr. Raj Patel</option>
                <option>Dr. Emily Williams</option>
                <option>Dr. David Thompson</option>
              </select>
              <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Please describe your symptoms or reason for visit (optional)"
            rows={5}
            className="border border-gray-300 rounded-lg w-full px-4 py-3 mt-4 focus:outline-none focus:border-teal-600 resize-none"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg w-full py-3 mt-4 transition-all"
          >
            <BsCalendarPlus />
            Book Appointment
          </button>
        </form>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-7xl mx-auto px-4 pb-16">
        {[
          { num: 1, icon: <BsPersonFill />, title: 'Fill Details', desc: 'Provide your personal information and select your preferred department.' },
          { num: 2, icon: <BsCalendarEvent />, title: 'Choose Date', desc: 'Select your preferred date and time slot from available options.' },
          { num: 3, icon: <FaRegCircleCheck />, title: 'Confirmation', desc: 'Receive instant confirmation and appointment details via email or SMS.' },
          { num: 4, icon: <FaHeartbeat />, title: 'Get Treatment', desc: 'Visit our clinic at your scheduled time and receive quality healthcare.' },
        ].map((step, i) => (
          <div key={i} data-aos="fade-up" className="flex flex-col items-center text-center bg-white shadow-md rounded-xl p-6 hover:-translate-y-1 transition-transform duration-200">
            <div className="flex mb-4 w-10 h-10 rounded-full text-white bg-teal-600 font-bold items-center justify-center">
              {step.num}
            </div>
            <div className="text-teal-600 mb-4 text-3xl">{step.icon}</div>
            <h5 className="text-lg font-bold mb-2">{step.title}</h5>
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appointmenth;
