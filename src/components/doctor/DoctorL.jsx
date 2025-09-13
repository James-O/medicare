import React from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


export default function DoctorL() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            delay: 50,
        });
    }, []);
    return (

        <div className='bg-gradient-to-b from-white to-gray-50 flex justify-center pt-20 px-4'>
            <div className='flex flex-row flex-wrap gap-6 items-center' data-aos="fade-up" data-aos-delay="200">

                <div className='w-[160px] bg-white rounded-lg transition-transform duration-500 ease-in-out shadow-gray-300 hover:-translate-y-1 shadow-md border border-gray-300 p-4 flex flex-col flex-shrink-0'>
                    <div className='h-16 w-16 rounded-full  mx-auto mb-2 bg-cover bg-center'>
                        <img src='/images/staff-9.jpg'
                            alt='Doctor'
                            className='h-full w-full rounded-full overflow-hidden object-cover' />
                    </div >
                    {/*Doctor Info*/}
                    <div className='text-center'>
                        <p className='font-semibold text-sm'>Dr. Oliver Hayes</p>
                        <p className='text-xs font-semibold text-gray-500'>Pediatrics</p>

                    </div>
                </div>
                <div className='w-[160px] bg-white rounded-xl transition-transform duration-500 ease-in-out shadow-gray-300 hover:-translate-y-1 shadow-md border border-gray-300 p-4 flex flex-col flex-shrink-0'>
                    <div className='h-16 w-16 rounded-full mx-auto mb-2 bg-cover bg-center'>
                        <img src='/images/staff-11.jpg'
                            alt='Doctor'
                            className='h-full w-full rounded-full overflow-hidden object-cover' />
                    </div >
                    {/*Doctor Info*/}
                    <div className='text-center'>
                        <p className='font-semibold text-sm'>Dr. Noah Turner</p>
                        <p className='text-xs font-semibold text-gray-500'>Pediatrics</p>

                    </div>
                </div>
                <div className='w-[160px] bg-white rounded-xl transition-transform duration-500 ease-in-out shadow-gray-300 hover:-translate-y-1 shadow-md border border-gray-300 p-4 flex flex-col flex-shrink-0'>
                    <div className='h-16 w-16 rounded-full  mx-auto mb-2 bg-cover bg-center'>
                        <img src='/images/staff-5.jpg'
                            alt='Doctor'
                            className='h-full w-full rounded-full overflow-hidden object-cover' />
                    </div >
                    {/*Doctor Info*/}
                    <div className='text-center'>
                        <p className='font-semibold text-sm'>Dr. Liam Carter</p>
                        <p className='text-xs font-semibold text-gray-500'>Orthopedics</p>

                    </div>
                </div>

                <div className='w-[160px] bg-white rounded-xl transition-transform duration-500 ease-in-out shadow-gray-300 hover:-translate-y-1 shadow-md border border-gray-300 p-4 flex flex-col flex-shrink-0'>
                    <div className='h-16 w-16 rounded-full  mx-auto mb-2 bg-cover bg-center'>
                        <img src='/images/staff-10.jpg'
                            alt='Doctor'
                            className='h-full w-full rounded-full overflow-hidden object-cover' />
                    </div >
                    {/*Doctor Info*/}
                    <div className='text-center'>
                        <p className='font-semibold text-sm'>Dr. Amelia Brooks</p>
                        <p className='text-xs font-semibold text-gray-500'>Cadiology</p>

                    </div>
                </div>
                <div className='w-[160px] bg-white rounded-xl transition-transform duration-500 ease-in-out shadow-gray-300 hover:-translate-y-1 shadow-md border border-gray-300 p-4 flex flex-col flex-shrink-0'>
                    <div className='h-16 w-16 rounded-full  mx-auto mb-2 bg-cover bg-center'>
                        <img src='/images/staff-2.jpg'
                            alt='Doctor'
                            className='h-full w-full rounded-full overflow-hidden object-cover' />
                    </div >
                    {/*Doctor Info*/}
                    <div className='text-center'>
                        <p className='font-semibold text-sm'>Dr. Harper Lane</p>
                        <p className='text-xs font-semibold text-gray-500'>Dermatology</p>

                    </div>
                </div>
                <div className='w-[160px] bg-white rounded-xl transition-transform duration-500 ease-in-out shadow-gray-300 hover:-translate-y-1 shadow-md border border-gray-300 p-4 flex flex-col flex-shrink-0'>
                    <div className='h-16 w-16 rounded-full  mx-auto mb-2 bg-cover bg-center'>
                        <img src='/images/staff-3.jpg'
                            alt='Doctor'
                            className='h-full w-full rounded-full overflow-hidden object-cover' />
                    </div >
                    {/*Doctor Info*/}
                    <div className='text-center'>
                        <p className='font-semibold text-sm'>Dr. Lucas Grant</p>
                        <p className='text-xs font-semibold text-gray-500'>Pulmonology</p>

                    </div>
                </div>

            </div >
        </div>
    )
}
