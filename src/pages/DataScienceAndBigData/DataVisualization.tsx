import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const DataVisualization: React.FC = () => {
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
      <section className="Data_Visualization-section py-20 md:py-40 relative bg-[url('/Data_Visualization_Solutions_bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#000000d4] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Data Visualization Solutions</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transform complex data into compelling visual stories that drive
              understanding and action. Our advanced visualization tools reveal
              insights hidden in your data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
              {/* <a
                href="#"
                className="border border-white text-white px-6 py-3 rounded-[5px] font-medium hover:bg-white/10 transition duration-300"
              >
                Explore Features
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
              Powerful Visualization Capabilities
            </h2>
            <p className="text-lg text-gray-600">
              From simple charts to complex interactive dashboards, our platform
              provides the tools you need to make your data tell compelling
              stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mb-4">
                <i className="ri-dashboard-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Interactive Dashboards
              </h3>
              <p className="text-gray-600">
                Create dynamic, real-time dashboards that allow users to explore
                data through intuitive interactions.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mb-4">
                <i className="ri-bar-chart-2-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Advanced Charting</h3>
              <p className="text-gray-600">
                Choose from 50+ chart types including heat maps, Sankey
                diagrams, and geospatial visualizations.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mb-4">
                <i className="ri-bubble-chart-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Big Data Visualization
              </h3>
              <p className="text-gray-600">
                Handle millions of data points with our optimized rendering
                engine that maintains performance at scale.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mb-4">
                <i className="ri-share-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Collaborative Tools
              </h3>
              <p className="text-gray-600">
                Share, annotate, and discuss visualizations with team members in
                real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Creation Section */}
      <section id="dashboards" className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Intuitive Dashboard Creation
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Build professional dashboards in minutes with our drag-and-drop
                interface. Connect to your data sources, choose from pre-built
                templates, or create custom visualizations tailored to your
                needs.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-purple-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Real-time data refresh and automatic updates
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-purple-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Responsive design that works on all devices
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-purple-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Conditional formatting and smart alerts
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-purple-600 mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Role-based access control and security
                  </p>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-flex items-center text-purple-600 font-medium hover:underline"
              >
                See dashboard examples
                <i className="ri-arrow-right-line ri-lg ml-1"></i>
              </a> */}
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-medium">Sales Performance Dashboard</h3>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-purple-600">
                    <i className="ri-refresh-line"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-purple-600">
                    <i className="ri-fullscreen-line"></i>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">
                    Total Revenue
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    $284,570
                  </div>
                  <div className="text-xs text-green-500 flex items-center">
                    <i className="ri-arrow-up-line mr-1"></i> 12.4% from last
                    month
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-sm text-gray-500 mb-1">
                    New Customers
                  </div>
                  <div className="text-2xl font-bold text-purple-600">
                    1,284
                  </div>
                  <div className="text-xs text-green-500 flex items-center">
                    <i className="ri-arrow-up-line mr-1"></i> 8.2% from last
                    month
                  </div>
                </div>
              </div>

              <div className="h-64 bg-gray-50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Monthly Sales Trend</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-purple-100 text-purple-600 rounded-full">
                      2023
                    </span>
                  </div>
                </div>
                <div className="h-40 w-full bg-white border border-gray-200 rounded p-2">
                  {/* Placeholder for chart */}
                  <div className="w-full h-full flex items-center justify-center text-dark-400">
                    <i className="ri-line-chart-line ri-2x"></i>
                  </div>
                </div>
              </div>

              <div className="h-48 bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Top Products</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                      By Revenue
                    </span>
                  </div>
                </div>
                <div className="h-32 w-full bg-white border border-gray-200 rounded p-2">
                  {/* Placeholder for chart */}
                  <div className="w-full h-full flex items-center justify-center text-dark-400">
                    <i className="ri-bar-chart-horizontal-line ri-2x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chart Types Section */}
      <section id="charts" className="py-10 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">
                    Visualization Gallery
                  </h3>
                  <div className="relative">
                    <select className="appearance-none bg-gray-50 border border-gray-200 rounded px-4 py-2 pr-8 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600">
                      <option>All Chart Types</option>
                      <option>Time Series</option>
                      <option>Geospatial</option>
                      <option>Hierarchical</option>
                      <option>Statistical</option>
                    </select>
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                      <i className="ri-arrow-down-s-line"></i>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-purple-200 transition-colors">
                    <div className="h-32 mb-2 flex items-center justify-center text-purple-600">
                      <i className="ri-line-chart-line ri-3x"></i>
                    </div>
                    <h4 className="font-medium text-center">Line Charts</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-purple-200 transition-colors">
                    <div className="h-32 mb-2 flex items-center justify-center text-purple-600">
                      <i className="ri-bar-chart-2-line ri-3x"></i>
                    </div>
                    <h4 className="font-medium text-center">Bar Charts</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-purple-200 transition-colors">
                    <div className="h-32 mb-2 flex items-center justify-center text-purple-600">
                      <i className="ri-pie-chart-2-line ri-3x"></i>
                    </div>
                    <h4 className="font-medium text-center">Pie Charts</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-purple-200 transition-colors">
                    <div className="h-32 mb-2 flex items-center justify-center text-purple-600">
                      <i className="ri-map-2-line ri-3x"></i>
                    </div>
                    <h4 className="font-medium text-center">Maps</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Comprehensive Chart Library
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Select from our extensive collection of visualization types to
                find the perfect way to represent your data. Each chart type
                comes with customization options to match your brand and
                communication needs.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-line-chart-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Time Series Visualizations
                    </h3>
                    <p className="text-gray-600">
                      Line charts, area charts, and more to show trends and
                      patterns over time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-map-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Geospatial Mapping
                    </h3>
                    <p className="text-gray-600">
                      Heat maps, choropleth maps, and point maps to visualize
                      location-based data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-node-tree ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Hierarchical Charts
                    </h3>
                    <p className="text-gray-600">
                      Tree maps, sunburst diagrams, and network graphs to show
                      relationships and hierarchies.
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
                Connect to virtually any data source with our extensive
                connectors. Whether your data lives in databases, cloud storage,
                APIs, or spreadsheets, we make it visualization-ready.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-database-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Database Connectivity
                    </h3>
                    <p className="text-gray-600">
                      Direct connections to SQL, NoSQL, and data warehouse
                      solutions with live query capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-google-fill ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Cloud Services</h3>
                    <p className="text-gray-600">
                      Native integration with Google Analytics, Salesforce,
                      Marketo, and other SaaS platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg shrink-0 mt-1">
                    <i className="ri-file-excel-2-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">File Uploads</h3>
                    <p className="text-gray-600">
                      Upload CSV, Excel, JSON files or connect to Google Sheets
                      for quick visualization.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold">
                    Connected Data Sources
                  </h3>
                  <button className="text-sm text-purple-600 hover:underline">
                    + Add New Source
                  </button>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-white text-purple-600 rounded-lg">
                        <i className="ri-database-2-line"></i>
                      </div>
                      <span className="font-medium">PostgreSQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                        Active
                      </span>
                      <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-purple-600">
                        <i className="ri-settings-3-line"></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-white text-purple-600 rounded-lg">
                        <i className="ri-google-fill"></i>
                      </div>
                      <span className="font-medium">Google Analytics</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-green-100 text-green-600 rounded-full">
                        Active
                      </span>
                      <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-purple-600">
                        <i className="ri-settings-3-line"></i>
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-white text-purple-600 rounded-lg">
                        <i className="ri-file-excel-2-line"></i>
                      </div>
                      <span className="font-medium">Quarterly Sales.xlsx</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs px-2 py-1 bg-yellow-100 text-yellow-600 rounded-full">
                        Needs Update
                      </span>
                      <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-purple-600">
                        <i className="ri-settings-3-line"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4 border border-dashed border-gray-300 rounded-lg hover:border-purple-200 hover:bg-purple-50 transition-colors cursor-pointer">
                  <div className="flex items-center justify-center gap-2 text-purple-600">
                    <i className="ri-add-line"></i>
                    <span>Connect Data Source</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}

      <CTA
        title="Ready to Transform Your Data Into Insights?"
        description="Start creating powerful visualizations that drive better decisions and communicate complex information effectively."
        primaryButtonText="Start Free Trial"
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

export default DataVisualization;
