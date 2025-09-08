import React from 'react'
import Navbar from '../home/Navbar'
import Navbars from '../home/Navbars'
import ServicedetailH from './ServicedetailH'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'


function Servicedetail() {
  return (
    <div>
      <Navbar/>
      <Navbars/>
      <ServicedetailH/>
      <Infosection/>
      <Footersection/>
    </div>
  )
}

export default Servicedetail