import React from 'react'
import About from '../components/about/About'

function AboutUs() {
  return (
    <>
    {/*  Exceptional Care Section */}
      <section className="exceptional-care">
        <div className="care-container">
          <div className="care-text">
            <h2>Exceptional Care for Your Health Journey</h2>
            <p>
              Discover comprehensive healthcare services delivered with compassion
              and expertise. Our dedicated team is committed to providing
              personalized medical care that puts you first.
            </p>
            <div className="care-buttons">
              <a href="#" className="btn-primary">Schedule Consultation</a>
              <a href="#" className="btn-secondary">Explore Services →</a>
            </div>
          </div>
          <div className="care-image">
            <img src="hospital.jpg"alt="hospital" width="350px" height="250px"/><br />


          </div>
        </div>
      </section>
    <div>
        <About />
    </div>
    </>
  )
}

export default AboutUs