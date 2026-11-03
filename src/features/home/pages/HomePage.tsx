import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureServices from '../components/FeatureServices';
import SolutionsBanner from './../components/SolutionsBanner';
import FeaturePortfolio from '../components/FeaturePortfolio';
import TestimonialsSlider from '../components/testimonials/copmmponents/TestimonialsSlider';
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureServices />
      <FeaturePortfolio />
      <SolutionsBanner />
      <TestimonialsSlider/>
    </>
  );
};

export default HomePage;
