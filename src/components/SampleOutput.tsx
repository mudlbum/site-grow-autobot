
import React from 'react';
import { FileText, Clock, Eye, TrendingUp } from 'lucide-react';

const SampleOutput = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See What You'll Get
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here's a sample of the high-quality, SEO-optimized content our AI generates for businesses like yours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Sample Content Preview */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
              <span className="font-semibold text-gray-700">Generated Article Preview</span>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                "5 Essential Digital Marketing Strategies That Drive Results for Local Businesses"
              </h3>
              
              <div className="flex items-center gap-4 text-sm text-gray-600">
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
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  In today's competitive digital landscape, local businesses need more than just a website to succeed. They need a comprehensive digital marketing strategy that not only attracts customers but converts them into loyal advocates for their brand.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This guide reveals five proven strategies that have helped hundreds of local businesses increase their online visibility, generate quality leads, and boost revenue by an average of 40% within the first six months...
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                  <p className="text-blue-800 font-medium">
                    💡 Pro Tip: The most successful local businesses focus on building relationships, not just rankings. Our AI ensures every piece of content serves both SEO and customer connection goals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Every Article Includes:
            </h3>
            
            {[
              {
                title: "SEO-Optimized Headlines",
                description: "Crafted to rank high while compelling readers to click and engage."
              },
              {
                title: "Keyword Research Integration",
                description: "Strategic placement of high-value keywords your audience actually searches for."
              },
              {
                title: "Conversion-Focused CTAs",
                description: "Natural calls-to-action that guide readers toward your business goals."
              },
              {
                title: "Brand Voice Alignment",
                description: "Content that sounds authentically like your brand, not generic AI writing."
              },
              {
                title: "Performance Tracking",
                description: "Built-in analytics to measure engagement, rankings, and conversions."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleOutput;
