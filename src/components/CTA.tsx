
import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const CTA = () => {
  const [email, setEmail] = useState('');

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-green-600">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your SEO Strategy?
        </h2>
        <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
          Join hundreds of SMBs already using our platform to dominate their local search results and drive more qualified leads.
        </p>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            "Free sample content for any website",
            "No credit card or signup required",
            "Results delivered in under 60 seconds"
          ].map((benefit, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-sm">
              <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
              <span className="opacity-90">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Email Signup */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
          <p className="text-sm opacity-80 mb-4">Get notified when we launch:</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
            />
            <Button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6">
              <div className="flex items-center gap-2">
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>
          </div>
        </div>

        <p className="text-sm opacity-75 mt-6">
          No spam, ever. Unsubscribe with one click.
        </p>
      </div>
    </section>
  );
};

export default CTA;
