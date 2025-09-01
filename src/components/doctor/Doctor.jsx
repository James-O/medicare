import React from 'react'
import Navbar from '../home/Navbar'
import Navbars from '../home/Navbars'
import Doctorh from './Doctorh'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'

function Doctor() {
  return (
    <div>
      <Navbar/>
      <Navbars/>
      <Doctorh/>
      <Infosection/>
      <Footersection/>
    </div>
  )
}

export default Doctor