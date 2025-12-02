import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export default function Alldoctors() {
  useEffect(() => {
  AOS.init({
    duration: 100,   // animation duration in ms
    once: true,      // animation only happens once
    easing: "ease-in-out",
  });
}, []);
  const [category, setCategory] = useState("All");
  const [displayImages, setDisplayImages] = useState([]);
  const [resetKey, setResetKey] = useState(0);

  // Doctor data (you can replace with real doctors)
  const images = [
    {
      id: 1,
      consultant: "Senior consultant",
      src: "/images/Robert-staff.webp",
      category: "Cardiology",
      title: "Dr. Amelia Brooks",
      subtitle: "Cardiologist • MD, FACC",
      desc: "Nostrud tempor magna minim excepteur, id cillum laboris aute proident.",
      specialist: "Cardiology",
    },
    {
      id: 2,
      src: "/images/staff-7.jpg",
      category: "Pediatrics",
      title: "Dr. Noah Turner",
      subtitle: "Pediatrician • DO",
      desc: "Quis irure pariatur sed eiusmod, elit laboris consequat cupidatat.",
      specialist: "Pediatrics",
    },
    {
      id: 3,
      consultant: "NEW",
      src: "/images/staff-12.webp",
      category: "Dermatology",
      title: "Dr. Sofia Bennett",
      subtitle: "Dermatologist • MBBS, MD",
      desc: "Dolor commodo laboris lorem ad, amet consequat mollit deserunt.",
      specialist: "Dermatology",
    },
    {
      id: 4,
      src: "/images/staff-5.jpg",
      category: "Orthopedics",
      title: "Dr. Ethan Cole",
      subtitle: "Orthopedic Surgeon • MS, FRCS",
      desc: "Velit laborum minim laboris, eiusmod elit irure in exercitation.",
      specialist: "Orthopedics",
    },
    {
      id: 5,
      src: "/images/staff-6.jpg",
      category: "Orthopedics",
      title: "Dr. Liam Carter",
      subtitle: "Sports Medicine • MD",
      desc: "Deserunt pariatur eiusmod duis, officia aute laboris consectetur.",
      specialist: "Orthopedics",
    },
    {
      id: 6,
      src: "/images/staff-10.jpg",
      category: "Cardiology",
      title: "Dr. Maya Patel",
      subtitle: "Interventional Cardiologist • MD",
      desc: "Cupidatat fugiat sint enim laboris, sed do ut aliquip dolor.",
      specialist: "Cardiology",
    },
    {
      id: 7,
      src: "/images/staff-2.jpg",
      category: "Pediatrics",
      title: "Dr. Oliver Hayes",
      subtitle: "Pediatric Specialist • MD",
      desc: "Exercitation id ea nisi fugiat, ullamco veniam cillum nostrud.",
      specialist: "Pediatrics",
    },
    {
      id: 8,
      src: "/images/staff-9.jpg",
      category: "Dermatology",
      title: "Dr. Harper Lane",
      subtitle: "Cosmetic Dermatologist • MD",
      desc: "Aliquip laboris anim minim, irure commodo qui occaecat velit.",
      specialist: "Dermatology",
    },
  ];

  // Shuffle function (for animation effect)
  const shuffleArray = (arr) => {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      setDisplayImages(shuffleArray(images));
      setResetKey((prev) => prev + 1);
      setTimeout(() => {
        setDisplayImages(images);
        setResetKey((prev) => prev + 1);
      }, 400);
    }
    setCategory(cat);
  };

  const filteredImages =
    category === "All"
      ? displayImages.length > 0
        ? displayImages
        : images
      : images.filter((img) => img.category === category);

  // Limit images based on category
  const visibleImages = category === "All" ? filteredImages.slice(0, 8) : filteredImages.slice(0, 2);

  return (
    <div className="w-full h-full mt-8">
     {/* Filter Buttons */}
      <div className="flex justify-start flex-wrap gap-3 mb-8 mt-20 px-6 lg:ml-28">
        {["All", "Cardiology", "Pediatrics", "Dermatology", "Orthopedics"].map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-4 py-2 rounded-full transition font-medium shadow boder border-gray-500 hover:border hover:border-teal-600 hover:text-teal-600 ${
              category === cat
                ? "bg-teal-500 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Doctor Cards */}
      <div
        key={resetKey}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto animate-fadeIn"
      >
        {visibleImages.map((img) => (
          <div
            key={img.id}
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="relative overflow-hidden rounded-xl shadow-lg group bg-white transition-all ease-in-out duration-500 hover:-translate-y-1.5"
          >
            <div>
                  <button className="absolute top-4 left-2 text-teal-50  border border-teal-600 px-2 py-1 rounded-lg font-bold text-[12px] bg-teal-600">
                  {img.consultant}
                </button>
                </div>
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{img.title}</h3>
              <h3 className="text-lg  text-gray-500">{img.subtitle}</h3>
              <p className="text-gray-600 text-sm mt-2">{img.desc}</p>
            </div>

            {/* Hover Overlay */}
            <div className="flex flex-col justify-start items-start text-center transition duration-500 w-full px-4 pb-4">
              <div>
                  <button className="bg-teal-50 text-teal-600 border border-teal-600 px-4 py-1 mb-4 rounded-lg font-bold text-[10px] hover:bg-teal-600">
                  {img.specialist}
                </button>
                </div>
              <div className="flex gap-3 lg:flex-row flex-col justify-start items-start">
                
                <div>
                  <button className="bg-teal-500 text-white text-[12px] px-4 py-2 rounded-lg font-bold hover:bg-teal-600">
                  Book Appointment
                </button>
                </div>
                <div>
                  <button className="bg-white text-teal-600 border text-[12px] border-teal-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100">
                  View Profile
                </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fade animation */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.5s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
}
