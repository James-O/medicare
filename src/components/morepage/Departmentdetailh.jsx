import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Departmentdetailh() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="bg-white w-full mt-30">
      {/* Hero Section */}
      <div
        className="flex flex-col items-center text-center py-16 px-6 sm:px-10 md:px-16 lg:px-28"
        data-aos="zoom-in"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 text-blue-950">
          Department Details
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-5xl">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>

      {/* Breadcrumb Section */}
      <div className="w-full bg-gray-100 py-4 " data-aos="fade-up">
        <div className="flex ml-[9%] items-center gap-2 text-center sm:text-left">
         

          <ul className="flex flex-wrap justify-center sm:justify-end gap-2 text-sm sm:text-base">
            <li className="text-teal-600 font-medium">
              <a href="/">Home</a>
            </li>
            <li className="text-gray-600">
              /{" "}
              <a href="/morepage" className="hover:text-teal-600">
                Department Details
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Departmentdetailh;
