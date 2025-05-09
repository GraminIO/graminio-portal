import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const PersonalizedRecommendations: React.FC = () => {
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
      <section className="Recommendations-section py-20 md:py-40 relative">
        <div className="absolute inset-0 bg-[#00000091] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Personalized Recommendations</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Discover tailored suggestions curated just for you based on your
              interests, preferences, and past behavior. Get smarter product,
              service, or content recommendations with every visit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-5 lg:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our advanced algorithm learns from your preferences and behaviors
              to deliver increasingly relevant recommendations.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline connector */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-200"></div>

              {/* Step 1 */}
              <div className="relative mb-5 lg:mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Create Your Profile
                    </h3>
                    <p className="text-gray-600">
                      Tell us about your preferences, interests, and the kinds
                      of recommendations you're looking for.
                    </p>
                  </div>
                  <div className="mb-4 md:mb-0 order-1 md:order-2">
                    <div className="mx-auto bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold shadow-lg z-10 relative">
                      1
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <img
                        src="/create_profile.png"
                        alt="Create profile"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative mb-5 lg:mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 order-2 md:order-1">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <img
                        src="/Interac-content.png"
                        alt="Interact with content"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                  <div className="mb-4 md:mb-0 order-1 md:order-2">
                    <div className="mx-auto bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold shadow-lg z-10 relative">
                      2
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left order-3">
                    <h3 className="text-xl font-semibold mb-2">
                      Interact With Content
                    </h3>
                    <p className="text-gray-600">
                      Browse, rate, save, and engage with content to help our
                      system learn your preferences better.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative mb-5 lg:mb-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right order-2 md:order-1">
                    <h3 className="text-xl font-semibold mb-2">
                      AI Processing
                    </h3>
                    <p className="text-gray-600">
                      Our machine learning system analyzes your behavior
                      patterns and compares them with similar users.
                    </p>
                  </div>
                  <div className="mb-4 md:mb-0 order-1 md:order-2">
                    <div className="mx-auto bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold shadow-lg z-10 relative">
                      3
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 order-3">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <img
                        src="/AI_Processing_profile.png"
                        alt="AI processing"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 order-2 md:order-1">
                    <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                      <img
                        src="/Receive-Personalized-Recommendations.png"
                        alt="Receive recommendations"
                        className="w-full h-auto rounded"
                      />
                    </div>
                  </div>
                  <div className="mb-4 md:mb-0 order-1 md:order-2">
                    <div className="mx-auto bg-yellow-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold shadow-lg z-10 relative">
                      4
                    </div>
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left order-3">
                    <h3 className="text-xl font-semibold mb-2">
                      Receive Personalized Recommendations
                    </h3>
                    <p className="text-gray-600">
                      Get continuously improving recommendations tailored
                      specifically to your unique preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-10 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-5 lg:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover how our personalized recommendations have transformed the
              experience for our users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="/testimonials_3.png"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Sarah Johnson</h4>
                  <p className="text-gray-500 text-sm">Fashion Enthusiast</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I'm amazed at how accurately the system recommends items that
                match my style. It's like having a personal shopper who knows
                exactly what I want!"
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                   src="/testimonials_4.png"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Michael Chen</h4>
                  <p className="text-gray-500 text-sm">Tech Analyst</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The recommendations get better with each visit. I've discovered
                products I wouldn't have found otherwise that are now essential
                to my workflow."
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                  <img
                    src="/testimonials_5.png"
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Elena Rodriguez</h4>
                  <p className="text-gray-500 text-sm">Book Lover</p>
                </div>
              </div>
              <p className="text-gray-600">
                "I used to spend hours searching for new books to read. Now, I
                get perfect recommendations that match my taste in literature
                every time."
              </p>
              <div className="mt-4 text-yellow-500">★★★★★</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-10 md:py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-5 lg:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Advanced Recommendation Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform uses cutting-edge technology to deliver the most
              relevant recommendations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Behavioral Analysis
              </h3>
              <p className="text-gray-600">
                Our system analyzes your browsing patterns, clicks, and time
                spent on different items to understand your preferences deeply.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Collaborative Filtering
              </h3>
              <p className="text-gray-600">
                Find items enjoyed by users with similar preferences to yours,
                expanding your horizons with new discoveries.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customizable Preferences
              </h3>
              <p className="text-gray-600">
                Fine-tune your recommendation settings to prioritize certain
                categories, price ranges, or attributes.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
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
              <h3 className="text-xl font-semibold mb-2">Real-time Updates</h3>
              <p className="text-gray-600">
                Recommendations evolve in real-time as you interact with the
                platform, ensuring relevance with every visit.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Privacy Controls</h3>
              <p className="text-gray-600">
                Manage your data and privacy settings with easy-to-use controls
                that put you in charge of your experience.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Cross-platform Sync
              </h3>
              <p className="text-gray-600">
                Your recommendations stay consistent across all your devices,
                providing a seamless experience wherever you are.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}

      {/* <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">
              Get Weekly Recommendation Updates
            </h2>
            <p className="mb-6">
              Subscribe to our newsletter for curated recommendations and
              personalization tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-md text-gray-800 focus:outline-none"
              />
              <button className="bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-md font-medium shadow-md transition duration-300">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section> */}
      <CTA
        title="Ready to Understand Customer Sentiment?"
        description="Transform your customer experience with AI-powered sentiment analysis. Get started today with our free trial."
        primaryButtonText="Get started for free"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule demo"
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

export default PersonalizedRecommendations;
