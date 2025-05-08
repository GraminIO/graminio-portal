import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import PhoneInput, { isValidPhoneNumber, } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import '../css/ContactModal.css';

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType?: "general" | "consultation" | "demo";
}

interface ValidationErrors {
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  isOpen,
  onClose,
  formType = "general",
}) => {
  const [defaultCountry, setDefaultCountry] = useState<any>("IN"); // Default to India
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "Select Service",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Detect user's country on component mount
  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        // First try with a free API
        const response = await axios.get('https://ipapi.co/json/');
        if (response.data && response.data.country) {
          setDefaultCountry(response.data.country as any);
          return;
        }
      } catch (error) {
        console.log("Primary IP detection failed, trying fallback...");
      }

      try {
        // Fallback API
        const fallbackResponse = await axios.get('https://geolocation-db.com/json/');
        if (fallbackResponse.data && fallbackResponse.data.country_code) {
          setDefaultCountry(fallbackResponse.data.country_code as any);
        }
      } catch (error) {
        console.log("Could not determine user's country, using default");
      }
    };

    if (isOpen) {
      fetchUserCountry();
    }
  }, [isOpen]);

  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prev) => ({ ...prev, phone: value || "" }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleClose = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      service: "Select Service",
    });
    setErrors({});
    onClose();
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    let isValid = true;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Service validation
    if (formData.service === "Select Service") {
      newErrors.service = "Please select a service";
      isValid = false;
    }

    // Phone validation (if provided)
    if(!formData.phone || formData.phone.trim() === "") {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    } else if (formData.phone && !isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      isValid = false;
    }

    // Message validation (now mandatory)
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const payload = {
      message: formData.message,
      name: formData.name,
      email: formData.email,
      mobNo: formData.phone, // This now includes country code
      subject: "Business Enquiry",
      service: formData.service,
    };

    try {
      await axios.post(
        "https://fi43a757rxhxcythjqatbbd67i0zzyuo.lambda-url.ap-south-1.on.aws/",
        payload
      );

      // Handle successful submission
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmitMessage(
        "Your message has been submitted successfully. We'll be in touch soon."
      );

      // Reset form after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          service: "Select Service",
        });
        setErrors({});
        onClose();
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      setIsSubmitted(true);

      if (axios.isAxiosError(error)) {
        setSubmitMessage(
          error.response?.data?.message ||
            "There was an error submitting your form. Please try again later."
        );
      } else {
        setSubmitMessage(
          "There was an unexpected error. Please try again later."
        );
      }

      // Keep the error message visible for longer
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const formTitles = {
    general: "Get in Touch",
    consultation: "Book a Consultation",
    demo: "Request a Demo",
  };

  const modalVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 30, scale: 0.95 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 z-[9999]"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={backdropVariants}
        >
          <div
            className="fixed inset-0 bg-white bg-opacity-85 backdrop-blur-sm"
          />

          <motion.div
            className="relative bg-white border border-[#0d2b4b] rounded-[10px] shadow-2xl md:w-[750px] sm:w-full overflow-y-auto"
            variants={modalVariants}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.3,
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1"></div>

            <button
              onClick={handleClose}
              className="absolute top-3.5 right-4 text-white hover:text-[#D4A017] transition-colors duration-300"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="">
              {isSubmitted ? (
                <motion.div
                  className="text-center py-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {submitMessage.includes("success") ? (
                    <>
                      <motion.div
                        className="mb-6 flex justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        <div className="rounded-full bg-gradient-to-r from-[#D4A017] to-[#E0B94F] p-3">
                          <svg
                            className="w-12 h-12 text-[#1A365D]"
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
                        </div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Thank You!
                      </h3>
                    </>
                  ) : (
                    <>
                      <motion.div
                        className="mb-6 flex justify-center"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring" }}
                      >
                        <div className="rounded-full bg-gradient-to-r from-red-500 to-red-400 p-3">
                          <svg
                            className="w-12 h-12 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                        </div>
                      </motion.div>
                      <h3 className="text-2xl font-bold text-[#0d2b4b] mb-3">
                        Oops!
                      </h3>
                    </>
                  )}
                  <p className="text-gray-900">{submitMessage}</p>
                </motion.div>
              ) : (
                <>
                  <motion.h2
                    className="text-2xl font-semibold text-center bg-[#0d2b4b] text-[#ffffff] p-5"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {formTitles[formType]}
                  </motion.h2>

                  <form onSubmit={handleSubmit} className="p-8">
                    <div className="flex flex-wrap gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative w-full md:w-[calc(50%-0.5rem)]"
                      >
                        <div className="relative flex">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-[48px]">
                            <svg
                              className="w-5 h-5 text-[#ca8a04]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              ></path>
                            </svg>
                          </div>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="min-h-[48px] block rounded-[5px] px-2.5 pb-2.5 pt-[15px] pl-10 w-full text-sm border border-[#6a6a6a] appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer text-black"
                            placeholder=" "
                          />
                          <label
                            className="absolute block text-[#0d2b4b] bg-[#ffffff] font-medium mb-2 duration-300 transform -translate-y-6 scale-75 top-3.5 z-10 origin-[0] start-[38px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                            htmlFor="name"
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.25 }}
                        className="relative w-full md:w-[calc(50%-0.5rem)]"
                      >
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-[48px]">
                            <svg
                              className="w-5 h-5 text-[#ca8a04]"
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
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={`min-h-[48px] text-black block rounded-[5px] px-2.5 pb-2.5 pt-[15px] pl-10 w-full text-sm border ${
                              errors.email
                                ? "border-red-500"
                                : "border-[#6a6a6a]"
                            } appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer`}
                            placeholder=""
                          />
                          <label
                            htmlFor="email"
                            className="absolute block text-[#0d2b4b] bg-[#ffffff] font-medium mb-2 duration-300 transform -translate-y-6 scale-75 top-3.5 z-10 origin-[0] start-[38px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Email Address{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-600">
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative w-full md:w-[calc(50%-0.5rem)]"
                      >
                        <div className="relative">
                          
                         
                          <label
                            className="absolute block text-[#0d2b4b] bg-[#ffffff] font-medium mb-2 duration-300 transform -translate-y-6 scale-75 top-3.5 z-10 origin-[0] start-[15px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                            htmlFor="phone"                             >
                            Phone <span className="text-red-500">*</span>
                          </label>
                          <PhoneInput
                            international
                            defaultCountry={defaultCountry}
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            className={`min-h-[48px] react-phone-input-custom ${
                              errors.phone ? "error" : ""
                            }`}
                            placeholder="Enter phone number"
                          />
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-600">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative w-full md:w-[calc(50%-0.5rem)]"
                      >
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none h-[48px]">
                            <svg
                              className="w-5 h-5 text-[#ca8a04]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                              ></path>
                            </svg>
                          </div>
                          <select
                            required
                            id="service"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className={`min-h-[48px] block rounded-[5px] font-medium text-[#0d2b4b] px-2.5 pb-2.5 pt-[15px] pl-10 w-full text-sm border ${
                              errors.service
                                ? "border-red-500"
                                : "border-[#6a6a6a]"
                            } appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer`}
                            style={{ backgroundImage: "none" }}
                          >
                            <option value="Select Service">
                              Please Select Service
                            </option>
                            <option value="AI Language Solutions">
                              AI Language Solutions
                            </option>
                            <option value="AI Document Solutions">
                              AI Document Solutions
                            </option>
                            <option value="AI-Driven Customer Support">
                              AI-Driven Customer Support
                            </option>
                            <option value="Business Enquiry">
                              Business Enquiry
                            </option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="Custom Software Development">
                              Custom Software Development
                            </option>
                            <option value="Data Science & Big Data Analytics">
                              Data Science & Big Data Analytics
                            </option>
                            <option value="Gen AI">Gen AI</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg
                              className="w-5 h-5 text-[#ca8a04]"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              ></path>
                            </svg>
                          </div>
                          <label
                            className="absolute block text-[#0d2b4b] bg-[#ffffff] font-medium mb-2 duration-300 transform -translate-y-6 scale-75 top-3.5 z-10 origin-[0] start-[15px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                            htmlFor="service"
                          >
                            Service of Interest{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          {errors.service && (
                            <p className="mt-1 text-xs text-red-600">
                              {errors.service}
                            </p>
                          )}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 }}
                        className="col-span-2 w-full"
                      >
                        <div className="relative">
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="block rounded-[5px] px-2.5 pb-2.5 pt-[15px] pl-4 w-full text-sm border border-[#6a6a6a] appearance-none dark:focus:border-white-500 focus:outline-none focus:ring-0 focus:border-yellow-600 peer"
                            placeholder=""
                          />
                          <label
                            htmlFor="Message"
                            className="absolute block text-[#0d2b4b] bg-[#ffffff] font-medium mb-2 duration-300 transform -translate-y-6 scale-75 top-3.5 z-10 origin-[0] start-[15px] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                          >
                            Message <span className="text-red-500">*</span>
                          </label>
                          {errors.message && (
                            <p className="mt-1 text-xs text-red-600">
                              {errors.message}
                            </p>
                          )}
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="pt-2 "
                      >
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center"
                        >
                          {isSubmitting ? (
                            <svg
                              className="animate-spin h-5 w-5 text-[#1A365D]"
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
                          ) : formType === "consultation" ? (
                            "Book Consultation"
                          ) : formType === "demo" ? (
                            "Request Demo"
                          ) : (
                            "Submit"
                          )}
                        </button>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-center text-gray-400 text-xs col-span-2 w-full"
                      >
                        By submitting, you agree to our Privacy Policy and Terms
                        of Service
                      </motion.div>
                    </div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactFormModal;