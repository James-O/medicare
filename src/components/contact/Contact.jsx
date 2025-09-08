import React from 'react'
import Navbar from '../home/Navbar'
import Navbars from '../home/Navbars'
import Contacth from './Contacth'
import Infosection from '../home/Infosection'
import Footersection from '../home/Footersection'
import Contactaddress from './Contactaddress'
import Contactmaps from './Contactmaps'

function Contact() {
  return (
    <div>
      <Navbar/>
      <Navbars/>
      <Contacth/>
      <Contactaddress/>
      <Contactmaps/>
      <Infosection/>
      <Footersection/>
    </div>
  )
}

export default Contact