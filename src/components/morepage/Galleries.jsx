import React, { useState } from "react";
import { Eye, Info } from "lucide-react"; // using lucide-react icons

const Gallery = () => {
  const [category, setCategory] = useState("All");
  const [displayImages, setDisplayImages] = useState([]);
  const [resetKey, setResetKey] = useState(0);

  // Original image list (fixed order)
  const images = [
    { id: 1, src: "/images/gallery-1.webp", category: "Nature", title: "Natural Beauty", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 2, src: "/images/gallery-2.webp", category: "Nature", title: "Urban Landscape", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 3, src: "/images/gallery-3.webp", category: "Nature", title: "Candid Moments", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 4, src: "/images/gallery-4.webp", category: "Agriculture", title: "Wilderness", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 5, src: "/images/gallery-5.webp", category: "Agriculture", title: "Modern Design", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 6, src: "/images/gallery-6.webp", category: "Agriculture", title: "Portrait Studies", desc: "MLorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 7, src: "/images/gallery-7.webp", category: "People", title: "Serene Waters", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 8, src: "/images/gallery-8.webp", category: "People", title: "Historical Places", desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  ];

  // Shuffle helper
  const shuffleArray = (arr) => {
    let shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Handle filter
  const handleCategoryChange = (cat) => {
    if (cat === "All") {
      setDisplayImages(shuffleArray(images));
      setResetKey((prev) => prev + 1);

      setTimeout(() => {
        setDisplayImages(images);
        setResetKey((prev) => prev + 1);
      }, 500);

      setCategory("All");
    } else {
      setCategory(cat);
      setResetKey((prev) => prev + 1); // 🔑 trigger reset animation for other categories too
    }
  };

  const filteredImages =
    category === "All"
      ? displayImages.length > 0
        ? displayImages
        : images
      : images.filter((img) => img.category === category);

  return (
    <div className="w-full h-full mt-44">
      {/* Title Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl text-gray-800">Gallery</h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-600">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas
          consequatur ut a odio voluptatem. Sit dolorum debitis veritatis
          natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.
        </p>
      </div>

      {/* Breadcrumb Section */}
      <div className="bg-gray-200 px-3 py-5 rounded max-w-full mx-auto flex">
        <nav className="text-sm text-gray-600 ml-[12%]">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="#" className="text-teal-500 hover:text-teal-600">Home</a>
            </li>
            <li><span>/</span></li>
            <li className="text-gray-800">Gallery</li>
          </ol>
        </nav>
      </div>

      {/* Gallery Section */}
      <div className="px-6 py-12 relative mt-20 max-w-6xl mx-auto ">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-3 mb-8">
          {["All", "Nature", "Agriculture", "People"].map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded-full transition font-medium shadow 
                ${
                  category === cat
                    ? "bg-teal-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div
          key={resetKey}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 animate-fadeIn none"
        >
          {filteredImages.map((img) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-xl shadow-lg group"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-50 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 bg-opacity-50 transition-transform transform hover:-translate-y-2">
                <h3 className="text-white text-lg font-bold flex">{img.title}</h3>
                <p className="text-gray-200 text-sm mt-1 px-1">{img.desc}</p>

                {/* Icons */}
                <div className="flex gap-4 mt-4">
                  <button className="bg-teal-500 p-3 rounded-full hover:bg-teal-600 text-white">
                    <Eye size={20} />
                  </button>
                  <button className="bg-teal-500 p-3 rounded-full hover:bg-teal-600 text-white">
                    <Info size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tailwind animation */}
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
    </div>
  );
};

export default Gallery;
