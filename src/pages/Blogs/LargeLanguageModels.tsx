import React, { useState } from "react";
import RequestDemoButton from "../../components/RequestDemoButton";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";

const LargeLanguageModels: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-40 relative bg-[url('/Large-Language-Models.jpg')] bg-cover bg-center flex items-center">
        <div className="absolute inset-0 bg-[#00000096] z-10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-3xl md:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              The Future of Large Language Models
            </h1>
            <p className="text-xl mb-8">
              Large Language Models (LLMs) like OpenAI's GPT-4 and others have
              transformed the way we interact with technology, from powering
              conversational AI to assisting in creative writing, coding, and
              more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <RequestDemoButton onClick={() => openModal("demo")} />
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            Key Benefits of LLMs
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Transforming industries and workflows with advanced artificial
            intelligence capabilities
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Enhanced Productivity
              </h3>
              <p className="text-gray-600">
                Automate repetitive tasks and speed up content creation, coding,
                and communication processes.
              </p>
            </div>
            {/* Benefit 2 */}
            <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Multilingual Support
              </h3>
              <p className="text-gray-600">
                Break language barriers with powerful translation and
                localization capabilities across global markets.
              </p>
            </div>
            {/* Benefit 3 */}
            <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
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
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Data Insights
              </h3>
              <p className="text-gray-600">
                Analyze unstructured text data at scale to extract actionable
                business insights in real time.
              </p>
            </div>
            {/* Benefit 4 */}
            <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                24/7 Availability
              </h3>
              <p className="text-gray-600">
                LLMs power virtual assistants that work around the clock,
                improving user experience and reducing support costs.
              </p>
            </div>
            {/* Benefit 5 */}
            <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Improved Creativity
              </h3>
              <p className="text-gray-600">
                Assist in generating new ideas, writing stories, composing
                music, and brainstorming content for creators.
              </p>
            </div>
            {/* Benefit 6 */}
            <div className="p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 bg-gradient-to-br from-white to-blue-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                Cost Efficiency
              </h3>
              <p className="text-gray-600">
                Reduce the need for manual labor by automating processes across
                industries, saving operational costs at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular LLM Applications Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">
            Popular LLM Applications
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Large Language Models are revolutionizing how businesses and
            individuals accomplish tasks
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Application 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
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
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Conversational AI
              </h3>
              <p className="text-gray-600">
                Virtual assistants and chatbots for customer service, sales, and
                support
              </p>
            </div>
            {/* Application 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Content Creation
              </h3>
              <p className="text-gray-600">
                Blog posts, marketing copy, and creative writing assistance
              </p>
            </div>
            {/* Application 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Code Generation
              </h3>
              <p className="text-gray-600">
                Software development assistance across multiple programming
                languages
              </p>
            </div>
            {/* Application 4 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300">
              <div className="text-blue-600 mb-4">
                <svg
                  className="w-12 h-12"
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
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Data Analysis
              </h3>
              <p className="text-gray-600">
                Extract insights from unstructured text and generate reports
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leading LLM Models Section */}
      <section className="py-20 text-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Leading LLM Models
          </h2>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto opacity-80">
            The world's most advanced language models powering AI innovation
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Model 1 */}
            <div className="bg-[#0d2b4b] backdrop-blur-md p-8 rounded-xl hover:bg-[#0d2b4b]/80 transition duration-300 text-white">
              <h3 className="text-2xl font-bold mb-4">GPT-4</h3>
              <p className="mb-4 opacity-80">
                OpenAI's most advanced system, excelling at complex reasoning,
                coding, and creative tasks.
              </p>
              <div className="flex items-center mt-6">
                <div className="h-2 bg-blue-500 rounded-full w-full">
                  <div className="h-2 bg-white rounded-full w-11/12"></div>
                </div>
                <span className="ml-4 font-bold">95%</span>
              </div>
            </div>
            {/* Model 2 */}
            <div className="bg-[#0d2b4b] backdrop-blur-md p-8 rounded-xl hover:bg-[#0d2b4b]/80 transition duration-300 text-white">
              <h3 className="text-2xl font-bold mb-4">Claude 3</h3>
              <p className="mb-4 opacity-80">
                Anthropic's flagship model with exceptional comprehension and
                creative composition abilities.
              </p>
              <div className="flex items-center mt-6">
                <div className="h-2 bg-blue-500 rounded-full w-full">
                  <div className="h-2 bg-white rounded-full w-10/12"></div>
                </div>
                <span className="ml-4 font-bold">92%</span>
              </div>
            </div>
            {/* Model 3 */}
            <div className="bg-[#0d2b4b] backdrop-blur-md p-8 rounded-xl hover:bg-[#0d2b4b]/80 transition duration-300 text-white">
              <h3 className="text-2xl font-bold mb-4">PaLM 2</h3>
              <p className="mb-4 opacity-80">
                Google's advanced language model with superior reasoning and
                multilingual capabilities.
              </p>
              <div className="flex items-center mt-6">
                <div className="h-2 bg-blue-500 rounded-full w-full">
                  <div className="h-2 bg-white rounded-full w-9/12"></div>
                </div>
                <span className="ml-4 font-bold">90%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CTA
        title="Ready to Transform Your Business?"
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

export default LargeLanguageModels;
