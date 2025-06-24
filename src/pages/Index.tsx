
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SampleOutput from '@/components/SampleOutput';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <SampleOutput />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
