import React from 'react';
import ServicesHero from '../components/sections/services/ServicesHero';
import ServicesList from '../components/sections/services/ServicesList';
import ServicesCTA from '../components/sections/services/ServicesCTA';
import SectionWrapper from '../components/ui/SectionWrapper';

const Services = () => {
  return (
    <div>
      <SectionWrapper><ServicesHero /></SectionWrapper>
      <SectionWrapper delay={0.2}><ServicesList /></SectionWrapper>
      <SectionWrapper delay={0.4}><ServicesCTA /></SectionWrapper>
    </div>
  );
};

export default Services;