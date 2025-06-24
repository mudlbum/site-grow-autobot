
import React from 'react';
import { Search, FileText, Zap, BarChart3, Target, Rocket } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Automated Site Audits",
      description: "Comprehensive SEO analysis identifying opportunities and technical issues affecting your rankings.",
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: Target,
      title: "Full-Funnel Content Strategy",
      description: "AI-generated content plans that guide visitors from awareness to conversion with precision.",
      color: "text-green-600 bg-green-100"
    },
    {
      icon: FileText,
      title: "Brand-Aligned Content",
      description: "High-quality articles that match your brand voice and convert visitors into customers.",
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: Zap,
      title: "Auto-Publishing",
      description: "Seamlessly publishes optimized content directly to your CMS without manual intervention.",
      color: "text-orange-600 bg-orange-100"
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description: "Real-time analytics showing how your content performs and drives business results.",
      color: "text-red-600 bg-red-100"
    },
    {
      icon: Rocket,
      title: "Growth Acceleration",
      description: "Proven strategies that help SMBs compete with larger competitors in search results.",
      color: "text-indigo-600 bg-indigo-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Dominate SEO
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our platform combines advanced AI with proven SEO strategies to deliver results that matter to your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
