import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Services data structure with proper sub-service paths
  const services = [
    {
      name: "AI Language Solutions",
      subServices: [
        {
          name: "Real-Time Language Translation",
          path: "/real-time-language-solutions",
        },
        { name: "Voice and Text Messaging", path: "/voice-and-text-messaging" },
        {
          name: "Language Learning Support",
          path: "/language-learning-support",
        },
        // { name: "Multi-Platform Accessibility", path: "/multi-platform-accessibility" },
      ],
    },
    {
      name: "AI Document Solutions",
      subServices: [
        { name: "Document Analysis", path: "/ai-document-solutions" },
        { name: "Automated Summarization", path: "/automated-summarization" },
        {
          name: "Question & Answer Capabilities",
          path: "/question-answer-capabilities",
        },
        { name: "Data Extraction and Organization", path: "/data-extraction" },
      ],
    },
    {
      name: "GenAI Solutions",
      subServices: [
        { name: "Chatbots", path: "/chatbots" },
        { name: "Sentiment Analysis", path: "/sentiment-analysis" },
        {
          name: "Personalized Recommendations",
          path: "/personalized-recommendations",
        },
      ],
    },
    {
      name: "Data Science & Analytics",
      subServices: [
        { name: "Predictive Analytics", path: "/predictive-analysis" },
        { name: "Data Visualization", path: "/data-visualization" },
        {
          name: "Data Integration Services",
          path: "/data-integration-services",
        },
      ],
    },
    {
      name: "Custom Software",
      path: "/custom-software-development",
      subServices: [
        { name: "Product Development", path: "/product-development" },
        { name: "Microservices", path: "/microservices" },
        { name: "ERP/CRM", path: "/erp-crm" },
        { name: "Mobile Development", path: "/mobile-app-development" },
      ],
    },
  ];

  // Email and WhatsApp setup
  const email = "admin@graminio.com";
  const emailSubject = "Business Inquiry";
  const emailBody =
    "Hello, I am interested in your services. Please provide more details.";
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const whatsappNumber = "919004757685";
  const whatsappMessage =
    "Hello, I am interested in your services. Can we discuss this further?";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Toggle services dropdown on mobile
  // const toggleServices = () => {
  //   setServicesOpen(!servicesOpen);
  // };

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesOpen &&
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
        setActiveService(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [servicesOpen]);

  // Prevent dropdown from closing too quickly with hover
  const handleDropdownEnter = () => {
    setServicesOpen(true);
  };

  const handleDropdownLeave = () => {
    setTimeout(() => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.matches(":hover") &&
        buttonRef.current &&
        !buttonRef.current.matches(":hover")
      ) {
        setServicesOpen(false);
        setActiveService(null);
      }
    }, 100);
  };

  // Set active service on hover
  const handleServiceHover = (serviceName: string) => {
    setActiveService(serviceName);
  };

  // Check if current path matches any service or sub-service
  const isServiceActive = () => {
    return services.some(
      (service) =>
        location.pathname === service.path ||
        service.subServices.some((sub) => location.pathname === sub.path)
    );
  };

  return (
    <header
      className={`w-full sticky top-0 z-[1000] transition-all duration-300 ${
        scrolled ? "shadow-lg backdrop-blur-md bg-white/95" : ""
      }`}
    >
      {/* Top Bar with gradient background */}
      <div className="bg-[#0d2b4b] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center group">
              <i className="fas fa-envelope mr-2 text-blue-300"></i>
              <a
                target="_blank"
                href={emailLink}
                className="text-gray-100 hover:text-blue-300 transition-colors duration-300 text-sm"
              >
                admin@graminio.com
              </a>
            </span>
            <span className="flex items-center group">
              <i className="fab fa-whatsapp mr-2 text-green-400"></i>
              <a
                target="_blank"
                href={whatsappLink}
                className="text-gray-100 hover:text-green-300 transition-colors duration-300 text-sm"
              >
                +91 90047 57685
              </a>
            </span>
          </div>

          <div className="flex items-center hidden md:block space-x-5">
            <a
              target="_blank"
              href="https://www.facebook.com/GraminIOTech/"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              target="_blank"
              href="https://x.com/graminiotech"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/graminio-technologies-pvt-ltd/"
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/graminiotechnologies/"
              className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`bg-white ${
          scrolled ? "py-2" : "py-3"
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <img
                src="/logo_H.png"
                className={`ml-2 w-[180px] transition-all duration-300`}
                alt="Graminio Logo"
              />
            </Link>

            {/* Desktop Menu - Full width */}
            <div className="hidden md:flex items-center justify-end flex-1">
              <div className="flex xl:space-x-8 space-x-4 xl:mr-8 mr-1">
                <Link
                  to="/"
                  className={`px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                    location.pathname === "/"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600"
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                    location.pathname === "/about"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600"
                  }`}
                >
                  About
                </Link>

                {/* Services Dropdown */}
                <div className="relative services-dropdown">
                  <button
                    ref={buttonRef}
                    className={`px-3 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 flex items-center border-b-2 border-transparent hover:border-blue-600 transition-all duration-300 ${
                      isServiceActive() || servicesOpen || activeService
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600"
                    }`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    aria-expanded={servicesOpen}
                    aria-haspopup="true"
                  >
                    <span>Services</span>
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                        servicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {/* Hierarchical Services dropdown menu */}
                  <div
                    ref={dropdownRef}
                    className={`absolute top-full left-1/2 transform -translate-x-1/2 bg-white shadow-xl rounded-md py-1 flex z-10 transition-all duration-200 ${
                      servicesOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible translate-y-2 pointer-events-none"
                    }`}
                    onMouseEnter={handleDropdownEnter}
                    onMouseLeave={handleDropdownLeave}
                    style={{ width: "520px" }}
                  >
                    {/* Main Services List */}
                    <div className="w-1/2 py-1 border-r border-gray-100">
                      <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        GRAMINIO SERVICES
                      </div>
                      {services.map((service, index) => (
                        <div
                          key={index}
                          className={`block px-4 py-2 text-sm font-semibold cursor-pointer flex justify-between items-center ${
                            activeService === service.name ||
                            location.pathname === service.path ||
                            service.subServices.some(
                              (sub) => location.pathname === sub.path
                            )
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          } transition-colors`}
                          onMouseEnter={() => handleServiceHover(service.name)}
                        >
                          <Link to={service.path || "#"} className="flex-grow">
                            {service.name}
                          </Link>
                          <svg
                            className="w-4 h-4 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 5l7 7-7 7"
                            ></path>
                          </svg>
                        </div>
                      ))}
                    </div>

                    {/* Sub Services List */}
                    <div className="w-1/2 py-1 bg-blue-50">
                      <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                        {activeService || "AI LANGUAGE SOLUTIONS"}
                      </div>
                      {(activeService
                        ? services.find((s) => s.name === activeService)
                            ?.subServices
                        : services[0].subServices
                      )?.map((subService, idx) => (
                        <Link
                          key={idx}
                          to={subService.path}
                          className={`block px-4 py-2 text-sm font-semibold ${
                            location.pathname === subService.path
                              ? "text-blue-600 bg-blue-100"
                              : "text-gray-700 hover:text-blue-600"
                          } transition-colors`}
                        >
                          {subService.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                <Link
                  to="/blog"
                  className={`px-3 py-2 text-sm font-semibold transition-all duration-300 ${
                    location.pathname === "/blog"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-700 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600"
                  }`}
                >
                  Blog
                </Link>
              </div>

              <Link
                to="/contact"
                className="xl:px-6 px-2 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center"
              >
                Get Started
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="outline-none focus:outline-none transition-colors"
                aria-label="Menu"
              >
                <svg
                  className={`w-6 h-6 ${
                    mobileMenuOpen ? "text-blue-600" : "text-gray-700"
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100 shadow-inner">
            <Link
              to="/"
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/"
                  ? "text-blue-600 border-l-4 border-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-l-4 hover:border-blue-600"
              } transition-all`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/about"
                  ? "text-blue-600 border-l-4 border-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-l-4 hover:border-blue-600"
              } transition-all`}
            >
              About
            </Link>
            <div className="px-3 py-2">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`w-full text-left text-base font-medium flex justify-between items-center ${
                  isServiceActive()
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Mobile Services Submenu */}
              <div
                className={`mt-2 pl-2 space-y-1 border-l border-gray-200 transition-all duration-300 overflow-hidden ${
                  servicesOpen
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                {services.map((service, index) => (
                  <div key={index} className="mb-2">
                    {/* Toggle SubService */}
                    <div
                      className={`flex justify-between items-center px-3 py-2 text-sm font-medium cursor-pointer ${
                        location.pathname === service.path ||
                        service.subServices.some(
                          (sub) => location.pathname === sub.path
                        )
                          ? "text-blue-600"
                          : "text-gray-700 hover:text-blue-600"
                      }`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent unexpected navigation
                        setServicesOpen(true);
                        setActiveService(
                          activeService === service.name ? null : service.name
                        );
                      }}
                    >
                      <span className="flex-grow">{service.name}</span>
                      <svg
                        className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                          activeService === service.name ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>

                    {/* Sub Services in Mobile View */}
                    <div
                      className={`pl-4 space-y-1 transition-all duration-300 overflow-hidden ${
                        activeService === service.name
                          ? "max-h-64 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {service.subServices.map((subService, idx) => (
                        <Link
                          key={idx}
                          to={subService.path}
                          className={`block px-3 py-1 text-xs font-medium ${
                            location.pathname === subService.path
                              ? "text-blue-600 bg-blue-50"
                              : "text-gray-600 hover:text-blue-600"
                          } transition-colors`}
                          onClick={() => {
                            // ✅ Only close on actual subService click
                            setServicesOpen(false);
                            setActiveService(null);
                          }}
                        >
                          {subService.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to="/blog"
              className={`block px-3 py-2 text-base font-medium ${
                location.pathname === "/blog"
                  ? "text-blue-600 border-l-4 border-blue-600 bg-blue-50"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50 hover:border-l-4 hover:border-blue-600"
              } transition-all`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-3 mt-4 text-center text-base font-medium text-white bg-yellow-600 rounded-[5px] hover:shadow-md transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
