import React from 'react'
import Navbar from '../home/Navbar'
import Navbars from '../home/Navbars'
import Doctorh from './Doctorh'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'
import DoctorIG from './DoctorIG'
import DoctorA from './DoctorA'
import DoctorL from './DoctorL'
import DoctorBio from './DoctorBio'
import Doctorl from './doctorI'


function Doctor() {
  return (
    <div>
      <Navbar/>
      <Navbars/>
      <Doctorh/>
      <Doctorl/>
      <DoctorIG/>
      <DoctorA/>
      <DoctorL/>
      <DoctorBio/>
      <Infosection/>
      <Footersection/>
    </div>
  )
}

export default Doctor