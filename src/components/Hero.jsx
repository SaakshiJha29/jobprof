import React from 'react';
import { 
  Zap, 
  Terminal, 
  ArrowRight, 
  Globe2, 
  Code2, 
  Cpu 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Hero({ onOpenAuth, onScrollToSandbox, onOpenCmdPalette }) {
  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-28 overflow-hidden">
      
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-indigo-500/15 via-emerald-400/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header */}
        <div className="flex flex-col items-center text-center mb-12">
          
          {/* Status Badges */}
          <ScrollReveal direction="down" delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
              {/* Developer Platform Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/90 border border-indigo-100 rounded-full shadow-2xs text-xs font-bold text-slate-800 backdrop-blur-md">
                <span className="flex items-center justify-center w-5 h-5 bg-indigo-600 text-white rounded-full text-[10px] font-black">
                  ⚡
                </span>
                <span>Developer Telemetry Mesh v3.0</span>
              </div>

              {/* Live Operational Ping Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-bold text-emerald-800 shadow-2xs backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span>ALL 42 PROXY NODES ACTIVE</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Main Hero Headline */}
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.12] mb-6 text-slate-900">
              Resilient Job Board Data <br />
              <span className="gradient-headline-cyber">Ingestion & Telemetry</span> <br />
              Built for Developers
            </h1>
          </ScrollReveal>

          {/* Subheadline - Honest technical copy */}
          <ScrollReveal delay={0.3}>
            <p className="max-w-3xl text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-10">
              Automated proxy rotation, JA3/TLS fingerprint spoofing, and Schema.org DOM parsing for <strong className="text-slate-900 font-semibold">LinkedIn</strong> and <strong className="text-slate-900 font-semibold">Indeed</strong>. Pure technical infrastructure with zero fake numbers.
            </p>
          </ScrollReveal>

          {/* CTA Buttons */}
          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
              <button
                onClick={onScrollToSandbox}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 interactive"
              >
                <Terminal className="w-5 h-5" />
                <span>Launch Live Command Sandbox</span>
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
          </ScrollReveal>

        </div>

        {/* Hero Preview Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          <ScrollReveal delay={0.2} direction="left">
            <a href="#proxy-matrix" className="glass-panel rounded-3xl p-6 relative overflow-hidden group block">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100">
                  <Globe2 className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-mono text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  3D Node Mesh
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Interactive 3D Proxy Matrix</h3>
              <p className="text-xs text-slate-600">Simulate traffic loads and inspect particle packet handshakes in real time.</p>
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <a href="#dom-parser" className="glass-panel rounded-3xl p-6 relative overflow-hidden group block">
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
          </ScrollReveal>

          <ScrollReveal delay={0.4} direction="right">
            <a href="#sdk-playground" className="glass-panel rounded-3xl p-6 relative overflow-hidden group block">
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
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
