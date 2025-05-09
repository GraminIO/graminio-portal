import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const DocumentAnalysis: React.FC = () => {
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
      <section className="Document_Analysis_hero py-20 md:py-40 relative">
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Document Analysis</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transform your documents into actionable insights with our
              advanced document analysis solution. Our AI-powered technology
              identifies key information, recognizes patterns, and extracts
              critical data points to help you make informed decisions faster.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Document Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform offers multiple ways to extract value from
              your documents
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Data Extraction
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Automatically extract structured data from invoices, receipts,
                forms, and other documents with high accuracy. Our AI recognizes
                text, tables, checkboxes, and handwriting across multiple
                formats.
              </p>
              {/* <div className="text-center">
                <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300 flex items-center justify-center mx-auto">
                  <span>Learn More</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Document Organization
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Intelligently categorize and organize your documents by type,
                content, and metadata for easy retrieval. Create custom
                taxonomies and implement automated workflows based on document
                classification.
              </p>
              {/* <div className="text-center">
                <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300 flex items-center justify-center mx-auto">
                  <span>How It Works</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">
                Content Summarization
              </h3>
              <p className="text-gray-600 mb-6 text-center">
                Generate concise summaries of lengthy documents while preserving
                key points and insights for quick comprehension. Customize
                summary length and focus areas based on your specific needs and
                priorities.
              </p>
              {/* <div className="text-center">
                <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors duration-300 flex items-center justify-center mx-auto">
                  <span>Try It Now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Intelligent Document Processing
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our streamlined process transforms your documents into actionable
              data in four simple steps
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Process Steps */}
            <div className="grid md:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="relative bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Upload</h3>
                <p className="text-gray-600 text-center">
                  Upload your documents in any format - PDF, Word, Excel,
                  images, or scanned files. Batch upload is supported for
                  processing multiple documents at once.
                </p>
                {/* Connector line */}
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-indigo-300 -z-10 transform translate-x-[-50%]"></div>
              </div>

              {/* Step 2 */}
              <div className="relative bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Analyze</h3>
                <p className="text-gray-600 text-center">
                  Our AI processes and analyzes content using advanced OCR,
                  natural language processing, and machine learning to
                  understand document context and structure.
                </p>
                {/* Connector line */}
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-indigo-300 -z-10 transform translate-x-[-50%]"></div>
              </div>

              {/* Step 3 */}
              <div className="relative bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Extract</h3>
                <p className="text-gray-600 text-center">
                  Key data points are identified and extracted with high
                  precision. Our system can recognize entities, dates, amounts,
                  and relationships between information elements.
                </p>
                {/* Connector line */}
                <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-indigo-300 -z-10 transform translate-x-[-50%]"></div>
              </div>

              {/* Step 4 */}
              <div className="relative bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <div className="h-12 w-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg mb-4 mx-auto">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">Deliver</h3>
                <p className="text-gray-600 text-center">
                  Access organized data in your preferred format - CSV, JSON,
                  Excel, or directly integrate with your existing business
                  systems through our secure API.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex justify-center mt-16">
            <button
              onClick={() => openModal("demo")}
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-[5px] font-medium shadow-lg transition duration-300 flex items-center"
            >
              <span>Start Processing</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div> */}
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-10 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Powered by Advanced AI Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform leverages cutting-edge artificial intelligence to
              deliver accuracy and insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Technology 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">
                Natural Language Processing
              </h3>
              <p className="text-gray-600 mb-4">
                Our advanced NLP algorithms understand document context,
                sentiment, and semantic meaning to extract relevant information
                even from complex, unstructured documents. The system
                continuously improves through machine learning.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Entity recognition across 40+ languages
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Context-aware information extraction
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Sentiment and intent analysis
                </li>
              </ul>
            </div>

            {/* Technology 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-indigo-700">
                Computer Vision & OCR
              </h3>
              <p className="text-gray-600 mb-4">
                Our state-of-the-art optical character recognition technology
                can identify and capture text from any document type, including
                low-quality scans, handwritten notes, and complex forms with
                tables and charts.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  99.8% accuracy on standard documents
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Handwriting recognition capabilities
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Table and chart data extraction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Replacing Industry Solutions */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your document workflows with these powerful advantages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-blue-50 rounded-lg p-8 border-t-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">Save Time</h3>
              <p className="text-gray-600 text-center">
                Reduce document processing time by up to 80%. What used to take
                hours now takes minutes with our automated extraction and
                analysis tools.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-green-50 rounded-lg p-8 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Improve Accuracy
              </h3>
              <p className="text-gray-600 text-center">
                Eliminate human error with AI-powered extraction that achieves
                up to 99.8% accuracy, even with complex document formats and
                poor scan quality.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-purple-50 rounded-lg p-8 border-t-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Scale Operations
              </h3>
              <p className="text-gray-600 text-center">
                Process thousands of documents simultaneously without adding
                staff. Our platform scales with your needs, handling peak
                volumes with ease.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-yellow-50 rounded-lg p-8 border-t-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-yellow-100 mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-yellow-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                Gain Insights
              </h3>
              <p className="text-gray-600 text-center">
                Unlock valuable business intelligence hidden in your documents.
                Identify trends, detect anomalies, and make data-driven
                decisions with enriched document data.
              </p>
            </div>
          </div>

          {/* <div className="mt-16 text-center">
            <a
              href="#"
              className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800"
            >
              <span>See our detailed ROI calculator</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div> */}
        </div>
      </section>

      {/* Testimonials Section - New Section */}
      {/* <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what organizations are
              achieving with our document analysis platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-8 h-8 w-8 bg-indigo-600 transform rotate-45"></div>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-700 mr-4">
                  FF
                </div>
                <div>
                  <h4 className="font-bold">Financial First</h4>
                  <p className="text-gray-500 text-sm">Banking & Finance</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Our loan processing time decreased by 73% after implementing
                this document analysis solution. What used to take days now
                happens in hours, significantly improving our customer
                satisfaction scores."
              </p>
              <p className="text-sm text-gray-500">
                Sarah Johnson, Operations Director
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-8 h-8 w-8 bg-indigo-600 transform rotate-45"></div>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-700 mr-4">
                  HC
                </div>
                <div>
                  <h4 className="font-bold">HealthCare Plus</h4>
                  <p className="text-gray-500 text-sm">Healthcare Provider</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "The accuracy of our patient records improved dramatically while
                reducing administrative work. Our staff now spends more time
                with patients instead of paperwork. It's been transformative."
              </p>
              <p className="text-sm text-gray-500">
                Dr. Michael Chen, Chief Medical Officer
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md relative">
              <div className="absolute -top-4 left-8 h-8 w-8 bg-indigo-600 transform rotate-45"></div>
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-700 mr-4">
                  GL
                </div>
                <div>
                  <h4 className="font-bold">Global Logistics</h4>
                  <p className="text-gray-500 text-sm">Transportation</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">
                "Processing thousands of shipping documents daily was
                overwhelming until we implemented this solution. Now we extract
                and verify data automatically, reducing errors by 94% and saving
                over 200 labor hours weekly."
              </p>
              <p className="text-sm text-gray-500">
                Thomas Reed, Supply Chain Director
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <CTA
        title="Ready to Transform Your Document Workflow?"
        description="Join thousands of organizations using our AI-powered document analysis technology to save time and uncover valuable insights Start with a free trial today - no credit card required."
        primaryButtonText="Get Started Free"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Demo"
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

export default DocumentAnalysis;
