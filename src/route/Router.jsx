import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homes from '../pages/Homes'
import AboutUs from '../pages/AboutUs'
import Departments from '../pages/Departments'
import Services from '../pages/Services'
import Doctors from '../pages/Doctors'
import Morepages from '../pages/MorePages'
import Appointments from '../pages/Appointments'
import Contacts from '../pages/Contacts'
import MorePages from '../pages/MorepagesSD'
import Testimonialss from '../pages/Testimonialss'
import Frequentlyasked from '../pages/Frequentlyasked'
import Gallerys from '../pages/Gallerys'
import Termss from '../pages/Termss'
import Privacys from '../pages/Privacys'
import Error404ss from '../pages/Error404ss'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/department" element={<Departments />}/>
        <Route path="/service" element={<Services />}/>
        <Route path="/doctor" element={<Doctors />}/>
        <Route path="/morepage" element={<Morepages />}/>
        <Route path="/contact" element={<Contacts />}/>
        <Route path="/appointment" element={<Appointments />}/>
        <Route path="/servicedetail" element={<MorePages/>}/>
        <Route path="/testimonial" element={<Testimonialss/>}/>
        <Route path="frequentQtn" element={<Frequentlyasked/>}/>
        <Route path="galleryp" element={<Gallerys/>}/>
        <Route path="terms" element={<Termss/>}/>
        <Route path="privacy" element={<Privacys/>}/>
        <Route path="error404s" element={<Error404ss/>}/>
        </Routes >
    </BrowserRouter>
  )
}

export default Router