import React from 'react';
import AboutHero from '../components/sections/about/AboutHero';
import AboutMission from '../components/sections/about/AboutMission';
import SectionWrapper from '../components/ui/SectionWrapper';

const About = () => {
  return (
    <div className="pt-20">
      <SectionWrapper><AboutHero /></SectionWrapper>
      <SectionWrapper delay={0.2}><AboutMission /></SectionWrapper>
    </div>
  );
};

export default About;