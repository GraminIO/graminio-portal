import React, { useState } from "react";
import RequestDemoButton from "../../components/RequestDemoButton";
import ContactFormModal from "../../components/contactModal";
import CTA from "../../components/CTA";

const AITrendsFor2025: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-40 flex items-center bg-[url('/10-Most-Important-AI.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              10 Most Important AI Trends for 2025
            </h1>
            <p className="text-xl mb-8">
              As we move into 2024, the landscape of Artificial Intelligence
              continues to evolve at a breakneck pace. Here are the top 10 AI
              trends to follow.
            </p>{" "}
            <div className="flex flex-col sm:flex-row gap-4">
              <RequestDemoButton onClick={() => openModal("demo")} />
            </div>
          </div>
        </div>
      </section>

      {/* Trend 1: Multimodal AI */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Multimodal AI Systems
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Multimodal AI systems are breaking free from single-input
                constraints, now seamlessly processing and understanding text,
                images, audio, and video simultaneously - much like humans do.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These systems can analyze medical images while considering
                patient history, create content that spans formats, and enable
                more natural human-computer interaction through combined voice,
                gesture, and contextual understanding.
              </p>
              <div className="mt-8">
                <h3 className="font-bold text-gray-800 mb-2">
                  Key Applications:
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>
                    Advanced healthcare diagnostics combining visual scans with
                    patient data
                  </li>
                  <li>
                    Creative tools that generate cross-format content
                    (text-to-image-to-video)
                  </li>
                  <li>
                    Virtual assistants with deeper contextual understanding
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/Multimodal-AI-Systems.jpg"
                alt="Multimodal AI"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                AI Agents & Autonomous Systems
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                AI is evolving from tools that respond to prompts into agents
                that can plan, reason, and execute complex tasks with minimal
                human supervision.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These autonomous systems can navigate ambiguity, adapt to
                changing circumstances, and persist toward goals across multiple
                domains - from software development to scientific research to
                business process automation.
              </p>
              <div className="mt-8">
                <h3 className="font-bold text-gray-800 mb-2">
                  Key Applications:
                </h3>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  <li>
                    AI coding assistants that can build entire applications
                  </li>
                  <li>
                    Autonomous research systems that design and run experiments
                  </li>
                  <li>Business process agents that handle entire workflows</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2">
              <img src="/AI-Agents-Autonomous.jpg"  alt="Multimodal AI"
                className="rounded-lg shadow-xl"/>
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

export default AITrendsFor2025;
