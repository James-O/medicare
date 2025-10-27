import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BsCalendar4Event, BsFillCalendarHeartFill } from "react-icons/bs";

export default function DoctorBio() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            delay: 50,
        });
    }, []);

    const [activeTab, setActiveTab] = useState("bio");

    return (
        <div className="max-w-6xl mx-auto mt-20 flex flex-col md:flex-row gap-8 px-4">
            {/* Doctor Card */}
            <div
                className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                {/* Image */}
                <div className="h-64 w-full overflow-hidden">
                    <img
                        src="/images/staff-3.jpg"
                        alt="Dr. Henry James"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Body */}
                <div className="p-4">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">
                        Dr. Henry James
                    </h3>
                    <p className="font-medium text-gray-700 mb-3">
                        Oncology • MBBS, MD
                    </p>

                    <div className="flex items-center gap-2 mb-2">
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold border border-teal-700 bg-teal-100 text-teal-700">
                            Board Certified
                        </span>
                        <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold border border-teal-700 bg-teal-100 text-teal-700">
                            8 Years
                        </span>
                    </div>
                </div>
            </div>

            {/* Tabs + Content */}
            <div className="flex-1">
                {/* Tabs */}
                <div className="flex space-x-2 mb-4">
                    {["bio", "schedule", "reviews"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-full font-semibold shadow-sm transition ${activeTab === tab
                                ? "bg-teal-500 text-white"
                                : "bg-white border border-gray-300 text-gray-800"
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Content Box */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
                    {activeTab === "bio" && (
                        <div>
                            <p className="text-gray-700 mb-4">
                                Fugiat proident aliqua laboris, excepteur sunt ad pariatur
                                occaecat. Veniam minim eu laboris, magna irure velit anim
                                excepteur exercitation.
                            </p>
                            <ul className="list-none text-gray-700 space-y-2">
                                <li>✔ Special interest in immunotherapy</li>
                                <li>✔ Member of ASCO</li>
                                <li>✔ Community outreach programs</li>
                            </ul>
                        </div>
                    )}
                    {activeTab === "schedule" && (
                        //* Schedule Grid 

                        < div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="flex justify-between bg-teal-50 p-3 rounded-lg">
                                <span className="font-medium">Mon</span>
                                <span>9:00 AM - 1:00 PM</span>
                            </div>
                            <div className="flex justify-between bg-teal-50 p-3 rounded-lg">
                                <span className="font-medium">Tue</span>
                                <span>12:00 PM - 6:00 PM</span>
                            </div>
                            <div className="flex justify-between bg-teal-50 p-3 rounded-lg">
                                <span className="font-medium">Wed</span>
                                <span>9:00 AM - 3:00 PM</span>
                            </div>
                            <div className="flex justify-between bg-teal-50 p-3 rounded-lg">
                                <span className="font-medium">Thu</span>
                                <span>10:00 AM - 4:00 PM</span>
                            </div>
                            <div className="flex justify-between bg-teal-50 p-3 rounded-lg">
                                <span className="font-medium">Fri</span>
                                <span className="text-black font-medium">Closed</span>
                            </div>
                        </div>
                    )}
                    {activeTab === "reviews" && (
                        <p className="text-gray-700">
                            <span className="text-xl font-semibold text-teal-800">★★★★☆</span>
                            <span className="ml-2 font-medium text-gray-800">4.5/5</span>
                            <span className="ml-2 text-gray-500">• 32 reviews</span>
                        </p>
                    )}
                    Id magna consequat minim in, lorem dolore fugiat. Officia irure ex anim, velit nulla cupidatat laboris enim.
                    <button className="mt-4 flex items-center gap-2 font-semibold bg-teal-500 text-white px-5 py-2 rounded-lg shadow hover:bg-teal-600 transition">
                        <BsCalendar4Event/> Reserve a Slot
                    </button>
                </div>
            </div>
        </div >
    );
}

