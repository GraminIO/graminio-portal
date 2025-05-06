import React, { useState } from 'react';
import CTA from "../../components/CTA";
import ContactFormModal from '../../components/contactModal';
import RequestDemoButton from '../../components/RequestDemoButton';

const DataExtractionAndOrganization : React.FC= () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  return (
     

     <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="Data-Extraction-section pt-28 pb-20 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[#000000c2] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Data Extraction And Organization</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
            Harness the power of artificial intelligence to extract, organize, and utilize valuable data from your documents. Eliminate manual data entry and streamline your workflow with our cutting-edge extraction solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Overview */}
      <section id="service-overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Extraction and Organization Service</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered data extraction platform converts unstructured document content into structured, actionable data formats that integrate seamlessly with your business systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <img
                src="https://www.pranathiss.com/blog/wp-content/uploads/Modern-Data-Extraction-Techniques.png"
                alt="Data Extraction and Organization"
                className="w-full h-56 object-cover object-top rounded mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Extraction and Organization
              </h3>
              <p className="text-gray-600 mb-4">
                Streamline your workflow with our data extraction tools that
                identify and capture key information from documents. The system
                can organize extracted data into structured formats ready for
                analysis or integration with your existing business systems.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mt-1 mr-2">
                    <i className="ri-check-line text-primary"></i>
                  </div>
                  <span className="text-gray-600">Custom data field extraction</span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mt-1 mr-2">
                    <i className="ri-check-line text-primary"></i>
                  </div>
                  <span className="text-gray-600">
                    Structured output formats (CSV, JSON, XML)
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mt-1 mr-2">
                    <i className="ri-check-line text-primary"></i>
                  </div>
                  <span className="text-gray-600">API integration with existing systems</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Unlock the Power of Your Document Data
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Every document in your organization contains valuable data locked in unstructured formats. Our advanced AI extraction technology liberates this information, making it accessible and actionable across your business processes.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">
                  What We Can Extract:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-file-list-line text-primary"></i>
                    </div>
                    <span>Invoice data & line items</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-contract-left-right-line text-primary"></i>
                    </div>
                    <span>Contract information</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-table-line text-primary"></i>
                    </div>
                    <span>Table data & forms</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-bar-chart-grouped-line text-primary"></i>
                    </div>
                    <span>Financial statements</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-price-tag-3-line text-primary"></i>
                    </div>
                    <span>Product specifications</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                      <i className="ri-calendar-check-line text-primary"></i>
                    </div>
                    <span>Dates & deadlines</span>
                  </li>
                </ul>
              </div>
              <a onClick={() => openModal("demo")} href="#demo" className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-[5px] font-medium shadow-lg transition duration-300 inline-flex items-center w-auto self-start">
                Schedule a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our data extraction service combines advanced AI with practical workflows to deliver accurate, valuable data from any document type.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-robot-line text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Recognition</h3>
              <p className="text-gray-600">
                Our machine learning models identify and extract data from various document layouts without requiring pre-defined templates.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-file-search-line text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Format Flexibility</h3>
              <p className="text-gray-600">
                Process documents in multiple formats including PDFs, scanned images, Word files, and more with equal accuracy and efficiency.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-database-2-line text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Transformation</h3>
              <p className="text-gray-600">
                Convert extracted information into structured formats like JSON, CSV, or XML for seamless integration with your systems.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-cloud-line text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cloud Processing</h3>
              <p className="text-gray-600">
                Process thousands of documents simultaneously with our scalable cloud infrastructure for enterprise-level extraction needs.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-shield-check-line text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security with encryption, access controls, and compliance features to protect sensitive document information.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-link-m text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">API Integration</h3>
              <p className="text-gray-600">
                Connect our extraction service with your existing software ecosystem through robust API endpoints and webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How Our Data Extraction Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A simple, powerful process that transforms your documents into structured data with minimal effort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-4">Document Upload</h3>
              <p className="text-gray-600 mb-4">
                Upload your documents through our secure portal, API, or integrations with your existing document storage systems.
              </p>
              <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className="ri-upload-cloud-2-line text-dark-400 text-5xl"></i>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-4">AI Processing</h3>
              <p className="text-gray-600 mb-4">
                Our AI algorithms analyze the documents, identify key data fields, and extract relevant information with high accuracy.
              </p>
              <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className="ri-cpu-line text-dark-400 text-5xl"></i>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pt-4">Data Export</h3>
              <p className="text-gray-600 mb-4">
                Access structured data through our dashboard, download in your preferred format, or integrate directly with your business systems.
              </p>
              <div className="w-full h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className="ri-database-2-line text-dark-400 text-5xl"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="use-cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Data Extraction Use Cases</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how our data extraction solutions are transforming workflows across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-money-dollar-circle-line text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Financial Document Processing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Extract data from invoices, receipts, purchase orders, and financial statements to automate accounts payable/receivable workflows and reduce manual data entry by 90%.
              </p>
              {/* <div className="flex justify-end">
              <a href="#contact" className="text-primary hover:text-blue-700 font-semibold flex items-center">
                  Learn more
                  <i className="ri-arrow-right-line ml-1"></i>
                </a>
              </div> */}
            </div>

            {/* Use Case 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-file-text-line text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Contract Analysis</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Identify key terms, obligations, dates, and parties in contracts to accelerate review processes, monitor compliance, and reduce legal risks through comprehensive contract analysis.
              </p>
              {/* <div className="flex justify-end">
              <a href="#contact" className="text-primary hover:text-blue-700 font-semibold flex items-center">
                  Learn more
                  <i className="ri-arrow-right-line ml-1"></i>
                </a>
              </div> */}
            </div>

            {/* Use Case 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-folder-chart-line text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Form Processing</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Automate data collection from applications, registration forms, and surveys by extracting information directly into your databases without manual transcription.
              </p>
              {/* <div className="flex justify-end">
              <a href="#contact" className="text-primary hover:text-blue-700 font-semibold flex items-center">
                  Learn more
                  <i className="ri-arrow-right-line ml-1"></i>
                </a>
              </div> */}
            </div>

            {/* Use Case 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <i className="ri-file-list-3-line text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Regulatory Compliance</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Extract critical compliance information from regulatory documents and internal policies to ensure adherence to industry standards and reduce compliance risks.
              </p>
              {/* <div className="flex justify-start">
                <a href="#contact" className="text-primary hover:text-blue-700 font-semibold flex items-center">
                  Learn more
                  <i className="ri-arrow-right-line ml-1"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Start Extracting Value From Your Documents Today"
        description="See how our AI document extraction technology can transform your workflow and save countless hours of manual processing."
        primaryButtonText="Get Started for free"
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
export default DataExtractionAndOrganization;