import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const Microservices: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<"general" | "consultation" | "demo">("general");
  
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
      <section className="hero-section py-10 md:py-40 relative  relative bg-[url('/Microservices-Architecture-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ">
              <span className="">Microservices Architecture</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Build scalable, resilient applications with our expert microservices solutions. 
              Transform your monolithic systems into agile, independent services that accelerate 
              your digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-10 md:py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Microservices Advantages
            </h2>
            <p className="text-lg text-gray-600">
              Our microservices architecture delivers unparalleled flexibility, 
              scalability, and resilience for your business applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-cpu-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Independent Deployment
              </h3>
              <p className="text-gray-600">
                Update and scale individual services without affecting your entire application.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-expand-left-right-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Horizontal Scalability
              </h3>
              <p className="text-gray-600">
                Scale specific components to meet demand, optimizing resource utilization.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-shield-check-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fault Isolation</h3>
              <p className="text-gray-600">
                Contain failures within services to prevent system-wide outages.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-code-box-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Technology Diversity</h3>
              <p className="text-gray-600">
                Use the best technology stack for each service's specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Microservices Architecture */}
      <section id="architecture" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modern Microservices Architecture
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We design and implement microservices architectures that are resilient, 
                scalable, and maintainable. Our approach ensures each service has a 
                single responsibility and communicates through well-defined APIs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Containerized services with Docker and Kubernetes orchestration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    API gateways for efficient service communication
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Event-driven architecture for asynchronous processing
                  </p>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn more about our architecture approach
                <i className="ri-arrow-right-line ri-lg ml-1"></i>
              </a> */}
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <img 
                  src="/Modern-Microservices-Architecture.jpg" 
                  alt="Microservices architecture diagram" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="text-center text-sm text-gray-500">
                Our microservices ecosystem with independent, loosely coupled services
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process */}
      <section id="migration" className="py-10 md:py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">Migration Roadmap</h3>
                  <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">6-12 months</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4 border-b pb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full shrink-0">1</div>
                    <div>
                      <h4 className="font-medium mb-1">Assessment & Planning</h4>
                      <p className="text-sm text-gray-600">Analyze current system and identify microservices candidates</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 border-b pb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full shrink-0">2</div>
                    <div>
                      <h4 className="font-medium mb-1">Pilot Service Development</h4>
                      <p className="text-sm text-gray-600">Build and deploy first microservice with CI/CD pipeline</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 border-b pb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full shrink-0">3</div>
                    <div>
                      <h4 className="font-medium mb-1">API Gateway Implementation</h4>
                      <p className="text-sm text-gray-600">Establish communication layer between services</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 border-b pb-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full shrink-0">4</div>
                    <div>
                      <h4 className="font-medium mb-1">Full Migration</h4>
                      <p className="text-sm text-gray-600">Gradually decompose monolith into microservices</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full shrink-0">5</div>
                    <div>
                      <h4 className="font-medium mb-1">Monitoring & Optimization</h4>
                      <p className="text-sm text-gray-600">Implement observability tools and performance tuning</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Monolith to Microservices Migration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We guide enterprises through the complex process of transitioning 
                from monolithic architectures to agile microservices. Our proven 
                methodology minimizes risk and maximizes ROI.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-route-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Strategic Decomposition
                    </h3>
                    <p className="text-gray-600">
                      Identify bounded contexts and gradually extract services 
                      without disrupting business operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-git-branch-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Database Transition
                    </h3>
                    <p className="text-gray-600">
                      Implement database per service pattern with appropriate 
                      synchronization strategies.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-team-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Team Restructuring
                    </h3>
                    <p className="text-gray-600">
                      Align cross-functional teams with service ownership 
                      following DevOps principles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section id="technology" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cutting-Edge Technology Stack
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We leverage industry-leading technologies to build robust 
                microservices architectures tailored to your specific needs.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="tech-card bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <i className="ri-docker-fill text-blue-600 ri-xl"></i>
                    </div>
                    <h4 className="font-semibold">Containerization</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Docker containers with Kubernetes orchestration for automated 
                    deployment, scaling, and management.
                  </p>
                </div>
                
                <div className="tech-card bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                      <i className="ri-server-line text-green-600 ri-xl"></i>
                    </div>
                    <h4 className="font-semibold">API Gateways</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Kong, Apigee or AWS API Gateway for request routing, 
                    composition, and protocol translation.
                  </p>
                </div>
                
                <div className="tech-card bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                      <i className="ri-database-2-line text-purple-600 ri-xl"></i>
                    </div>
                    <h4 className="font-semibold">Service Mesh</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Istio or Linkerd for service-to-service communication, 
                    security, and observability.
                  </p>
                </div>
                
                <div className="tech-card bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                      <i className="ri-cloud-line text-yellow-600 ri-xl"></i>
                    </div>
                    <h4 className="font-semibold">Cloud Platforms</h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    AWS, Azure, or GCP with managed services for databases, 
                    messaging, and serverless components.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">
                  Technology Adoption Roadmap
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">Customized</span>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Containerization</span>
                  <span className="text-primary font-medium">100%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "100%" }}></div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">CI/CD Pipelines</span>
                  <span className="text-primary font-medium">95%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "95%" }}></div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Service Mesh</span>
                  <span className="text-primary font-medium">85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Observability</span>
                  <span className="text-primary font-medium">90%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div className="flex items-center flex-wrap gap-5 justify-between">
                <span className="text-gray-600">Next technology assessment in 2 weeks</span>
                <button onClick={() => openModal("consultation")} className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                  Discuss Stack
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DevOps Integration */}
      <section id="devops" className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md relative z-10">
                  <div className="mb-6">
                    <img
                      src="/DevOps-for-Microservices.png"
                      alt="DevOps pipeline"
                      className="w-full h-auto rounded object-cover"
                    />
                  </div>

                  <h4 className="text-xl font-semibold mb-4">
                    Automated Delivery Pipeline
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Our CI/CD pipelines enable rapid, reliable microservices 
                    deployment with automated testing, security scanning, 
                    and progressive rollout strategies.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-github-fill ri-lg"></i>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-gitlab-fill ri-lg"></i>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-javascript-line ri-lg"></i>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-terminal-line ri-lg"></i>
                      </div>
                    </div>

                    {/* <button className="text-primary font-medium hover:underline flex items-center">
                      View all tools
                      <i className="ri-arrow-right-s-line ri-lg ml-1"></i>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                DevOps for Microservices
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We implement comprehensive DevOps practices tailored for 
                microservices environments, enabling rapid iteration and 
                reliable operations at scale.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-loop-left-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Continuous Integration
                    </h3>
                    <p className="text-gray-600">
                      Automated builds and testing for every code change across 
                      all services with parallel execution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-rocket-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Continuous Deployment
                    </h3>
                    <p className="text-gray-600">
                      Zero-downtime deployments with canary releases, blue-green 
                      deployments, and feature flags.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-dashboard-3-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Observability
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive monitoring, logging, and tracing across all 
                      services with centralized dashboards.
                    </p>
                  </div>
                </div>
              </div>

              {/* <a
                href="#"
                className="px-6 py-3 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore DevOps Solutions
              </a> */}
            </div>
          </div>
        </div>
      </section>
    <CTA
    title="Ready to Transform Your Architecture?"
    description=" Let our microservices experts help you build scalable, resilient systems that accelerate your business growth."
    primaryButtonText="Start Your Migration"
    primaryButtonLink="/contact"
    secondaryButtonText="Consult Our Architects"
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

export default Microservices;