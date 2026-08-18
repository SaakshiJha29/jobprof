import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingDown, 
  CheckCircle2, 
  Server, 
  DollarSign, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function CostCalculator({ onOpenAuth }) {
  const [dailyRequests, setDailyRequests] = useState(250000); // 250k daily
  const [targetPlatforms, setTargetPlatforms] = useState(3); // 3 platforms

  // Math estimations
  // In-house costs: 1 EC2 node per 20k requests/day ($120/mo each) + Proxy bandwidth ($3/GB) + Dev maintenance ($4,000/mo)
  const monthlyVolume = dailyRequests * 30;
  const nodesNeeded = Math.ceil(dailyRequests / 20000);
  const serverCost = nodesNeeded * 120;
  const proxyCost = Math.round((monthlyVolume * 0.05) / 1000) * 3;
  const devMaintenanceCost = 4000;
  const inHouseTotal = serverCost + proxyCost + devMaintenanceCost;

  // ScrapePulse cost: tiered usage (~ $0.00012 per req)
  const scrapePulseTotal = Math.round(monthlyVolume * 0.00011) + 149;
  const monthlySavings = Math.max(0, inHouseTotal - scrapePulseTotal);
  const percentSavings = Math.round((monthlySavings / inHouseTotal) * 100);

  return (
    <section id="cost-calculator" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-100 border border-sky-200 text-sky-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Calculator className="w-4 h-4 text-sky-600" />
            <span>Infrastructure Savings Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Calculate Your <span className="gradient-text-hero">Scraping ROI & Savings</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-slate-600">
            Compare the total cost of running in-house headless browser servers vs offloading telemetry ingestion to ScrapePulse.
          </p>
        </div>

        {/* Calculator Card Container */}
        <div className="bento-card rounded-3xl p-6 sm:p-10 border border-white shadow-xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Slider 1: Daily Requests */}
              <div className="bg-sky-50/60 p-5 rounded-2xl border border-sky-100">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Daily Ingested Job Requests
                  </label>
                  <span className="px-3 py-1 bg-white text-sky-700 font-extrabold text-sm rounded-xl border border-sky-200 font-mono shadow-xs">
                    {dailyRequests.toLocaleString()} req/day
                  </span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="2000000"
                  step="10000"
                  value={dailyRequests}
                  onChange={(e) => setDailyRequests(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-2">
                  <span>10k (Startup)</span>
                  <span>500k (Pro Aggregator)</span>
                  <span>2M (Enterprise Stream)</span>
                </div>
              </div>

              {/* Slider 2: Target Platforms */}
              <div className="bg-sky-50/60 p-5 rounded-2xl border border-sky-100">
                <div className="flex items-center justify-between mb-3">
                  <label className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    Job Platform Targets (LinkedIn, Indeed, etc.)
                  </label>
                  <span className="px-3 py-1 bg-white text-sky-700 font-extrabold text-sm rounded-xl border border-sky-200 font-mono shadow-xs">
                    {targetPlatforms} Platforms
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={targetPlatforms}
                  onChange={(e) => setTargetPlatforms(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
              </div>

              <div className="space-y-2 text-xs text-slate-600 font-medium pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Includes automatic DOM breakage maintenance & selector repairs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Zero residential proxy bandwidth markups</span>
                </div>
              </div>

            </div>

            {/* Right Column: ROI Results Display Box */}
            <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-2xl text-left relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-40 h-40 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono block mb-2">
                Estimated Monthly Savings
              </span>

              <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2 font-mono">
                ${monthlySavings.toLocaleString()} <span className="text-xs font-normal text-emerald-400">/ mo</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950 border border-emerald-800 text-emerald-400 text-xs font-bold rounded-full font-mono mb-6">
                <TrendingDown className="w-4 h-4" />
                <span>{percentSavings}% Cost Reduction</span>
              </div>

              {/* Breakdown Comparison */}
              <div className="space-y-3 pt-6 border-t border-slate-800 text-xs font-mono mb-8">
                <div className="flex justify-between">
                  <span className="text-slate-400">In-House Headless Cost:</span>
                  <span className="text-rose-400 font-bold">${inHouseTotal.toLocaleString()}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">ScrapePulse Managed Cost:</span>
                  <span className="text-sky-300 font-bold">${scrapePulseTotal.toLocaleString()}/mo</span>
                </div>
              </div>

              <button
                onClick={onOpenAuth}
                className="w-full py-3.5 px-6 font-bold text-xs text-white bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-700 rounded-2xl shadow-lg shadow-sky-500/25 transition-all interactive flex items-center justify-center gap-2"
              >
                <span>Claim API Savings Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
