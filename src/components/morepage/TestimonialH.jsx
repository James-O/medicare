import React from "react";
import { Star, Quote } from "lucide-react";

function TestimonialH() {
  const testimonials = [
    {
      name: "Saul Goodman",
      role: "Ceo & Founder",
      image: "../images/person-m-9.webp",
      text: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.",
    },
    {
      name: "Sara Wilsson",
      role: "Designer",
      image: "../images/person-f-5.webp",
      text: "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.",
    },
    {
      name: "Jena Karlis",
      role: "Store Owner",
      image: "../images/person-f-12.webp",
      text: "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.",
    },
    {
      name: "Matt Brandon",
      role: "Freelancer",
      image: "../images/person-m-12.webp",
      text: "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.",
    },
    {
      name: "John Larson",
      role: "Entrepreneur",
      image: "../images/person-m-13.webp",
      text: "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.",
    },
    {
      name: "Emily Harison",
      role: "Store Owner",
      image: "../images/person-f-13.webp",
      text: "Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur. Sequi officiis ea et quia quidem.",
    },
  ];

  return (
    <div className="bg-white min-h-screen px-6 lg:px-20 py-12 mt-25">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo
          odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum
          debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum
          dolorem.
        </p>
      </div>

      {/* Breadcrumb */}
      <div className="bg-gray-50 py-3 px-6 rounded-md mb-12">
        <span className="text-teal-500 font-medium">Home</span>{" "}
        <span className="text-gray-400">/ Testimonials</span>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-100"
          >
            {/* Profile Info */}
            <div className="flex items-center mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full border-none"
              />
              <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">{item.role}</p>
                {/* Stars */}
                <div className="flex mt-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="text-gray-600 italic relative">
              <Quote className="w-4 h-4 text-teal-400 inline-block mr-1 rotate-18" />
              {item.text}
              <Quote className="w-4 h-4 text-teal-400 inline-block ml-1 " />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialH;
