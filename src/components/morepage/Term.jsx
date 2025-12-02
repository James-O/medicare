import React from "react";
import { CircleSmall } from "lucide-react";
import { HiOutlineInformationCircle } from "react-icons/hi2";

function Term() {
  return (
    <div className="w-full bg-white py-16 lg:py-24 mt-10">
      {/* Header Section */}
      <div
        className="flex flex-col justify-center items-center text-center px-6 sm:px-10 lg:px-28 py-10"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-950">
          Terms
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="w-full bg-gray-100 py-4">
        <div className="flex flex-wrap ml-[9%] items-center text-sm sm:text-base text-gray-700">
          
          <ul className="flex gap-2">
            <li className="text-teal-600">
              <a href="/">Home</a>
            </li>
            <li>/</li>
            <li>
              <a href="/terms" className="hover:text-teal-600">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Terms Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 mt-12 space-y-10">
        {/* 1. Agreement to Terms */}
        <section className="space-y-4">
          <h2 className="text-gray-800 text-xl sm:text-2xl font-bold">
            1. Agreement to Terms
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            By accessing our website and services, you agree to be bound by
            these Terms of Service and all applicable laws and regulations. If
            you do not agree with any of these terms, you are prohibited from
            using or accessing our services.
          </p>

          <div className="w-full py-6 px-5 bg-teal-50 shadow-sm rounded-2xl">
            <span className="flex items-center gap-3 text-gray-600 text-sm sm:text-base leading-relaxed">
              <HiOutlineInformationCircle
                size={26}
                className="text-teal-600"
              />
              These terms apply to all users, visitors, and others who access or
              use our services.
            </span>
          </div>
        </section>

        {/* 2. Intellectual Property Rights */}
        <section className="space-y-4">
          <h2 className="text-gray-800 text-xl sm:text-2xl font-bold">
            2. Intellectual Property Rights
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our service and its original content, features, and functionality
            are owned by us and are protected by international copyright,
            trademark, patent, trade secret, and other intellectual property
            laws.
          </p>

          <div className="w-full py-6 space-y-3">
            {[
              "All content is our exclusive property",
              "You may not copy or modify the content",
              "Our trademarks may not be used without permission",
              "Content is for personal, non-commercial use only",
            ].map((item, index) => (
              <span
                key={index}
                className="flex items-center gap-3 text-gray-600 text-sm sm:text-base leading-relaxed"
              >
                <CircleSmall size={18} className="text-teal-600 fill-teal-600" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* 3. Disclaimers */}
        <section className="space-y-4">
          <h2 className="text-gray-800 text-xl sm:text-2xl font-bold">
            3. Disclaimers
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Your use of our service is at your sole risk. The service is
            provided "AS IS" and "AS AVAILABLE" without warranties of any kind,
            whether express or implied.
          </p>

          <div className="w-full py-6 space-y-3">
            {[
              "The service will meet your requirements",
              "The service will be uninterrupted or error-free",
              "Results from using the service will be accurate",
              "Results from using the service will be reliable",
            ].map((item, index) => (
              <span
                key={index}
                className="flex items-center gap-3 text-gray-600 text-sm sm:text-base leading-relaxed"
              >
                <CircleSmall size={16} className="text-teal-600 fill-teal-600" />
                {item}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Term;
