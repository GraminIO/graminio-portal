import React, { useState } from "react";
import RequestDemoButton from "../../components/RequestDemoButton";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";

const EmbracingTheFutureWithAI: React.FC = () => {
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
      <section className="Automated_Summarization-section py-20 md:py-40 relative">
        <div className="absolute inset-0 bg-[#000000a8] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Embracing the Future with AI</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              As we embrace the digital era, Artificial Intelligence is
              redefining industries and enhancing our daily experiences—from
              revolutionizing healthcare to creating smarter cities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <RequestDemoButton onClick={() => openModal("demo")} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-indigo-50 to-white py-16">
        <div className="container mx-auto px-6">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <img
                src="/AI-Revolution.jpg"
                alt="AI Revolution"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Information Cards */}
            <div className="w-full lg:w-1/2 lg:pl-10 space-y-12">
              {/* AI Benefits */}
              <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Unlocking AI’s Potential
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Innovations: </strong>AI drives groundbreaking
                    applications in medicine, finance, education, and beyond.
                  </li>
                  <li>
                    <strong>Efficiency: </strong>Streamline complex processes
                    and automate repetitive tasks with smart technology.
                  </li>
                  <li>
                    <strong>Opportunities: </strong>Discover emerging career
                    paths and business models powered by AI.
                  </li>
                  <li>
                    <strong>Ethical Advancement: </strong>Foster responsible
                    innovation while addressing biases and ethical challenges.
                  </li>
                </ul>
              </div>

              {/* Community Engagement */}
              <div className="bg-white rounded-xl p-6 shadow-md transform transition-all hover:scale-105">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Join the AI Revolution
                </h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Stay Updated: </strong>Keep informed about the
                    latest AI trends and breakthroughs.
                  </li>
                  <li>
                    <strong>Community: </strong>Engage in forums and discussions
                    about AI's impact on society.
                  </li>
                  <li>
                    <strong>Learn: </strong>Access courses, webinars, and
                    resources to deepen your understanding of AI.
                  </li>
                </ul>
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

export default EmbracingTheFutureWithAI;
