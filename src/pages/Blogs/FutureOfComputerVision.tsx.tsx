import React, { useState } from "react";
import { Brain, Eye, Award, Check } from "lucide-react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const FutureOfComputerVision: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className=" relative py-20 md:py-40 flex items-center bg-[url('/The-Future-Computer-Vision.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#00000057] z-10">
          <div className="absolute inset-0 opacity-90"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              The Future of Computer Vision
            </h1>
            <p className="text-xl mb-8">
              Computer vision, a cornerstone of artificial intelligence, is
              revolutionizing how machines interpret and interact with the
              visual world. The advancements in this field are truly exciting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <RequestDemoButton onClick={() => openModal("demo")} />
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Computer Vision in Action
            </h2>
            <p className="text-gray-600 text-lg">
              Real-world examples of how computer vision is already making an
              impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-900 mb-4">
                <Brain size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Healthcare Imaging
              </h3>
              <p className="text-gray-700">
                From detecting tumors to analyzing X-rays, computer vision is
                transforming diagnostics with precision.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-900 mb-4">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Autonomous Vehicles
              </h3>
              <p className="text-gray-700">
                Cars now recognize lanes, pedestrians, and traffic signs using
                advanced computer vision algorithms.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-900 mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Retail & Surveillance
              </h3>
              <p className="text-gray-700">
                Smart cameras help monitor inventory, detect theft, and optimize
                customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - NEW */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Core Technologies
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Breakthrough innovations driving the computer vision revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-200 text-blue-900 mt-1">
                <Check size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Convolutional Neural Networks
                </h3>
                <p className="text-gray-700">
                  CNNs have revolutionized image recognition by mimicking the
                  visual cortex's hierarchical processing, enabling machines to
                  identify patterns with unprecedented accuracy.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-200 text-blue-900 mt-1">
                <Check size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Object Detection Frameworks
                </h3>
                <p className="text-gray-700">
                  YOLO, R-CNN, and SSD frameworks enable real-time
                  identification and localization of multiple objects within
                  images, critical for autonomous systems.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-200 text-blue-900 mt-1">
                <Check size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Semantic Segmentation
                </h3>
                <p className="text-gray-700">
                  Pixel-level classification allows machines to understand
                  images at a granular level, crucial for medical imaging and
                  environmental monitoring.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-200 text-blue-900 mt-1">
                <Check size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  Transfer Learning
                </h3>
                <p className="text-gray-700">
                  Pre-trained models can be fine-tuned for specific tasks,
                  dramatically reducing training time and data requirements for
                  new applications.
                </p>
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

export default FutureOfComputerVision;
