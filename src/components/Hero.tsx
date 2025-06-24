
import React, { useState } from 'react';
import { ArrowRight, Sparkles, Globe, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  const [url, setUrl] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!url) return;
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIsGenerating(false);
      // In real app, this would trigger content generation
    }, 3000);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-8 -left-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          Free Sample Content Generator
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in">
          Turn Your Website Into a
          <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Content Powerhouse</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Get AI-powered SEO content strategies, conversion-optimized articles, and automated publishing—all tailored to your brand. Start with a free sample.
        </p>

        {/* URL Input Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 max-w-2xl mx-auto animate-scale-in">
          <div className="flex items-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-700">Enter your website URL</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              type="url"
              placeholder="https://your-website.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-12 text-lg border-2 border-gray-200 focus:border-blue-500 rounded-xl"
            />
            <Button
              onClick={handleGenerate}
              disabled={!url || isGenerating}
              className="h-12 px-8 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
            >
              {isGenerating ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Generating...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Generate Free Sample
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-3">
            No signup required • Get results in 30 seconds
          </p>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span>500+ Websites Analyzed</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>AI-Powered Content</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-purple-600" />
            <span>Brand-Aligned Results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
