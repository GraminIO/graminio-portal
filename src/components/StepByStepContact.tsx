import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import 'react-phone-number-input/style.css';

const StepByStepContact = () => {
  const [defaultCountry, setDefaultCountry] = useState<string | undefined>(
    undefined
  );
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Select option");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [step1Errors, setStep1Errors] = useState({
    name: "",
    service: "",
  });
  const [step2Errors, setStep2Errors] = useState({
    email: "",
    phoneNo: "",
  });

  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        // First try with a free API
        const response = await axios.get('https://ipapi.co/json/');
        if (response.data && response.data.country) {
          setDefaultCountry(response.data.country);
          return;
        }
      } catch (error) {
        console.log("Primary IP detection failed, trying fallback...");
      }

      try {
        // Fallback API
        const fallbackResponse = await axios.get('https://geolocation-db.com/json/');
        if (fallbackResponse.data && fallbackResponse.data.country_code) {
          setDefaultCountry(fallbackResponse.data.country_code);
        }
      } catch (error) {
        console.log("Could not determine user's country, using default");
      }
    };

    if (step === 2) {
      fetchUserCountry();
    }
  }, [step]);

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateStep1 = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      service: "",
    };

    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (service === "Select option") {
      newErrors.service = "Please select a service";
      isValid = false;
    }

    setStep1Errors(newErrors);
    return isValid;
  };

  const validateStep2 = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      phoneNo: "",
    };

    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!phone) {
      newErrors.phoneNo = "Please enter a valid phone number";
      isValid = false;
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phoneNo = "Please enter a valid phone number";
      isValid = false;
    }

    setStep2Errors(newErrors);
    return isValid;
  };

  const handleContinueToStep2 = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleContinueToStep3 = () => {
    if (validateStep2()) {
      setStep(3);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setSubmitError("Please enter a valid email address");
      return;
    }

    if (!phone) {
      setSubmitError("Please enter a valid phone number");
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    const payload = {
      message: message,
      email: email,
      subject: "Business Enquiry",
      name: name,
      mobNo: phone, // This now includes country code
      service: service,
    };

    try {
      const response = await axios.post(
        "https://fi43a757rxhxcythjqatbbd67i0zzyuo.lambda-url.ap-south-1.on.aws/",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        setStep(4);
      } else {
        setSubmitError("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitError(
        "There was an error submitting your form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

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

  return (
    <div className="w-full p-8 bg-white rounded-2xl shadow-xl">
      {/* Progress Steps */}
      <div className="flex justify-between mb-10 relative">
        <div className="absolute top-5 left-0 right-0 h-1 bg-gray-100 -z-10 mx-10">
          <motion.div
            className="h-full bg-yellow-500"
            initial={{ width: "0%" }}
            animate={{
              width: step === 1 ? "0%" : step === 2 ? "50%" : "100%",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-colors ${
                step >= i
                  ? "bg-[#0d2b4b] text-white shadow-lg"
                  : "bg-gray-100 text-gray-400"
              }`}
              whileTap={{ scale: 0.95 }}
            >
              {i}
            </motion.div>
            <div
              className={`text-sm mt-3 font-semibold ${
                step >= i ? "text-[#0d2b4b]" : "text-gray-400"
              }`}
            >
              {i === 1 ? "Your Info" : i === 2 ? "Contact" : "Message"}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Error message display for submission errors */}
      {submitError && step !== 1 && (
        <motion.div
          className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
        >
          {submitError}
        </motion.div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-6"
          >
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.h2
                className="text-3xl font-bold text-gray-800 mb-2"
                variants={item}
              >
                Let's get started
              </motion.h2>
              <motion.p className="text-gray-500 mb-8" variants={item}>
                We'd love to hear from you. Please introduce yourself.
              </motion.p>

              <motion.div variants={item}>
                <label className="block text-gray-700 mb-2 font-medium">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (step1Errors.name)
                      setStep1Errors({ ...step1Errors, name: "" });
                  }}
                  className={`w-full px-5 py-4 text-sm md:text-lg border-2 text-black border-gray-200 rounded-[5px] focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all ${
                    step1Errors.name ? "border-red-500" : ""
                  }`}
                  autoFocus
                  required
                />
                {step1Errors.name && (
                  <p className="mt-1 text-sm text-red-600">
                    {step1Errors.name}
                  </p>
                )}
              </motion.div>

              <motion.div variants={item} className="mt-6">
                <label className="block text-gray-700 mb-2 text-black font-medium">
                  Service Interest <span className="text-red-500">*</span>
                </label>
                <select
                  value={service}
                  onChange={(e) => {
                    setService(e.target.value);
                    if (step1Errors.service)
                      setStep1Errors({ ...step1Errors, service: "" });
                  }}
                  className={`w-full px-5 py-4 text-sm md:text-lg border-2 text-black border-gray-200 rounded-[5px] focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all ${
                    step1Errors.service ? "border-red-500" : ""
                  }`}
                >
                  <option value="Select option">Please select service</option>
                  <option value="AI Language Solutions">
                    AI Language Solutions
                  </option>
                  <option value="AI Document Solutions">
                    AI Document Solutions
                  </option>
                  <option value="AI-Driven Customer Support">
                    AI-Driven Customer Support
                  </option>
                  <option value="Blockchain">Blockchain</option>
                  <option value="Business Enquiry">Business Enquiry</option>
                  <option value="Custom Software Development">
                    Custom Software Development
                  </option>
                  <option value="Data Science & Big Data Analytics">
                    Data Science & Big Data Analytics
                  </option>
                  <option value="Gen AI">Gen AI</option>
                  <option value="Other">Other</option>
                </select>
                {step1Errors.service && (
                  <p className="mt-1 text-sm text-red-600">
                    {step1Errors.service}
                  </p>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                onClick={handleContinueToStep2}
                disabled={!name.trim() || service === "Select option"}
                className={`w-full py-4 rounded-[5px] font-semibold text-lg transition-all ${
                  name.trim() && service !== "Select option"
                    ? "bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
                whileHover={
                  name.trim() && service !== "Select option"
                    ? { scale: 1.01 }
                    : undefined
                }
                whileTap={
                  name.trim() && service !== "Select option"
                    ? { scale: 0.98 }
                    : undefined
                }
              >
                Continue
                <svg
                  className="w-5 h-5 inline-block ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-6"
          >
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.h2
                className="text-3xl font-bold text-gray-800 mb-2"
                variants={item}
              >
                Hello, <span className="text-yellow-500">{name}</span>!
              </motion.h2>
              <motion.p className="text-gray-500 mb-8" variants={item}>
                How can we reach you?
              </motion.p>

              <motion.div variants={item}>
                <label className="block text-gray-700 mb-2 font-medium">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (step2Errors.email)
                      setStep2Errors({ ...step2Errors, email: "" });
                  }}
                  className={`w-full px-5 py-4 text-lg border-2 text-black border-gray-200 rounded-[5px] focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all ${
                    step2Errors.email ? "border-red-500" : ""
                  }`}
                  autoFocus
                  required
                />
                {step2Errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {step2Errors.email}
                  </p>
                )}
              </motion.div>

              <motion.div variants={item} className="mt-6">
                <label className="block text-gray-700 mb-2 font-medium">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className={`react-phone-input-wrapper ${step2Errors.phoneNo ? "error" : ""}`}>
                  <PhoneInput
                    international
                    defaultCountry={defaultCountry as any}
                    value={phone}
                    onChange={(value) => setPhone(value || "")}
                    className={`w-full px-5 py-4 text-lg border-2 text-black border-gray-200 rounded-[5px] focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all ${
                      step2Errors.phoneNo ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {step2Errors.phoneNo && (
                  <p className="mt-1 text-sm text-red-600">
                    {step2Errors.phoneNo}
                  </p>
                )}
              </motion.div>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex gap-4">
                <motion.button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 rounded-[5px] font-semibold text-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-5 h-5 inline-block mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                  Back
                </motion.button>
                <motion.button
                  onClick={handleContinueToStep3}
                  disabled={!email.trim() || !phone}
                  className={`flex-1 py-4 rounded-[5px] font-semibold text-lg transition-all ${
                    email.trim() && phone
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                  whileHover={email.trim() && phone ? { scale: 1.01 } : undefined}
                  whileTap={email.trim() && phone ? { scale: 0.98 } : undefined}
                >
                  Continue
                  <svg
                    className="w-5 h-5 inline-block ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="space-y-6"
          >
            <motion.div variants={container} initial="hidden" animate="show">
              <motion.h2
                className="text-3xl font-bold text-gray-800 mb-2"
                variants={item}
              >
                How can we help?
              </motion.h2>
              <motion.p className="text-gray-500 mb-8" variants={item}>
                Tell us about your project or inquiry.
              </motion.p>

              <motion.div variants={item}>
                <label className="block text-gray-700 mb-2 font-medium">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-5 py-4 h-40 text-lg border-2 text-black border-gray-200 rounded-[5px] focus:border-yellow-500 focus:ring-2 focus:ring-yellow-200 outline-none transition-all"
                  autoFocus
                  required
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex gap-4">
                <motion.button
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 rounded-[5px] font-semibold text-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-all"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <svg
                    className="w-5 h-5 inline-block mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                  Back
                </motion.button>
                <motion.button
                  onClick={handleSubmit}
                  disabled={!message.trim()}
                  className={`flex-1 py-4 rounded-[5px] font-semibold text-lg transition-all ${
                    message.trim()
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  }`}
                  whileHover={
                    message.trim() && !isSubmitting ? { scale: 1.01 } : {}
                  }
                  whileTap={
                    message.trim() && !isSubmitting ? { scale: 0.98 } : {}
                  }
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white inline-block"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit
                      <svg
                        className="w-5 h-5 inline-block ml-2"
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
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {step === 4 && (
          <motion.div
            key="step4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="text-center py-8"
          >
            <motion.div
              className="w-24 h-24 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-8"
              initial={{ rotate: 180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <svg
                className="w-12 h-12 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            </motion.div>
            <motion.h2
              className="text-3xl font-bold text-gray-800 mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Thank you, <span className="text-yellow-500">{name}</span>!
            </motion.h2>
            <motion.p
              className="text-gray-600 mb-8 text-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              We've received your message and will get back to you within 24
              hours.
            </motion.p>
            <motion.div
              className="border-t border-gray-200 pt-8 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-gray-600 mb-6">Prefer a direct approach?</p>
              <div className="space-y-4">
                <motion.a
                  href="mailto:admin@graminio.com"
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-lg"
                  whileHover={{ x: 5 }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
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
                  Email our team directly
                </motion.a>
                <p className="text-gray-400">or</p>
                <motion.a
                  href="https://wa.me/919004757685"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium text-lg"
                  whileHover={{ x: 5 }}
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
                  </svg>
                  Chat with us on WhatsApp
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StepByStepContact;