import React from 'react';
import BlogHero from '../components/sections/blog/BlogHero';
import BlogPosts from '../components/sections/blog/BlogPosts';
import SectionWrapper from '../components/ui/SectionWrapper';

const Blog = () => {
  return (
    <div>
      <SectionWrapper><BlogHero /></SectionWrapper>
      <SectionWrapper delay={0.2}><BlogPosts /></SectionWrapper>
    </div>
  );
};

export default Blog;