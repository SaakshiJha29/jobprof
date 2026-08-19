import React from 'react';
import { 
  ShieldCheck, 
  Zap, 
  RefreshCw, 
  Database, 
  Lock, 
  Sparkles 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function BentoFeatures() {
  return (
    <section id="bento-features" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span>Next-Gen Bento Grid Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Unrivaled <span className="gradient-headline-cyber">Anti-Bot Stealth Capabilities</span>
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-slate-600">
              Purpose-built components designed to bypass Cloudflare Turnstile, Datadome, Akamai Bot Manager, and Incapsula natively.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Card 1: Large Span Featured Box */}
          <ScrollReveal className="md:col-span-2 lg:col-span-2" delay={0.1}>
            <div className="glass-panel rounded-3xl p-8 flex flex-col justify-between text-left relative overflow-hidden group h-full">
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-indigo-300/30 to-transparent rounded-bl-full pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/25">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
                    Stealth Protocol v4.2
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-slate-900 mb-3 tracking-tight">
                  JA3/TLS Cipher Fingerprint Emulation
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  Replicates precise browser-level TLS handshake signatures (CHACHA20_POLY1305, AES_128_GCM) matching Chrome 122 and Safari 17 on real hardware.
                </p>
              </div>

              <div className="bg-slate-900 text-indigo-300 p-4 rounded-2xl font-mono text-xs border border-slate-800 flex items-center justify-between">
                <span>JA3 Signature: <strong className="text-emerald-400">771,4865-4866-4867...</strong></span>
                <span className="text-emerald-400 font-bold">BYPASS 100%</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Zero Log Residential Rotation */}
          <ScrollReveal delay={0.2}>
            <div className="glass-panel rounded-3xl p-6 flex flex-col justify-between text-left relative overflow-hidden group h-full">
              <div>
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 border border-indigo-100">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Zero-Log IP Rotation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rotates through 42M+ residential IPs per HTTP request with automatic 429 & 503 retry fallbacks.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Nodes: <strong className="text-slate-900">42,800 Active</strong></span>
                <span className="text-indigo-600 font-bold">Auto-Failover</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Automated Schema Normalizer */}
          <ScrollReveal delay={0.3}>
            <div className="glass-panel rounded-3xl p-6 flex flex-col justify-between text-left relative overflow-hidden group h-full">
              <div>
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 border border-indigo-100">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Schema.org Parser</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Normalizes raw LinkedIn and Indeed HTML elements into uniform JSON structure.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Format: <strong className="text-slate-900">Valid JSON-LD</strong></span>
                <span className="text-emerald-600 font-bold">Normalized</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: Streaming Webhook Sinks */}
          <ScrollReveal delay={0.4}>
            <div className="glass-panel rounded-3xl p-6 flex flex-col justify-between text-left relative overflow-hidden group h-full">
              <div>
                <div className="w-10 h-10 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 border border-indigo-100">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Streaming Webhook Sinks</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Push scraped job payloads directly into Kafka, S3, or PostgreSQL in real time.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Latency: <strong className="text-slate-900">&lt; 15ms Push</strong></span>
                <span className="text-indigo-600 font-bold">Stream Sink</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5: Financial SLA Guarantee */}
          <ScrollReveal className="md:col-span-2 lg:col-span-3" delay={0.5}>
            <div className="glass-panel rounded-3xl p-6 flex flex-col sm:flex-row items-center justify-between text-left relative overflow-hidden">
              <div className="space-y-2 mb-4 sm:mb-0">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">Enterprise SOC2 & Financial SLA</span>
                </div>
                <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">
                  Guaranteed 99.98% Data Delivery SLA
                </h4>
                <p className="text-xs text-slate-600 max-w-xl">
                  If our proxy nodes fail to ingest your target job board payloads due to anti-bot updates, you get automatic SLA service credits.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <div className="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-800 font-mono text-xs font-extrabold rounded-2xl">
                  99.98% Uptime SLA
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
