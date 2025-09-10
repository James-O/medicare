import React from 'react'
import Navbar from '../home/Navbar'
import Navbars from '../home/Navbars'
import Hdepartment from './Hdepartment'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'
import Hdepartmentsnd from './Hdepartmentsnd'

function Department() {
  return (
    <div className="lg:min-h-screen md:min-h-screen sm:min-h-screen" data-aos-easing="ease-in-out" data-aos-duration="600" data-aos-delay="0">
      <Navbar/>
      <Navbars/>
      <Hdepartment/>
      <Hdepartmentsnd/>
      <Infosection/>
      <Footersection/>
    </div>
  )
}

export default Department