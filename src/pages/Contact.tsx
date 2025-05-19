import React from 'react';
import ContactHero from '../components/sections/contact/ContactHero';
import ContactForm from '../components/sections/contact/ContactForm';
import SectionWrapper from '../components/ui/SectionWrapper';

const Contact = () => {
  return (
    <div className="pt-20">
      <SectionWrapper><ContactHero /></SectionWrapper>
      <SectionWrapper delay={0.2}><ContactForm /></SectionWrapper>
    </div>
  );
};

export default Contact;