
import React from 'react';
import { BarChart3, FileText, Link, TrendingUp, Calendar, Globe, Target, Zap } from 'lucide-react';

const DashboardPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Your SEO Command Center
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Monitor, manage, and optimize your entire SEO strategy from one powerful dashboard.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 shadow-2xl">
          <div className="bg-white rounded-2xl p-6 h-full">
            {/* Dashboard Header */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">SEO Dashboard</h3>
                <p className="text-gray-600">Welcome back! Here's your SEO performance overview.</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">+127%</div>
                  <div className="text-sm text-gray-600">Organic Growth</div>
                </div>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: Globe, label: "Pages Indexed", value: "2,847", change: "+12%" },
                { icon: FileText, label: "Content Published", value: "156", change: "+23%" },
                { icon: Link, label: "Backlinks Built", value: "89", change: "+45%" },
                { icon: TrendingUp, label: "Avg. Position", value: "3.2", change: "+2.1" }
              ].map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <metric.icon className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-gray-600">{metric.label}</span>
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  <div className="text-sm text-green-600">{metric.change}</div>
                </div>
              ))}
            </div>

            {/* Main Content Area */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Content Pipeline */}
              <div className="lg:col-span-2 bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-orange-600" />
                  Active Content Pipeline
                </h4>
                <div className="space-y-3">
                  {[
                    { title: "Local SEO Guide for Restaurants", status: "Publishing", progress: 95 },
                    { title: "Digital Marketing Trends 2024", status: "Optimizing", progress: 78 },
                    { title: "E-commerce SEO Checklist", status: "Research", progress: 45 },
                    { title: "Content Marketing ROI Analysis", status: "Queued", progress: 15 }
                  ].map((item, index) => (
                    <div key={index} className="bg-white rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-900">{item.title}</span>
                        <span className="text-sm text-blue-600">{item.status}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-green-600" />
                  Quick Actions
                </h4>
                <div className="space-y-3">
                  {[
                    { icon: FileText, label: "Generate Content", color: "bg-blue-100 text-blue-600" },
                    { icon: BarChart3, label: "View Analytics", color: "bg-green-100 text-green-600" },
                    { icon: Link, label: "Build Backlinks", color: "bg-purple-100 text-purple-600" },
                    { icon: Calendar, label: "Schedule Posts", color: "bg-orange-100 text-orange-600" }
                  ].map((action, index) => (
                    <button key={index} className="w-full flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-sm transition-shadow">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${action.color}`}>
                        <action.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium text-gray-900">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">Ready to see your own dashboard?</p>
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-200">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
