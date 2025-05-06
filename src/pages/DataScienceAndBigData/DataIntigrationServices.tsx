import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const DataIntegrationServices: React.FC = () => {
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
      <section className="hero-section pt-28 pb-20 md:pt-40 md:pb-32 relative bg-[url('/Data-Integration-Services_bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#000000c3] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Data Integration Services</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Seamlessly connect, transform, and unify your data across systems
              with our enterprise-grade integration platform. Break down data
              silos and create a single source of truth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
              {/* <a
                href="#"
                className="border border-white text-white px-6 py-3 rounded-[5px] font-medium hover:bg-white/10 transition duration-300"
              >
                Explore Solutions
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Data Integration Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              Our platform provides end-to-end data integration solutions that
              connect your applications, databases, and systems while ensuring
              data quality and consistency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-database-2-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Multi-Source Connectivity
              </h3>
              <p className="text-gray-600">
                Connect to 200+ data sources including databases, APIs, SaaS
                apps, and legacy systems with pre-built connectors.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-repeat-2-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Data Sync
              </h3>
              <p className="text-gray-600">
                Enable real-time data flows between systems with change data
                capture and event-driven architectures.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-shape-2-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Data Transformation
              </h3>
              <p className="text-gray-600">
                Cleanse, standardize, and transform data with our powerful
                ETL/ELT engine and 100+ pre-built transformations.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-shield-check-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                Enterprise-grade security with encryption, masking, and granular
                access controls to protect sensitive data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Platform Section */}
      <section id="platform" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unified Integration Platform
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform provides a single environment to design, deploy,
                and monitor all your data integration workflows. Whether you
                need batch processing, real-time streaming, or API-based
                integrations, we've got you covered.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Visual workflow designer with drag-and-drop interface
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Support for both cloud and on-premises deployments
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Built-in data quality and validation rules
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Comprehensive monitoring and alerting
                  </p>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                Learn more about our platform
                <i className="ri-arrow-right-line ri-lg ml-1"></i>
              </a> */}
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium">Integration Workflow Designer</h3>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600">
                    <i className="ri-settings-3-line"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600">
                    <i className="ri-fullscreen-line"></i>
                  </button>
                </div>
              </div>

              <div className="h-96 bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                <div className="relative h-full">
                  {/* Workflow nodes */}
                  <div className="absolute top-8 left-8 w-24 h-24 bg-white border-2 border-green-400 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <i className="ri-database-2-line ri-xl text-blue-600 mb-1"></i>
                      <span className="text-xs font-medium">Salesforce</span>
                    </div>
                  </div>

                  <div className="absolute top-8 left-48 w-24 h-24 bg-white border-2 border-green-400 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <i className="ri-database-2-line ri-xl text-blue-600 mb-1"></i>
                      <span className="text-xs font-medium">MySQL</span>
                    </div>
                  </div>

                  <div className="absolute top-32 left-28 w-24 h-24 bg-white border-2 border-green-400 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <i className="ri-shape-2-line ri-xl text-blue-600 mb-1"></i>
                      <span className="text-xs font-medium">Transform</span>
                    </div>
                  </div>

                  <div className="absolute top-56 left-28 w-24 h-24 bg-white border-2 border-green-400 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <i className="ri-dashboard-line ri-xl text-blue-600 mb-1"></i>
                      <span className="text-xs font-medium">
                        Data Warehouse
                      </span>
                    </div>
                  </div>

                  {/* Connection arrows */}
                  <div className="absolute top-24 left-20 w-8 h-8 text-green-400">
                    <i className="ri-arrow-down-line ri-xl"></i>
                  </div>
                  <div className="absolute top-40 left-40 w-8 h-8 text-green-400">
                    <i className="ri-arrow-down-line ri-xl"></i>
                  </div>
                  <div className="absolute top-24 left-64 w-8 h-8 text-green-400">
                    <i className="ri-arrow-down-line ri-xl"></i>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">
                  Save Draft
                </button>
                <button className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                  Deploy Integration
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connectors Section */}
      <section id="connectors" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">
                    Connector Marketplace
                  </h3>
                  <div className="relative">
                    <select className="appearance-none bg-gray-50 border border-gray-200 rounded px-4 py-2 pr-8 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/20 focus:border-green-600">
                      <option>All Categories</option>
                      <option>Databases</option>
                      <option>Cloud Apps</option>
                      <option>APIs</option>
                      <option>Legacy Systems</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-green-200 hover:bg-green-50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <i className="ri-database-2-line ri-lg"></i>
                      </div>
                      <span className="font-medium">PostgreSQL</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Fully-featured connector for PostgreSQL databases with
                      bulk operations support.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg hover:border-green-200 hover:bg-green-50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <i className="ri-salesforce-fill ri-lg"></i>
                      </div>
                      <span className="font-medium">Salesforce</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Bi-directional sync with Salesforce including custom
                      objects and fields.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg hover:border-green-200 hover:bg-green-50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <i className="ri-rest-api-line ri-lg"></i>
                      </div>
                      <span className="font-medium">REST API</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Generic REST API connector with OAuth support and request
                      templating.
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg hover:border-green-200 hover:bg-green-50 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                        <i className="ri-file-excel-2-line ri-lg"></i>
                      </div>
                      <span className="font-medium">Excel/CSV</span>
                    </div>
                    <p className="text-sm text-gray-600">
                      Import/export from Excel and CSV files with automatic
                      schema detection.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Extensive Connector Library
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Accelerate your integration projects with our growing library of
                200+ pre-built connectors for popular databases, applications,
                and APIs. Can't find what you need? We'll build a custom
                connector for your specific requirements.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-database-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Database Connectors
                    </h3>
                    <p className="text-gray-600">
                      SQL Server, Oracle, MySQL, PostgreSQL, MongoDB, and more
                      with optimized query performance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-cloud-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Cloud Application Connectors
                    </h3>
                    <p className="text-gray-600">
                      Salesforce, HubSpot, Marketo, NetSuite, Workday, and other
                      popular SaaS platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-server-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Legacy System Connectors
                    </h3>
                    <p className="text-gray-600">
                      Mainframe, AS/400, SAP, and other enterprise systems with
                      specialized protocols.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Transformation Section */}
      <section id="transformation" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Powerful Data Transformation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Cleanse, standardize, and enrich your data as it moves between
                systems. Our transformation engine handles complex data
                manipulation with ease while maintaining data integrity.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-filter-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Data Cleansing</h3>
                    <p className="text-gray-600">
                      Standardize formats, remove duplicates, and fix errors
                      with built-in data quality rules.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-node-tree ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Complex Transformations
                    </h3>
                    <p className="text-gray-600">
                      Handle nested data structures, array operations, and
                      hierarchical transformations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-gray-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-function-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Custom Logic</h3>
                    <p className="text-gray-600">
                      Implement business-specific rules with JavaScript, Python,
                      or SQL snippets.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">
                    Transformation Builder
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      Customer Data Standardization
                    </span>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600">
                      <i className="ri-settings-3-line"></i>
                    </button>
                  </div>
                </div>

                <div className="h-64 bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                  <div className="grid grid-cols-3 gap-4 h-full">
                    <div className="bg-white p-3 rounded border border-gray-200">
                      <div className="text-xs text-gray-500 mb-2">Input</div>
                      <div className="space-y-2">
                        <div className="text-sm">first_name: "JOHN"</div>
                        <div className="text-sm">last_name: "DOE"</div>
                        <div className="text-sm">phone: "123.456.7890"</div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                      <div className="w-8 h-8 flex items-center justify-center text-blue-600">
                        <i className="ri-arrow-right-line ri-lg"></i>
                      </div>
                      <div className="text-xs text-center mt-2 text-gray-500">
                        Transformations
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded border border-gray-200">
                      <div className="text-xs text-gray-500 mb-2">Output</div>
                      <div className="space-y-2">
                        <div className="text-sm">firstName: "John"</div>
                        <div className="text-sm">lastName: "Doe"</div>
                        <div className="text-sm">phone: "(123) 456-7890"</div>
                        <div className="text-sm">fullName: "John Doe"</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="bg-gray-100 p-2 rounded text-center text-sm">
                    Trim Whitespace
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-center text-sm">
                    Proper Case
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-center text-sm">
                    Phone Format
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-center text-sm">
                    Concatenate
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-center text-sm">
                    Remove Special Chars
                  </div>
                  <div className="bg-gray-100 p-2 rounded text-center text-sm">
                    Default Values
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <button className="px-4 py-2 border border-gray-200 rounded hover:bg-gray-50">
                    Test Transformation
                  </button>
                  <button className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                    Save Transformation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Unify Your Data Ecosystem?"
        description="Connect your systems, break down data silos, and create a seamless flow of information across your organization."
        primaryButtonText="Request Demo"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Consultation"
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

export default DataIntegrationServices;
