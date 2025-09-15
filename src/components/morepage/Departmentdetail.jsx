import React from 'react'
import Navbar from '../home/Navbar'
import Navbars from '../home/Navbars'
import Departmentdetailh from './Departmentdetailh'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'
import Departmentdetailcardiology from './Departmentdetailcardiology'
import Departmentexperts from './Departmentexperts'

function Departmentdetail() {
  return (
    <div>
      <Navbar/>
      <Navbars/>
      <Departmentdetailh/>
      <Departmentdetailcardiology/>
      <Departmentexperts/>
      <Infosection/>
      <Footersection/>
    </div>
  )
}

export default Departmentdetail