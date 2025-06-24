
import React from 'react';
import { FileText, Clock, Eye, TrendingUp, Link, Image, BarChart3, Target } from 'lucide-react';

const SampleOutput = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Content Generation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our AI agents create comprehensive, SEO-optimized content with automated backlinking and performance tracking.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Enhanced Sample Content Preview */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-700">AI-Generated Article</span>
              <div className="ml-auto flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-600">Auto-Publishing</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                "5 Essential Digital Marketing Strategies That Drive Results for Local Businesses"
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-600 flex-wrap">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>SEO Score: 94/100</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>High Conversion Potential</span>
                </div>
                <div className="flex items-center gap-1">
                  <Link className="w-4 h-4" />
                  <span>12 Backlinks Identified</span>
                </div>
              </div>
              
              {/* AI Generated Image Preview */}
              <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-lg p-6 border-2 border-dashed border-blue-300">
                <div className="flex items-center gap-2 mb-2">
                  <Image className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-medium text-blue-800">AI-Generated Featured Image</span>
                </div>
                <div className="text-sm text-blue-700">
                  Custom image created to match your brand style and article topic
                </div>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  In today's competitive digital landscape, local businesses need more than just a website to succeed. They need a comprehensive digital marketing strategy that not only attracts customers but converts them into loyal advocates for their brand.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This guide reveals five proven strategies that have helped hundreds of local businesses increase their online visibility, generate quality leads, and boost revenue by an average of 40% within the first six months...
                </p>
                
                {/* Internal Linking Preview */}
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <div className="flex items-center gap-2 mb-2">
                    <Link className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-yellow-800">Smart Internal Links Added</span>
                  </div>
                  <p className="text-yellow-800 text-sm">
                    3 strategic internal links automatically inserted to boost page authority and user engagement.
                  </p>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mt-4">
                  <p className="text-blue-800 font-medium">
                    💡 Pro Tip: The most successful local businesses focus on building relationships, not just rankings. Our AI ensures every piece of content serves both SEO and customer connection goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Benefits List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Complete SEO Automation Includes:
            </h3>
            
            {[
              {
                icon: Target,
                title: "Keyword Research & Optimization",
                description: "AI-powered keyword analysis with search volume, competition, and opportunity scoring."
              },
              {
                icon: FileText,
                title: "Brand-Aligned Content Creation",
                description: "Articles that sound authentically like your brand with conversion-focused CTAs."
              },
              {
                icon: Image,
                title: "Custom Image Generation",
                description: "AI-created visuals that perfectly match your content and brand aesthetic."
              },
              {
                icon: Link,
                title: "Automated Backlinking Strategy",
                description: "Intelligent outreach campaigns and link-building opportunities identification."
              },
              {
                icon: BarChart3,
                title: "Advanced Performance Tracking",
                description: "GSC integration, DataforSEO insights, and weekly AI-powered reports."
              },
              {
                icon: TrendingUp,
                title: "Content Refresh Automation",
                description: "Keeps your content fresh and up-to-date with trending topics and SEO changes."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-100 to-green-100 text-blue-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Ready to automate your SEO?</h4>
              <p className="text-gray-600 text-sm mb-4">Start with a free content sample and see the difference AI-powered SEO can make.</p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-all duration-200">
                Generate Free Sample Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleOutput;
