import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const ERPCRMSolutions: React.FC = () => {
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
      <section className="hero-section py-10 md:py-40 relative bg-[url('/Custom-ERP-CRM-Solutions-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ">
              <span className="">Custom ERP & CRM Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transform your business operations with tailored ERP and CRM systems that streamline processes, enhance customer relationships, and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Business Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Our custom ERP and CRM platforms integrate all your business functions into a unified system designed specifically for your operational needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-database-2-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Centralized Data Management
              </h3>
              <p className="text-gray-600">
                Consolidate all business data into a single source of truth for better decision-making and operational efficiency.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-line-chart-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Business Process Automation
              </h3>
              <p className="text-gray-600">
                Automate repetitive tasks across departments to reduce errors and free up resources for strategic work.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-team-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Relationship Tools</h3>
              <p className="text-gray-600">
                Track all customer interactions, manage sales pipelines, and deliver personalized experiences at scale.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-dashboard-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
              <p className="text-gray-600">
                Gain actionable insights with customizable dashboards and reports that update in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Solutions */}
      <section id="erp" className="py-10 md:py-20 ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Tailored ERP Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our enterprise resource planning systems are designed to optimize your core business processes, from inventory management to financial reporting, all customized to your specific industry requirements.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    End-to-end supply chain and inventory management
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Integrated financial management and accounting
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Human resources and payroll system integration
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Manufacturing and production planning modules
                  </p>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn more about our ERP capabilities
                <i className="ri-arrow-right-line ri-lg ml-1"></i>
              </a> */}
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">ERP Dashboard</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Live Data</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Inventory Value</span>
                    <i className="ri-box-3-line text-blue-500"></i>
                  </div>
                  <p className="text-2xl font-bold">$1.24M</p>
                  <div className="text-xs text-green-500 mt-1">↑ 12% from last month</div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Open Orders</span>
                    <i className="ri-shopping-cart-2-line text-green-500"></i>
                  </div>
                  <p className="text-2xl font-bold">247</p>
                  <div className="text-xs text-red-500 mt-1">↓ 8% from last week</div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Production Output</span>
                    <i className="ri-factory-line text-purple-500"></i>
                  </div>
                  <p className="text-2xl font-bold">84%</p>
                  <div className="text-xs text-green-500 mt-1">↑ 5% from yesterday</div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Pending Approvals</span>
                    <i className="ri-timer-line text-yellow-500"></i>
                  </div>
                  <p className="text-2xl font-bold">19</p>
                  <div className="text-xs text-gray-500 mt-1">No change</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Recent Activities</h4>
                  <a href="#" className="text-sm text-primary hover:underline">View All</a>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full mt-1">
                      <i className="ri-check-line"></i>
                    </div>
                    <div>
                      <p className="text-sm">Order #1042 shipped to customer</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mt-1">
                      <i className="ri-file-text-line"></i>
                    </div>
                    <div>
                      <p className="text-sm">New invoice generated for Client A</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mt-1">
                      <i className="ri-alarm-warning-line"></i>
                    </div>
                    <div>
                      <p className="text-sm">Low stock alert for Product X</p>
                      <p className="text-xs text-gray-500">Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Solutions */}
      <section id="crm" className="py-10 md:py-20  bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                    AC
                  </div>
                  <div>
                    <h4 className="font-medium">Acme Corporation</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <span>Enterprise Client</span>
                      <span>•</span>
                      <span className="text-green-600">$250K Potential</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-phone-line"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-mail-line"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-more-2-fill"></i>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="w-full md:w-1/3">
                    <p className="text-sm text-gray-500 mb-1">Stage</p>
                    <div className="relative">
                      <select
                        className="appearance-none bg-gray-50 border border-gray-200 rounded px-3 py-2 pr-8 w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-sm"
                      >
                        <option>Proposal Sent</option>
                        <option>Initial Contact</option>
                        <option>Needs Analysis</option>
                        <option>Negotiation</option>
                        <option>Closed Won</option>
                        <option>Closed Lost</option>
                      </select>
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                        <i className="ri-arrow-down-s-line"></i>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/3">
                    <p className="text-sm text-gray-500 mb-1">Probability</p>
                    <div className="bg-gray-100 px-3 py-2 rounded text-sm font-medium">75%</div>
                  </div>
                  <div className="w-full md:w-1/3">
                    <p className="text-sm text-gray-500 mb-1">Expected Close</p>
                    <div className="bg-gray-100 px-3 py-2 rounded text-sm font-medium">Jun 15, 2023</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Primary Contact</p>
                    <p className="font-medium">John Smith</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Contact Email</p>
                    <p className="font-medium">john.smith@acme.com</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Deal Value</p>
                    <p className="font-medium">$250,000</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Last Contact</p>
                    <p className="font-medium">May 22, 2023</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Interaction History</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mt-1">
                      <i className="ri-mail-line"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Email sent with proposal</p>
                      <p className="text-xs text-gray-500">May 22, 2023</p>
                      <p className="text-sm text-gray-600 mt-1">Sent the final proposal documents with pricing and implementation timeline.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full mt-1">
                      <i className="ri-phone-line"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Discovery call</p>
                      <p className="text-xs text-gray-500">May 15, 2023</p>
                      <p className="text-sm text-gray-600 mt-1">Discussed their pain points with current system and our proposed solution.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full mt-1">
                      <i className="ri-presentation-line"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium">Product demo</p>
                      <p className="text-xs text-gray-500">May 5, 2023</p>
                      <p className="text-sm text-gray-600 mt-1">Showed key features that address their specific business requirements.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Add a note or log an activity..."
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-mic-line"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-primary">
                    <i className="ri-send-plane-fill"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Intelligent CRM Platform
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our customer relationship management system helps you manage all customer interactions, track sales opportunities, and deliver exceptional customer experiences at every touchpoint.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-focus-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      360° Customer View
                    </h3>
                    <p className="text-gray-600">
                      Consolidate all customer data including interactions, transactions, and preferences in a single profile.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-flow-chart ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Sales Pipeline Management
                    </h3>
                    <p className="text-gray-600">
                      Visualize and manage your entire sales process with customizable pipelines and automated workflows.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-mail-send-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Marketing Automation
                    </h3>
                    <p className="text-gray-600">
                      Create targeted campaigns, automate follow-ups, and track engagement across multiple channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section id="integration" className="py-10 md:py-20 ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless System Integration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our ERP and CRM solutions integrate effortlessly with your existing business applications, third-party services, and custom-built tools to create a unified technology ecosystem.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-plug-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      API-First Architecture
                    </h3>
                    <p className="text-gray-600">
                      Robust APIs enable easy integration with virtually any business application or custom solution.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-refresh-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Real-Time Data Sync
                    </h3>
                    <p className="text-gray-600">
                      Keep all your systems updated with the latest information through continuous synchronization.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-shield-check-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Enterprise-Grade Security
                    </h3>
                    <p className="text-gray-600">
                      Industry-standard security protocols protect your data across all integrated systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Connected Systems</h3>
                <button className="text-sm text-primary hover:underline flex items-center">
                  Add Integration
                  <i className="ri-add-line ri-lg ml-1"></i>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="integration-card p-4 border border-gray-200 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i className="ri-mail-line text-blue-600 ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Email Marketing</h4>
                    <p className="text-xs text-gray-500">Active</p>
                  </div>
                </div>
                <div className="integration-card p-4 border border-gray-200 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <i className="ri-account-box-line text-green-600 ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Accounting Software</h4>
                    <p className="text-xs text-gray-500">Active</p>
                  </div>
                </div>
                <div className="integration-card p-4 border border-gray-200 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <i className="ri-shopping-cart-line text-purple-600 ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">E-commerce Platform</h4>
                    <p className="text-xs text-gray-500">Active</p>
                  </div>
                </div>
                <div className="integration-card p-4 border border-gray-200 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <i className="ri-customer-service-2-line text-yellow-600 ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Support Ticketing</h4>
                    <p className="text-xs text-gray-500">Active</p>
                  </div>
                </div>
                <div className="integration-card p-4 border border-gray-200 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                    <i className="ri-cloud-line text-red-600 ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Cloud Storage</h4>
                    <p className="text-xs text-gray-500">Active</p>
                  </div>
                </div>
                <div className="integration-card p-4 border border-gray-200 rounded-lg flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <i className="ri-add-line text-gray-600 ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">Add New</h4>
                    <p className="text-xs text-gray-500">Connect</p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Integration Activity Log</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">E-commerce sync completed</span>
                    <span className="text-gray-500">2 min ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Accounting data updated</span>
                    <span className="text-gray-500">15 min ago</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">New support ticket created</span>
                    <span className="text-gray-500">1 hour ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="industries" className="py-10 md:py-20  bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We customize our ERP and CRM solutions to meet the unique requirements of your industry, with specialized modules and workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-hospital-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Patient management, appointment scheduling, and medical inventory tracking tailored for healthcare providers.
              </p>
              {/* <a href="#" className="text-primary font-medium hover:underline flex items-center text-sm">
                Learn more <i className="ri-arrow-right-line ml-1"></i>
              </a> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 text-green-600 rounded-lg mb-4">
                <i className="ri-store-2-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Retail</h3>
              <p className="text-gray-600 mb-4">
                Omnichannel retail solutions with inventory management, POS integration, and customer loyalty programs.
              </p>
              {/* <a href="#" className="text-primary font-medium hover:underline flex items-center text-sm">
                Learn more <i className="ri-arrow-right-line ml-1"></i>
              </a> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mb-4">
                <i className="ri-factory-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Production planning, quality control, and supply chain optimization for manufacturing operations.
              </p>
              {/* <a href="#" className="text-primary font-medium hover:underline flex items-center text-sm">
                Learn more <i className="ri-arrow-right-line ml-1"></i>
              </a> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 text-yellow-600 rounded-lg mb-4">
                <i className="ri-bank-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Financial Services</h3>
              <p className="text-gray-600 mb-4">
                Compliance-ready solutions for banking, insurance, and investment management firms.
              </p>
              {/* <a href="#" className="text-primary font-medium hover:underline flex items-center text-sm">
                Learn more <i className="ri-arrow-right-line ml-1"></i>
              </a> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-lg mb-4">
                <i className="ri-truck-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Logistics</h3>
              <p className="text-gray-600 mb-4">
                Fleet management, route optimization, and shipment tracking for logistics companies.
              </p>
              {/* <a href="#" className="text-primary font-medium hover:underline flex items-center text-sm">
                Learn more <i className="ri-arrow-right-line ml-1"></i>
              </a> */}
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 text-indigo-600 rounded-lg mb-4">
                <i className="ri-building-2-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Real Estate</h3>
              <p className="text-gray-600 mb-4">
                Property management, lead tracking, and transaction management for real estate professionals.
              </p>
              {/* <a href="#" className="text-primary font-medium hover:underline flex items-center text-sm">
                Learn more <i className="ri-arrow-right-line ml-1"></i>
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Business Operations?"
        description="Let's discuss how our custom ERP and CRM solutions can streamline your processes, improve customer relationships, and drive growth."
        primaryButtonText="Schedule Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="Contact Our Experts"
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

export default ERPCRMSolutions;