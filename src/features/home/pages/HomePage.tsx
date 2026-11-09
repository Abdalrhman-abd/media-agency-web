import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureServices from '../components/FeatureServices';
import SolutionsBanner from './../components/SolutionsBanner';
import FeaturePortfolio from '../components/FeaturePortfolio';
import TestimonialsSlider from '../components/testimonials/copmmponents/TestimonialsSlider';
import { motion, useReducedMotion } from 'motion/react';

const HomePage = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <>

      <motion.div
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: 5 }
        }
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.5,
           ease: 'easeOut',
        }}
      >


        <HeroSection />
        <FeatureServices />
        <FeaturePortfolio />
        <SolutionsBanner />
        <TestimonialsSlider />
      </motion.div>
    </>
  );
};

export default HomePage;
