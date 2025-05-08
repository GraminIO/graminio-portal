import { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const QuestionAnswerCapabilities: React.FC = () => {
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
      <section className="Question-Capabilities-section pt-20 pb-20 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Question Answer Capabilities</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Discover how our intelligent system can answer your questions in
              real-time with precision and clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* New Features Section */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Powerful Q&A Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our intelligent system offers a comprehensive set of features to
              transform how you interact with your documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multi-document Analysis
              </h3>
              <p className="text-gray-600">
                Analyze multiple documents simultaneously to find connections
                and insights across your entire document library.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Contextual Understanding
              </h3>
              <p className="text-gray-600">
                Our AI comprehends context and nuance, delivering precise
                answers that consider the full meaning behind your questions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Citation Tracking
              </h3>
              <p className="text-gray-600">
                Every answer includes source references, allowing you to verify
                information and dive deeper into relevant sections.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Enterprise-grade Security
              </h3>
              <p className="text-gray-600">
                Your documents remain secure with end-to-end encryption and
                customizable data retention policies.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Natural Language Queries
              </h3>
              <p className="text-gray-600">
                Ask questions in everyday language without the need for specific
                keywords or technical syntax.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-yellow-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Data Integration
              </h3>
              <p className="text-gray-600">
                Connect with your existing tools and databases to create a
                unified knowledge ecosystem.
              </p>
            </div>
          </div>

          {/* <div className="mt-16 text-center">
            <a
              href="#"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-[5px] font-medium shadow-md inline-block transition duration-300"
            >
              Explore All Features
            </a>
          </div> */}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Q&A System Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the power of our intelligent document analysis system
              with this simple four-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center bg-blue-50 rounded-lg p-8 border-t-4 border-blue-500 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold"><svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H12M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M17.5 21L17.5 15M17.5 15L20 17.5M17.5 15L15 17.5" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Upload Documents
              </h3>
              <p className="text-gray-600">
                Simply upload your documents through our secure interface. We
                support all common file formats including PDF, DOCX, TXT, and
                more.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center bg-yellow-50 rounded-lg p-8 border-t-4 border-yellow-500 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold"><svg width="40px" height="40px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>ai</title> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="icon" fill="#ffffff" transform="translate(64.000000, 64.000000)"> <path d="M320,64 L320,320 L64,320 L64,64 L320,64 Z M171.749388,128 L146.817842,128 L99.4840387,256 L121.976629,256 L130.913039,230.977 L187.575039,230.977 L196.319607,256 L220.167172,256 L171.749388,128 Z M260.093778,128 L237.691519,128 L237.691519,256 L260.093778,256 L260.093778,128 Z M159.094727,149.47526 L181.409039,213.333 L137.135039,213.333 L159.094727,149.47526 Z M341.333333,256 L384,256 L384,298.666667 L341.333333,298.666667 L341.333333,256 Z M85.3333333,341.333333 L128,341.333333 L128,384 L85.3333333,384 L85.3333333,341.333333 Z M170.666667,341.333333 L213.333333,341.333333 L213.333333,384 L170.666667,384 L170.666667,341.333333 Z M85.3333333,0 L128,0 L128,42.6666667 L85.3333333,42.6666667 L85.3333333,0 Z M256,341.333333 L298.666667,341.333333 L298.666667,384 L256,384 L256,341.333333 Z M170.666667,0 L213.333333,0 L213.333333,42.6666667 L170.666667,42.6666667 L170.666667,0 Z M256,0 L298.666667,0 L298.666667,42.6666667 L256,42.6666667 L256,0 Z M341.333333,170.666667 L384,170.666667 L384,213.333333 L341.333333,213.333333 L341.333333,170.666667 Z M0,256 L42.6666667,256 L42.6666667,298.666667 L0,298.666667 L0,256 Z M341.333333,85.3333333 L384,85.3333333 L384,128 L341.333333,128 L341.333333,85.3333333 Z M0,170.666667 L42.6666667,170.666667 L42.6666667,213.333333 L0,213.333333 L0,170.666667 Z M0,85.3333333 L42.6666667,85.3333333 L42.6666667,128 L0,128 L0,85.3333333 Z" id="Combined-Shape"> </path> </g> </g> </g></svg></span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Processing
              </h3>
              <p className="text-gray-600">
                Our advanced AI analyzes your documents, identifying key
                information, relationships, and context within your content.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center bg-purple-50 rounded-lg p-8 border-t-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold"><svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" width="34px" height="34px" viewBox="0 0 52 52" enable-background="new 0 0 52 52" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M50,28c0-3.9-2.5-7.3-6-8.5C43.7,9.8,35.8,2,26,2S8.3,9.8,8,19.5c-3.5,1.2-6,4.6-6,8.5 c0,4.2,2.9,7.7,6.7,8.7C10.9,44.4,17.8,50,26,50s15.1-5.6,17.3-13.3C47.1,35.7,50,32.2,50,28z M40,19l-0.1-0.1l0.4,0.1H40z M26,46 c-7.7,0-14-6.5-14-14.4c0-2,0.4-5,1.2-6.8c0.1-0.3,0.3-0.6,0.4-0.9c3-1.2,5.6-3.3,7.3-6c3.5,4.4,9,7.4,15.1,7.4c2.1,0,2.7,0.1,2.9,0 c0.4,1.3,0.8,2.9,0.9,4.5c-0.6,2.5-4.5,4.9-10,5.2C29.6,34.5,29,34,28.4,34h-5c-0.8,0-1.4,0.8-1.4,1.6v3c0,0.8,0.6,1.4,1.4,1.4h5 c0.7,0,1.2-0.3,1.4-0.9c3.6-0.1,6.8-1.1,9.3-2.6C37.2,42,32.1,46,26,46z"></path> </g></svg></span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Ask Questions
              </h3>
              <p className="text-gray-600">
                Ask questions in natural language through our intuitive
                interface. No complex query language or specialized terms
                required.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center bg-green-50 rounded-lg p-8 border-t-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-2xl font-bold"><svg fill="#ffffff" height="34px" width="34px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M161.346,325.704v127.743c0,6.667,5.405,12.072,12.072,12.072c6.667,0,12.072-5.404,12.072-12.072V325.704H161.346z"></path> </g> </g> <g> <g> <path d="M326.16,325.704v127.743h-0.001c0,6.667,5.404,12.072,12.072,12.072c6.668,0,12.072-5.404,12.072-12.072V325.704H326.16z"></path> </g> </g> <g> <g> <path d="M205.694,325.704v145.62h-0.001c0,12.708,10.301,23.01,23.01,23.01s23.01-10.301,23.01-23.01v-145.62H205.694z"></path> </g> </g> <g> <g> <path d="M261.647,325.704v145.62h-0.001c0,12.708,10.301,23.01,23.01,23.01c12.708,0,23.01-10.301,23.01-23.01v-145.62H261.647z"></path> </g> </g> <g> <g> <circle cx="256.67" cy="98.495" r="39.739"></circle> </g> </g> <g> <g> <path d="M380.116,2.176c-9.39-4.896-20.971-1.251-25.867,8.138L280.96,150.897c-9.063,0-67.978,0-74.824,0 c-19.633,0-37.743,11.469-46.134,29.221c-3.623,7.664-25.287,53.492-28.34,59.952c-5.994,12.676,3.257,27.369,17.335,27.367 c0.016,0,0.032,0,0.048,0l73.748-0.185c10.59-0.026,19.153-8.632,19.126-19.222c-0.027-10.574-8.606-19.126-19.173-19.126 c-0.017,0-0.033,0-0.049,0l-43.392,0.108c8.658-18.314,6.823-14.433,15.366-32.505c0.051-0.107,0.103-0.214,0.157-0.32 c1.203-2.368,3.872-3.6,6.454-2.981c2.582,0.619,4.401,2.929,4.401,5.585v12.588l16.97-0.042c0.031,0,0.062,0,0.094,0 c20.25,0,36.688,16.388,36.739,36.649c0.018,7.136-2.006,13.797-5.513,19.444h53.273v-85.008 c2.008-2.383-4.062,8.799,81.008-154.379C393.15,18.652,389.506,7.07,380.116,2.176z"></path> </g> </g> <g> <g> <path d="M445.925,284.938c-7.281,0-377.56,0-379.851,0c-6.422,0-11.627,5.206-11.627,11.627s5.206,11.629,11.627,11.629H78.59 v185.96c0,9.856,7.99,17.846,17.846,17.846c9.856,0,17.846-7.99,17.846-17.846v-185.96c12.719,0,271.305,0,284.484,0v185.96 c0,9.856,7.99,17.846,17.846,17.846s17.846-7.99,17.846-17.846v-185.96h11.467c6.422,0,11.627-5.206,11.627-11.629 C457.553,290.145,452.346,284.938,445.925,284.938z"></path> </g> </g> </g></svg></span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Get Accurate Answers
              </h3>
              <p className="text-gray-600">
                Receive precise, contextually-relevant answers with source
                citations. Export findings or continue to explore your
                documents.
              </p>
            </div>
          </div>

          {/* <div className="mt-16 text-center">
            <a
              href="#"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-[5px] font-medium shadow-md inline-block transition duration-300"
            >
              Try It Now
            </a>
          </div> */}
        </div>
      </section>
      <CTA
        title="Ready to Transform Your Document Workflow?"
        description="Join thousands of organizations using our AI-powered document analysis technology to save time and uncover valuable insights. Start with a free trial today - no credit card required."
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

export default QuestionAnswerCapabilities;
