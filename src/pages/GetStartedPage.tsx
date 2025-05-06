import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactFormModal from "../components/contactModal.tsx";
import StepByStepContact from "../components/StepByStepContact.tsx";

const GetStartedPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<
    "general" | "consultation" | "demo"
  >("general");

  const openModal = (type: "general" | "consultation" | "demo") => {
    setModalType(type);
    setIsModalOpen(true);
  };
  
  const email = "admin@graminio.com";
  const emailSubject = "Business Inquiry";
  const emailBody =
    "Hello, I am interested in your services. Please provide more details.";
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const gradientBackground = {
    hidden: { backgroundPosition: "0% 50%" },
    visible: {
      backgroundPosition: "100% 50%",
      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "linear",
      },
    },
  };

  const pulse = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <motion.div
        className="relative  pt-28 pb-20 md:pt-40 md:pb-32 relative bg-[url('/contact_us_bg.jpg')] bg-cover bg-center"
        initial="hidden"
        animate="visible"
        variants={gradientBackground}
      >
        <div className="absolute inset-0 bg-[#00000087] z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight"
              variants={item}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-100">
                Transform Your Business
              </span>{" "}
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-100 to-white">
                With AI Innovation
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-12 opacity-90"
              variants={item}
            >
              Harness the power of cutting-edge AI solutions tailored to your
              unique business needs.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              variants={item}
            >
              <motion.button
                onClick={() => openModal("consultation")}
                className="px-6 py-2 bg-yellow-600 text-white font-semibold rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Book a Free Consultation</span>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
              <motion.button
                onClick={() => openModal("demo")}
                className="relative overflow-hidden bg-transparent hover:bg-yellow-700 border-2 border-white font-semibold px-10 py-5 rounded-[5px] transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Request a Demo</span>
                <motion.span
                  className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white opacity-10"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full bg-white opacity-5"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Value Proposition Section */}
      <motion.div
        className="py-24 bg-white"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center mb-20"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div className="inline-block mb-6" variants={item}>
              <div className="bg-yellow-100 text-yellow-600 px-6 py-2 rounded-full text-sm font-semibold">
                WHY CHOOSE US
              </div>
            </motion.div>
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              variants={item}
            >
              AI Solutions That{" "}
              <span className="text-yellow-500">Drive Results</span>
            </motion.h2>
            <motion.p className="text-xl text-gray-600" variants={item}>
              We combine cutting-edge technology with deep industry expertise to
              deliver transformative solutions.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                title: "Industry Expertise",
                desc: "Deep domain knowledge across multiple sectors including finance, healthcare, and retail.",
                icon: (
                  <svg
                    className="w-10 h-10 text-yellow-500"
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
                ),
              },
              {
                title: "Custom Solutions",
                desc: "Tailored AI implementations designed for your specific business needs.",
                icon: (
                  <svg
                    className="w-10 h-10 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                ),
              },
              {
                title: "End-to-End Support",
                desc: "From strategy to implementation and ongoing optimization.",
                icon: (
                  <svg
                    className="w-10 h-10 text-yellow-500"
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
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                variants={item}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="bg-yellow-50 w-16 h-16 rounded-xl mb-6 flex items-center justify-center group-hover:bg-yellow-100 transition-colors duration-300"
                  animate={pulse}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Stats Section */}
      {/* <div className="py-20 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              { number: "50+", label: "Happy Clients" },
              { number: "100+", label: "Projects Completed" },
              { number: "90%", label: "Client Retention" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg text-center"
                variants={item}
                whileHover={{ scale: 1.05 }}
              >
                <motion.p
                  className="text-5xl font-bold mb-3 text-gray-900"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.p>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div> */}

      {/* Contact Options Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div className="inline-block mb-6" variants={item}>
              <div className="bg-yellow-100 text-yellow-600 px-6 py-2 rounded-full text-sm font-semibold">
                CONNECT WITH US
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Multiple Ways to <span className="text-yellow-500">Connect</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the method that works best for you - we're here to help.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Email Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-yellow-100 w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                Email Us
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                Get a response within 24 hours from our expert team.
              </p>
              <div className="text-center">
                <a
                  href={emailLink}
                  className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center"
                >
                  Send Email
                </a>
              </div>
            </motion.div>

            {/* Phone Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-yellow-100 w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                Call Us
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                Speak directly with our solutions specialists.
              </p>
              <div className="text-center">
                <a
                  href="tel:+919004757685"
                  className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center"
                >
                  +91 90047 57685
                </a>
              </div>
            </motion.div>

            {/* WhatsApp Card */}
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
              variants={item}
              whileHover={{ y: -10 }}
            >
              <div className="bg-yellow-100 w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-yellow-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">
                Live Chat
              </h3>
              <p className="text-gray-600 mb-8 text-center">
                Get instant answers via WhatsApp chat.
              </p>
              <div className="text-center">
                <a
                  href="https://wa.me/919004757685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center"
                >
                  Chat Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Contact Form Section */}
      <div className="py-24 bg-gradient-to-br from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div className="inline-block mb-6" variants={item}>
              <div className="bg-yellow-100 text-yellow-600 px-6 py-2 rounded-full text-sm font-semibold">
                GET IN TOUCH
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to <span className="text-yellow-500">Transform</span> Your
              Business?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions or ready to start your project? Reach out to our
              team today.
            </p>
          </motion.div>
          <motion.div
            className="max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="md:flex">
              <div className="md:w-2/5  p-12 text-white relative overflow-hidden relative bg-[url('/contact_us_now.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-[#000000ba] z-10"></div>
                <div className="relative z-10">
                  <motion.h3
                    className="text-3xl font-bold mb-8"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    Let's Build Something Amazing
                  </motion.h3>
                  <motion.p
                    className="mb-10 text-yellow-100"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    Fill out the form and our team will get back to you within
                    24 hours with a customized solution.
                  </motion.p>

                  <motion.div
                    className="space-y-6"
                    initial="hidden"
                    animate="visible"
                    variants={container}
                  >
                    <motion.div className="flex items-start" variants={item}>
                      <div className="bg-yellow-400 bg-opacity-20 p-2 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <span>admin@graminio.com</span>
                      </div>
                    </motion.div>

                    <motion.div className="flex items-start" variants={item}>
                      <div className="bg-yellow-400 bg-opacity-20 p-2 rounded-lg mr-4">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <span>+91 90047 57685</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="pt-10 mt-10 border-t border-yellow-400 border-opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
                    <div className="flex space-x-5">
                      {[
                        { icon: "Twitter", path: "https://x.com/graminiotech" },
                        { icon: "LinkedIn", path: "https://www.linkedin.com/company/graminio-technologies-pvt-ltd/" },
                        { icon: "Facebook", path: "https://www.facebook.com/GraminIOTech/" },
                        { icon: "Instagram", path: "https://www.instagram.com/graminiotechnologies/" },
                      ].map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.path}
                          className="text-white hover:text-yellow-200 transition-colors duration-300"
                          whileHover={{ scale: 1.1, y: -3 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d={
                                social.icon === "Twitter"
                                  ? "M22 5.16c-.406.195-1.63.406-2.44.668a3.705 3.705 0 00-6.32 3.377h.004c-3.062.12-5.79-1.48-7.6-3.56-.962 1.646-.38 3.747 1.11 4.82-.58-.008-1.15-.18-1.64-.45v.04c0 1.737 1.238 3.18 2.87 3.51-.532.148-1.09.172-1.648.09.456 1.414 1.77 2.443 3.33 2.478-1.26.986-2.84 1.574-4.56 1.574-.298 0-.59-.018-.88-.053 1.63 1.046 3.56 1.656 5.64 1.656 6.768 0 10.467-5.6 10.467-10.467 0-.16-.004-.318-.012-.476A7.383 7.383 0 0022 5.16z"
                                  : social.icon === "LinkedIn"
                                  ? "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                                  : social.icon === "Facebook"
                                  ? "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                  : "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                              }
                            />
                          </svg>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="md:w-3/5 p-12">
                <StepByStepContact />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.div className="inline-block mb-6" variants={item}>
              <div className="bg-yellow-100 text-yellow-600 px-6 py-2 rounded-full text-sm font-semibold">
                HAVE QUESTIONS?
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked{" "}
              <span className="text-yellow-500">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services.
            </p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              {
                question: "What services does GraminIO offer?",
                answer:
                  "GraminIO offers a comprehensive suite of AI-powered solutions including AI Language Solutions, AI Document Solutions, AI-Driven Customer Support, Data Science & Big Data Analytics, Custom Software Development, GenAI, and Blockchain services.",
              },
              {
                question: "How can GraminIO help my business?",
                answer:
                  "We help businesses transform digitally by implementing cutting-edge AI solutions that streamline operations, enhance customer experiences, and drive innovation. Our technologies can help you break language barriers, automate document processing, provide intelligent customer support, and more.",
              },
              {
                question:
                  "What is the process of getting started with GraminIO?",
                answer:
                  "Getting started is simple. You can book a consultation through our website, and our experts will discuss your business needs. We'll then provide a tailored solution proposal, followed by implementation and ongoing support to ensure your success.",
              },
              {
                question:
                  "Do you offer customized solutions for specific industries?",
                answer:
                  "Yes, we specialize in creating tailored solutions for various industries including healthcare, finance, education, retail, and manufacturing. We understand that each industry has unique challenges and requirements.",
              },
              {
                question:
                  "What support options are available after implementation?",
                answer:
                  "We provide comprehensive post-implementation support including technical assistance, maintenance, updates, and training. Our dedicated support team ensures that your systems continue to operate efficiently and effectively.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="mb-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-6">
                    <svg
                      className="w-6 h-6 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div className="text-center mt-16" variants={item}>
              <p className="text-gray-600 mb-8 text-xl">
                Still have questions?
              </p>
              <motion.button
                onClick={() => openModal("general")}
                className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Support Team
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formType={modalType}
      />
    </div>
  );
};

export default GetStartedPage;
