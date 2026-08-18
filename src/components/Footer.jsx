import React from 'react';
import { Zap, Terminal, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ onOpenAuth }) {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800 text-left pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-9 h-9 bg-sky-500 text-white rounded-xl shadow-md">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white">
                Scrape<span className="text-sky-400">Pulse</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Enterprise-grade job board telemetry and resilient data ingestion engine designed for software developers and AI pipeline architects.
            </p>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All 42 Edge Nodes Operational (99.98% Uptime)</span>
            </div>
          </div>

          {/* Column 1 - Product */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Product</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">Interactive Sandbox</a></li>
              <li><a href="#edge-map" className="hover:text-sky-400 transition-colors">Global Edge Map</a></li>
              <li><a href="#features" className="hover:text-sky-400 transition-colors">Stealth Engine</a></li>
              <li><a href="#telemetry" className="hover:text-sky-400 transition-colors">Stream Telemetry</a></li>
              <li><a href="#pricing" className="hover:text-sky-400 transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Column 2 - Targets */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Ingestion Targets</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">LinkedIn Jobs API</a></li>
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">Indeed Search Pipeline</a></li>
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">Glassdoor Schema Sync</a></li>
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">ZipRecruiter Stream</a></li>
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">Webhook Sink Engine</a></li>
            </ul>
          </div>

          {/* Column 3 - Developers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">Developers</h4>
            <ul className="space-y-2 text-xs">
              <li><button onClick={onOpenAuth} className="hover:text-sky-400 transition-colors">API Keys & Portal</button></li>
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">Python & Node SDKs</a></li>
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">JA3 Fingerprint Guide</a></li>
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">System Status Page</a></li>
              <li><a href="#sandbox" className="hover:text-sky-400 transition-colors">Changelog v2.4</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} ScrapePulse Inc. All rights reserved. Designed for Enterprise Developers.
          </p>

          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-sky-400 transition-colors" title="GitHub">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors" title="Twitter">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors" title="LinkedIn">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

