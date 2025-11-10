import React, { useState } from "react";
import { CgChevronDown, CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink, Link } from "react-router-dom";

function Navbars() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMorePagesOpen, setIsMorePagesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full fixed top-8 left-0 z-50 bg-white shadow">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8">
        {/* ========== DESKTOP NAVBAR ========== */}
        <div className="hidden xl:flex items-center justify-between py-6">
          {/* Logo */}
          <h1 className="text-blue-950 font-bold text-4xl">
            Medi<span className="text-teal-600">Care</span>
          </h1>

          {/* Navigation Links */}
          <ul className="flex items-center space-x-10 text-gray-700 font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/department"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                Departments
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                Services
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/doctor"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                Doctors
              </NavLink>
            </li>

            {/* Dropdown */}
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center hover:text-teal-600 whitespace-nowrap"
              >
                More Pages <CgChevronDown size={20} />
              </button>

              {isDropdownOpen && (
                <ul className="absolute bg-white text-gray-600 font-medium mt-4 rounded shadow-lg w-56 z-20 py-2">
                  <li>
                    <NavLink
                      to="/morepage"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Department Details
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/servicedetail"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Service Details
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/appointment"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Appointment
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/testimonial"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Testimonials
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/frequentQtn"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      FAQs
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/galleryp"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Gallery
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/terms"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Terms
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/privacy"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      Privacy
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to="/error404s"
                      className={({ isActive }) =>
                        `block px-6 py-2 hover:text-teal-600 ${
                          isActive ? "text-teal-600" : "text-gray-700"
                        }`
                      }
                    >
                      404
                    </NavLink>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                }
              >
                Contact
              </NavLink>
            </li>

            <li>
              <NavLink to="/appointment">
                <button className="bg-teal-600 py-2 px-4 rounded-lg text-white hover:bg-teal-700">
                  Appointment
                </button>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* ========== MOBILE NAVBAR ========== */}
        <div className="flex items-center justify-between py-4 xl:hidden">
          <h1 className="text-blue-950 font-bold text-2xl">
            Medi<span className="text-teal-600">Care</span>
          </h1>

          <div className="flex items-center space-x-3">
            <Link to="/appointment">
              <button className="bg-teal-600 py-2 px-3 rounded-lg text-white text-sm hover:bg-teal-700">
                Appointment
              </button>
            </Link>

            <button onClick={() => setIsOpen(true)}>
              <RxHamburgerMenu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* ========== MOBILE MENU ========== */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-black/70 backdrop-blur-md">
          <div className="relative flex-1 overflow-y-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white"
            >
              <CgClose size={28} />
            </button>

            <ul className="mt-20 py-8 px-8 space-y-4 text-xl text-gray-700 bg-white rounded-lg mx-4 shadow">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                  }
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/department"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                  }
                >
                  Departments
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                  }
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/doctor"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                  }
                >
                  Doctors
                </NavLink>
              </li>

              {/* Mobile Dropdown */}
              <li>
                <button
                  onClick={() => setIsMorePagesOpen(!isMorePagesOpen)}
                  className="flex items-center justify-between w-full hover:text-teal-600"
                >
                  <span
                    className={isMorePagesOpen ? "text-teal-600" : "text-gray-700"}
                  >
                    More Pages
                  </span>
                  <CgChevronDown
                    size={30}
                    className={`transition-transform duration-300 ${
                      isMorePagesOpen ? "rotate-180 bg-teal-600 text-white p-2 rounded-full" : "rotate-0 text-gray-600"
                    }`}
                  />
                </button>

                {isMorePagesOpen && (
                  <ul className="bg-gray-100 mt-2 rounded shadow-md space-y-4 ml-2 px-4 py-6 text-xl">
                    <li>
                      <NavLink to="/morepage" className="hover:text-teal-600">
                        Department Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/servicedetail" className="hover:text-teal-600">
                        Service Details
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/appointment" className="hover:text-teal-600">
                        Appointment
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/testimonial" className="hover:text-teal-600">
                        Testimonials
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/frequentQtn" className="hover:text-teal-600">
                        FAQs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/galleryp" className="hover:text-teal-600">
                        Gallery
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/terms" className="hover:text-teal-600">
                        Terms
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/privacy" className="hover:text-teal-600">
                        Privacy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/error404s" className="hover:text-teal-600">
                        404
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-teal-600" : "text-gray-700 hover:text-teal-600"
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbars;
