import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureServices from '../components/FeatureServices';
import SolutionsBanner from './../components/SolutionsBanner';
import FeaturePortfolio from '../components/FeaturePortfolio';
import TestimonialsSlider from '../components/testimonials/copmmponents/TestimonialsSlider';
import { motion, useReducedMotion } from 'motion/react';
import { Reveal } from '../../../components/ui/Reveal'; // عدل المسار حسب مكان ملف Reveal لديك

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