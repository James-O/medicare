import React, { useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default function DoctorIG() {
    useEffect(() => {
            Aos.init({ duration: 1000, once: true });
        }, []);
    const [activeFilter, setActiveFilter] = useState("All");

    const Doctors = [
        {
            id: 1,
            name: 'Dr. Amelia Brooks',
            title: 'Cardiology.MD,FACC',
            desc: "Nostrud tempor magna minim excepteur, id cillum laboris aute.",
            department: 'Cardiology',
            tag: 'Senior Consultant',
            image: '/images/staff-3.jpg',
        },
        {
            id: 2,
            name: 'Dr. Noah Turner',
            title: 'Pedriatrics.DO',
            desc: "Quis irure pariatur sed eiusmod, elit laboris consequat cupidatat.",
            department: 'Pediatrics',
            image: '/images/staff-7.jpg',
        },
        {
            id: 3,
            name: 'Dr. Sofia Bennett',
            title: 'Dermatologist.MBBS.MD',
            desc: "Dolor commodo laboris lorem ad, amet consequat mollit deserunt.",
            department: 'Dermatology',
            tag: 'New',
            image: '/images/staff-11.jpg',
        },
        {
            id: 4,
            name: 'Dr. Ethan Cole',
            title: 'Orthopaedic Surgeon.MD,FRSC',
            desc: "Velit laborum minim laboris, eiusmod elit irure in exercitation.",
            department: 'Orthopaedics',
            image: '/images/staff-5.jpg',
        },
        {
            id: 5,
            name: 'Dr. Liam Carter',
            title: 'Sport Medicine.MD',
            desc: "Deserunt pariatur eiusmod duis, officia aute laboris consectetur.",
            department: 'Orthopaedics',
            image: '/images/staff-6.jpg',
        },
        {
            id: 6,
            name: 'Dr. Maya Patel',
            title: 'Intervention Cardiologist.MD',
            desc: "Cupidatat fugiat sint enim laboris, sed do ut aliquip dolor.",
            department: 'Cardiology',
            image: '/images/staff-10.jpg',
        },
        {
            id: 7,
            name: 'Dr. Oliver Hayes',
            title: 'Pediatrics Specialist.MD',
            desc: "Exercitation id ea nisi fugiat, ullamco veniam cillum nostrud.",
            department: 'Pediatrics',
            image: 'images/staff-2.jpg',
        },
        {
            id: 8,
            name: 'Dr. Harper Lane',
            title: 'Cosmetic Dermatologist.MD',
            desc: "Aliquip laboris anim minim, irure commodo qui occaecat velit.",
            department: 'Dermatology',
            image: '/images/staff-9.jpg',
        },
    ];

    const departments = ["All", "Cardiology", "Pediatrics", "Dermatology", "Orthopaedics"];

    return (
        <div className="w-full flex justify-center py-10 gap-8 bg-gray-50 px-8">
            <div className="max-w-6xl w-full flex flex-col items-center px-4">
                {/* Filter Buttons */}
                <div className="flex gap-3 mb-6 flex-wrap ">
                    {departments.map((dept) => (
                        <button
                            key={dept}
                            onClick={() => setActiveFilter(dept)}
                            className={`px-5 py-2 rounded-full border text-sm font-medium transition 
              ${activeFilter === dept
                                    ? "bg-teal-600 text-white"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-teal-50"}`}
                        >
                            {dept}
                        </button>
                    ))}
                </div>
            

            {/* Doctor Cards */}
            <div className="grid gap-x-28 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center transition-all ease-in-out duration-500 hover:" data-aos="fade-up" data-aos-delay='200'>
                {Doctors
                    .filter((doc) => activeFilter === "All" || doc.department === activeFilter)
                    .map((doc) => (
                        <div
                            key={doc.id}
                            className="bg-white rounded-xl shadow hover:shadow-lg w-72 transition-transform duration-500 overflow-hidden text-sm"
                        >
                            {/* Image */}
                            <div className="relative">
                                <img
                                    src={doc.image}
                                    alt={doc.name}
                                    className="w-full h-48 object-cover"
                                />
                                {doc.tag && (
                                    <span className="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                                        {doc.tag}
                                    </span>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col gap-2 ">
                                <h3 className="text-base font-semibold text-gray-900">{doc.name}</h3>
                                <p className="text-sm text-gray-500 ">{doc.title}</p>
                                <p className="text-gray-600 text-sm ">{doc.desc}</p>
                                <span className="inline-block w-fit text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                                    {doc.department}
                                </span>

                                <div className="flex flex-1 gap-3 mt-auto">
                                    <button className="bg-teal-600 text-center flex-1 text-white px-3 py-1 rounded-lg shadow hover:bg-teal-700 transition text-sm font-medium">
                                        Book Appointment
                                    </button>
                                    <button className="border text-center flex-1 border-gray-300 text-gray-700 px-3 py-2 rounded-lg hover:bg-gray-100 transition text-sm font-medium">
                                        View Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            </div>
        </div>
    );
}
