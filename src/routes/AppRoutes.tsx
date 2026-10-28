import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../features/home/pages/HomePage';
import AboutPage from '../features/about/pages/AboutPage';
import ServicesPage from '../features/services/pages/ServicesPage';
import PortfolioPage from '../features/portfolio/pages/PortfolioPage';
import ContactPage from '../features/contact/pages/ContactPage';
import BookingPage from '../features/booking/pages/BookingPage';
import NotFound from '../features/NotFound/NotFound';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/PortfolioPage" element={<PortfolioPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
        <Route path="/book-consultation" element={<BookingPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
