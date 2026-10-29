import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureServices from '../components/FeatureServices';
import SolutionsBanner from './../components/SolutionsBanner';
import FeaturePortfolio from '../components/FeaturePortfolio';
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureServices />
      <FeaturePortfolio />
      <SolutionsBanner />
    </>
  );
};

export default HomePage;
