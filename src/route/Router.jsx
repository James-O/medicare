import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import Homes from '../Pages/Homes'
import AboutUS from '../Pages/AboutUs'

=======
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
>>>>>>> 6e0e0a6b97dba759ad269fda161c4efdc0e0d4cf


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homes />} />
<<<<<<< HEAD
        <Route path="/about" element={<AboutUS />} />
=======
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

>>>>>>> 6e0e0a6b97dba759ad269fda161c4efdc0e0d4cf
      </Routes>
    </BrowserRouter>
  )
}

export default Router


