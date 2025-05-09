import React, { useState } from "react";
import CTA from "../../components/CTA";
import ContactFormModal from "../../components/contactModal";
import RequestDemoButton from "../../components/RequestDemoButton";

const MultiPlatformAccessibility: React.FC = () => {
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
      <section className="multimedia_hear_section py-20 md:py-40 relative">
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-6 w-full relative z-[99]">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="">Multi-Platform Accessibility</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Access our AI language solutions anytime, anywhere across all your
              devices. Seamless synchronization ensures your language tools are
              always at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <RequestDemoButton onClick={() =>openModal("demo")}/>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section id="features" className="py-10 md:py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Unified Experience Across Devices
            </h2>
            <p className="text-lg text-gray-600">
              Our platform delivers consistent, high-quality language solutions
              regardless of how or where you access it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-sync-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Instant Synchronization
              </h3>
              <p className="text-gray-600">
                Your conversations, translations, and learning progress sync in
                real-time across all platforms.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-smartphone-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Mobile-Optimized
              </h3>
              <p className="text-gray-600">
                Full-featured mobile apps with responsive design for on-the-go
                language solutions.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-laptop-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Desktop Power
              </h3>
              <p className="text-gray-600">
                Robust desktop applications with advanced features for
                professional use.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-global-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Web Access
              </h3>
              <p className="text-gray-600">
                Full functionality through any modern web browser with no
                installation required.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-wifi-off-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Offline Mode
              </h3>
              <p className="text-gray-600">
                Download language packs for use without internet connectivity.
              </p>
            </div>

            <div className="feature-card bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg mb-4">
                <i className="ri-shield-keyhole-line ri-xl"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Enterprise Security
              </h3>
              <p className="text-gray-600">
                End-to-end encryption and secure data handling across all
                platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Showcase */}
      <section id="platforms" className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Available on All Your Devices
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're at your desk or on the move, our language
                solutions adapt to your preferred device with full feature
                parity.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-apple-fill ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      iOS & macOS
                    </h3>
                    <p className="text-gray-600">
                      Native apps optimized for Apple devices with seamless
                      integration into the ecosystem.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-2"
                    >
                      App Store
                      <i className="ri-arrow-right-line ri-lg ml-1"></i>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-android-fill ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Android
                    </h3>
                    <p className="text-gray-600">
                      Fully-featured mobile experience with Material Design and
                      Android-specific optimizations.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-2"
                    >
                      Play Store
                      <i className="ri-arrow-right-line ri-lg ml-1"></i>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-windows-fill ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Windows
                    </h3>
                    <p className="text-gray-600">
                      Powerful desktop application with keyboard shortcuts and
                      multi-window support.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-2"
                    >
                      Download
                      <i className="ri-arrow-right-line ri-lg ml-1"></i>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-global-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Web Browser
                    </h3>
                    <p className="text-gray-600">
                      Instant access through Chrome, Safari, Edge, Firefox and
                      others with no installation required.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-primary text-sm font-medium hover:underline mt-2"
                    >
                      Open Web App
                      <i className="ri-arrow-right-line ri-lg ml-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

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
                      src="https://public.readdy.ai/ai/img_res/f37d6e3a9e611d888a1479a7da274a25.jpg"
                      alt="Multi-platform devices"
                      className="w-full h-auto rounded-lg object-cover"
                    />
                  </div>

                  <h4 className="text-xl font-semibold mb-4">
                    Seamless Device Switching
                  </h4>
                  <p className="text-gray-600 mb-6">
                    Start a conversation on your phone during your commute and
                    continue it on your laptop when you arrive at work - all
                    your data stays perfectly synchronized.
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-apple-fill ri-lg"></i>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-android-fill ri-lg"></i>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-windows-fill ri-lg"></i>
                      </div>
                      <div className="w-10 h-10 flex items-center justify-center text-gray-700">
                        <i className="ri-chrome-fill ri-lg"></i>
                      </div>
                    </div>

                    <button className="text-primary font-medium hover:underline flex items-center">
                      View all platforms
                      <i className="ri-arrow-right-s-line ri-lg ml-1"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synchronization */}
      <section id="sync" className="py-10 md:py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold">Active Sessions</h3>
                  <span className="text-sm text-primary">Manage</span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
                        <i className="ri-smartphone-line"></i>
                      </div>
                      <div>
                        <div className="font-medium">iPhone 14 Pro</div>
                        <div className="text-xs text-gray-500">
                          Last active: 2 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-purple-100 text-purple-600 rounded-full">
                        <i className="ri-laptop-line"></i>
                      </div>
                      <div>
                        <div className="font-medium">MacBook Pro</div>
                        <div className="text-xs text-gray-500">
                          Last active: 15 minutes ago
                        </div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 rounded-full">
                        <i className="ri-tablet-line"></i>
                      </div>
                      <div>
                        <div className="font-medium">iPad Air</div>
                        <div className="text-xs text-gray-500">
                          Last active: 1 hour ago
                        </div>
                      </div>
                    </div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">
                  Sync Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Instant Sync</div>
                      <div className="text-xs text-gray-500">
                        Sync data across devices in real-time
                      </div>
                    </div>
                    <label className="custom-switch">
                      <input type="checkbox" checked />
                      <span className="switch-slider"></span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Offline Mode</div>
                      <div className="text-xs text-gray-500">
                        Download language data for offline use
                      </div>
                    </div>
                    <label className="custom-switch">
                      <input type="checkbox" checked />
                      <span className="switch-slider"></span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Battery Saver</div>
                      <div className="text-xs text-gray-500">
                        Optimize sync for battery life
                      </div>
                    </div>
                    <label className="custom-switch">
                      <input type="checkbox" />
                      <span className="switch-slider"></span>
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Storage</h3>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-700">1.2 GB used</span>
                  <span className="text-sm text-gray-500">of 5 GB</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full"
                    style={{ width: "24%" }}
                  ></div>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Offline language packs and sync data
                </div>
              </div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Intelligent Synchronization
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our smart sync technology ensures your language data is always
                up-to-date across devices while optimizing for performance and
                battery life.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-cloud-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Cloud-Powered Sync
                    </h3>
                    <p className="text-gray-600">
                      All your conversations, translations, and learning
                      progress are securely stored in the cloud and instantly
                      available on all devices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-battery-charge-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Battery Optimization
                    </h3>
                    <p className="text-gray-600">
                      Smart algorithms minimize battery drain while maintaining
                      seamless synchronization between your devices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-shield-keyhole-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      End-to-End Encryption
                    </h3>
                    <p className="text-gray-600">
                      Your data is encrypted during transfer and at rest,
                      ensuring complete privacy across all platforms.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0 mt-1">
                    <i className="ri-history-line ri-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">
                      Version History
                    </h3>
                    <p className="text-gray-600">
                      Access 30 days of version history for all your documents
                      and translations across devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions */}
      <section id="enterprise" className="py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise-Grade Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Advanced deployment options for businesses and organizations with
              complex requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-blue-100 text-blue-600 rounded-lg mb-4">
                <i className="ri-building-2-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                On-Premises Deployment
              </h3>
              <p className="text-gray-600 mb-4">
                Install our solution within your private infrastructure for
                maximum control and security.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-500 mt-0.5"></i>
                  <span>Full data sovereignty</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-500 mt-0.5"></i>
                  <span>Custom integration options</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-blue-500 mt-0.5"></i>
                  <span>Dedicated support</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-600 rounded-lg mb-4">
                <i className="ri-cloud-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Private Cloud
              </h3>
              <p className="text-gray-600 mb-4">
                Dedicated cloud instance with isolated resources and custom
                configurations.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span>Enterprise-grade security</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span>Custom SLAs</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span>Scalable infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
              <div className="w-14 h-14 flex items-center justify-center bg-purple-100 text-purple-600 rounded-lg mb-4">
                <i className="ri-shield-star-line ri-2x"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Compliance Packages
              </h3>
              <p className="text-gray-600 mb-4">
                Pre-configured solutions meeting strict regulatory requirements.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-purple-500 mt-0.5"></i>
                  <span>GDPR compliant</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-purple-500 mt-0.5"></i>
                  <span>HIPAA ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <i className="ri-check-line text-purple-500 mt-0.5"></i>
                  <span>SOC 2 Type II certified</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              onClick={() => openModal("general")}
              className="inline-flex items-center px-6 py-3 border border-primary text-primary font-medium rounded-[5px] hover:bg-primary/10 transition-colors hover:cursor-pointer"
            >
              Contact Enterprise Sales
              <i className="ri-arrow-right-line ri-lg ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Access Language Solutions Everywhere?"
        description="Download our apps today and experience seamless language tools across all your devices"
        primaryButtonText="Get Started for free"
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

export default MultiPlatformAccessibility;