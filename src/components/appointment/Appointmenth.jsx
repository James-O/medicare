import React, { useEffect, useState } from 'react';
import { BsShieldCheck, BsStopwatch, BsPersonFill, BsCalendarEvent, BsCalendarPlus } from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa6'
import { FaRegCalendarCheck, FaRegCircleCheck } from 'react-icons/fa6'
import { IoIosArrowDown } from "react-icons/io";
import { FaHeartbeat } from "react-icons/fa";
import Aos from 'aos';

function Appointmenth() {
  const [selectDepartment, setSelectDepartment] = useState("Select Department");
  const departmentOptions = [
    "Select Department",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pedriatics",
    "Dermatology",
    "General Medicine",
  ];

    const [selectDoctor, setSelectDoctor] = useState("Select Doctor");
    const doctorOptions =[
      "Select Doctor",
      "Dr. Sarah Johnson",
      "Dr. Michael Martinez",
      "Dr. Lisa Chen",
      "Dr. Raj Patel",
      "Dr. Emily Williams",
      "Dr. David Thompson",
    ];

    useEffect(() => {
      Aos.init({
        duration: 1000,
        delay: 100,
      });
    }, []);


  return (
    <div>
      <div data-aos="zoom-in" className='p-20 text-center mt-10 md:mt-35 mx-0 md:mx-10'>
        <h1 className='text-4xl font-bold mb-5'>Appointment</h1>
        <p className='text-[18px] text-gray-700 leading-relaxed items-center justify-center'>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. 
          Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>
      </div>

      <div data-aos="fade-down-right" className='left-0 right-0 py-4 bg-gray-100 px-6 max-w-7xl lg:px-20 mt-7'>
        <div className='flex'>
          <ul className='flex flex-row gap-3'>
            <li className='text-teal-600'>
              <a href='/'>Home</a>
            </li>
            <li className=''>
              /  <a href='/appointment'>Appointment</a>
            </li>
          </ul>
        </div>
      </div>


      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 h-fit mt-8'>

        <div data-aos="fade-up" className='mt-10 md:mr-6 md:ml-18 px-4' >
          <h3 className='text-3xl font-bold mb-3'>Quick & Easy Online Booking</h3>
          <p className='text-[#363f40] text-[16px] mb-6 leading-relaxed'>Book your appointment in just a few simple steps. 
            Our healthcare professionals are ready to provide you with the best medical care tailored to your needs.
          </p>

          <div className='space-y-5'>

            <div className='flex gap-3'>
              <div className='w-1/12'>
                <div className='flex rounded-full w-15 h-15 translate-y-5 lg:translate-y-0 items-center justify-center text-center text-[#099aa7] bg-[#099aa71a]'>
                  <FaRegCalendarCheck size={25}/>
                </div>
              </div>

              <div className='ml-8'>
                <h5 className='text-[#1f2f31] text-lg font-bold mb-2'>Flexible Scheduling</h5>
                <p className='text-[#363f40] text-[15px] leading-6 mb-0'>Choose from available time slots that fit your busy schedule</p>
              </div>
            </div>


            <div className='flex gap-2 items-center'>
              <div className='w-1/12'>
                 <div className='flex rounded-full w-15 h-15 translate-y-5 lg:translate-y-0 items-center justify-center text-center text-[#099aa7] bg-[#099aa71a]'>
                    <BsStopwatch size={25}/>
                  </div>
              </div>
             
              <div className='ml-8'>
                <h5 className='text-[#1f2f31] text-lg font-bold mb-2'>Quick Response</h5>
                <p className='text-[#363f40] text-[15px] leading-6 mb-0'>Get confirmation within 15 minutes of submitting your request</p>
              </div>
            </div>


            <div className='flex gap-3 items-center'>
              <div className='w-1/12'>
                <div className='flex rounded-full w-15 h-15 translate-y-5 lg:translate-y-0 items-center justify-center text-center text-[#099aa7] bg-[#099aa71a]'>
                  <BsShieldCheck size={25}/>
                </div>
              </div>

              <div className='ml-8'>
                <h5 className='text-[#1f2f31] text-lg font-bold mb-2'>Expert Medical Care</h5>
                <p className='text-[#363f40] text-[15px] leading-6 mb-0'>Board-certified doctors and specialists at your service</p>
              </div>
            </div>


          </div>

          <div className='inline-block bg-[#099aa71a] rounded-2xl p-6 my-6 border-l-4 border-l-[#099aa7] space-y-1 px-8'>
            <div className='flex gap-2'>
              <i className='text-[#099aa7] transform transition-transform translate-y-1.5 mr-0.5'><FaPhone /></i>
              <h6>Emergency Hotline</h6>
            </div>
            <p className='text-[1.0rem] leading-6 '>Call <strong className='text-[#099aa7]'>+1 (555) 911-4567</strong> for urgent medical assistance</p>
          </div>

        </div>

        
          <form data-aos="fade-up" 
            data-aos-delay="300"
            className='bg-white p-6 rounded-2xl mt-15 shadow-2xl md:mr-15 md:ml-0 ml-4 mr-4 h-fit'>
            <div className='space-y-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                  <input 
                  type="text" 
                  id='name' 
                  placeholder="Your Full Name"
                  required
                  autoComplete='name' 
                  className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-[#099aa7] focus:shadow focus:ring-3 focus:ring-[#a2ebf25d] resize-none"/>
                </div>

                <div>
                  <input 
                  type="text" 
                  id='email'
                  name='email'
                  required
                  autoComplete='email'
                  placeholder="Your Email" 
                  className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-[#099aa7] focus:shadow focus:ring-3 focus:ring-[#a2ebf25d] resize-none"/>
                </div>

                <div>
                  <input 
                  type="text" 
                  placeholder="Your Phone Number"
                  id='phone number'
                  name='phone number'
                  required
                  autoComplete='phone number' 
                  className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:outline-none focus:border-[#099aa7] focus:shadow focus:ring-3 focus:ring-[#a2ebf25d] resize-none"/>
                </div>

                <div className=''>
                  <div className='relative flex items-center justify-between'>
                    <select id="department" value={selectDepartment}
                      onChange={(e) =>
                      setSelectDepartment(e.target.value)
                      } 
                      className='w-full pl-4 pr-4 py-3 text-gray-600 rounded-lg appearance-none focus:shadow focus:ring-3 focus:ring-[#a2ebf25d] border border-gray-300 font-normal focus:outline-none resize-none'>
                      {departmentOptions.map((department, idx) =>
                      (<option key={idx} value={department}>
                        {department}
                      </option>)
                      )}
                    </select>
                    <div>
                      <i className='absolute transform -translate-y-2 right-3 text-gray-400'><IoIosArrowDown /></i>
                    </div>                        
                  </div>
                </div>

                <div>
                  <input type="date" placeholder="dd|mm|yyyy" className="border border-gray-300 rounded-lg w-full px-4 py-3 focus:border-[#099aa7] focus:ring-[#a2ebf25d] focus:shadow focus:outline-none focus:ring-3 resize-none"/>
                </div>

                <div className=''>
                  <div 
                    className='relative flex items-center justify-between'>
                    <select id='doctor' 
                      value={selectDoctor}
                      onChange={(e) => 
                      setSelectDoctor(e.target.value)
                      }
                      
                      className='w-full pl-4 pr-4 py-3 text-gray-600 rounded-lg focus:border-[#099aa7] focus:shadow focus:ring-3 focus:ring-[#a2ebf25d] border border-gray-300 font-normal appearance-none focus:outline-none resize-none'>
                      {doctorOptions.map((doctor, idx) =>
                      (<option key={idx} value={doctor}>{doctor}</option>)
                      )}
                    </select>
                    <div>
                      <i className='absolute transform -translate-y-2 right-3 text-gray-400'><IoIosArrowDown /></i>
                    </div> 
                  </div>
                </div>



              </div>
              <div>
                <textarea
                required
                autoComplete='message'
                placeholder="Please describe your symptoms or reason for visit (optional)" rows={6} className="border md:whitespace-nowrap text-[16px] border-gray-300 rounded-lg w-full px-4 py-3 focus:shadow focus:outline-none focus:ring-3 focus:ring-[#a2ebf25d] resize-none"></textarea>
              </div>
              <div className='inline-flex gap-3 bg-[#099aa7] w-full py-3 px-6 items-center justify-center text-center rounded-lg transform transition-all hover:-translate-y-0.5 border border-[#099aa7]'>
                <span><BsCalendarPlus className='text-white left-6 w-5 h-5' /></span>
                <button type='submit' className="text-white text-lg font-bold whitespace-nowrap">
                  Book Appointment
                </button>
              </div>
              
            </div>

            
          </form>
        

      </div>
      <div 
        className='grid lg:grid-cols-4 md:grid-cols-1 mx-10 mb-10'>

        <div data-aos="fade-up" 
        data-aos-anchor-placement="bottom-bottom" className='flex flex-col p-6 h-fit justify-center text-center items-center m-4'>
          <div className='flex mb-6 w-10 h-10 rounded-full text-white bg-[#099aa7] font-bold mx-4 items-center justify-center'>
            <span className='text-center text-lg'>1</span>
          </div>
          <i className='mb-6 text-[#099aa7]'><BsPersonFill className='w-10 h-10 font-normal leading-4 '/></i>
          <h5 className='text-xl font-bold mb-3'>Fill Details</h5>
          <p className='text-[#363f40cc] text-sm leading-relaxed mb-0'>Provide your personal information and select your preferred department</p>
        </div>


        <div data-aos="fade-up" 
        data-aos-anchor-placement="bottom-bottom" className='flex flex-col p-6 h-fit justify-center text-center items-center m-4'>
          <div className='flex mb-6 w-10 h-10 rounded-full text-white bg-[#099aa7] font-bold mx-4 items-center justify-center'>
            <span className='text-center text-lg'>2</span>
          </div>
          <i className='mb-6 text-[#099aa7]'><BsCalendarEvent className='w-10 h-10 font-normal leading-4'/></i>
          <h5 className='text-xl font-bold mb-3'>Choose Date</h5>
          <p className='text-[#363f40cc] text-sm leading-relaxed mb-0'>Select your preferred date and time slot from available options</p>
        </div>


        <div data-aos="fade-up" 
        data-aos-anchor-placement="bottom-bottom" className='flex flex-col p-6 h-fit justify-center text-center items-center m-4'>
          <div className='flex mb-6 w-10 h-10 rounded-full text-white bg-[#099aa7] font-bold mx-4 items-center justify-center'>
            <span className='text-center text-lg'>3</span>
          </div>
          <i className='mb-6 text-[#099aa7]'><FaRegCircleCheck className='w-10 h-10 font-normal leading-4'/></i>
          <h5 className='text-xl font-bold mb-3'>Confirmation</h5>
          <p className='text-[#363f40cc] text-sm leading-relaxed mb-0'>Receive instant confirmation and appointment details via email or SMS</p>
        </div>


        <div data-aos="fade-up" 
        data-aos-anchor-placement="bottom-bottom" className='flex flex-col h-fit p-6 justify-center text-center items-center m-4'>
          <div className='flex mb-6 w-10 h-10 rounded-full text-white bg-[#099aa7] font-bold mx-4 items-center justify-center'>
            <span className='text-center text-lg'>4</span>
          </div>
          <i className='mb-6 text-[#099aa7]'><FaHeartbeat className='w-10 h-10 font-normal leading-4'/></i>
          <h5 className='text-xl font-bold mb-3'>Get Treatment</h5>
          <p className='text-[#363f40cc] text-sm leading-relaxed mb-0'>Visit our clinic at your scheduled time and receive quality healthcare</p>
        </div>

      </div>
    </div>
  )
}

export default Appointmenth