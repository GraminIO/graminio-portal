import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const SentimentAnalysis: React.FC = () => {
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
      <section className="Sentiment_Analysis-section pt-20 pb-20 md:pt-40 md:pb-32 relative">
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Sentiment Analysis</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Instantly detect whether your text expresses positivity,
              negativity, or neutrality using our AI-powered sentiment analyzer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sentiment Analysis Use Cases
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how businesses across industries are leveraging sentiment
              analysis to improve customer experience and business outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Customer Support</h3>
              <p className="text-gray-600 mb-4">
                Identify frustrated customers in real-time and prioritize urgent
                cases to improve customer satisfaction and retention.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Reduce response time for negative feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Automatically escalate emotional messages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Track sentiment trends over time</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Product Reviews</h3>
              <p className="text-gray-600 mb-4">
                Analyze customer reviews at scale to identify product strengths
                and areas for improvement.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Categorize feedback by sentiment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Identify specific product features mentioned</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Compare sentiment across product lines</span>
                </li>
              </ul>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">
                Social Media Monitoring
              </h3>
              <p className="text-gray-600 mb-4">
                Track brand mentions across social platforms and gauge public
                perception of your company in real-time.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Monitor campaign performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Detect potential PR issues early</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Benchmark against competitors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                How Our AI Support Works
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our platform combines sentiment analysis with conversational AI
                to create an intelligent support system that understands not
                just what customers are saying, but how they feel.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Customer Message Analysis
                    </h3>
                    <p className="text-gray-600">
                      Our AI processes incoming messages and detects sentiment,
                      urgency, and intent in real-time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Intelligent Response Generation
                    </h3>
                    <p className="text-gray-600">
                      Based on sentiment analysis, our system crafts
                      personalized responses that address emotional context.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex-shrink-0 flex items-center justify-center">
                    <span className="text-yellow-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Human Agent Assistance
                    </h3>
                    <p className="text-gray-600">
                      For complex issues or heightened emotions, our AI
                      seamlessly routes customers to the right human agent with
                      context.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">See It In Action</h3>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="italic text-gray-600 mb-4">
                  "I've been waiting for a refund for 3 weeks now and still
                  haven't received it. This is ridiculous and I'm very
                  frustrated!"
                </p>
                <div className="flex items-center gap-2 text-red-500 text-sm font-medium">
                  <span className="inline-block w-3 h-3 bg-red-500 rounded-full"></span>
                  Negative Sentiment Detected
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-700 mb-2">
                  <span className="font-bold">AI Response:</span> "I'm truly
                  sorry about the delay with your refund. I understand this is
                  frustrating. I've flagged your case as urgent, and our support
                  manager Sarah will contact you within the next hour to resolve
                  this personally. In the meantime, I've initiated an expedited
                  review of your refund status."
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-sm font-medium">
                  <span className="inline-block w-3 h-3 bg-blue-500 rounded-full"></span>
                  Empathetic Response + Priority Escalation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Understand Customer Sentiment?"
        description="Transform your customer experience with AI-powered sentiment analysis. Get started today with our free trial."
        primaryButtonText="Get Started for free"
        primaryButtonLink="/contact"
        secondaryButtonText="Schedule Demo"
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

export default SentimentAnalysis;
