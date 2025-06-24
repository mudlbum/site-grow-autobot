
import React from 'react';
import { CheckCircle, Clock, Calendar, ArrowRight } from 'lucide-react';

const ProductRoadmap = () => {
  const roadmapItems = [
    {
      quarter: "Q1 2024",
      status: "completed",
      items: [
        "Onboarding Guide & User Flow",
        "Basic Content Generation",
        "Website Analysis Engine"
      ]
    },
    {
      quarter: "Q2 2024",
      status: "current",
      items: [
        "Airtable UI/Interface Integration",
        "Auto Publishing on Webflow",
        "Image Generation for Blogs",
        "Advanced Reporting with GSC & DataforSEO"
      ]
    },
    {
      quarter: "Q3 2024",
      status: "upcoming",
      items: [
        "Keyword Research Optimization Engine",
        "MCP (Model Context Protocol) Integration",
        "Content Refresh Interface",
        "Backlinking Agent with Outreach Automation"
      ]
    },
    {
      quarter: "Q4 2024",
      status: "planned",
      items: [
        "Internal Linking Agent",
        "Landing Page Generation Suite",
        "Advanced Analytics Dashboard",
        "Multi-CMS Integration (WordPress, Shopify)"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'current':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <Calendar className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'current':
        return 'border-blue-200 bg-blue-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Product Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what we're building next. Our AI agents are constantly evolving to provide better SEO automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl border-2 ${getStatusColor(item.status)} transition-all duration-300 hover:shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                {getStatusIcon(item.status)}
                <h3 className="text-lg font-semibold text-gray-900">{item.quarter}</h3>
              </div>
              
              <ul className="space-y-2">
                {item.items.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <ArrowRight className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Have a feature request or want to influence our roadmap?</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Share Your Feedback
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductRoadmap;
