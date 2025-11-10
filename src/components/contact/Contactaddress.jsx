import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsEnvelope, BsGeoAlt, BsTelephone } from "react-icons/bs";

function Contactaddress() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="py-16 bg-gray-50 w-full" data-aos="zoom-in">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Address Card */}
          <div className="flex flex-col items-center text-center px-8 py-12 rounded-2xl bg-white shadow-lg shadow-gray-200 transition-transform duration-500 hover:-translate-y-3">
            <div className="mb-4 text-teal-600 p-4 rounded-full bg-teal-100">
              <BsGeoAlt size={32} />
            </div>
            <h1 className="font-bold text-gray-800 text-xl mb-2">Our Address</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              4582 Magnolia Avenue
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              Riverside, CA 92506
            </p>
          </div>

          {/* Phone Card */}
          <div className="flex flex-col items-center text-center px-8 py-12 rounded-2xl bg-white shadow-lg shadow-gray-200 transition-transform duration-500 hover:-translate-y-3">
            <div className="mb-4 text-teal-600 p-4 rounded-full bg-teal-100">
              <BsTelephone size={32} />
            </div>
            <h1 className="font-bold text-gray-800 text-xl mb-2">Call Us</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              +1 (951) 684-9123
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              +1 (951) 787-4534
            </p>
          </div>

          {/* Email Card */}
          <div className="flex flex-col items-center text-center px-8 py-12 rounded-2xl bg-white shadow-lg shadow-gray-200 transition-transform duration-500 hover:-translate-y-3">
            <div className="mb-4 text-teal-600 p-4 rounded-full bg-teal-100">
              <BsEnvelope size={32} />
            </div>
            <h1 className="font-bold text-gray-800 text-xl mb-2">Email Us</h1>
            <p className="text-gray-500 text-sm sm:text-base">
              contact@example.com
            </p>
            <p className="text-gray-500 text-sm sm:text-base">
              support@example.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactaddress;
