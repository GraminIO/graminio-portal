import React, { useState } from "react";
import ContactFormModal from "../components/contactModal";
import RequestDemoButton from "../components/RequestDemoButton";

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  return (
    <>
     {/* Hero Section */}
     <section className="hero-section py-20 md:py-40 relative bg-[url('/Background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-blue-950/80 z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
          <span className="inline-block bg-yellow-600 px-4 py-1 rounded-[5px] text-white text-sm font-semibold mb-6 shadow-md">
                AI-Powered Language Solutions
              </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className=""> Breaking Language Barriers Through Innovation</span>
            </h1>
            <p className="text-xl mb-8 text-gray-100">
                We're a team of language technology experts dedicated to
                creating seamless communication solutions that connect people
                across the globe in real-time.
              </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>


      {/* Mission and Vision Section */}
      <section className="py-10 md:py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Our Mission */}
            <div className="bg-white p-8 rounded-[10px] shadow-md h-full border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Our Mission
              </h3>
              <p className="text-lg leading-relaxed">
                Our mission is to harness the power of artificial intelligence
                to create innovative, ethical, and scalable software solutions
                that empower businesses, enhance user experiences, and shape a
                smarter, more connected world.
              </p>
            </div>

            {/* Our Vision */}
            <div className="bg-white p-8 rounded-[10px] shadow-md h-full border border-gray-100 hover:shadow-lg transition duration-300">
              <div className="w-16 h-16 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
                <svg
                  className="w-8 h-8 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Our Vision
              </h3>
              <p className="text-lg leading-relaxed">
                Empowering the future through intelligent innovation, we
                envision a world where AI enhances human potential, drives
                ethical advancements, and fosters a sustainable, inclusive
                society. Our mission is to develop transformative AI solutions
                that elevate industries, enrich lives, and create a harmonious
                balance between technology and humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Core Values
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              The principles that guide our technology and shape our approach
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
                <svg
                  className="w-6 h-6 text-yellow-500"
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
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Innovation & Excellence
              </h3>
              <p className="text-lg">
                Pioneering cutting-edge solutions that push the boundaries of AI
                technology while ensuring the highest standards of quality.
              </p>
            </div>

            {/* Global Access */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
                <svg
                  className="w-6 h-6 text-yellow-500"
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
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Ethical AI Development
              </h3>
              <p className="text-lg">
                Prioritizing fairness, transparency, and accountability in AI
                systems to build trust and responsible applications.
              </p>
            </div>

            {/* Accuracy */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Customer-Centric Approach
              </h3>
              <p className="text-lg">
                Designing AI solutions with users in mind, ensuring seamless
                integration and meaningful impact.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Innovation */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
                <svg
                  className="w-6 h-6 text-yellow-500"
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
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Collaboration & Inclusivity
              </h3>
              <p className="text-lg">
                Encouraging diverse perspectives, fostering teamwork, and
                creating AI that benefits all communities.
              </p>
            </div>

            {/* Global Access */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
                <svg
                  className="w-6 h-6 text-yellow-500"
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
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Sustainability & Social Impact
              </h3>
              <p className="text-lg">
                Developing AI technologies that contribute to a better world,
                minimizing environmental impact and promoting societal
                well-being.
              </p>
            </div>

            {/* Accuracy */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm border border-gray-200 hover:shadow-md transition duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full mb-6">
                <svg
                  className="w-6 h-6 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-800">
                Security & Privacy
              </h3>
              <p className="text-lg">
                Ensuring robust protection of user data, maintaining
                confidentiality, and upholding the highest cybersecurity
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-10 md:py-20 bg-gray-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Technology
            </h2>
            <p className="text-lg max-w-xl mx-auto">
              State-of-the-art AI solutions for seamless language experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Neural Machine Translation */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition duration-300">
              <div className="flex">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Innovation First
                  </h3>
                  <p className="text-lg">
                    We continuously explore new frontiers in AI and machine
                    learning to build forward-thinking solutions that anticipate
                    tomorrow’s challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* Real-Time Voice Translation */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition duration-300">
              <div className="flex">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Ethical AI
                  </h3>
                  <p className="text-lg">
                    We prioritize transparency, fairness, and accountability in
                    every model we build, ensuring our AI solutions respect
                    human rights and societal values.
                  </p>
                </div>
              </div>
            </div>

            {/* Cross-Platform Integration */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition duration-300">
              <div className="flex">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Data Integrity
                  </h3>
                  <p className="text-lg">
                    We commit to secure, responsible data practices—protecting
                    user privacy and ensuring data quality across all stages of
                    development.
                  </p>
                </div>
              </div>
            </div>

            {/* Specialized Vocabulary */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm hover:shadow-md transition duration-300">
              <div className="flex">
                <div className="w-12 h-12 flex items-center justify-center bg-yellow-100 rounded-full flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    ></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    Scalable Architecture
                  </h3>
                  <p className="text-lg">
                    We design systems with future growth in mind, using modular,
                    robust architectures that scale seamlessly with business
                    needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-yellow-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Ready to Communicate Without Borders?
              </h2>
              <p className="text-lg text-lg mb-8">
                Join thousands of businesses and individuals who have
                transformed their global communication with Graminio's AI
                translation solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => openModal("demo")}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-[5px] font-medium transition duration-300"
                >
                  Schedule a Demo
                </button>
                {/* <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium transition duration-300">
                  Schedule a Demo
                </button> */}
              </div>
            </div>
          </div>
          <ContactFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            formType={modalType}
          />
        </div>
      </section>
    </>
  );
};

export default About;
