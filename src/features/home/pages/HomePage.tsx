import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureServices from '../components/FeatureServices';
import SolutionsBanner from './../components/SolutionsBanner';
import FeaturePortfolio from '../components/FeaturePortfolio';
import TestimonialsSlider from '../components/testimonials/copmmponents/TestimonialsSlider';
import { Reveal } from '../../../components/ui/Reveal'; // عدل المسار حسب مكان ملف Reveal لديك

const HomePage = () => {
  return (
    <>
      <Reveal direction="up" delay={0.1}>
        <HeroSection />
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <FeatureServices />
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <FeaturePortfolio />
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <SolutionsBanner />
      </Reveal>

      <Reveal direction="up" delay={0.2}>
        <TestimonialsSlider />
      </Reveal>
    </>
  );
};

export default HomePage;