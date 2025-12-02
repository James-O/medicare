import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Microscope } from 'lucide-react';
import { BsHeartPulseFill } from 'react-icons/bs';
import { FaBaby, FaBone, FaBrain } from 'react-icons/fa';

function Hdepartmentsnd() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 50,
    });
  }, []);

  return (
    <div className="bg-gray-50 py-12 px-6">
      <div
        className="max-w-7xl mx-auto grid col-span-3 lg:grid-cols-2 gap-8 lg:px-6"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="500"
      >
        {/* Card 1 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-500 hover:scale-95 group">
          <div className="p-6">
            <div className="mb-4 flex items-start group">
              <div className="flex items-center justify-center rounded-2xl border border-teal-100 bg-teal-100 text-teal-600 transition-transform duration-500 hover:scale-95 group-hover:bg-teal-500 group-hover:text-white mr-3 py-4 px-4">
                <BsHeartPulseFill className="w-10 h-10" />
              </div>
              <div className="font-normal">
                <h3 className="font-extrabold text-2xl mb-4">Cardiology</h3>
                <p className="text-xs text-gray-500 font-bold">HEART & VASCULAR</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            </p>
            <div className="inline-flex gap-2 lg:flex-row  md:flex-row flex-col">
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold ">
                24/7 Emergency
              </span>
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">
                Advanced Diagnostics
              </span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="../images/cardiology-2.webp"
              alt="Cardiology"
              className="w-full h-51 object-cover transition-transform duration-500 hover:scale-120 active:scale-120 ease-in-out"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-500 hover:scale-95 group">
          <div className="p-6">
            <div className="mb-4 flex items-start group">
              <div className="flex items-center justify-center rounded-2xl border border-teal-100 bg-teal-100 text-teal-600 transition-transform duration-500 hover:scale-95 group-hover:bg-teal-500 group-hover:text-white mr-3 py-4 px-4">
                <FaBrain className="w-10 h-10" />
              </div>
              <div className="font-normal">
                <h3 className="font-extrabold text-2xl mb-4">Neurology</h3>
                <p className="text-xs text-gray-500 font-bold">BRAIN & NERVOUS SYSTEM</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="inline-flex gap-2 lg:flex-row md:flex-row flex-col">
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">MRI Available</span>
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">Specialist Team</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="../images/neurology-3.webp"
              alt="Neurology"
              className="w-full h-51 object-cover transition-transform duration-500 hover:scale-120 active:scale-120 ease-in-out"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-500 hover:scale-95 group">
          <div className="p-6">
            <div className="mb-4 flex items-start group">
              <div className="flex items-center justify-center rounded-2xl border border-teal-100 bg-teal-100 text-teal-600 transition-transform duration-500 hover:scale-95 group-hover:bg-teal-500 group-hover:text-white mr-3 py-4 px-4">
                <FaBone className="w-10 h-10" />
              </div>
              <div className="font-normal mb-4">
                <h3 className="text-2xl font-extrabold">Orthopedics</h3>
                <p className="text-xs text-gray-500 font-bold">BONES & JOINTS</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.
            </p>
            <div className="inline-flex gap-2 lg:flex-row md:flex-row flex-col">
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">Sports Medicine</span>
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">Joint Replacement</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="../images/orthopedics-4.webp"
              alt="Orthopedics"
              className="w-full h-55 object-cover transition-transform duration-500 hover:scale-120 active:scale-120 ease-in-out"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-500 hover:scale-95 group">
          <div className="p-6">
            <div className="mb-4 flex items-start group">
              <div className="flex items-center justify-center rounded-2xl border border-teal-100 bg-teal-100 text-teal-600 transition-transform duration-500 hover:scale-95 group-hover:bg-teal-500 group-hover:text-white mr-3 py-6 px-6">
                <FaBaby className="w-10 h-10" />
              </div>
              <div className="font-normal">
                <h3 className="text-2xl font-extrabold mb-4">Pediatrics</h3>
                <p className="text-xs text-gray-500 font-bold">CHILDREN'S HEALTH</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed.
            </p>
            <div className="inline-flex gap-2 lg:flex-row md:flex-row flex-col">
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">Child-Friendly</span>
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">Vaccination Center</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="../images/pediatrics-2.webp"
              alt="Pediatrics"
              className="w-full h-51 object-cover transition-transform duration-500 active:scale-120 ease-in-out hover:scale-120"
            />
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-500 hover:scale-95 group">
          <div className="p-6">
            <div className="mb-4 flex items-start group">
              <div className="flex items-center justify-center rounded-2xl border border-teal-100 bg-teal-100 text-teal-600 transition-transform duration-500 hover:scale-95 group-hover:bg-teal-500 group-hover:text-white mr-3 py-4 px-4">
                <Microscope className="w-10 h-10" />
              </div>
              <div className="font-normal">
                <h3 className="text-2xl font-extrabold mb-4">Laboratory</h3>
                <p className="text-xs text-gray-500 font-bold">DIAGNOSTIC SERVICES</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim.
            </p>
            <div className="inline-flex gap-2 lg:flex-row md:flex-row flex-col">
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">Quick Results</span>
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">Digital Reports</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="../images/laboratory-3.webp"
              alt="Laboratory"
              className="w-full object-cover transition-transform duration-500 active:scale-120 ease-in-out hover:scale-120 h-51"
            />
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-500 hover:scale-95 group">
          <div className="p-6">
            <div className="mb-4 flex items-start group">
              <div className="flex items-center justify-center rounded-2xl border border-teal-100 bg-teal-100 text-teal-600 transition-transform duration-500 hover:scale-95 group-hover:bg-teal-500 group-hover:text-white mr-3 py-4 px-4">
                <BsHeartPulseFill className="w-10 h-10" />
              </div>
              <div className="font-normal">
                <h3 className="text-2xl font-extrabold mb-4">Emergency</h3>
                <p className="text-xs text-gray-500 font-extrabold">24/7 CRITICAL CARE</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam.
            </p>
            <div className="inline-flex gap-2 lg:flex-row md:flex-row flex-col">
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">Round-the-Clock</span>
              <span className="px-3 py-1 text-xs bg-teal-100 text-teal-600 rounded-full font-bold">Trauma Center</span>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src="../images/emergency-4.webp"
              alt="Emergency"
              className="w-full h-51 object-cover transition-transform duration-500 active:scale-120 ease-in-out hover:scale-120"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hdepartmentsnd;
