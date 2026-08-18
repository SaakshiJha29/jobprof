import React from 'react';
import { 
  Zap, 
  Terminal, 
  ShieldAlert, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Activity, 
  Layers, 
  Server, 
  Database 
} from 'lucide-react';

export default function Hero({ onOpenAuth, onScrollToSandbox }) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Radial Glow Blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-sky-400/20 via-sky-200/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Live Micro-Badge & Status Indicator Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            {/* Product Hunt Launch Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 border border-sky-200/90 rounded-full shadow-sm shadow-sky-500/10 text-xs font-bold text-slate-800 backdrop-blur-md hover:border-sky-300 transition-colors">
              <span className="flex items-center justify-center w-5 h-5 bg-orange-500 text-white rounded-full text-[10px] font-black">
                P
              </span>
              <span>#1 Product of the Day</span>
              <span className="text-slate-300">|</span>
              <span className="text-sky-600 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Product Hunt
              </span>
            </div>

            {/* Live Operational Ping Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-emerald-50/90 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>ALL SYSTEMS OPERATIONAL</span>
              <span className="text-emerald-400">·</span>
              <span className="text-emerald-700 font-medium">42 Edge Nodes Active</span>
            </div>
          </div>

          {/* Main Hero Gradient Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.15] mb-6">
            Enterprise Resilient <br />
            <span className="gradient-heading">Job Board Data Ingestion</span> <br />
            & Real-Time Telemetry
          </h1>

          {/* Sub-headline */}
          <p className="max-w-3xl text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
            Engineered for developers building high-frequency job aggregation engines. Bypasses TLS fingerprinting, IP throttling, and anti-bot blocks across <strong className="text-slate-900 font-semibold">LinkedIn</strong>, <strong className="text-slate-900 font-semibold">Indeed</strong>, and <strong className="text-slate-900 font-semibold">Glassdoor</strong> with zero downtime.
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
            <button
              onClick={onScrollToSandbox}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-700 rounded-2xl shadow-xl shadow-sky-500/25 hover:shadow-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 interactive"
            >
              <Terminal className="w-5 h-5" />
              <span>Launch Live Sandbox</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </button>

            <button
              onClick={onOpenAuth}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-slate-800 bg-white hover:bg-sky-50/60 border border-sky-200 hover:border-sky-300 rounded-2xl shadow-md shadow-slate-200/50 hover:-translate-y-0.5 transition-all duration-200 interactive"
            >
              <Zap className="w-5 h-5 text-sky-600" />
              <span>Request Developer API Key</span>
            </button>
          </div>

          {/* Key Developer Features Micro-List */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-semibold text-slate-600 mb-16 border-t border-b border-sky-100 py-4 px-6 bg-white/50 backdrop-blur-md rounded-2xl">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Stealth TLS/JA3 Rotation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Automated Job Schema Parser</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>Streaming Webhook Sinks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              <span>99.98% P99 Success Guarantee</span>
            </div>
          </div>

          {/* Real-time Telemetry Stats Cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="glass-panel p-6 rounded-2xl text-left border border-white/80 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Daily Ingested Payload</span>
                <div className="p-2 bg-sky-50 rounded-xl text-sky-600 border border-sky-100 group-hover:scale-110 transition-transform">
                  <Database className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                4.82M+
              </div>
              <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <span>↑ 18.4% from last week</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl text-left border border-white/80 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Global P99 Latency</span>
                <div className="p-2 bg-sky-50 rounded-xl text-sky-600 border border-sky-100 group-hover:scale-110 transition-transform">
                  <Activity className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                64 ms
              </div>
              <div className="text-xs text-sky-600 font-semibold flex items-center gap-1">
                <span>Ultra-fast edge dispatch</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl text-left border border-white/80 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Anti-Bot Bypass Rate</span>
                <div className="p-2 bg-sky-50 rounded-xl text-sky-600 border border-sky-100 group-hover:scale-110 transition-transform">
                  <ShieldAlert className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                99.94%
              </div>
              <div className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                <span>0 CAPTCHAs unhandled</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl text-left border border-white/80 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase text-slate-500">Residential Proxies</span>
                <div className="p-2 bg-sky-50 rounded-xl text-sky-600 border border-sky-100 group-hover:scale-110 transition-transform">
                  <Server className="w-5 h-5" />
                </div>
              </div>
              <div className="text-3xl font-extrabold text-slate-900 tracking-tight mb-1">
                12.4M
              </div>
              <div className="text-xs text-sky-600 font-semibold flex items-center gap-1">
                <span>Rotated per HTTP request</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
