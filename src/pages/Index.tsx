
import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SampleOutput from '@/components/SampleOutput';
import DashboardPreview from '@/components/DashboardPreview';
import ProductRoadmap from '@/components/ProductRoadmap';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <SampleOutput />
      <DashboardPreview />
      <ProductRoadmap />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
