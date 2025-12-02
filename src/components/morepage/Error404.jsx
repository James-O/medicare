import React from "react";
import { CircleArrowRight, CircleQuestionMark } from "lucide-react";
import { IoHomeOutline } from "react-icons/io5";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

function Error404() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-20 mt-30">
      {/* Header Section */}
      <div
        className="flex flex-col justify-center items-center text-center px-6 lg:px-24 mb-10"
        data-aos="zoom-in"
      >
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 text-blue-950">
          404
        </h1>
        <p className="text-gray-700 text-base sm:text-lg max-w-3xl leading-relaxed">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="w-full bg-gray-100 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm sm:text-base text-gray-700">
          <h1 className="text-blue-950 font-semibold">404</h1>
          <ul className="flex gap-2 text-sm sm:text-base">
            <li className="text-teal-600">
              <a href="/">Home</a>
            </li>
            <li>/</li>
            <li>
              <a href="/404" className="hover:text-teal-600">
                404
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 py-16 px-6 lg:px-12 items-center">
        {/* Left Side (Animated Illustration) */}
        <div className="flex justify-center items-center relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
          <div className="relative flex items-center justify-center animate-pulse">
            <div className="text-teal-600 opacity-20">
              <BsFillExclamationTriangleFill size={150} />
            </div>
            <div className="absolute w-52 h-52 bg-cyan-100 rounded-full opacity-60 animate-bounce"></div>
            <div className="absolute w-28 h-28 bg-neutral-700 rounded-full opacity-15 top-[10%] right-[85%]"></div>
            <div className="absolute w-20 h-20 bg-teal-600 rounded-full opacity-10 bottom-[15%] left-[85%] animate-pulse"></div>
          </div>
        </div>

        {/* Right Side (Text & Buttons) */}
        <div className="flex flex-col items-start text-left space-y-6">
          <button className="bg-teal-100 text-teal-700 rounded-full py-2 px-6 text-xs sm:text-sm font-bold">
            ERROR
          </button>

          {/* Circular Animated 404 */}
          <div className="relative flex justify-center items-center w-[250px] sm:w-[280px] h-[250px] sm:h-[280px] mx-auto">
            <h1 className="text-8xl sm:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-yellow-600">
              404
            </h1>
            <svg
              className="absolute inset-0"
              viewBox="0 0 300 300"
              width="280"
              height="280"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150,150 m -120,0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0"
                  fill="none"
                />
              </defs>
              <text fill="tomato" fontSize="16" fontWeight="bold">
                <textPath href="#circlePath" startOffset="0%">
                  <animate
                    attributeName="startOffset"
                    from="0%"
                    to="100%"
                    dur="15s"
                    repeatCount="indefinite"
                  />
                  ERROR • ERROR • ERROR • ERROR • ERROR • ERROR • ERROR •
                  ERROR • ERROR • ERROR •
                </textPath>
              </text>
            </svg>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Page Not Found
          </h1>
          <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-lg">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6 w-full max-w-md">
            <a
              href="/"
              className="py-4 px-6 bg-teal-600 text-white flex justify-center items-center gap-2 font-semibold rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <IoHomeOutline size={20} />
              <span>Back To Home</span>
            </a>

            <a
              href="#"
              className="py-4 px-6 border border-teal-600 text-teal-600 flex justify-center items-center gap-2 font-semibold rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <CircleQuestionMark size={18} />
              <span>Help Center</span>
            </a>
          </div>

          {/* Suggestions */}
          <div className="mt-10">
            <h2 className="text-lg font-bold mb-3 text-gray-800">
              You might want to:
            </h2>
            <div className="space-y-4">
              <div className="group">
                <a
                  href="#"
                  className="flex items-center gap-3 group-hover:text-teal-600 font-medium transition-all"
                >
                  <span className="text-teal-600 transition-transform duration-300 group-hover:-translate-x-2">
                    <CircleArrowRight />
                  </span>
                  <span>Check our Sitemap</span>
                </a>
              </div>

              <div className="group">
                <a
                  href="#"
                  className="flex items-center gap-3 group-hover:text-teal-600 font-medium transition-all"
                >
                  <span className="text-teal-600 transition-transform duration-300 group-hover:-translate-x-2">
                    <CircleArrowRight />
                  </span>
                  <span>Contact support</span>
                </a>
              </div>

              <div className="group">
                <a
                  href="#"
                  className="flex items-center gap-3 group-hover:text-teal-600 font-medium transition-all"
                >
                  <span className="text-teal-600 transition-transform duration-300 group-hover:-translate-x-2">
                    <CircleArrowRight />
                  </span>
                  <span>Return to previous page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Error404;
