import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import Topics from '../components/sections/Topics';
import Stats from '../components/sections/Stats';
import Testimonials from '../components/sections/Testimonials';
import BlogPreview from '../components/sections/BlogPreview';
import CTA from '../components/sections/CTA';
import SectionWrapper from '../components/ui/SectionWrapper';

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionWrapper delay={0.1}><Services /></SectionWrapper>
      <SectionWrapper delay={0.2}><Topics /></SectionWrapper>
      <SectionWrapper delay={0.3}><Stats /></SectionWrapper>
      <SectionWrapper delay={0.4}><Testimonials /></SectionWrapper>
      <SectionWrapper delay={0.5}><BlogPreview /></SectionWrapper>
      <SectionWrapper delay={0.6}><CTA /></SectionWrapper>
    </div>
  );
};

export default Home;