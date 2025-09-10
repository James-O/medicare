import React, { useState, useEffect } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Aos from 'aos';

function Frequentlyquestion() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const items = [
    {
    question: "Non consectetur a erat nam at lectus urna duis?",
    answer: "Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non."
    },

    {
      question: "Feugiat scelerisque varius morbi enim nunc faucibus?",
      answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
    },
    {
      question: "Dolor sit amet consectetur adipiscing elit pellentesque?",
      answer: "Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis"
    },

    {
      question: "Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?",
      answer: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui."
    },
    {
      question: "Tempus quam pellentesque nec nam aliquam sem et tortor?",
      answer: "Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in"
    },
    {
      question: "Perspiciatias quod quo quos nulla quo illum ullam?",
      answer: "Enim ea facilis quaerat voluptas quidem et dolorem. Quis et consequatur non sed in suscipit sequi. Distinctio ipsam dolore et."
    }
  ];
  const toggleItem = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) =>
        i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 100,
    });
  }, []);

  return (
    <div className='w-full h-full mx-auto mt-10 py-20'>

      <div data-aos="zoom-in" className='px-4 py-10 text-center mx-0 md:px-20'>
        <h1 className='text-2xl md:text-4xl font-medium mb-2'>Frequenty Asked Questions</h1>
        <p className='text-[1rem] text-gray-700 leading-6 font-normal items-center justify-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>

      <div data-aos="fade-right" className="bg-gray-200  px-3 py-5 rounded w-full max-w-7xl mx-auto">
        <nav className="text-sm text-gray-600 ml-[12%] ">
          <ol className="flex items-center space-x-2">
            <li>
              <a href="#" className="text-[#099aa7] hover:text-[#097680]">Home</a>
            </li>
            <li>
              <span>/</span>
            </li>
            <li className="text-gray-800">Faq</li>
          </ol>
        </nav>
      </div>


      <div data-aos="fade-up" className='w-full max-w-4xl mx-auto px-4 mt-10 space-y-5 '>
      {items.map((item, index) => (
        <div key={index}
          className={`border rounded-md px-2 py-2 transition-colors duration-300 ${openIndexes.includes(index) ? "bg-[#099aa708] border-[#099aa733]" : "bg-white border-gray-200" } `}>
          <button
            className={`w-full flex justify-between items-center text-base md:text-[16px] leading-6 cursor-pointer text-[#1f2f31] p-3 text-left transition-colors duration-300 font-bold ${openIndexes.includes(index) ? "text-[#099aa7]" : "text-[#1f2f31] hover:text-[#099aa7]" } `}
            onClick={() =>
            toggleItem(index)}>
            
            {item.question}
            <span className={`transform transition-transform duration-700 ${
              openIndexes.includes(index) ? "rotate-90" : "rotate-0"
            }`}>
              <MdKeyboardArrowRight size={25}/>
            </span>
          </button>

          <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndexes.includes(index) ? "max-h-screen" : "max-h-0" }`}>
            <div className='pt-0 px-3 pb-3 text-gray-700 text-base md:text-[17px] font-normal leading-6'>
              {item.answer}
            </div>
          </div>

        </div>
      ))}
    </div>
    </div>
  )
}

export default Frequentlyquestion