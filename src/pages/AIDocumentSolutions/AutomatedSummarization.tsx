import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const AutomatedSummarization: React.FC = () => {
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
      <section className="Automated_Summarization-section py-20 md:py-40 relative">
        <div className="absolute inset-0 bg-[#000000a8] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Automated Summarization</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Unlock the power of AI to quickly distill lengthy documents,
              articles, or reports into concise summaries. Whether you're a
              student, professional, or researcher, our automated summarization
              tool helps you save time and focus on what truly matters — the key
              insights.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-24 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                DOCUMENT INTELLIGENCE
              </span>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Transform How You Process Documents
              </h2>
              <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
            </div>

            {/* Main Content */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="space-y-8">
                {/* Description */}
                <div className="text-center">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our advanced AI summarization technology analyzes your
                    documents to create concise, accurate summaries that capture
                    the essential information while eliminating unnecessary
                    details.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Feature 1 */}
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">
                      Time Efficiency
                    </h3>
                    <p className="text-gray-700">
                      Reduce reading time by up to{" "}
                      <span className="font-semibold text-blue-700">80%</span>{" "}
                      while maintaining comprehensive understanding
                    </p>
                  </div>

                  {/* Feature 2 */}
                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border-l-4 border-indigo-500">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">
                      Context Retention
                    </h3>
                    <p className="text-gray-700">
                      Our AI preserves critical relationships between concepts
                      and maintains full document context
                    </p>
                  </div>

                  {/* Feature 3 */}
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">
                      Customizable Depth
                    </h3>
                    <p className="text-gray-700">
                      Adjust summary length and focus areas based on your
                      specific requirements
                    </p>
                  </div>

                  {/* Feature 4 */}
                  <div className="bg-gradient-to-r from-cyan-50 to-cyan-100 p-6 rounded-xl border-l-4 border-cyan-500">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">
                      Universal Format Support
                    </h3>
                    <p className="text-gray-700">
                      Process research papers, legal documents, reports, and
                      meeting transcripts
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 p-6 rounded-xl italic border border-gray-100">
                  <p className="text-gray-700 text-center">
                    "This technology has transformed our document workflow,
                    saving our team countless hours while improving
                    comprehension."
                  </p>
                </div>

                {/* CTA Area */}
                {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <a
                    href="#demo"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg transition duration-300 text-center w-full sm:w-auto"
                  >
                    Try It Now
                  </a>
                  <a
                    href="#learn-more"
                    className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 px-8 py-4 rounded-xl font-medium transition duration-300 text-center w-full sm:w-auto"
                  >
                    Learn More
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How Our Summarization Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered summarization process uses advanced natural
              language processing to deliver accurate, concise summaries of your
              documents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Document Upload
              </h3>
              <p className="text-gray-600">
                Upload your documents in various formats including PDFs, Word
                documents, text files, or even scanned images with text
                recognition.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                AI Analysis
              </h3>
              <p className="text-gray-600">
                Our AI models analyze the document's structure, identify key
                information, and understand the relationships between concepts
                and ideas.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Summary Generation
              </h3>
              <p className="text-gray-600">
                Receive concise, well-structured summaries that capture the
                essential information while maintaining the context and meaning
                of the original document.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Key Summarization Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our automated summarization tools offer powerful capabilities to
              help you process information more efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-scales-3-line text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Adjustable Summary Length
              </h3>
              <p className="text-gray-600">
                Control the length of your summaries based on your specific
                needs, from brief outlines to comprehensive overviews.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-focus-3-line text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Key Point Identification
              </h3>
              <p className="text-gray-600">
                Our AI automatically identifies and highlights the most
                important points and insights from your documents.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-link-m text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Contextual Relevance
              </h3>
              <p className="text-gray-600">
                Preserve the context and relationships between ideas to ensure
                the summary accurately represents the original content.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-translate-2 text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multi-Language Support
              </h3>
              <p className="text-gray-600">
                Process and summarize documents in multiple languages with the
                same level of accuracy and insight.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-file-copy-line text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Batch Processing
              </h3>
              <p className="text-gray-600">
                Summarize multiple documents simultaneously to save time when
                dealing with large document collections.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <i className="ri-export-line text-primary ri-lg"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Export Options
              </h3>
              <p className="text-gray-600">
                Export summaries in various formats including PDF, Word, plain
                text, or integrate them directly with your systems via API.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Automated Summarization Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI summarization tools provide value across numerous
              industries and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-building-4-line text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Legal Document Processing
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Law firms and legal departments use our summarization tools to
                quickly digest lengthy contracts, case law, and legal briefs,
                reducing review time while ensuring no critical details are
                missed.
              </p>
              <p className="text-gray-600">
                Attorneys can focus on analysis and strategy rather than
                spending hours reading extensive documentation.
              </p>
            </div>

            {/* Use Case 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-flask-line text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Research & Development
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Research teams use our tools to summarize scientific papers,
                patents, and technical documents, allowing them to stay current
                with developments in their field without reading every document
                in full.
              </p>
              <p className="text-gray-600">
                This accelerates innovation by enabling researchers to quickly
                absorb relevant information from vast knowledge bases.
              </p>
            </div>

            {/* Use Case 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-presentation-line text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Business Intelligence
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Business analysts use our summarization service to condense
                market reports, competitor analysis, and internal documents into
                actionable insights that support strategic decision-making.
              </p>
              <p className="text-gray-600">
                This enables faster information processing and more agile
                business responses to market changes.
              </p>
            </div>

            {/* Use Case 4 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-team-line text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Meeting Efficiency
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Organizations use our tools to summarize meeting transcripts and
                lengthy email threads, ensuring that key decisions, action
                items, and discussions aren't lost in lengthy communications.
              </p>
              <p className="text-gray-600">
                This improves team alignment and accountability while reducing
                the time spent reviewing past communications.
              </p>
            </div>
          </div>
        </div>
      </section>
      <CTA
        title="Ready to Transform Your Document Workflow?"
        description=""
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Request a demo"
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

export default AutomatedSummarization;
