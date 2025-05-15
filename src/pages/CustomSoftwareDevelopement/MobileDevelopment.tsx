import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";



const MobileDevelopment: React.FC = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);
      const [modalType, setModalType] = useState<"general" | "consultation" | "demo">("general");
    
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
      <section className="hero-section py-10 md:py-40 relative bg-[url('/Mobile-App-Development.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Mobile App Development</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Transform your ideas into powerful mobile experiences with our
              custom app development services. We create innovative iOS and
              Android solutions that engage users and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-10 md:py-20  bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Mobile Solutions
            </h2>
            <p className="text-lg text-gray-600">
              We deliver high-performance mobile applications with cutting-edge
              technology, intuitive design, and seamless functionality across
              all devices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-smartphone-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Native App Development
              </h3>
              <p className="text-gray-600">
                High-performance apps built specifically for iOS and Android
                platforms using Swift, Kotlin, and other native technologies.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-global-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Cross-Platform Apps
              </h3>
              <p className="text-gray-600">
                Cost-effective solutions using React Native and Flutter that run
                seamlessly across multiple platforms with native-like
                performance.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-pencil-ruler-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-gray-600">
                Intuitive, user-centric designs that enhance engagement and
                provide exceptional user experiences.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-cloud-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Backend Integration
              </h3>
              <p className="text-gray-600">
                Secure cloud integration, API development, and database
                solutions to power your mobile applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Native App Development */}
      <section id="native" className="py-10 md:py-20 ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Native Mobile Development
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We build high-performance mobile applications using
                platform-specific technologies to deliver the best possible user
                experience and take full advantage of device capabilities.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    iOS development with Swift and Objective-C
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Android development with Kotlin and Java
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Full access to device hardware and OS features
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 flex items-center justify-center text-primary mt-0.5">
                    <i className="ri-check-line ri-lg"></i>
                  </div>
                  <p className="text-gray-700">
                    Optimized performance for each platform
                  </p>
                </div>
              </div>

              {/* <a
                href="#"
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Learn more about our native development approach
                <i className="ri-arrow-right-line ri-lg ml-1"></i>
              </a> */}
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Platform Selection</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>Development Mode</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-6 mb-8">
                <div className="platform-card p-4 border border-gray-200 rounded-lg text-center hover:border-primary transition-all cursor-pointer">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-apple-fill text-3xl text-gray-800"></i>
                  </div>
                  <h4 className="font-medium">iOS</h4>
                  <p className="text-sm text-gray-500 mt-1">
                    Swift, Objective-C
                  </p>
                </div>
                <div className="platform-card p-4 border border-gray-200 rounded-lg text-center hover:border-primary transition-all cursor-pointer">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i className="ri-android-fill text-3xl text-gray-800"></i>
                  </div>
                  <h4 className="font-medium">Android</h4>
                  <p className="text-sm text-gray-500 mt-1">Kotlin, Java</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <i className="ri-check-line text-sm"></i>
                    </div>
                    <span className="text-sm">Camera Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <i className="ri-check-line text-sm"></i>
                    </div>
                    <span className="text-sm">GPS Integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <i className="ri-check-line text-sm"></i>
                    </div>
                    <span className="text-sm">Biometric Auth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <i className="ri-check-line text-sm"></i>
                    </div>
                    <span className="text-sm">Offline Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <i className="ri-check-line text-sm"></i>
                    </div>
                    <span className="text-sm">Push Notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                      <i className="ri-check-line text-sm"></i>
                    </div>
                    <span className="text-sm">Payment Gateways</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  Need both platforms?
                </span>
                <button onClick={() => openModal("consultation")} className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                  Discuss Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Platform Development */}
      <section id="cross-platform" className="py-10 md:py-20  bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6 pb-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-medium">
                    CP
                  </div>
                  <div>
                    <h4 className="font-medium">Cross-Platform App</h4>
                    <div className="flex items-center gap-1 text-sm text-gray-500">
                      <span>React Native</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <i className="ri-git-branch-line"></i>
                        Development
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-code-line"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-bug-line"></i>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-more-2-fill"></i>
                  </button>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">Code Preview</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      App.js
                    </span>
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      Components
                    </span>
                  </div>
                </div>
                <div className="bg-gray-800 text-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                  <pre>
                    {`import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Welcome to our Cross-Platform App!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;`}
                  </pre>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">iOS Build</span>
                    <i className="ri-checkbox-circle-line text-green-500"></i>
                  </div>
                  <p className="font-medium">v1.2.5</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-600">Android Build</span>
                    <i className="ri-checkbox-circle-line text-green-500"></i>
                  </div>
                  <p className="font-medium">v1.2.5</p>
                </div>
              </div>

              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Search components or files..."
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary">
                    <i className="ri-search-line"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cross-Platform Development
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Build once, deploy everywhere. Our cross-platform solutions
                deliver native-like experiences while significantly reducing
                development time and cost.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-repeat-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Single Codebase
                    </h3>
                    <p className="text-gray-600">
                      Maintain one codebase for both iOS and Android platforms,
                      reducing development and maintenance efforts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-money-dollar-circle-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Cost Efficiency
                    </h3>
                    <p className="text-gray-600">
                      Save up to 40% on development costs compared to building
                      separate native apps for each platform.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-rocket-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Faster Time-to-Market
                    </h3>
                    <p className="text-gray-600">
                      Launch your app simultaneously on multiple platforms,
                      accelerating your go-to-market strategy.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                    <i className="ri-reactjs-line"></i>
                  </div>
                  <span className="text-sm">React Native</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full">
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-400 text-white rounded-full">
                    <i className="ri-flutter-line"></i>
                  </div>
                  <span className="text-sm">Flutter</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Design Process */}
      <section id="design" className="py-10 md:py-20 ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                UI/UX Design Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We create beautiful, intuitive interfaces that enhance user
                engagement and deliver exceptional mobile experiences.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-user-voice-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">User Research</h3>
                    <p className="text-gray-600">
                      Understand your target audience through comprehensive
                      research and persona development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-paint-brush-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Wireframing & Prototyping
                    </h3>
                    <p className="text-gray-600">
                      Create interactive prototypes to visualize app flow and
                      functionality before development.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-palette-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Visual Design</h3>
                    <p className="text-gray-600">
                      Craft pixel-perfect interfaces with consistent branding
                      and attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Design System</h3>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary font-medium">Version 2.1</span>
                  <div className="w-6 h-6 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                    <i className="ri-information-line"></i>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Design Completion</span>
                  <span className="text-primary font-medium">85%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "85%" }}></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Components</span>
                    <span className="text-primary font-medium">92%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Screens</span>
                    <span className="text-primary font-medium">78%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">User Flows</span>
                    <span className="text-primary font-medium">95%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Animations</span>
                    <span className="text-primary font-medium">65%</span>
                  </div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: "65%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Recent Updates</h4>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                    <div className="w-6 h-6 flex items-center justify-center text-blue-500">
                      <i className="ri-add-line"></i>
                    </div>
                    <span className="text-sm">12 New Components</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                    <div className="w-6 h-6 flex items-center justify-center text-purple-500">
                      <i className="ri-palette-line"></i>
                    </div>
                    <span className="text-sm">Color System Update</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-5 items-center justify-between">
                <span className="text-gray-600">Next review in 2 days</span>
                <button onClick={() => openModal("consultation")} className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center">
                  View Prototype
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Development Process */}
      <section id="process" className="py-10 md:py-20  bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 -translate-x-full hidden lg:block">
                  <div className="relative w-64 h-96 bg-white p-3 rounded-3xl shadow-lg transform -rotate-6">
                    <div className="h-full rounded-2xl overflow-hidden border border-gray-200">
                      <div className="bg-gray-100 h-8 flex items-center justify-center">
                        <div className="w-16 h-4 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="p-3">
                        <div className="w-full h-32 bg-primary/10 rounded mb-3"></div>
                        <div className="w-3/4 h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="w-1/2 h-4 bg-gray-200 rounded mb-4"></div>
                        <div className="w-full h-24 bg-gray-100 rounded mb-3"></div>
                        <div className="w-full h-12 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md relative z-10">
                  <div className="mb-6">
                    <img
                      src="/mobile_app_dvelopment_12.jpg"
                      alt="App development process"
                      className="w-full h-auto rounded object-cover"
                    />
                  </div>

                  <h4 className="text-xl font-semibold mb-4">
                    Agile Development Methodology
                  </h4>
                  <p className="text-gray-600 mb-6">
                    We follow agile practices to ensure transparency,
                    flexibility, and continuous improvement throughout your
                    project.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-git-branch-line ri-lg"></i>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-bug-line ri-lg"></i>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-test-tube-line ri-lg"></i>
                      </div>
                    </div>

                    {/* <button className="text-primary font-medium hover:underline flex items-center">
                      View full process
                      <i className="ri-arrow-right-s-line ri-lg ml-1"></i>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Development Process
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From concept to launch and beyond, we follow a proven process to
                deliver high-quality mobile applications on time and within
                budget.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-lightbulb-flash-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Discovery & Planning
                    </h3>
                    <p className="text-gray-600">
                      We start with thorough requirements gathering, market
                      research, and technical feasibility analysis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-layout-masonry-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Design & Prototyping
                    </h3>
                    <p className="text-gray-600">
                      Create wireframes, prototypes, and design systems to
                      visualize the final product.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-code-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Development & Testing
                    </h3>
                    <p className="text-gray-600">
                      Agile sprints with continuous integration, testing, and
                      quality assurance at every stage.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-rocket-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Deployment & Maintenance
                    </h3>
                    <p className="text-gray-600">
                      App store submission, launch support, and ongoing
                      maintenance and updates.
                    </p>
                  </div>
                </div>
              </div>

              {/* <a
                href="#"
                className="px-6 py-3 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Start Your Project
              </a> */}
            </div>
          </div>
        </div>
      </section>
      <CTA
    title="Ready to Build Your Mobile App?"
    description="Let's discuss how we can transform your idea into a successful mobile application that users will love."
    primaryButtonText="Get Free Consultation"
    primaryButtonLink="/contact"
    secondaryButtonText="View Our Portfolio"
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

export default MobileDevelopment;
