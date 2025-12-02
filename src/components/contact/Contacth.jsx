import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contacth() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="w-full bg-white mt-30">
      {/* Top Section */}
      <div
        className="flex flex-col justify-center items-center text-center py-20 px-6 sm:px-10 md:px-16 lg:px-28"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-blue-950">
          Contact
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>

      {/* Breadcrumb Section */}
      <div className="w-full bg-gray-100 py-5 px-6">
        <div className="flex flex-col sm:flex-row ml-32 gap-2 sm:gap-0">
          
          <ul className="flex gap-2 text-sm sm:text-base">
            <li className="text-teal-600">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-600">
              / <a href="/about" className="hover:text-teal-600">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contacth;
