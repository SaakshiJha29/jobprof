import React from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  Zap, 
  Terminal, 
  RefreshCw, 
  Layers, 
  Database, 
  Globe2, 
  Lock, 
  Sparkles 
} from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: ShieldCheck,
      title: 'Stealth TLS/JA3 Fingerprinting',
      description: 'Bypasses Cloudflare, Akamai Bot Manager, and Datadome by emulating real Chrome, Safari, and Firefox TLS handshakes.'
    },
    {
      icon: Database,
      title: 'Automated Job Schema Normalizer',
      description: 'Normalizes unstructured LinkedIn and Indeed DOM structures into unified, clean JSON schemas following standard Schema.org specs.'
    },
    {
      icon: Zap,
      title: 'Real-Time Webhook Streaming',
      description: 'Stream ingested job posts directly into your Kafka, RabbitMQ, or PostgreSQL database with zero polling overhead.'
    },
    {
      icon: RefreshCw,
      title: 'Zero-Log Proxy Rotation',
      description: 'Every request is routed through a fresh residential proxy IP with automatic retry fallbacks on 429 or 503 rate limits.'
    },
    {
      icon: Layers,
      title: 'Headless DOM Execution',
      description: 'Renders dynamic JavaScript job boards with fully automated interaction hooks for infinite scroll pagination.'
    },
    {
      icon: Lock,
      title: 'Enterprise SOC2 & SLA Compliance',
      description: 'Guaranteed 99.98% pipeline uptime backed by financial SLAs and enterprise encryption in transit and at rest.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-100/80 border border-sky-200 text-sky-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Cpu className="w-4 h-4 text-sky-600" />
            <span>Developer-First Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Engineered for <span className="gradient-heading">Unstoppable Scraping</span>
          </h2>
          <p className="max-w-2xl text-base sm:text-lg text-slate-600">
            Stop wasting engineering hours updating broken DOM selectors. ScrapePulse maintains resilient pipelines so your team can focus on data insights.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-8 rounded-3xl border border-white relative group overflow-hidden"
              >
                {/* Decorative glow corner */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-sky-200/40 to-transparent rounded-bl-full pointer-events-none group-hover:scale-110 transition-transform duration-300" />

                {/* Icon Container */}
                <div className="flex items-center justify-center w-12 h-12 bg-sky-100/80 text-sky-600 rounded-2xl mb-6 border border-sky-200/80 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {feat.description}
                </p>

                {/* Micro Link */}
                <div className="mt-6 pt-4 border-t border-sky-100/60 flex items-center justify-between text-xs font-bold text-sky-700 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>Explore Technical Doc</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
