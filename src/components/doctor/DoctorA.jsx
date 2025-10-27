import { Calendar, CalendarCheck, GraduationCap, Hospital } from 'lucide-react'
import { useEffect } from 'react'
import { BsAward, BsFillFileEarmarkTextFill } from 'react-icons/bs'
import Aos from "aos";
import "aos/dist/aos.css";


    

export default function DoctorA() {
    useEffect(() => {
            Aos.init({ duration: 1000, delay: 50, });
        }, []);
    return (
        <div className='max-w-6xl mx-auto bg-white mt-32 rounded-3xl overflow-hidden flex flex-col md:flex-row px-4' data-aos="fade-up" data-aos-delay='200'>
            <div className='relative md:w-1/2'>
                <img src="/images/staff-11.jpg"
                    alt="Doctor"
                    className='w-full h-full object-cover'/>
                <span className='absolute bottom-3 left-3 bg-white px-3 py-1 rounded-2xl h-10 font-bold text-shadow-white text-sm shadow flex items-center gap-2'>
                    <span className='w-4 h-4 bg-teal-600 rounded-full'></span>
                    Avaliable this week
                </span>

            </div>
            {/* Content */}
            <div className='p-10 md:w-1/2 flex flex-col justify-center'>

                {/*Tags*/}
                <div className='flex gap-2 mb-3 flex-wrap'>
                    <span className='bg-teal-600 text-white px-3 py-1 text-sm rounded-full font-medium'>Chief Surgeon</span>
                    <span className='px-3 py-1 font-medium text-sm rounded-full text-teal-800 bg-teal-100'>12+ Years Experience</span>
                    <span className='px-3 py-1 font-medium rounded-full text-teal-800 text-sm bg-teal-100'>Board Certified</span>
                </div>

                {/*Doctor Info*/}
                <div>
                    <h2 className='text-2xl font-bold font-sans text-gray-800'>Dr. Natalia Rivera</h2>
                    <p className='text-gray-500 mb-4'>General Surgery • MD, FACS</p>
                    <p className='text-gray-600 mb-4'>Commodo incididunt aliqua minim, eiusmod in laboris nulla. Amet do occaecat quis, excepteur in magna id dolore incididunt. Tempor in aute ullamco, irure officia aliqua nostrud.</p>
                </div>
                {/* Bullet Points */}
                <ul className="space-y-2  items-center gap-2 text-gray-700 mb-6 ">
                    <li className='flex'> <GraduationCap className=' text-teal-700' />Residency: St. Mary's Medical Center</li>
                    <li className='flex'><Hospital className='text-teal-700' /> Fellowship: Advanced Laparoscopy</li>
                    <li className='flex'><BsAward className='text-teal-700' /> Publications: 14 peer-reviewed articles</li>
                </ul>
                {/* Contact Button */}
                <div className='flex gap-8'>
                    <button className='bg-teal-600 text-white transition-transform duration-500 ease-in-out hover:-translate-y-1 font-semibold px-4 py-2 rounded-md flex items-center gap-2 hover:bg-teal-700 shadow-teal-700'>
                        <CalendarCheck /> Book Appointment
                    </button>
                    <button className='bg-gray-100 text-teal-700 font-semibold border border-teal-600 transition-transform duration-500 ease-in-out hover:-translate-y-1 shadow-teal-700 px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-200'>
                        <BsFillFileEarmarkTextFill className=''/>View CV
                    </button>

                </div>
            </div>
        </div>
    )
}
