import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const Chatbots: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  return (
    <>
      {/* Hero Section - Keeping your original code */}
      <section className="Chatbots_section pt-28 pb-20 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[#00000047s] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Chatbots</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Our solution is designed to enhance your communication experience
              and provide real-time translation with high accuracy, enabling
              smoother interactions across cultures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced Chatbot Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered chatbots provide seamless customer support and
              enhanced user experiences across multiple platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Customer Support</h3>
              <p className="text-gray-600">
                Our chatbots provide round-the-clock support, answering customer
                queries instantly and reducing response time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Multilingual Capabilities
              </h3>
              <p className="text-gray-600">
                Support customers in their native language with our advanced
                translation technology that works across 100+ languages.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Conversations</h3>
              <p className="text-gray-600">
                End-to-end encryption ensures all customer interactions remain
                private and protected at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Chatbot Solutions For Every Need
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From customer service to lead generation, our chatbots can be
              tailored to meet your specific business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">For E-commerce</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Product recommendations based on user preferences</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Order tracking and shipping updates</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Automated checkout assistance</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">For Customer Service</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Instant response to common customer queries</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Seamless escalation to human agents when needed</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-2 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span>Feedback collection and analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-semibold">
              CORE CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Advanced Chatbot Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered chatbots provide seamless customer support and
              enhanced user experiences across multiple platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-600">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Customer Support</h3>
              <p className="text-gray-600">
                Our chatbots provide round-the-clock support, answering customer
                queries instantly and reducing response time by up to 70%.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-600">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">
                Multilingual Capabilities
              </h3>
              <p className="text-gray-600">
                Support customers in their native language with our advanced
                translation technology that works across 100+ languages with 99%
                accuracy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-yellow-600">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Secure Conversations</h3>
              <p className="text-gray-600">
                End-to-end encryption ensures all customer interactions remain
                private and protected at all times, compliant with GDPR and
                other regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section - NEW */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-yellow-600 font-semibold">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Why Our Clients Love Us
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                70%
              </h3>
              <p className="text-dark-600 font-semibold">
                Reduction in Customer Service Costs
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                24/7
              </h3>
              <p className="text-dark-600 font-semibold">Continuous Customer Support</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                85%
              </h3>
              <p className="text-dark-600 font-semibold">Customer Satisfaction Rate</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
                5min
              </h3>
              <p className="text-dark-600 font-semibold">Average Setup Time</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-semibold">APPLICATIONS</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Chatbot Solutions For Every Need
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From customer service to lead generation, our chatbots can be
              tailored to meet your specific business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
              <h3 className="text-2xl font-bold mb-6 text-blue-600">
                For E-commerce
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Smart product recommendations based on browsing history and
                    preferences
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Real-time order tracking and shipping updates with visual
                    progress indicators
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-blue-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Automated checkout assistance reducing cart abandonment by
                    up to 35%
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-green-600"></div>
              <h3 className="text-2xl font-bold mb-6 text-green-600">
                For Customer Service
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Instant response to common customer queries with contextual
                    understanding
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Smart escalation to human agents when needed with full
                    conversation history
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Automated feedback collection and sentiment analysis for
                    continuous improvement
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section with improved design */}
      <section className="py-20 bg-gradient-to-l from-primary to-secondary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-400 font-semibold">CONNECTIVITY</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Seamless Integration
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Our chatbots integrate easily with your existing systems and
              platforms, requiring minimal setup time.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {/* Integration Icons */}
            <div className="flex flex-col items-center group">
              <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-yellow-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <p className="font-medium">WhatsApp</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-yellow-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <p className="font-medium">Email</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-yellow-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  ></path>
                </svg>
              </div>
              <p className="font-medium">Website</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-yellow-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <p className="font-medium">Mobile Apps</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-yellow-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  ></path>
                </svg>
              </div>
              <p className="font-medium">CRM Systems</p>
            </div>

            <div className="flex flex-col items-center group">
              <div className="bg-gray-800 rounded-full w-20 h-20 flex items-center justify-center mb-4 group-hover:bg-yellow-500 transition-colors duration-300">
                <svg
                  className="w-10 h-10 text-yellow-400 group-hover:text-white transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
              </div>
              <p className="font-medium">APIs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section - NEW */}
      <section id="demo" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-yellow-600 font-semibold">
                SEE IT IN ACTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Experience Our Chatbot
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Try our demo chatbot to see how it can transform your customer
                interactions. Ask questions, get product recommendations, or
                experience a simulated customer service scenario.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">
                    Natural language understanding
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">Context-aware responses</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-yellow-600 mr-3 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700">Multi-language support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Demo Chatbot</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs ml-auto">
                      <p className="text-gray-700">
                        Hi! I'm interested in your chatbot service.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-yellow-100 rounded-lg p-3 max-w-sm">
                      <p className="text-gray-800">
                        Hello! 👋 Thanks for your interest in our chatbot
                        solutions. How can I help you today?
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-gray-100 rounded-lg p-3 max-w-xs ml-auto">
                      <p className="text-gray-700">
                        What features do you offer?
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="bg-yellow-100 rounded-lg p-3 max-w-sm">
                      <p className="text-gray-800">
                        We offer multilingual support, 24/7 availability, secure
                        data handling, and seamless integration with your
                        existing systems!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:border-yellow-500"
                  />
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-r-lg hover:bg-yellow-500 transition-colors duration-300">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title=" Ready to transform your customer experience?"
        description=" Get started with our AI-powered chatbots today and see the difference in customer satisfaction and operational efficiency."
        primaryButtonText="Get Started for free"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Demo"
        onSecondaryButtonClick={() => openModal("demo")}
      />
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={modalType}
      />
    </>
  );
};

export default Chatbots;
