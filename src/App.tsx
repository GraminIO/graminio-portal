import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

// Page components
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import EmbracingTheFutureWithAI from "./pages/Blogs/EmbracingtheFuturewithAI";
import AITrendsFor2025 from "./pages/Blogs/AITrendsfor2025";
import FutureOfComputerVision from "./pages/Blogs/FutureOfComputerVision.tsx";
import LargeLanguageModels from "./pages/Blogs/LargeLanguageModels";

import GetStartedPage from "./pages/GetStartedPage";
import AILanguageSolutions from "./pages/AILanguageSolutions/RealTimeTranslation";
import SoftwareDevelopmentPage from "./pages/CustomSoftwareDevelopement/CustomSoftwareDevelopement";
import MultiPlatformAccessibility from "./pages/AILanguageSolutions/MultiPlatformAccessibility";
import LanguageLearningSupport from "./pages/AILanguageSolutions/LanguageLearningSupport";
import VoiceAndTextMessaging from "./pages/AILanguageSolutions/VoiceAndTextMessaging";
import AIDocumentSolutions from "./pages/AIDocumentSolutions/DocumentAnalysis";
import AutomatedSummarization from "./pages/AIDocumentSolutions/AutomatedSummarization";
import QuestionAnswerCapabilities from "./pages/AIDocumentSolutions/QuestionAnswerCapabilities";
import DataExtractionAndOrganization from "./pages/AIDocumentSolutions/DataExtractionAndOrganization";
import ProductDevelopment from "./pages/CustomSoftwareDevelopement/ProductDevelopment";
import Microservices from "./pages/CustomSoftwareDevelopement/Microservices";
import ERPCRMSolutions from "./pages/CustomSoftwareDevelopement/ErpAndCrm";
import MobileDevelopment from "./pages/CustomSoftwareDevelopement/MobileDevelopment";
import Chatbots from "./pages/AIDrivenCustomerSupportSolutions/Chatbots";
import SentimentAnalysis from "./pages/AIDrivenCustomerSupportSolutions/SentimentAnalysis";
import PersonalizedRecommendations from "./pages/AIDrivenCustomerSupportSolutions/PersonalizedRecommendations";

// Styles
import "@fortawesome/fontawesome-free/css/all.min.css";
import "remixicon/fonts/remixicon.css";
import PredictiveAnalysis from "./pages/DataScienceAndBigData/PredictiveAnalysis";
import DataVisualization from "./pages/DataScienceAndBigData/DataVisualization";
import DataIntegrationServices from "./pages/DataScienceAndBigData/DataIntigrationServices";
import "./css/Blog.css";
import ScrollToTop from "./components/ScrollToTop";
//import ChatBot from "./pages/ChatBot";

// Route config array
const routes = [
  { path: "/", component: <Home /> },
  { path: "/about", component: <About /> },
  { path: "/blog", component: <Blog /> },
  { path: "/contact", component: <GetStartedPage /> },
  { path: "/real-time-language-solutions", component: <AILanguageSolutions /> },
  {
    path: "/custom-software-development",
    component: <SoftwareDevelopmentPage />,
  },
  {
    path: "/multi-platform-accessibility",
    component: <MultiPlatformAccessibility />,
  },
  {
    path: "/language-learning-support",
    component: <LanguageLearningSupport />,
  },
  { path: "/voice-and-text-messaging", component: <VoiceAndTextMessaging /> },
  { path: "/ai-document-solutions", component: <AIDocumentSolutions /> },
  { path: "/automated-summarization", component: <AutomatedSummarization /> },
  {
    path: "/question-answer-capabilities",
    component: <QuestionAnswerCapabilities />,
  },
  { path: "/data-extraction", component: <DataExtractionAndOrganization /> },
  { path: "/product-development", component: <ProductDevelopment /> },
  { path: "/microservices", component: <Microservices /> },
  { path: "/erp-crm", component: <ERPCRMSolutions /> },
  { path: "/mobile-app-development", component: <MobileDevelopment /> },
  { path: "/predictive-analysis", component: <PredictiveAnalysis /> },
  { path: "/data-visualization", component: <DataVisualization /> },
  {
    path: "/data-integration-services",
    component: <DataIntegrationServices />,
  },
  { path: "/chatbots", component: <Chatbots /> },
  { path: "/sentiment-analysis", component: <SentimentAnalysis /> },
  {
    path: "/personalized-recommendations",
    component: <PersonalizedRecommendations />,
  },
  {
    path: "/blog/embracing-the-future-with-ai",
    component: <EmbracingTheFutureWithAI />,
  },
  { path: "/blog/ai-trends-for-2025", component: <AITrendsFor2025 /> },
  {
    path: "/blog/future-of-computer-vision",
    component: <FutureOfComputerVision />,
  },
  { path: "/blog/large-language-models", component: <LargeLanguageModels /> },
];

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {routes.map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={<Layout>{component}</Layout>}
          />
        ))}
      </Routes>
      {/* <ChatBot /> */}
    </Router>
  );
};

export default App;
