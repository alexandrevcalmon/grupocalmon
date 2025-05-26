import React from 'react';
import TeamHero from '../components/sections/team/TeamHero';
import TeamMembers from '../components/sections/team/TeamMembers';
import SectionWrapper from '../components/ui/SectionWrapper';

const Team = () => {
  return (
    <div>
      <SectionWrapper><TeamHero /></SectionWrapper>
      <SectionWrapper delay={0.2}><TeamMembers /></SectionWrapper>
    </div>
  );
};

export default Team;