import React from 'react'
import Navbar from '../home/Navbar'
import Navbars from '../home/Navbars'
import Error404 from './Error404'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'


function Error404s() {
  return (
    <div>
      <Navbar/>
      <Navbars/>
      <Error404/>
      <Infosection/>
      <Footersection/>
    </div>
  )
}

export default Error404s