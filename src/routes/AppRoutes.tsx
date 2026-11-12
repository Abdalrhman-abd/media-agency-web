import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';

// هاد هوه تبيق التاخير على الصفحات 
const HomePage = lazy(() => import('../features/home/pages/HomePage'));
const AboutPage = lazy(() => import('../features/about/pages/AboutPage'));
const ServicesPage = lazy(() => import('../features/services/pages/ServicesPage'));
const PortfolioPage = lazy(() => import('../features/portfolio/pages/PortfolioPage'));
const ContactPage = lazy(() => import('../features/contact/pages/ContactPage'));
const BookingPage = lazy(() => import('../features/booking/pages/BookingPage'));
const NotFound = lazy(() => import('../features/NotFound/NotFound'));
const ProjectDetailsPage = lazy(() => import('../features/portfolio/ProjectDetailsPage'));
import Langbutton from "../locales/commponents/Lanbutton"
// هاد امشان التحميل 
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
  </div>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/PortfolioPage" element={<PortfolioPage />} />
          <Route path="/portfolio/:projectId" element={<ProjectDetailsPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/book-consultation" element={<BookingPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Langbutton/>
    </Suspense>
  );
};