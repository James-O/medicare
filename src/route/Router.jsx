import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homes from '../pages/Homes'
import AboutUs from '../pages/AboutUs'
import Departments from '../pages/Departments'
import Services from '../pages/Services'
import Doctors from '../pages/Doctors'
import MorePages from '../pages/MorePages'
import MorepagesSD from '../pages/MorepagesSD'
import Appointments from '../pages/Appointments'
import Testimonialss from '../pages/Testimonialss'
import Frequentlyasked from '../pages/Frequentlyasked'
import Gallerys from '../pages/Gallerys'
import Termss from '../pages/Termss'
import Privacys from '../pages/Privacys'
import Error404ss from '../pages/Error404ss'
import Contacts from '../pages/Contacts'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/department" element={<Departments/>}/>
        <Route path="service" element={<Services/>}/>
        <Route path="doctor" element={<Doctors/>}/>
        <Route path="morepage" element={<MorePages/>}/>
        <Route path="servicedetail" element={<MorepagesSD/>}/>
        <Route path="appointment" element={<Appointments/>}/>
        <Route path="testimonial" element={<Testimonialss/>}/>
        <Route path="frequentQtn" element={<Frequentlyasked/>}/>
        <Route path="galleryp" element={<Gallerys/>}/>
        <Route path="terms" element={<Termss/>}/>
        <Route path="privacy" element={<Privacys/>}/>
        <Route path="error404s" element={<Error404ss/>}/>
        <Route path="contact" element={<Contacts/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default Router


