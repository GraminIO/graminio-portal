import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const ProductDevelopment: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  // Sticky header effect
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header?.classList.add("shadow-md");
      } else {
        header?.classList.remove("shadow-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="hero-section py-20 md:py-40 relative  relative bg-[url('/Product-Development-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Product Development</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transform your vision into successful digital products with our
              end-to-end development expertise. From concept to launch and
              beyond, we build solutions that users love.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() => openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-10 md:py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Product Development Approach
            </h2>
            <p className="text-lg text-gray-600">
              We combine technical excellence with user-centric design to create
              products that solve real problems and deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-lightbulb-flash-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Ideation & Strategy
              </h3>
              <p className="text-gray-600">
                Validate concepts and define product vision with market research
                and feasibility studies.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-pencil-ruler-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">UX/UI Design</h3>
              <p className="text-gray-600">
                Create intuitive interfaces and seamless user experiences that
                drive engagement.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-code-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agile Development</h3>
              <p className="text-gray-600">
                Build robust, scalable solutions using modern technologies and
                best practices.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-line-chart-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth & Scaling</h3>
              <p className="text-gray-600">
                Optimize and expand your product with data-driven enhancements
                and new features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section id="process" className="py-10 md:py-20 ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Proven Development Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We follow a structured yet flexible methodology to deliver
                high-quality products on time and within budget.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-12 h-12 shrink-0 mt-1">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Discovery & Planning
                    </h3>
                    <p className="text-gray-600">
                      Define product goals, user personas, technical
                      requirements, and success metrics through collaborative
                      workshops.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-12 h-12 shrink-0 mt-1">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Design & Prototyping
                    </h3>
                    <p className="text-gray-600">
                      Create wireframes, interactive prototypes, and design
                      systems to visualize the user experience.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-12 h-12 shrink-0 mt-1">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Development & Testing
                    </h3>
                    <p className="text-gray-600">
                      Build the product in iterative sprints with continuous
                      integration and quality assurance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-12 h-12 shrink-0 mt-1">
                    <span className="text-xl font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Launch & Optimization
                    </h3>
                    <p className="text-gray-600">
                      Deploy to production, monitor performance, and implement
                      improvements based on user feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">
                  Project Timeline Example
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">12 weeks</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <i className="ri-information-line"></i>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg shrink-0">
                    <i className="ri-search-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Discovery Phase</h4>
                    <p className="text-sm text-gray-600 mb-2">Weeks 1-2</p>
                    <div className="w-full bg-blue-50 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg shrink-0">
                    <i className="ri-pencil-ruler-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Design Phase</h4>
                    <p className="text-sm text-gray-600 mb-2">Weeks 3-5</p>
                    <div className="w-full bg-purple-50 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: "100%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-lg shrink-0">
                    <i className="ri-code-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Development Phase</h4>
                    <p className="text-sm text-gray-600 mb-2">Weeks 6-10</p>
                    <div className="w-full bg-green-50 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-lg shrink-0">
                    <i className="ri-rocket-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Launch Phase</h4>
                    <p className="text-sm text-gray-600 mb-2">Weeks 11-12</p>
                    <div className="w-full bg-yellow-50 rounded-full h-2">
                      <div
                        className="bg-yellow-600 h-2 rounded-full"
                        style={{ width: "30%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-3">Current Phase</h4>
                <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <i className="ri-code-line"></i>
                  </div>
                  <div>
                    <div className="font-medium">Development</div>
                    <div className="text-xs text-gray-500">
                      Sprint 3 of 5 in progress
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Our Tech Stack</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">Customizable</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <i className="ri-smartphone-line text-blue-600"></i>
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      React
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      Angular
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      Vue.js
                    </span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      Flutter
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <i className="ri-server-line text-green-600"></i>
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      Node.js
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      Python
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      .NET
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                      Java
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <i className="ri-database-2-line text-purple-600"></i>
                    Databases
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                      PostgreSQL
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                      MongoDB
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                      MySQL
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                      Firebase
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium mb-3 flex items-center gap-2">
                    <i className="ri-cloud-line text-yellow-600"></i>
                    Cloud & DevOps
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      AWS
                    </span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      Azure
                    </span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      Docker
                    </span>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                      Kubernetes
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">Recommended Stack</h4>
                <div className="p-4 bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 flex items-center justify-center bg-white text-primary rounded-full">
                      <i className="ri-star-fill"></i>
                    </div>
                    <div>
                      <div className="font-medium">MERN Stack</div>
                      <div className="text-xs text-gray-600">
                        MongoDB, Express, React, Node.js
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">
                    Ideal for scalable web applications with real-time features
                    and rapid development cycles.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Technology Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We leverage cutting-edge technologies tailored to your product
                requirements, ensuring performance, scalability, and
                maintainability.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-stack-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Full-Stack Capabilities
                    </h3>
                    <p className="text-gray-600">
                      Expertise across frontend, backend, databases, and
                      infrastructure to deliver complete solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-smartphone-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Cross-Platform Development
                    </h3>
                    <p className="text-gray-600">
                      Build for web, mobile (iOS & Android), and desktop with
                      shared codebases for efficiency.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-artboard-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Future-Proof Architecture
                    </h3>
                    <p className="text-gray-600">
                      Modular design patterns and clean code practices that
                      accommodate growth and change.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-shield-check-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Security First</h3>
                    <p className="text-gray-600">
                      Built-in security measures and compliance with industry
                      standards from day one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="cases" className="py-10 md:py-20 ">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-gray-600">
              We've helped startups and enterprises bring innovative products to
              market that deliver real business value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <div className="text-4xl font-bold text-blue-600">EduTech</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Learning Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Developed a personalized learning management system serving
                  50,000+ students with 95% satisfaction rate.
                </p>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    React
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">
                    MongoDB
                  </span>
                </div> */}
                {/* <a
                  href="#"
                  className="text-primary font-medium text-sm hover:underline flex items-center"
                >
                  Read case study
                  <i className="ri-arrow-right-line ml-1"></i>
                </a> */}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-green-100 flex items-center justify-center">
                <div className="text-4xl font-bold text-green-600">FinTech</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Banking App</h3>
                <p className="text-gray-600 mb-4">
                  Built a secure mobile banking application processing $20M+
                  monthly transactions with zero downtime.
                </p>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    Flutter
                  </span>
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">
                    .NET
                  </span>
                  <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                    SQL Server
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:underline flex items-center"
                >
                  Read case study
                  <i className="ri-arrow-right-line ml-1"></i>
                </a> */}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-48 bg-purple-100 flex items-center justify-center">
                <div className="text-4xl font-bold text-purple-600">
                  HealthTech
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  Telemedicine Platform
                </h3>
                <p className="text-gray-600 mb-4">
                  Created a HIPAA-compliant video consultation platform serving
                  500+ healthcare providers nationwide.
                </p>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                    Angular
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                    Python
                  </span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded">
                    Firebase
                  </span>
                </div>
                <a
                  href="#"
                  className="text-primary font-medium text-sm hover:underline flex items-center"
                >
                  Read case study
                  <i className="ri-arrow-right-line ml-1"></i>
                </a> */}
              </div>
            </div>
          </div>

          {/* <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary font-medium rounded-[5px] hover:bg-primary/10 transition-colors"
            >
              View All Case Studies
              <i className="ri-arrow-right-line ri-lg ml-2"></i>
            </a>
          </div> */}
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Build Your Next Product?"
        description=" Let's discuss how we can turn your idea into a successful digital product that stands out in the market."
        primaryButtonText="Get Free Consultation"
        primaryButtonLink="/contact"
        secondaryButtonText="Request Demo"
        onSecondaryButtonClick={() => openModal("demo")}
      />
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={modalType}
      />
    </div>
  );
};

export default ProductDevelopment;
