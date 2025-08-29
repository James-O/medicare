import React from "react";
import { CgChevronDown } from "react-icons/cg";



function Navbarsss() {
  return (
    <div className="top-8 fixed left-0 right-0 z-50 py-6 bg-white">
      <div className="flex items-center py-4 px-12 space-x-8 bg-white shadow max-w-2xl">
        <div className="text-blue-950 font-bold text-4xl ">Medi<span className="font-bold text-teal-600 text-4xl">Care</span> </div>
        
             <ul className="md:flex items-center  justify-center px-40 space-x-8 text-gray-700 hidden font-medium">
          <li>Home</li>
          <li>About</li>
          <li>Departments</li>
          <li>Services</li>
          <li>Doctors</li>
          <li><a href="#" className="flex items-center gap-1"><span>More</span> <span>Pages</span><CgChevronDown size={20} className="-ml-0.5"/></a></li>
          <li>Contacts</li>          
          </ul>  
       

           <button className="bg-teal-600 py-2 px-4 rounded-lg text-white"><a href="#">Appiontment</a></button>
        </div>
    </div>
  );
}

export default Navbarsss;