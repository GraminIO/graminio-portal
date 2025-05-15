import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const VoiceTextMessaging: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  // Sticky header effect
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
      <section className="hero_voice_section py-20 md:py-40 relative">
        <div className="absolute inset-0 bg-[#0000009c] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Voice & Text Messaging</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Communicate seamlessly across languages with our AI-powered voice
              and text messaging. Speak or type in your language, and let our
              technology handle the translation in real-time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless Communication Features
            </h2>
            <p className="text-lg text-gray-600">
              Our AI-powered messaging platform breaks down language barriers
              with advanced translation technology, allowing natural
              conversations across different languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-message-3-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Text Translation
              </h3>
              <p className="text-gray-600">
                Send and receive messages in your native language while our AI
                translates them instantly for the recipient.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-mic-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Voice Message Translation
              </h3>
              <p className="text-gray-600">
                Speak naturally in your language, and have your voice messages
                automatically translated to the recipient's language.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-group-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Multi-Language Group Chats
              </h3>
              <p className="text-gray-600">
                Participate in group conversations where each member receives
                messages in their preferred language.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-history-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Message History</h3>
              <p className="text-gray-600">
                Access your complete conversation history with original and
                translated versions for reference.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-notification-3-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Instant Notifications
              </h3>
              <p className="text-gray-600">
                Get real-time alerts for new messages with translated previews,
                so you never miss important communications.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-shield-check-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Messaging</h3>
              <p className="text-gray-600">
                End-to-end encrypted communications with enterprise-grade
                security for all your messages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How Voice & Text Messaging Works
            </h2>
            <p className="text-lg text-gray-600">
              Our AI technology makes cross-language communication as simple as
              sending a normal message.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                    MS
                  </div>
                  <div>
                    <h4 className="font-medium">Maria Santos</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <span>Spanish</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <i className="ri-translate-2-line"></i>
                        English
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-phone-line"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-vidicon-line"></i>
                  </button>
                </div>
              </div>

              <div className="h-64 overflow-y-auto mb-4 px-2">
                <div className="message-bubble received">
                  <p>Hola! ¿Cómo estás hoy?</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Translated: Hello! How are you today?
                  </p>
                </div>

                <div className="message-bubble sent">
                  <p>I'm doing great, thanks for asking! How about you?</p>
                  <p className="text-xs text-gray-400 mt-1">
                    Translated to Spanish
                  </p>
                </div>

                <div className="message-bubble received">
                  <p className="flex items-center gap-2">
                    <i className="ri-mic-line"></i> Voice message
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Translated: Very good! I'm excited about our meeting
                    tomorrow.
                  </p>
                </div>

                <div className="message-bubble sent">
                  <p>
                    Me too! I've prepared all the documents we'll need to
                    discuss.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    Translated to Spanish
                  </p>
                </div>

                <div className="message-bubble received">
                  <p>Perfecto! ¿A qué hora nos reunimos?</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Translated: Perfect! What time are we meeting?
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary bg-gray-50 rounded-full">
                  <i className="ri-mic-line"></i>
                </button>
                <input
                  type="text"
                  className="flex-1 px-4 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Type your message..."
                />
                <button className="w-10 h-10 flex items-center justify-center text-primary bg-gray-50 rounded-full">
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Auto-translate: ON</span>
                <span>Target language: Spanish</span>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-12 h-12 shrink-0 mt-1">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Choose Your Languages
                    </h3>
                    <p className="text-gray-600">
                      Select your preferred language and the language you want
                      to communicate in. Our system will automatically detect
                      and translate between these languages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-12 h-12 shrink-0 mt-1">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Compose Your Message
                    </h3>
                    <p className="text-gray-600">
                      Type your text message or record a voice note in your
                      native language. The message will be instantly translated
                      for the recipient while preserving your original tone and
                      intent.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-12 h-12 shrink-0 mt-1">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      Receive Translated Responses
                    </h3>
                    <p className="text-gray-600">
                      Get replies in your preferred language while the other
                      person receives messages in theirs. View both original and
                      translated versions for complete clarity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Messaging Deep Dive */}
      <section id="voice-messaging" className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Voice Messaging
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our voice messaging technology goes beyond simple translation to
                deliver natural-sounding conversations across languages.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-user-voice-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Tone Preservation
                    </h3>
                    <p className="text-gray-600">
                      Our AI maintains your emotional tone and emphasis in
                      translated voice messages, so your meaning comes through
                      clearly.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-speed-up-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Instant Translation
                    </h3>
                    <p className="text-gray-600">
                      Voice messages are translated in real-time with minimal
                      delay, allowing for fluid back-and-forth conversations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-play-circle-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Playback Options
                    </h3>
                    <p className="text-gray-600">
                      Listen to messages in either the original language or the
                      translated version, with adjustable playback speed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-text-wrap ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Voice-to-Text Transcription
                    </h3>
                    <p className="text-gray-600">
                      Get text transcripts of your voice messages alongside the
                      audio for easy reference and accessibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold">Voice Message Demo</h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    Spanish → English
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <i className="ri-information-line"></i>
                  </div>
                </div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="voice-message received">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Maria Santos</span>
                    <span className="text-xs text-gray-500">2:15 PM</span>
                  </div>
                  <div className="voice-player bg-gray-50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full">
                        <i className="ri-play-fill"></i>
                      </button>
                      <div className="flex-1">
                        <div className="voice-waveform bg-gray-200 h-8 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-500">0:12</span>
                    </div>
                  </div>
                  <div className="translation-text mt-2 p-2 bg-gray-50 rounded text-sm">
                    <p className="text-gray-700">
                      "Hello! I wanted to follow up about our project timeline.
                      When do you think you can send the first draft?"
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Translated from Spanish
                    </p>
                  </div>
                </div>

                <div className="voice-message sent">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">You</span>
                    <span className="text-xs text-gray-500">2:18 PM</span>
                  </div>
                  <div className="voice-player bg-blue-50 rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <button className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full">
                        <i className="ri-play-fill"></i>
                      </button>
                      <div className="flex-1">
                        <div className="voice-waveform bg-blue-200 h-8 rounded-full"></div>
                      </div>
                      <span className="text-xs text-gray-500">0:18</span>
                    </div>
                  </div>
                  <div className="translation-text mt-2 p-2 bg-blue-50 rounded text-sm">
                    <p className="text-gray-700">
                      "I'm working on it now and should have the first draft
                      ready by Friday. I'll send it over as soon as it's done."
                    </p>
                    <p className="text-xs text-blue-500 mt-1">
                      Translated to Spanish
                    </p>
                  </div>
                </div>
              </div>

              <div className="voice-recorder bg-gray-100 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium">
                    Record a voice message
                  </span>
                  <span className="text-xs text-gray-500">Max 5 minutes</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="w-12 h-12 flex items-center justify-center bg-red-500 text-white rounded-full">
                    <i className="ri-mic-fill"></i>
                  </button>
                  <div className="flex-1 bg-white rounded-full h-4">
                    <div className="bg-primary h-full rounded-full w-1/3"></div>
                  </div>
                  <span className="text-xs text-gray-500">0:05</span>
                </div>
                <div className="flex items-center justify-end gap-2 mt-3">
                  <button className="text-sm text-gray-500 hover:text-gray-700">
                    Cancel
                  </button>
                  <button className="px-4 py-1.5 bg-primary text-white text-sm rounded-full">
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Applications */}
      {/* <section id="business" className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Business Applications
            </h2>
            <p className="text-lg text-gray-600">
              Our voice and text messaging solutions are transforming how
              businesses communicate globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-global-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Global Team Collaboration
              </h3>
              <p className="text-gray-600 mb-4">
                Enable seamless communication between international team members
                across different language backgrounds.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-500 mt-0.5"></i>
                  <span>Real-time multilingual chat</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-500 mt-0.5"></i>
                  <span>Voice message translation</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-500 mt-0.5"></i>
                  <span>Project-specific terminology support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-600 rounded-lg mb-4">
                <i className="ri-customer-service-2-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Support</h3>
              <p className="text-gray-600 mb-4">
                Provide multilingual support without requiring bilingual staff,
                reducing response times and improving satisfaction.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span>Instant translation of customer queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span>Voice message support in multiple languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span>Pre-approved response templates</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mb-4">
                <i className="ri-handshake-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                International Business Development
              </h3>
              <p className="text-gray-600 mb-4">
                Build relationships with partners and clients worldwide without
                language barriers holding you back.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-purple-500 mt-0.5"></i>
                  <span>Natural-sounding business communication</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-purple-500 mt-0.5"></i>
                  <span>Contract and document terminology support</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-purple-500 mt-0.5"></i>
                  <span>Cultural nuance preservation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Integration Section */}
      <section className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src="https://public.readdy.ai/ai/img_res/f37d6e3a9e611d888a1479a7da274a25.jpg"
                alt="Integration illustration"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Easy Integration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our voice and text messaging solutions can be integrated into
                your existing workflows and platforms for seamless adoption.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-plug-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">API Access</h3>
                    <p className="text-gray-600">
                      Integrate our translation capabilities directly into your
                      apps and services with our comprehensive API.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-apps-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Platform Plugins
                    </h3>
                    <p className="text-gray-600">
                      Add our messaging tools to popular platforms like Slack,
                      Teams, and more with our ready-made plugins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-shield-keyhole-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Enterprise Security
                    </h3>
                    <p className="text-gray-600">
                      Our solutions meet enterprise security standards with
                      end-to-end encryption and compliance features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {/* <a
                  href="#"
                  className="px-6 py-3 bg-primary text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 text-center"
                >
                  View API Documentation
                </a> */}
                <a onClick={() => openModal("consultation")}                  
                  className="cursor-pointer px-6 py-3 border border-primary text-primary font-medium rounded-[5px] hover:bg-primary/10 transition-colors text-center" >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Transform Your Cross-Language Communication?"
        description="Join businesses and individuals worldwide who are communicating effortlessly across language barriers with our AI-powered voice and text messaging."
        primaryButtonText="Learn More"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule a Demo"
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

export default VoiceTextMessaging;
