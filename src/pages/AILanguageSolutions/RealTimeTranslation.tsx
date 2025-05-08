import React, { useState } from "react";
import "../../css/AILanguageSolutions.css"; // Assuming you have a CSS file for styles
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const RealTimeTranslation: React.FC = () => {
  // Sticky header effect
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
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
      <section className="hero_real_time_section pt-28 pb-20 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Real-Time Language Translation</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Break down language barriers instantly with our advanced
              AI-powered translation service. Communicate seamlessly in over 100
              languages with industry-leading accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section id="overview" className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Translation Service
            </h2>
            <p className="text-lg text-gray-600">
              Our neural network translation technology delivers unparalleled
              accuracy while preserving context, tone, and cultural nuances
              across more than 100 languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="feature-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-translate-2-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">99.4% Accuracy</h3>
              <p className="text-gray-600">
                Industry-leading translation precision for major world languages
                with advanced neural networks that understand context.
              </p>
            </div>

            <div className="feature-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-global-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">100+ Languages</h3>
              <p className="text-gray-600">
                Communicate across borders with support for over 100 languages
                including rare dialects and regional variations.
              </p>
            </div>

            <div className="feature-card bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-speed-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
              <p className="text-gray-600">
                Experience translations in milliseconds, enabling real-time
                conversations without awkward pauses or delays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Translation Demo */}
      <section id="demo" className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Break Down Language Barriers Instantly
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our state-of-the-art neural network sets the standard for
                translation accuracy across more than 100 languages, ensuring
                that every conversation flows seamlessly.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Deep Contextual Insight: Understands cultural nuances and
                    idioms for translations that truly resonate.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Industry-Specific Expertise: Delivers precise vocabulary
                    tailored for business, healthcare, technical sectors, and
                    beyond.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Genuine Speaking Tone: Preserves the original message's
                    emotion, tone, and emphasis for natural, engaging dialogue.
                  </p>
                </div>
              </div>

              {/* <a
                href="#pricing"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                View our enterprise solutions
                <i className="ri-arrow-right-line ri-lg ml-1"></i>
              </a> */}
            </div>

            <div className="lg:w-1/2 bg-white">
            <div className="p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap  items-center justify-between mb-6">
                <div className="flex  items-center gap-3">
                  <div className="relative">
                    <select
                      id="sourceLanguage"
                      className="appearance-none bg-gray-50 border border-gray-200 rounded px-4 py-2.5 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="en">English</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                      <option value="ja">Japanese</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                    <i className="ri-arrow-left-right-line"></i>
                  </div>
                  <div className="relative">
                    <select
                      id="targetLanguage"
                      className="appearance-none bg-gray-50 border border-gray-200 rounded px-4 py-2.5 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="es">Spanish</option>
                      <option value="en">English</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="zh">Chinese</option>
                      <option value="ja">Japanese</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-5 md:mt-0 gap-2">
                  <label className="custom-switch">
                    <input type="checkbox" checked />
                    <span className="switch-slider"></span>
                  </label>
                  <span className="text-sm text-gray-600">Auto-translate</span>
                </div>
              </div>

              <div className="mb-4">
                <textarea
                  className="w-full h-32 p-4 border border-gray-200 rounded resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Enter text to translate..."
                  defaultValue="Hello, I'm interested in learning more about your services. Can you tell me about your pricing plans?"
                ></textarea>
              </div>

              <div className="p-4 bg-gray-50 rounded mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Translation</span>
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                      <i className="ri-volume-up-line"></i>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                      <i className="ri-file-copy-line"></i>
                    </button>
                  </div>
                </div>
                <p className="text-gray-700">
                  Hola, estoy interesado en conocer más sobre sus servicios.
                  ¿Puede decirme acerca de sus planes de precios?
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary bg-gray-50 rounded-full">
                    <i className="ri-mic-line ri-lg"></i>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary bg-gray-50 rounded-full">
                    <i className="ri-image-line ri-lg"></i>
                  </button>
                  <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary bg-gray-50 rounded-full">
                    <i className="ri-attachment-2-line ri-lg"></i>
                  </button>
                </div>
                <button className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                  Translate
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Translation Methods */}
      <section id="methods" className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multiple Translation Methods
            </h2>
            <p className="text-lg text-gray-600">
              Our platform offers versatile translation options to suit any
              scenario, from casual conversations to professional presentations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-message-3-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Text Translation</h3>
              <p className="text-gray-600">
                Instantly translate written content with perfect formatting
                preserved. Ideal for emails, documents, websites, and social
                media.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <i className="ri-check-line text-primary"></i>
                  <span>Document formatting preservation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <i className="ri-check-line text-primary"></i>
                  <span>Bulk translation capabilities</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <i className="ri-check-line text-primary"></i>
                  <span>API integration for websites</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-mic-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Speech Translation</h3>
              <p className="text-gray-600">
                Speak naturally and have your voice translated instantly to text
                or speech in another language, maintaining your tone and
                emphasis.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <i className="ri-check-line text-primary"></i>
                  <span>Natural voice detection</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <i className="ri-check-line text-primary"></i>
                  <span>Accent and dialect adaptation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <i className="ri-check-line text-primary"></i>
                  <span>Background noise filtering</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-camera-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Image Translation</h3>
              <p className="text-gray-600">
                Point your camera at text in the real world and see it instantly
                translated into your preferred language, overlaid on the
                original image.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <i className="ri-check-line text-primary"></i>
                  <span>Sign and menu translation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <i className="ri-check-line text-primary"></i>
                  <span>Document and book scanning</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <i className="ri-check-line text-primary"></i>
                  <span>Handwriting recognition</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section id="industries" className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Our translation services are tailored to meet the specialized
              needs of various industries with domain-specific terminology and
              protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0">
                  <i className="ri-briefcase-line ri-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Business & Enterprise
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Facilitate international meetings, translate business
                    documents, and engage with global clients seamlessly.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <i className="ri-check-line text-primary"></i>
                      <span>Live meeting translation</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <i className="ri-check-line text-primary"></i>
                      <span>Contract and legal document translation</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <i className="ri-check-line text-primary"></i>
                      <span>Multi-language customer support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0">
                  <i className="ri-bank-line ri-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Finace</h3>
                  <p className="text-gray-600 mb-4">
                    In today's globalized economy, the financial sector demands
                    precise, efficient, and secure multilingual communication.
                    AI-driven language solutions are revolutionizing how
                    financial institutions operate across borders, ensuring
                    clarity, accuracy, and compliance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-gray-600">
                      <i className="ri-check-line text-primary"></i>
                      <span>Accuracy and Precision</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <i className="ri-check-line text-primary"></i>
                      <span>Speed and Efficiency</span>
                    </li>
                    <li className="flex items-center gap-2 text-gray-600">
                      <i className="ri-check-line text-primary"></i>
                      <span>Security and Compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section id="testimonials" className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600">
              Hear from our satisfied customers who have experienced the power
              of real-time translation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="/testimonials_1.png"
                  alt="Client 1"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Rachael Cook</h3>
                  <p className="text-gray-600">CEO, Tech Innovations</p>
                </div>
              </div>
              <p className="text-gray-700">
                "The real-time translation feature has transformed our global
                meetings. We can now communicate seamlessly with clients and
                partners around the world."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <img
                  src="/testimonials_2.png"
                  alt="Client 2"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">Marie Forleo</h3>
                  <p className="text-gray-600">
                    Marketing Director, Global Solutions
                  </p>
                </div>
              </div>
              <p className="text-gray-700">
                "As a marketing professional, I appreciate how easy it is to
                translate our campaigns into multiple languages. It has opened
                up new markets for us."
              </p>
            </div>

          </div>
        </div>
      </section> */}

      <CTA
        title="Break Down Language Barriers Today"
        description="Join thousands of individuals and businesses using our platform to communicate across languages with unprecedented accuracy and ease."
        primaryButtonText="Learn More"
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
export default RealTimeTranslation;
