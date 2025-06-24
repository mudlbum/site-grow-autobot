
import React from 'react';
import { Search, FileText, Zap, BarChart3, Target, Rocket, Link, RefreshCw, Globe, Camera } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Automated Site Audits",
      description: "Comprehensive SEO analysis with keyword research optimization and technical issue identification.",
      color: "text-blue-600 bg-blue-100",
      status: "live"
    },
    {
      icon: Target,
      title: "Full-Funnel Content Strategy",
      description: "AI-generated content plans that guide visitors from awareness to conversion with precision.",
      color: "text-green-600 bg-green-100",
      status: "live"
    },
    {
      icon: FileText,
      title: "Brand-Aligned Content",
      description: "High-quality articles with AI-generated images that match your brand voice and convert visitors.",
      color: "text-purple-600 bg-purple-100",
      status: "progress"
    },
    {
      icon: Zap,
      title: "Auto-Publishing to Webflow",
      description: "Seamlessly publishes optimized content directly to your Webflow CMS without manual intervention.",
      color: "text-orange-600 bg-orange-100",
      status: "progress"
    },
    {
      icon: Link,
      title: "Smart Backlinking Agent",
      description: "Automated outreach and link building strategies to boost your domain authority and rankings.",
      color: "text-red-600 bg-red-100",
      status: "planned"
    },
    {
      icon: RefreshCw,
      title: "Internal Linking Agent",
      description: "Intelligently connects your content with strategic internal links to improve site structure.",
      color: "text-indigo-600 bg-indigo-100",
      status: "planned"
    },
    {
      icon: Globe,
      title: "Landing Page Generation",
      description: "Create high-converting landing pages optimized for your target keywords and audience.",
      color: "text-teal-600 bg-teal-100",
      status: "planned"
    },
    {
      icon: BarChart3,
      title: "Advanced Reporting Suite",
      description: "Real-time analytics with GSC integration, DataforSEO insights, and weekly AI overviews.",
      color: "text-pink-600 bg-pink-100",
      status: "progress"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">Live</span>;
      case 'progress':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">In Progress</span>;
      case 'planned':
        return <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Coming Soon</span>;
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete SEO Automation Suite
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From content creation to backlinking, our AI agents handle every aspect of your SEO strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} group-hover:scale-110 transition-transform duration-200`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                {getStatusBadge(feature.status)}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
