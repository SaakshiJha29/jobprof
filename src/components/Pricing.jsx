import React, { useState } from 'react';
import { Check, Zap, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Pricing({ onOpenAuth }) {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: 'Developer Free',
      badge: 'Sandbox Mode',
      priceMonthly: '$0',
      priceAnnual: '$0',
      period: 'forever',
      description: 'Ideal for prototyping custom crawlers and testing API schemas.',
      features: [
        '10,000 Scraped Requests / mo',
        'Standard Residential Proxy Pool',
        'LinkedIn & Indeed Schema Normalizer',
        'Community Support',
        'Rate limit: 5 req/sec'
      ],
      cta: 'Start Free Sandbox',
      popular: false,
      buttonStyle: 'bg-white text-slate-800 border border-slate-300 hover:bg-indigo-50'
    },
    {
      name: 'Pro Scraper',
      badge: 'Most Popular',
      priceMonthly: '$149',
      priceAnnual: '$119',
      period: 'per month',
      description: 'Built for scaling job aggregation platforms with stealth anti-bot protection.',
      features: [
        '1,500,000 Scraped Requests / mo',
        'Stealth JA3/TLS Fingerprint Rotator',
        'LinkedIn, Indeed & Glassdoor Targets',
        'Real-time Webhook Streaming Sink',
        'Rate limit: 120 req/sec',
        '99.9% Financial SLA Guarantee',
        'Priority Discord & Email Support'
      ],
      cta: 'Launch Pro Pipeline',
      popular: true,
      buttonStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/25'
    },
    {
      name: 'Enterprise Cluster',
      badge: 'Dedicated Mesh',
      priceMonthly: '$599',
      priceAnnual: '$479',
      period: 'per month',
      description: 'Custom edge node deployments with dedicated proxy infrastructure and SOC2 compliance.',
      features: [
        'Unlimited Scraped Requests',
        'Dedicated Private Proxy Edge Nodes',
        'Custom DOM Selector Maintenance',
        'Kafka & Kinesis Direct Streams',
        'Unthrottled Parallel Concurrency',
        'Custom Legal & SOC2 Compliance',
        'Dedicated Solutions Engineer 24/7'
      ],
      cta: 'Contact Enterprise Team',
      popular: false,
      buttonStyle: 'bg-slate-900 text-white hover:bg-slate-800 shadow-md'
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Zap className="w-4 h-4 text-indigo-600" />
              <span>Transparent Developer Pricing</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Predictable Pricing for <span className="gradient-headline-cyber">Any Scale</span>
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-slate-600">
              Pay only for successful scraped payloads. Zero hidden fees or unhandled proxy overages.
            </p>

            {/* Monthly / Annual Billing Switcher */}
            <div className="mt-8 flex items-center gap-3 bg-white p-1.5 rounded-2xl border border-indigo-200 shadow-sm">
              <button
                onClick={() => setAnnual(false)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  !annual ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                  annual ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-2 py-0.5 text-[10px] font-black bg-emerald-400 text-emerald-950 rounded-md">
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <ScrollReveal key={idx} delay={0.1 * (idx + 1)}>
              <div
                className={`glass-panel rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 h-full ${
                  plan.popular
                    ? 'border-2 border-indigo-500 shadow-xl shadow-indigo-500/15 scale-105 z-10'
                    : 'border border-white/80'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-indigo-600 text-white text-xs font-extrabold uppercase tracking-widest rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    {!plan.popular && (
                      <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">
                      {annual ? plan.priceAnnual : plan.priceMonthly}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">/{plan.period}</span>
                  </div>

                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="space-y-3 mb-8 pt-6 border-t border-indigo-100/80">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenAuth}
                  className={`w-full py-3.5 px-6 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition-all interactive ${plan.buttonStyle}`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
