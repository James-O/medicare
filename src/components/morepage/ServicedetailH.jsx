import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  CheckCircle,
  Clock,
  Phone,
  MapPin,
  ShieldCheck,
  HeartPulseIcon,
  LucideHospital,
} from 'lucide-react';

function ServiceDetails() {
  const services = [
    'Comprehensive cardiac examinations',
    'Advanced diagnostic imaging',
    'Preventive heart screening programs',
    'Cardiac rehabilitation therapy',
    'Emergency cardiac intervention',
    'Post-operative care and monitoring',
  ];

  const featureCards = [
    {
      title: 'Diagnostic Testing',
      desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      btn: 'Book Now',
      icon: <HeartPulseIcon className="h-10 w-10 text-teal-600 mb-4 mx-auto" />,
    },
    {
      title: 'Surgical Procedures',
      desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.',
      btn: 'Schedule Surgery',
      icon: <LucideHospital className="h-10 w-10 text-teal-600 mb-4 mx-auto" />,
    },
    {
      title: 'Preventive Care',
      desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.',
      btn: 'Get Screened',
      icon: <ShieldCheck className="h-10 w-10 text-teal-600 mb-4 mx-auto" />,
    },
  ];

  const appointmentInfo = [
    {
      icon: <Clock className="h-4 w-4 text-white" />,
      label: 'Office Hours:',
      value: 'Mon–Fri: 8:00 AM – 6:00 PM',
    },
    {
      icon: <Phone className="h-4 w-4 text-white" />,
      label: 'Emergency Line:',
      value: '+1 (555) 123-4567',
    },
    {
      icon: <MapPin className="h-4 w-4 text-white" />,
      label: 'Location:',
      value: '123 Medical Center Dr, Boston, MA 02101',
    },
  ];

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-gray-50 mt-30 pb-20" data-aos="zoom-in">
       {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-2 text-center mt-40">
          Service Details
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-6 px-4">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odit sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>

       {/* Breadcrumb */}
        <section className="bg-gray-100 py-3 mb-8 rounded-lg">
          <div className="px-4 ml-28">
            <nav className="text-sm text-gray-600">
              <ol className="list-reset flex flex-wrap">
                <li>
                  <a href="/" className="text-teal-600 hover:underline">
                    Home
                  </a>
                  <span className="mx-2">/</span>
                </li>
                <li className="text-gray-800">Service Details</li>
              </ol>
            </nav>
          </div>
        </section>
      <div className="max-w-7xl mx-auto px-4">
       

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

       

        {/* Comprehensive Cardiology Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start mb-16">
          {/* Left: Image */}
          <div
            className="relative order-1 md:order-none"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src="/images/cardiology-3.webp"
              alt="Cardiology"
              className="w-full h-[350px] sm:h-[420px] md:h-[500px] object-cover rounded-2xl shadow-lg"
            />
            <span className="absolute top-5 left-5 bg-teal-600 text-white text-sm px-4 py-2 rounded-full shadow-md">
              Specialized Care
            </span>
          </div>

          {/* Right: Text */}
          <div
            className="flex flex-col justify-center max-w-7xl mx-auto md:mx-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
              Comprehensive Cardiology Services
            </h3>
            <p className="text-lg text-teal-700 font-semibold mb-4">
              Advanced heart care with cutting-edge technology and compassionate
              expertise
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>

            {/* Our Services Include */}
            <div className="mt-7">
              <h4 className="text-xl font-semibold text-gray-800 mb-5">
                Our Services Include:
              </h4>
              <ul className="space-y-3.5 text-gray-700">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-teal-700 mr-3 flex-shrink-0" />
                    {service}
                  </li>
                ))}
              </ul>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <button className="bg-teal-700 text-white px-6 py-3 rounded-full shadow-md hover:bg-teal-800 transition">
                  Schedule Consultation
                </button>
                <button className="border border-teal-700 text-teal-700 px-6 py-3 rounded-full shadow-md hover:bg-teal-50 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          data-aos="zoom-in"
        >
          {featureCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
            >
              {card.icon}
              <h5 className="text-lg font-semibold text-gray-800 mb-3">
                {card.title}
              </h5>
              <p className="text-gray-600 mb-6">{card.desc}</p>
              <button className="text-teal-700 font-medium hover:underline">
                {card.btn}
              </button>
            </div>
          ))}
        </div>

        {/* Appointment Section */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
          data-aos-delay="200"
          data-aos="zoom-in"
        >
          {/* Info Left */}
          <div className="bg-teal-50 col-span-1 lg:col-span-8 p-8 rounded-xl">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Schedule Your Appointment?
            </h1>
            <p className="text-gray-600 mb-6">
              Our cardiology specialists are available for consultations Monday
              through Friday. Same-day appointments available for urgent cases.
            </p>

            <ul className="space-y-6">
              {appointmentInfo.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-teal-600 flex w-10 h-10 rounded-full text-white items-center justify-center mr-4">
                    {item.icon}
                  </div>
                  <div className="text-gray-700">
                    <div className="font-semibold">{item.label}</div>
                    <div>{item.value}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Booking Right */}
          <div className="bg-white rounded-2xl p-8 text-center shadow col-span-1 lg:col-span-4 h-fit">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">
              Book Your Visit
            </h4>
            <p className="text-gray-600 mb-6">
              Quick and easy online scheduling
            </p>
            <button className="bg-teal-600 text-white px-6 py-3 rounded-full shadow hover:bg-teal-700 transition w-full">
              Book Appointment
            </button>
            <p className="text-gray-600 mt-4">Or call us at</p>
            <p className="text-teal-700 font-semibold">
              +1 (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceDetails;
