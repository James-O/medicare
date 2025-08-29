import React from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";


function Navbarss() {
  return (
    <div>
      <div className="top-0 fixed left-0 right-0 z-50">
        <h1 className="flex left-0 right-0 py-1 top-0 bg-teal-600 items-center gap-2 text-center text-white justify-center font-bold"><CgChevronLeft size={20}/> MediCare <CgChevronRight  size={20}/></h1>        
        </div>
    </div>
  );
}

export default Navbarss;