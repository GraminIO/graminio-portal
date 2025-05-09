import React, { useState } from "react";
import ContactFormModal from "../components/contactModal";
// import "../css/home.css";

const Home: React.FC = () => {
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
      <section className="video_area">
        <div className="relative">
          <video
            src="/GraminIO-Portal_video.mp4?var=<?php echo rand(); ?>"
            className="w-full"
            playsInline
            autoPlay
            muted
            loop
            poster="/banner_images.jpg"
          >
            <source
              src="/GraminIO-Portal_video.ogg?var=<?php echo rand(); ?>"
              type="video/ogg"
            />
            Your browser does not support the video tag.
          </video>
          {/* <div className="absolute inset-0 bg-black/50 flex items-end justify-center pb-7">
            <button
              onClick={() => openModal("general")}
              className="px-6 py-2 bg-yellow-600 text-lg text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center"
              type="button"
            >
              <span>Let's Connect</span>
            </button>
          </div> */}
        </div>
      </section>

      <section className="py-10 lg:py-20 bg-gray-100">
        <div>
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <span className="inline-block text-gray-500 uppercase text-sm font-semibold tracking-wide pl-8 relative before:content-[''] before:absolute before:h-4 before:w-4 before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-[url(/tag-star.webp)] bg-no-repeat bg-center bg-contain">
                Clients & Partners
              </span>
              <h2 className="text-2xl xl:text-3xl font-semibold mt-2">
                <span className="text-gray-700">
                  From Startups To Enterprises, We Transform Digital Visions At
                  Every Scale
                </span>
              </h2>
              <p className="text-gray-700 text-xl mt-4">
                We proudly serve a diverse range of clients across industries,
                delivering tailored solutions that drive real results. Their
                trust and success fuel our commitment to excellence.
              </p>
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-full mb-4  group">
        <div className="container mx-auto px-4">
          <div className="flex gap-4 pr-4">
            <div className="flex flex-1 gap-5">
              <div className="flex flex-1 items-center justify-center text-center bg-white rounded-[10px] md:rounded-[20px] text-white p-3 md:p-5 border border-[#eaeaea] ">
                <img  width="200"src="/vehere_logo.png" alt="logo" />
              </div>
              <div className="flex flex-1 items-center justify-center text-center bg-white rounded-[10px] md:rounded-[20px] text-white p-3 md:p-5 border border-[#eaeaea] ">
                <img  width="200"src="/unefyi_logo.png" alt="logo" />
              </div>
              <div className="flex flex-1 items-center justify-center text-center bg-white rounded-[10px] md:rounded-[20px] text-white p-3 md:p-5 border border-[#eaeaea] ">
                <img width="200" src="/tiblo_logo.png" alt="logo" />
              </div>             
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className=""
              data-scroll=""
              data-scroll-sticky=""
              data-scroll-target=".services-container"
              data-scroll-offset="0"
            >
              <div className="mb-8 lg:sticky lg:top-24 ">
                <div className="mb-4">
                  <span className="inline-block text-gray-500 uppercase text-sm font-semibold tracking-wide pl-8 relative before:content-[''] before:absolute before:h-4 before:w-4 before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-[url(/tag-star.webp)] bg-no-repeat bg-center bg-contain">
                    Services
                  </span>
                  <h2 className="text-2xl xl:text-3xl font-semibold mt-2">
                    <span className="text-gray-700">
                      GraminIO specializes in delivering cutting-edge
                      technological solutions to empower businesses and
                      communities.
                    </span>
                  </h2>
                </div>
                <div className="md:pt-12 md:pb-[200px] bg-black rounded-lg p-6 md:p-8  gap-6 bg-[url(/services-banner-bg-img.webp)] bg-cover bg-top">
                  <h4 className="inline-block px-6 py-3 border border-white rounded-md mb-8 text-lg md:text-xl font-normal text-white">
                    Are technical challenges slowing you down?
                  </h4>
                  <h3 className="text-2xl xl:text-3xl font-medium text-white leading-tight mb-8">
                    Accelerate your growth while we power your technology
                    innovation.
                  </h3>
                  <button
                    onClick={() => openModal("consultation")}
                    className="px-6 py-2 bg-yellow-600 text-white font-medium rounded-[5px] hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 flex items-center"
                    type="button"
                  >
                    <span>Book 30 Min Consultation</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-8 lg:ml-[50px]">
              <div className="flex flex-wrap items-start gap-6 cursor-pointer">
                <div className="w-12 h-12">
                  <img
                    className="w-full h-full"
                    src="/Artificial_Intelligence.webp"
                    alt="Artificial_Intelligence"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-5">
                    <h3 className="text-xl xl:text-3xl font-semibold mb-2">
                      AI Application Development
                    </h3>
                  </div>
                  <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
                    We craft cutting-edge AI solutions that automate workflows,
                    enhance insights, and accelerate business growth. Our
                    expertise spans machine learning, NLP, computer vision,
                    predictive analytics, and custom AI tailored to your
                    industry needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-start gap-6 cursor-pointer">
                <div className="w-12 h-12">
                  <img
                    className="w-full h-full"
                    src="/Gen_AI.webp"
                    alt="Gen AI"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-5  ">
                    <h3 className="text-xl xl:text-3xl font-semibold mb-2">
                      Generative AI Solutions
                    </h3>
                  </div>
                  <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
                    We harness the power of Generative AI to deliver creative,
                    intelligent, and efficient solutions. From content and code
                    generation to personalized user experiences and advanced
                    conversational AI, we help businesses innovate faster and
                    smarter.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-start gap-6 cursor-pointer">
                <div className="w-12 h-12">
                  <img
                    className="w-full h-full"
                    src="/Blockchain_icon.webp"
                    alt="Web Application Development"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-5  ">
                    <h3 className="text-xl xl:text-3xl font-semibold mb-2">
                      Web Application Development
                    </h3>
                  </div>
                  <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
                    We create high-performance, user-friendly web applications
                    using React and Python. From dynamic front-ends to robust
                    back-ends, our full-stack solutions ensure seamless
                    experiences, powerful integrations, and continuous
                    optimization.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-start gap-6 cursor-pointer">
                <div className="w-12 h-12">
                  <img
                    className="w-full h-full"
                    src="/Data_Science.webp"
                    alt="Data Science and Analytics"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-5  ">
                    <h3 className="text-xl xl:text-3xl font-semibold mb-2">
                      Data Science and Analytics
                    </h3>
                  </div>
                  <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
                    We turn complex data into actionable insights that drive
                    smarter decisions. From data preprocessing and advanced
                    analytics to real-time dashboards and custom strategies, we
                    help businesses unlock the true value of their data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-gray-500 uppercase text-sm font-semibold tracking-wide pl-8 relative before:content-[''] before:absolute before:h-4 before:w-4 before:top-1/2 before:-translate-y-1/2 before:left-0 before:bg-[url(/tag-star.webp)] bg-no-repeat bg-center bg-contain">
              Why GraminIO ?
            </span>
            <h2 className="text-2xl xl:text-3xl font-semibold mt-2">
              How We Drive Successful <br />
              Digital Transformation For You?
            </h2>
            <p className="text-gray-700 text-xl mt-4">
              We combine next-gen AI capabilities with our proven track record
              to <br /> catapult your business to new heights, offering:
            </p>
          </div>
          <div className="grid gap-8">
            <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6 xl:gap-8">
              <div className="bg-no-repeat bg-cover hover:bg-black hover:bg-image-hidden text-white group relative bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 bg-[url(https://www.code-brew.com/wp-content/themes/Avada-Child-Theme/media/2024/09/choose-bg-img_1.webp)]">
                <div>
                  <div className="w-[80px] mb-4">
                    <img
                      className="w-full h-full"
                      src="/success-icn_0.webp"
                      alt="Future-Proof  Scalability"
                    />
                  </div>
                  <h3 className="text-xl xl:text-3xl font-semibold mb-2 mb-2">
                    AI-Powered <br /> Transformation
                  </h3>
                  <p className="text-white-700 text-lg">
                    From predictive analytics to intelligent automation, we
                    deploy AI to solve complex business challenges and uncover
                    new opportunities.
                  </p>
                </div>
                {/* <div className=" invert-[1] absolute opacity-0 duration-[1000ms] group-hover:opacity-100 group-hover:visible group-hover:-rotate-45 p-2 rounded-full top-[20px] right-[20px] w-8 h-8  border border-black">
                  <img src="/single-arrow.webp" alt="Arrow" />
                </div> */}
              </div>
              <div className="bg-yellow-500 group relative   rounded-xl shadow-md p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div>
                  <div className="w-[80px] mb-4">
                    <img
                      className="w-full h-full"
                      src="/success-icn_1.webp"
                      alt="Human-Centric Approach"
                    />
                  </div>
                  <h3 className="text-xl xl:text-3xl font-semibold mb-2 mb-2 text-black">
                    Human-Centric <br /> Approach
                  </h3>
                  <p className="text-gray-700 text-lg">
                    While AI accelerates processes, our seasoned developers
                    ensure the human touch remains at the core, crafting
                    exceptional user experiences.
                  </p>
                </div>
                {/* <div className="absolute opacity-0 duration-[1000ms] group-hover:opacity-100 group-hover:visible group-hover:-rotate-45 p-2 rounded-full top-[20px] right-[20px] w-8 h-8  border border-black">
                  <img src="/single-arrow.webp" alt="Arrow" />
                </div> */}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-6 xl:gap-8">
              <div className="bg-yellow-500 group relative  rounded-xl shadow-md p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                <div>
                  <div className="w-[80px] mb-4">
                    <img
                      className="w-full h-full"
                      src="/success-icn_2.webp"
                      alt="Future-Proof Scalability"
                    />
                  </div>
                  <h3 className="text-xl xl:text-3xl font-semibold mb-2 mb-2 text-black">
                    Future-Proof <br /> Scalability
                  </h3>
                  <p className="text-gray-700 text-lg">
                    We build solutions that can adapt and grow with your
                    business.Our AI-powered architecture ensures your platforms
                    scales seamlessly to meet future needs.
                  </p>
                </div>
                {/* <div className="absolute opacity-0 duration-[1000ms] group-hover:opacity-100 group-hover:visible group-hover:-rotate-45 p-2 rounded-full top-[20px] right-[20px] w-8 h-8  border border-black">
                  <img src="/single-arrow.webp" alt="Arrow" />
                </div> */}
              </div>
              <div className="bg-no-repeat bg-cover text-white bg-white group relative  rounded-xl shadow-md p-6 md:p-8 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 bg-[url(/choose-bg-img_2.webp)]">
                <div>
                  <div className="w-[80px] mb-4">
                    <img
                      className="w-full h-full"
                      src="/success-icn_3.webp"
                      alt="Future-Proof  Scalability"
                    />
                  </div>
                  <h3 className="text-xl xl:text-3xl font-semibold mb-2 mb-2">
                    Transparent Communication <br /> &amp; Collaboration
                  </h3>
                  <p className="text-white-700 text-lg">
                    Stay informed throughout the entire development process with
                    clear timelines, regular updates, and open communication.
                  </p>
                </div>
                {/* <div className="invert-[1] absolute opacity-0 duration-[1000ms] group-hover:opacity-100 group-hover:visible group-hover:-rotate-45 p-2 rounded-full top-[20px] right-[20px] w-8 h-8  border border-black">
                  <img src="/single-arrow.webp" alt="Arrow" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-20">
        <div className="container mx-auto px-4">
          <div className="bg-black rounded-xl py-8 md:py-12 px-4 md:px-6 lg:px-8 bg-[url(/cta-illustration_1.webp)] bg-no-repeat bg-contain bg-right">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center">
              <div className="text-white mb-6 md:mb-0 lg:pl-[100px]">
                <h2 className="text-2xl xl:text-3xl font-semibold mb-8">
                  It's Time To Accelerate Your{" "}
                  <span className="text-yellow-500">
                    Digital Transformation Journey
                  </span>
                </h2>
                <button
                  onClick={() => openModal("demo")}
                  className="bg-yellow-500 text-black rounded-[5px] py-3 px-6 font-semibold text-lg shadow-md hover:bg-yellow-600 transition-colors duration-300"
                  type="button"
                >
                  <span>Let's Build Together</span>
                </button>
              </div>
              <div className="hidden md:block">
                <img
                  className="w-[400px]"
                  src="/cta-illustration.webp"
                  alt="illustration"
                />
              </div>
            </div>
          </div>
          <ContactFormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            formType={modalType}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
