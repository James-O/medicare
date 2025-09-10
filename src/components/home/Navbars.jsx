import React, { useState } from "react";
import { CgChevronDown, CgChevronUp, CgClose, CgMenu } from "react-icons/cg";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";



function Navbars() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMorePagesOPen, setIsMorePagesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="top-8 fixed left-0 right-0 z-50 py-6 bg-white ">
      <div className="hidden lg:flex relative inset-0">
        <div className="lg:flex items-center py-4 px-28 space-x-6 bg-white shadow md:hidden sm:hidden top-8 fixed left-0 right-0 z-50 ">
        <h1 className="text-blue-950 font-bold text-4xl ">Medi<span className="font-bold text-teal-600 text-4xl -mr-40 ">Care</span> </h1>
        
          <ul className="lg:flex items-center  justify-center px-40 space-x-12 text-gray-700 hidden font-medium -mr-35">
          <li><NavLink to={"/"} className={({isActive}) => isActive ? "text-teal-600" : "text-teal-600"}>Home</NavLink></li>
          <li className="whitespace-nowrap"><NavLink to={"/about"} className={({isActive}) => isActive ? "text-teal-600" : "text-gray-700" }>About Us</NavLink></li>
          <li><NavLink to={"/department"} className={({isActive}) => isActive ? "text-teal-600" : "text-gray-700" }>Departments</NavLink></li>

          <li><NavLink to={"/service"} className={({isActive}) => isActive ? "text-teal-600" : "text-gray-700" }>Services</NavLink></li>
          
          <li><NavLink to={"/doctor"} className={({isActive}) => isActive ? "text-teal-600" : "text-gray-700" }>Doctors</NavLink></li>
          
          <li className="relative">
            <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center hover:text-teal-600 whitespace-nowrap">More Pages<CgChevronDown size={20}/></button>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-gray-600 font-medium mt-6 rounded shadow-lg px-12 z-20
             ">
                <li >
                  <Link to={"/morepage"} className="px-6 py-2 hover:text-teal-600 whitespace-nowrap">Department Details</Link></li>
                <li className="px-6 py-2 hover:text-teal-600"><NavLink to={"/servicedetail"} className={({isActive}) => isActive ? "text-teal-600" : "text-gray-700" }>Service Details</NavLink></li>
                <li className="px-6 py-2 hover:text-teal-600"><NavLink to={"/appointment"} className={({isActive}) => isActive ? "text-teal-600" : "text-gray-700" }>Appointment</NavLink></li>
                <li className="px-6 py-2 hover:text-teal-600"><Link to={"/testimonial"}>Testimonials</Link></li>
                <li className="px-6 py-2 hover:text-teal-600 whitespace-nowrap"><Link to={"/frequentQtn"}>Frequenty Asked Questions</Link></li>
                <li className="px-6 py-2 hover:text-teal-600"><Link to={"/galleryp"}>Gallery</Link></li>
                <li className="px-6 py-2 hover:text-teal-600"><Link to={"/terms"}>Terms</Link></li>
                <li className="px-6 py-2 hover:text-teal-600"><Link to={"/privacy"}>Privacy</Link></li>
                <li className="px-6 py-2 hover:text-teal-600 mb-4"><Link to={"/error404s"}>404</Link></li>
              </ul>
            )}
          </li>
         <li><NavLink to={"/contact"} className={({isActive}) => isActive ? "text-teal-600" : "text-gray-700"}>Contacts</NavLink> </li>
          <li><NavLink to={"/appointment"} className={({isActive}) => isActive ? "text-teal-600" : "text-gray-700"}>
              <button className="bg-teal-600 py-2 px-4 rounded-lg text-white hover:bg-teal-700">Appointment</button></NavLink> </li>
                  
          </ul>     
                    
        </div>      
      </div>

       <div className="lg:hidden items-center py-4 px-4 space-x-6 bg-white shadow sm:justify-center md:justify-center md:flex sm:flex top-8 left-0 right-0 z-50 fixed justify-between">
        <div className="flex justify-between items-center  bg-white flex-nowrap z-50 md:flex sm:flex lg:hidden w-full relative">
          <div><h1 className="text-blue-950 font-bold text-4xl">Medi<span className="font-bold text-teal-600 text-4xl ">Care</span> </h1></div>

        <div className="flex items-center space-x-4 flex-shrink-0">
          <ul>
            <Link to={"/appointment"}> <button className="bg-teal-600 py-2 px-4 rounded-lg text-white hover:bg-teal-600">Appointment</button></Link>
          </ul>
         
          <button onClick={() => setIsOpen(true)} className="lg:hidden ml-4">
            <RxHamburgerMenu size={28} />
           </button>
        </div>

         {isOpen && (
          
          <div className="flex flex-col items-left justify-items-start space-y-8 text-xl top-0 shadow-lg px-4 py-6  left-0 right-0 h-full bg-black/70 backdrop-md fixed w-full z-40 bg-opacity-20 inset-0">
            <div></div>
            <buttton className=" top-24 right-4 absolute z-50 text-white" onClick={() => setIsOpen(false)}><CgClose size={24}/></buttton>
            <ul className="py-20 px-8 text-left space-y-4 text-2xl text-gray-700 bg-white shadow-lg rounded-lg left-0 right-0 mt-20 relative">
            <li><Link to="/" onClick={() => setIsOpen(false)} className="hover:text-teal-600 text-teal-600">Home</Link></li>
            <li><Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-teal-600">AboutUs</Link></li>
            <li><Link to="/department" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Departments</Link></li>
            <li><Link to="/service" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Services</Link></li>
            <li><Link to="/doctor" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Doctors</Link></li>
            <li>
              <button
              onClick={() =>
                setIsMorePagesOpen(!isMorePagesOPen)
              } className="hover:text-teal-600 flex items-center justify-between w-full">More Pages
              {isMorePagesOPen ? <span className="p-1 flex items-center rounded-full hover:text-white hover:bg-teal-600"><CgChevronUp size={20}/></span> : <span className="p-1 rounded-full hover:text-white hover:bg-teal-600 flex items-center"><CgChevronDown size={20}/></span> }</button>
              {isMorePagesOPen && (
              <ul className="bg-gray-100 text-gray-600 mt-2 rounded shadow-md space-y-3 ml-4 px-6 py-4">
                <li className="hover:text-teal-600 whitespace-nowrap">
                  <Link to={"/morepage"}>Department Details</Link></li>
                <li className="hover:text-teal-600"><Link to={"/servicedetail"}>Service Details</Link></li>
                <li className="hover:text-teal-600"><Link to={"/appointment"}>Appointment</Link></li>
                <li className="hover:text-teal-600"><Link to={"/testimonial"}>Testimonials</Link></li>
               <li className="hover:text-teal-600 whitespace-nowrap"><Link to={"/frequentQtn"}>Frequenty Asked Questions</Link></li>
                <li className="hover:text-teal-600"><Link to={"/galleryp"}>Gallery</Link></li>
                <li className="hover:text-teal-600"><Link to={"/terms"}>Terms</Link></li>
                <li className="hover:text-teal-600"><Link to={"/privacy"}>Privacy</Link></li>
                <li className="hover:text-teal-600 mb-4"><Link to={"/error404s"}>404</Link></li>
              </ul>
              )}              
              </li>
            <li><Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-teal-600">Contacts</Link></li>
          </ul>
          </div>          
        )}
        </div>
        
       </div>
      
    </div>
  );
}

export default Navbars;