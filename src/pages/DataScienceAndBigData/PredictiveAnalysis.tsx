import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const PredictiveAnalysis: React.FC = () => {
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
      <section className="predictive_Analytics-section py-20 md:py-40 relative bg-[url('/Predictive-Analytics-Solutions_bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Predictive Analytics Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Harness the power of AI-driven predictive models to forecast
              trends, anticipate outcomes, and make data-backed decisions with
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
              {/* <a
                href="#"
                className="border border-white text-white px-6 py-3 rounded-[5px] font-medium hover:bg-white/10 transition duration-300"
              >
                Learn More
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-5 lg:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transform Data Into Predictive Insights
            </h2>
            <p className="text-lg text-gray-600">
              Our advanced predictive analytics platform combines machine
              learning, statistical modeling, and big data processing to deliver
              accurate forecasts across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-line-chart-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Trend Forecasting</h3>
              <p className="text-gray-600">
                Identify patterns and predict future trends with 90%+ accuracy
                using our advanced time-series analysis models.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-shield-star-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
              <p className="text-gray-600">
                Quantify and mitigate risks by predicting potential issues
                before they occur with probabilistic modeling.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-user-voice-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Customer Behavior Prediction
              </h3>
              <p className="text-gray-600">
                Anticipate customer needs and preferences with behavioral
                modeling to drive engagement and sales.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-database-2-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Real-time Predictions
              </h3>
              <p className="text-gray-600">
                Process streaming data to generate instant predictions with our
                low-latency analytics engine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Predictive Modeling Section */}
      <section id="modeling" className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Advanced Predictive Modeling
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our machine learning models analyze historical and real-time
                data to forecast future events with remarkable accuracy. From
                regression analysis to deep learning, we employ the right
                techniques for your specific use case.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Ensemble models combining multiple algorithms for superior
                    accuracy
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Automated feature engineering to identify key predictors
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Continuous model retraining as new data becomes available
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-blue-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Explainable AI to understand prediction drivers
                  </p>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                Explore our modeling techniques
                <i className="ri-arrow-right-line ri-lg ml-1"></i>
              </a> */}
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium">Model Performance Dashboard</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500">
                      Last updated: Today
                    </span>
                    <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-blue-600">
                      <i className="ri-refresh-line"></i>
                    </button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Accuracy</div>
                    <div className="text-2xl font-bold text-blue-600">
                      94.7%
                    </div>
                    <div className="text-xs text-green-500 flex items-center">
                      <i className="ri-arrow-up-line mr-1"></i> 2.3% from last
                      week
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Precision</div>
                    <div className="text-2xl font-bold text-blue-600">
                      92.1%
                    </div>
                    <div className="text-xs text-green-500 flex items-center">
                      <i className="ri-arrow-up-line mr-1"></i> 1.8% from last
                      week
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">Recall</div>
                    <div className="text-2xl font-bold text-blue-600">
                      89.5%
                    </div>
                    <div className="text-xs text-red-500 flex items-center">
                      <i className="ri-arrow-down-line mr-1"></i> 0.7% from last
                      week
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-500 mb-1">F1 Score</div>
                    <div className="text-2xl font-bold text-blue-600">
                      90.8%
                    </div>
                    <div className="text-xs text-green-500 flex items-center">
                      <i className="ri-arrow-up-line mr-1"></i> 1.2% from last
                      week
                    </div>
                  </div>
                </div>

                <div className="h-64 bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">Prediction Confidence</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded-[5px]">
                        7 days
                      </span>
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-[5px]">
                        30 days
                      </span>
                    </div>
                  </div>
                  <div className="h-40 w-full bg-white border border-gray-200 rounded p-2">
                    {/* Placeholder for chart */}
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <i className="ri-bar-chart-2-line ri-2x"></i>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-y-[10px] items-center justify-between">
                  <button onClick={() => openModal("consultation")} className="px-4 py-2 text-sm border border-gray-200 rounded hover:bg-gray-50">
                    Model Details
                  </button>
                  <button onClick={() => openModal("consultation")} className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                    Generate New Predictions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section id="applications" className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="md:text-xl font-semibold">
                    Industry Applications
                  </h3>
                  <div className="relative">
                    <select className="appearance-none bg-gray-50 border border-gray-200 rounded px-4 py-2 pr-8 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600">
                      <option>Select Industry</option>
                      <option>Retail & E-commerce</option>
                      <option>Financial Services</option>
                      <option>Healthcare</option>
                      <option>Manufacturing</option>
                      <option>Telecommunications</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mt-1">
                        <i className="ri-shopping-cart-2-line ri-lg"></i>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">
                          Retail & E-commerce
                        </h4>
                        <p className="text-sm text-gray-600">
                          Predict customer purchasing patterns, optimize
                          inventory, and forecast demand with 95% accuracy.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mt-1">
                        <i className="ri-bank-line ri-lg"></i>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Financial Services</h4>
                        <p className="text-sm text-gray-600">
                          Detect fraud, predict credit risk, and forecast market
                          movements using our financial models.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mt-1">
                        <i className="ri-heart-pulse-line ri-lg"></i>
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Healthcare</h4>
                        <p className="text-sm text-gray-600">
                          Predict patient outcomes, disease progression, and
                          hospital readmission risks to improve care.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry-Specific Predictive Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our predictive analytics solutions are tailored to address
                unique challenges across industries, delivering actionable
                insights that drive measurable business outcomes.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-store-3-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Retail Optimization
                    </h3>
                    <p className="text-gray-600">
                      Forecast sales, optimize pricing strategies, and predict
                      inventory needs with our retail-specific models.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-flask-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Predictive Maintenance
                    </h3>
                    <p className="text-gray-600">
                      Anticipate equipment failures before they occur, reducing
                      downtime and maintenance costs by up to 40%.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-customer-service-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Customer Churn Prediction
                    </h3>
                    <p className="text-gray-600">
                      Identify at-risk customers with 85% accuracy and implement
                      retention strategies proactively.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Integration Section */}
      <section id="integration" className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Seamless Data Integration
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Connect your existing data sources effortlessly. Our platform
                integrates with databases, cloud storage, APIs, and streaming
                data sources to feed your predictive models with high-quality,
                up-to-date information.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-database-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Multi-Source Connectivity
                    </h3>
                    <p className="text-gray-600">
                      Connect to SQL/NoSQL databases, data lakes, CRM systems,
                      and more with our extensive connector library.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-cloud-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Cloud & On-Premises
                    </h3>
                    <p className="text-gray-600">
                      Deploy in your preferred environment - public cloud,
                      private cloud, or on-premises infrastructure.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-restart-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Automated Data Pipelines
                    </h3>
                    <p className="text-gray-600">
                      Set up scheduled or real-time data refreshes to keep your
                      models trained on the latest information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">
                    Data Source Configuration
                  </h3>
                  <button className="text-sm text-blue-600 hover:underline">
                    + Add New Source
                  </button>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-lg">
                        <i className="ri-database-2-line"></i>
                      </div>
                      <span className="font-medium">PostgreSQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                        Active
                      </span>
                      <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-blue-600">
                        <i className="ri-settings-3-line"></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-lg">
                        <i className="ri-cloud-line"></i>
                      </div>
                      <span className="font-medium">AWS S3</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                        Active
                      </span>
                      <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-blue-600">
                        <i className="ri-settings-3-line"></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-lg">
                        <i className="ri-rest-api-line"></i>
                      </div>
                      <span className="font-medium">Salesforce API</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full">
                        Pending
                      </span>
                      <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-blue-600">
                        <i className="ri-settings-3-line"></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-white text-blue-600 rounded-lg">
                        <i className="ri-google-fill"></i>
                      </div>
                      <span className="font-medium">Google Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                        Disabled
                      </span>
                      <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-blue-600">
                        <i className="ri-settings-3-line"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer">
                  <div onClick={() => openModal("consultation")} className="flex items-center justify-center gap-2 text-blue-600">
                    <i className="ri-add-line"></i>
                    <span>Connect Data Source</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA
        title="Ready to Predict the Future with Data?"
        description="Transform your business with AI-powered predictive analytics that delivers actionable insights and measurable results."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/contact"
        secondaryButtonText=" Speak to an Expert"
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

export default PredictiveAnalysis;
