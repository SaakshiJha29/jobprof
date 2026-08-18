import React from 'react';
import { 
  Zap, 
  Terminal, 
  ArrowRight, 
  Sparkles, 
  Globe2, 
  Code2, 
  Cpu 
} from 'lucide-react';

export default function Hero({ onOpenAuth, onScrollToSandbox, onOpenCmdPalette }) {
  return (
    <section className="relative pt-10 pb-20 md:pt-14 md:pb-28 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-indigo-500/15 via-emerald-400/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="flex flex-col items-center text-center mb-12">
          
          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            {/* Product Hunt Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 border border-indigo-100 rounded-full shadow-2xs text-xs font-bold text-slate-800 backdrop-blur-md">
              <span className="flex items-center justify-center w-5 h-5 bg-orange-500 text-white rounded-full text-[10px] font-black">
                P
              </span>
              <span>#1 Product Hunt Ingestion Engine</span>
            </div>

            {/* Live Operational Ping Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 shadow-2xs backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span>ALL 42 NODES ONLINE</span>
            </div>
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.12] mb-6 text-slate-900">
            Enterprise Resilient <br />
            <span className="gradient-headline-cyber">Job Board Data Ingestion</span> <br />
            & Cyber Telemetry Mesh
          </h1>

          {/* Subheadline */}
          <p className="max-w-3xl text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
            Built for engineering teams scraping <strong className="text-slate-900 font-semibold">LinkedIn</strong>, <strong className="text-slate-900 font-semibold">Indeed</strong>, and <strong className="text-slate-900 font-semibold">Glassdoor</strong>. Bypasses TLS fingerprinting, IP blocks, and DOM obfuscation with guaranteed 99.98% SLA.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
            <button
              onClick={onScrollToSandbox}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 interactive"
            >
              <Terminal className="w-5 h-5" />
              <span>Launch Live Command Console</span>
              <ArrowRight className="w-5 h-5 ml-1" />
            </button>

            <button
              onClick={onOpenCmdPalette}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-slate-800 bg-white hover:bg-indigo-50/60 border border-indigo-100 rounded-2xl shadow-md hover:-translate-y-0.5 transition-all duration-200 interactive"
            >
              <Zap className="w-5 h-5 text-indigo-600" />
              <span>Quick Command Search (⌘K)</span>
            </button>
          </div>

        </div>

        {/* Hero Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <a href="#proxy-matrix" className="glass-panel rounded-3xl p-6 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100">
                <Globe2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Live 3D Mesh
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Interactive 3D Proxy Matrix</h3>
            <p className="text-xs text-slate-600">Simulate traffic loads and inspect particle packet handshakes in real time.</p>
          </a>

          <a href="#dom-parser" className="glass-panel rounded-3xl p-6 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-indigo-600 font-bold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                Schema.org AI
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">DOM Selector Auto-Parser</h3>
            <p className="text-xs text-slate-600">Converts obfuscated LinkedIn & Indeed HTML into valid Schema.org JSON.</p>
          </a>

          <a href="#sdk-playground" className="glass-panel rounded-3xl p-6 relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-indigo-600 font-bold bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                5 SDK Languages
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">Multi-Language SDK Playground</h3>
            <p className="text-xs text-slate-600">Instant code snippets in Python, Node.js, Go, Rust, and cURL.</p>
          </a>

        </div>

      </div>
    </section>
  );
}
