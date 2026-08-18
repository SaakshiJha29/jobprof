import React from 'react';
import { 
  Zap, 
  UserPlus, 
  ArrowRight, 
  ShieldCheck, 
  Code2, 
  Terminal, 
  Sparkles, 
  ChevronRight 
} from 'lucide-react';

export default function AuthCallout({ onOpenAuth }) {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Glass Banner */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-white shadow-xl relative overflow-hidden">
          
          {/* Ambient Glow Corner */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-sky-400/20 via-sky-200/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-100 text-sky-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-sky-200">
                <Code2 className="w-4 h-4 text-sky-600" />
                <span>Developer Self-Service Portal</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4 leading-tight">
                Ready to Ingest Job Board Telemetry <br />
                <span className="gradient-heading">Without Anti-Bot Friction?</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed mb-6 max-w-2xl font-normal">
                Join thousands of software engineers using ScrapePulse to feed reliable, real-time job posting data directly into their AI vector databases and analytics pipelines.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Free 10,000 Scraped Requests
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  No Credit Card Required
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  Instant API Key Provisioning
                </span>
              </div>
            </div>

            {/* Right Interactive Join Action Badge Column */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <button
                onClick={onOpenAuth}
                className="group relative flex items-center gap-4 p-5 bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-1 transition-all duration-300 interactive text-left w-full sm:w-auto"
              >
                {/* Clickable Join Icon Badge */}
                <div className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 group-hover:scale-110 transition-transform">
                  <UserPlus className="w-7 h-7 text-white" />
                </div>

                <div className="flex flex-col pr-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-100">
                    Get Started Now
                  </span>
                  <span className="text-lg font-extrabold text-white flex items-center gap-1">
                    Launch Portal <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
