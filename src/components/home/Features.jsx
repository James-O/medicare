import React, { useEffect } from 'react'
import { FaHeartCrack } from 'react-icons/fa6'
import {LuHeartPulse, LuShield } from 'react-icons/lu'
import {Brain, HeartIcon, HeartPulse, HeartPulseIcon, Phone, Shield, ShieldBan, ShieldHalfIcon} from "lucide-react"
import AOS from "aos"
function Features() {
    const items = [
        {
            id: 1,
            title: "Cardiology Excellence",
            description: "Advanced cardiac care with state-of-the-art diagnostic equipment and experienced cardiologists dedicated to heart health.",
            icon:<HeartPulseIcon size={40} className='fill-teal-600 text-white hover:fill-white hover:text-teal-600'/>

        },

        {
            id: 2,
            title: "Neurology Center",
            description: "Comprehensive neurological services including diagnosis and treatment of brain, spine, and nervous system conditions.",
            icon:<Brain size={40}/>,
        },
        {
            id: 3,
            title: "Preventive care",
            description: "Proactive health screenings and wellness programs designed to prevent illness and maintain optimal health.",
            icon:<ShieldHalfIcon size={40}/>
        },


    ]

    useEffect(()=>{
        const animate =()=>{
            AOS.init();
        }
        animate()
    },[])
    return (
        <div className='bg-gray-50 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-14'>
                {
                    items.map((item) => (
                        <div key={item.id} className='bg-white rounded-lg p-8 text-center flex flex-col items-center hover:shadow-xl '> 
                        <div className='mb-8'>
                            <h2 className='w-16 h-16 flex items-center justify-center rounded-full bg-teal-50 text-teal-600 text-xl hover:bg-teal-800 hover:text-white'>{item.icon}</h2> 
                        </div>
                            <h1 className='text-lg font-semibold mb-3'>{item.title}</h1>
                            <p className='text-gray-600 text-sm mb-6'>{item.description}</p>
                            <button className='text-teal-600 font-medium hover:underline inline-flex items-center gap-1'>Learn More</button>
                        </div>
                    ))
                }

            </div>
            <div className='mx-28'>
                <NeedAssistnce/>
            </div>

        </div>
    )
}

export default Features


function NeedAssistnce() {
    return (
        <div className=' bg-teal-600 text-white rounded-lg px-8 py-6 flex flex-col md:flex-row items-center gap-6' data-aos="zoom-in">
            <div className='flex items-center justify-center w-12 h-12 rounded-full bg-white/20'><Phone/></div>
            <div>
                <h1 className='text-lg font-semibold'>Need Immediate Assistance?</h1>
                <p className='text-white/80'>Our medical team is available around the clock for urgent consultations and emergency support.</p>
            </div>
            <div className='bg-white text-gray-800 px-5 py-3 rounded-lg shadow flex items-center gap-2 font-semi'>
                <Phone/>
                <span>(555)123-4567</span>
            </div>
            <div className=' font-medium'>
                <h1 className='border-b border-white'>Get Directions</h1>
            </div>
        </div>
    )
}
