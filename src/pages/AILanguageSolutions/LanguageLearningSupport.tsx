import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const LanguageLearningSupport: React.FC = () => {
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
      <section className="language_hero_section pt-28 pb-20 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Language Learning Support</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Master new languages faster with our AI-powered learning platform.
              Get personalized lessons, real-time feedback, and immersive
              practice tailored to your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Learning Features
            </h2>
            <p className="text-lg text-gray-600">
              Our AI adapts to your learning style and pace, providing the most
              effective language acquisition tools available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-user-settings-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalized Curriculum
              </h3>
              <p className="text-gray-600">
                AI creates a custom learning path based on your goals, strengths,
                and areas needing improvement.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-mic-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Pronunciation Coach
              </h3>
              <p className="text-gray-600">
                Get instant feedback on your pronunciation with our advanced
                speech recognition technology.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-chat-1-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                AI Conversation Partner
              </h3>
              <p className="text-gray-600">
                Practice real conversations with our AI that adapts to your
                proficiency level and interests.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-feedback-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Instant Corrections
              </h3>
              <p className="text-gray-600">
                Receive real-time grammar and vocabulary suggestions as you write
                or speak.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-medal-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Gamified Learning
              </h3>
              <p className="text-gray-600">
                Stay motivated with achievements, streaks, and progress tracking
                that make learning addictive.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-book-mark-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Specialized Courses
              </h3>
              <p className="text-gray-600">
                Industry-specific language training for business, travel,
                academics, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Learning */}
      <section id="personalized" className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI-Powered Personalized Learning
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform continuously adapts to your learning patterns,
                focusing on areas that need improvement while reinforcing what
                you've mastered.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-brain-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Adaptive Learning Algorithms
                    </h3>
                    <p className="text-gray-600">
                      Our AI analyzes your responses to identify patterns and
                      customize lesson difficulty in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-focus-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Targeted Practice
                    </h3>
                    <p className="text-gray-600">
                      Get exercises focused on your weak points, whether it's
                      verb conjugation, pronunciation, or vocabulary.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-line-chart-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Progress Optimization
                    </h3>
                    <p className="text-gray-600">
                      The system schedules review sessions at optimal intervals
                      to maximize retention.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">
                  Your Learning Dashboard
                </h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">Day 14 Streak</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <i className="ri-flashlight-line"></i>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Today's Focus Areas</span>
                  <span className="text-sm text-gray-500">3/5 completed</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                        <i className="ri-check-line"></i>
                      </div>
                      <span>Past Tense Practice</span>
                    </div>
                    <div className="text-xs text-gray-500">15 min</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                        <i className="ri-check-line"></i>
                      </div>
                      <span>Food Vocabulary</span>
                    </div>
                    <div className="text-xs text-gray-500">10 min</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                        <i className="ri-play-line"></i>
                      </div>
                      <span>Pronunciation Drills</span>
                    </div>
                    <div className="text-xs text-gray-500">20 min</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-400 rounded-full">
                        <i className="ri-time-line"></i>
                      </div>
                      <span>Listening Comprehension</span>
                    </div>
                    <div className="text-xs text-gray-500">15 min</div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 text-gray-400 rounded-full">
                        <i className="ri-time-line"></i>
                      </div>
                      <span>Conversation Practice</span>
                    </div>
                    <div className="text-xs text-gray-500">25 min</div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Recommended Next</span>
                  <span className="text-sm text-primary">View All</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium mb-1">Business Phrases</h4>
                    <p className="text-xs text-gray-600 mb-2">12 lessons</p>
                    <div className="w-full bg-blue-100 rounded-full h-1.5">
                      <div className="bg-blue-600 h-1.5 rounded-full w-2/5"></div>
                    </div>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h4 className="font-medium mb-1">Travel Essentials</h4>
                    <p className="text-xs text-gray-600 mb-2">8 lessons</p>
                    <div className="w-full bg-purple-100 rounded-full h-1.5">
                      <div className="bg-purple-600 h-1.5 rounded-full w-1/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="w-full py-3 bg-yellow-600 text-white font-medium rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Conversation Practice */}
      <section id="conversation" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    <i className="ri-robot-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h4 className="font-medium">AI Tutor - Spanish</h4>
                    <div className="text-sm text-gray-500">
                      Intermediate Level
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-settings-3-line"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-more-2-fill"></i>
                  </button>
                </div>
              </div>

              <div className="h-64 overflow-y-auto mb-4 px-2">
                <div className="message-bubble received">
                  <p>¡Hola! ¿Cómo estás hoy?</p>
                  <p className="text-xs text-gray-500 mt-1">
                    <i className="ri-volume-up-line"></i> Listen to pronunciation
                  </p>
                </div>

                <div className="message-bubble sent">
                  <p>Estoy bien, gracias. ¿Y tú?</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400">
                      <i className="ri-check-line"></i> Good grammar
                    </span>
                    <span className="text-xs text-blue-500">
                      <i className="ri-mic-line"></i> 92% pronunciation
                    </span>
                  </div>
                </div>

                <div className="message-bubble received">
                  <p>
                    Muy bien también. ¿Qué has hecho hoy? Quiero practicar el
                    pasado contigo.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <i className="ri-volume-up-line"></i> Listen to pronunciation
                  </p>
                </div>

                <div className="message-bubble sent typing">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    AI is analyzing your response...
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <button className="w-10 h-10 flex items-center justify-center text-gray-500 hover:text-primary bg-gray-50 rounded-full">
                  <i className="ri-mic-line"></i>
                </button>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    className="w-full px-4 py-2.5 pr-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    placeholder="Type your response in Spanish..."
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                    <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-primary">
                      <i className="ri-translate-2-line"></i>
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-primary">
                      <i className="ri-corner-down-left-line"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Tip: Try using the past tense in your response</span>
                <span>Session: 4/10 correct</span>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Real Conversation Practice
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Practice speaking naturally with our AI tutor that adapts to
                your level and provides instant feedback on pronunciation,
                grammar, and vocabulary.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-user-voice-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Pronunciation Analysis
                    </h3>
                    <p className="text-gray-600">
                      Get detailed feedback on your accent, intonation, and
                      articulation with visual pronunciation guides.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-lightbulb-flash-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Contextual Corrections
                    </h3>
                    <p className="text-gray-600">
                      Receive gentle corrections with explanations when you make
                      mistakes, just like a human tutor would.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-emotion-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Natural Interactions
                    </h3>
                    <p className="text-gray-600">
                      Our AI remembers previous conversations and adapts to your
                      interests for more engaging practice.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section id="progress" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Progress Tracking
            </h2>
            <p className="text-lg text-gray-600">
              Visualize your improvement with detailed analytics and milestones
              that keep you motivated.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/2">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold">
                    Your Spanish Progress
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-medium">
                      Intermediate
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <i className="ri-information-line"></i>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Overall Progress</span>
                    <span className="text-primary font-medium">68%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "68%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Vocabulary</span>
                      <span className="text-primary font-medium">75%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Grammar</span>
                      <span className="text-primary font-medium">62%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "62%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Speaking</span>
                      <span className="text-primary font-medium">58%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "58%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700">Listening</span>
                      <span className="text-primary font-medium">81%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "81%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Recent Achievements</h3>
                  <div className="flex flex-wrap gap-3">
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                      <div className="w-6 h-6 flex items-center justify-center text-yellow-500">
                        <i className="ri-medal-line"></i>
                      </div>
                      <span className="text-sm">1000 Words Mastered</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                      <div className="w-6 h-6 flex items-center justify-center text-blue-500">
                        <i className="ri-calendar-check-line"></i>
                      </div>
                      <span className="text-sm">30 Day Streak</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                      <div className="w-6 h-6 flex items-center justify-center text-green-500">
                        <i className="ri-chat-check-line"></i>
                      </div>
                      <span className="text-sm">50 Conversations</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                      <div className="w-6 h-6 flex items-center justify-center text-purple-500">
                        <i className="ri-star-line"></i>
                      </div>
                      <span className="text-sm">Perfect Pronunciation</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-medium mb-3">Weekly Activity</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                        <div key={index}>
                          <div className="text-xs text-gray-500 mb-1">{day}</div>
                          <div
                            className={`h-8 rounded mx-auto ${
                              index < 5
                                ? "bg-green-100 text-green-600"
                                : "bg-gray-200 text-gray-400"
                            }`}
                            style={{ width: "80%" }}
                          >
                            {index < 5 ? "✓" : ""}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Next Learning Goals</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2">
                      <span className="text-sm">Reach Advanced Level</span>
                      <span className="text-xs text-gray-500">+32% needed</span>
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <span className="text-sm">Master 50 Business Terms</span>
                      <span className="text-xs text-gray-500">12/50</span>
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <span className="text-sm">Complete Travel Module</span>
                      <span className="text-xs text-gray-500">3/8 lessons</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Methods */}
      <section id="methods" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Science-Backed Learning Methods
            </h2>
            <p className="text-lg text-gray-600">
              Our platform incorporates proven language acquisition techniques
              to maximize your learning efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-loop-left-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Spaced Repetition
              </h3>
              <p className="text-gray-600 mb-4">
                Our system schedules reviews at optimal intervals to help you
                retain vocabulary long-term.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-500 mt-0.5"></i>
                  <span>Adapts to your forgetting curve</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-500 mt-0.5"></i>
                  <span>Focuses on words you struggle with</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-500 mt-0.5"></i>
                  <span>Gradually increases intervals</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-600 rounded-lg mb-4">
                <i className="ri-context-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Contextual Learning
              </h3>
              <p className="text-gray-600 mb-4">
                Learn words and grammar in meaningful contexts rather than
                through rote memorization.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span>Real-world example sentences</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span>Thematic vocabulary grouping</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span>Story-based lessons</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mb-4">
                <i className="ri-survey-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Immersive Approach
              </h3>
              <p className="text-gray-600 mb-4">
                Surround yourself with the language through multimedia content
                and real-life scenarios.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-purple-500 mt-0.5"></i>
                  <span>Video and audio lessons</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-purple-500 mt-0.5"></i>
                  <span>Interactive dialogues</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-purple-500 mt-0.5"></i>
                  <span>Cultural insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title=" Ready to Start Your Language Journey?"
        description="Join millions of learners worldwide who are mastering new languages with our AI-powered platform."
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

export default LanguageLearningSupport;