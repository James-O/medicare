import React from 'react'
import Navbar from '../home/Navbar'
import Navbars from '../home/Navbars'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'
import Doctorssection from './Doctorssection'


function Doctor() {
  return (
    <div>
      <Navbar/>
      <Navbars/>
      <Doctorssection/>
      <Infosection/>
      <Footersection/>
    </div>
  )
}

export default Doctor