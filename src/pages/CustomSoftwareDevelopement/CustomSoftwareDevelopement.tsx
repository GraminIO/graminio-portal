import React, { useState } from "react"; 
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";

const SoftwareDevelopmentPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"general" | "consultation" | "demo">("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="font-sans">
      {/* Header/Navigation - matches existing site */}
      <div className="bg-blue-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex space-x-6">
            <a href="mailto:admin@graminio.com" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>admin@graminio.com</span>
            </a>
            <a href="tel:+919004757685" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 90047 57685</span>
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="#" className="hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <div className="text-3xl font-bold text-gray-800 flex items-center">
              <span className="text-yellow-500">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#FFD700" stroke="#1E40AF" strokeWidth="1.5" />
                  <path d="M2 17L12 22L22 17" stroke="#1E40AF" strokeWidth="1.5" />
                  <path d="M2 12L12 17L22 12" stroke="#1E40AF" strokeWidth="1.5" />
                </svg>
              </span>
              <span className="text-blue-800">Gram<span className="text-yellow-500">i</span>n<span className="text-yellow-500">I</span>O</span>
            </div>
          </a>
          <div className="flex items-center space-x-8">
            <a href="/" className="text-blue-600 font-medium border-b-2 border-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <div className="relative group">
              <a href="/services" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <a href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
            <a href="/get-started" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium flex items-center">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-black text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="inline-block mb-4 text-green-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                </svg>
                SERVICES
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Custom Software Development</h1>
              <p className="text-lg text-gray-300 mb-6">Craft tailor-made software solutions that solve your unique business challenges and drive innovation.</p>
              <div className="mt-8">
                <a href="#consultation" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-md">
                  Start Your Project
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 border-4 border-blue-600 rounded-lg bg-black absolute top-6 left-6"></div>
                <div className="w-64 h-64 border-4 border-yellow-500 rounded-lg bg-black relative z-10 flex items-center justify-center">
                  <div className="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div className="mt-4 font-mono text-green-400">{'</>'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">End-to-End Software Development Services</h2>
            <p className="text-gray-600">We create powerful, scalable software solutions tailored to your business needs, delivering exceptional user experiences that drive growth and operational excellence.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Web Applications</h3>
              <p className="text-gray-600">Custom web applications with responsive design, modern frameworks, and secure backend systems.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Mobile Development</h3>
              <p className="text-gray-600">Native and cross-platform mobile apps that provide seamless user experiences across all devices.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="inline-block p-3 bg-blue-100 rounded-lg mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">API Development</h3>
              <p className="text-gray-600">Robust, secure, and scalable APIs that enable seamless integration with third-party services.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a systematic approach to software development that ensures high-quality, on-time delivery that exceeds expectations.</p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto">1</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Discovery & Planning</h3>
                <p className="text-gray-600">We begin by thoroughly understanding your business needs, target audience, and project goals. Our team works collaboratively with you to define the project scope, timeline, and budget.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 mb-6 md:mb-0 md:order-2">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto">2</div>
              </div>
              <div className="md:w-2/3 md:order-1">
                <h3 className="text-2xl font-bold mb-3">Design & Architecture</h3>
                <p className="text-gray-600">Our designers and architects create wireframes, user flows, and technical blueprints that form the foundation of your software. We ensure that the architecture is scalable, secure, and aligned with your business requirements.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-12">
              <div className="md:w-1/3 mb-6 md:mb-0">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto">3</div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-3">Development & Testing</h3>
                <p className="text-gray-600">Our skilled developers bring the design to life using the latest technologies and best practices. Rigorous testing is integrated throughout the development process to ensure quality, performance, and security.</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 md:order-2">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto">4</div>
              </div>
              <div className="md:w-2/3 md:order-1">
                <h3 className="text-2xl font-bold mb-3">Deployment & Support</h3>
                <p className="text-gray-600">After final approval, we deploy your software and provide ongoing maintenance and support to ensure optimal performance and user satisfaction. We also offer training to help your team get the most out of your new software.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Master</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Our tech stack is constantly evolving to include the most efficient, secure, and powerful technologies available.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-6 h-full">
                <h3 className="text-lg font-bold mb-4">Frontend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>React</li>
                  <li>Angular</li>
                  <li>Vue.js</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-6 h-full">
                <h3 className="text-lg font-bold mb-4">Backend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>.NET</li>
                  <li>PHP</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-6 h-full">
                <h3 className="text-lg font-bold mb-4">Mobile</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>Swift</li>
                  <li>Kotlin</li>
                  <li>Xamarin</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gray-800 rounded-lg p-6 h-full">
                <h3 className="text-lg font-bold mb-4">Database</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>MongoDB</li>
                  <li>PostgreSQL</li>
                  <li>MySQL</li>
                  <li>Firebase</li>
                  <li>Redis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">See how our custom software solutions have transformed businesses across industries.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-bold mb-2">FINTECH</div>
                <h3 className="text-xl font-bold mb-3">Digital Banking Platform</h3>
                <p className="text-gray-600 mb-4">Developed a secure, user-friendly digital banking platform that increased customer engagement by 45% and reduced operational costs by 30%.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Node.js</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">PostgreSQL</span>
                </div>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Read Case Study →</a>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-6">
                <div className="text-sm text-blue-600 font-bold mb-2">HEALTHCARE</div>
                <h3 className="text-xl font-bold mb-3">Patient Management System</h3>
                <p className="text-gray-600 mb-4">Created a comprehensive patient management system that streamlined operations, improved data accuracy, and enhanced patient care quality.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Angular</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Java</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">MongoDB</span>
                </div>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">Read Case Study →</a>
              </div>
            </div>
          </div>

        </div>
      </div>

      <CTA
        title="Ready to Start Your Project?"
        description="Contact us today to discuss your custom software development needs and get a free consultation."
        primaryButtonText="Learn More"
        primaryButtonLink="/contact"
        secondaryButtonText="Get Your Free Consultation"
        onSecondaryButtonClick={() => openModal("demo")}
      />
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={modalType}
      />
    </div>
  );
}

export default SoftwareDevelopmentPage;