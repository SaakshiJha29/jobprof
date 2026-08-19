import React, { useState } from 'react';
import { 
  Globe2, 
  Activity, 
  Radio 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function EdgeMap() {
  const regions = [
    {
      id: 'us-east',
      name: 'US-East (N. Virginia)',
      lat: 38.0,
      lng: -77.0,
      x: '26%',
      y: '35%',
      nodes: 14200,
      latency: '22ms',
      successRate: '99.98%',
      status: 'Optimal',
      fingerprint: 'JA3 Chrome 122 + macOS'
    },
    {
      id: 'eu-central',
      name: 'EU-Central (Frankfurt)',
      lat: 50.1,
      lng: 8.6,
      x: '52%',
      y: '28%',
      nodes: 11800,
      latency: '34ms',
      successRate: '99.95%',
      status: 'Optimal',
      fingerprint: 'Firefox 123 + Ubuntu'
    },
    {
      id: 'ap-south',
      name: 'AP-South (Mumbai)',
      lat: 19.0,
      lng: 72.8,
      x: '71%',
      y: '48%',
      nodes: 8900,
      latency: '48ms',
      successRate: '99.91%',
      status: 'Optimal',
      fingerprint: 'Chrome Mobile + Android 14'
    },
    {
      id: 'ap-northeast',
      name: 'AP-Northeast (Tokyo)',
      lat: 35.6,
      lng: 139.6,
      x: '86%',
      y: '38%',
      nodes: 9400,
      latency: '42ms',
      successRate: '99.96%',
      status: 'Optimal',
      fingerprint: 'Safari 17 + macOS Sonoma'
    },
    {
      id: 'sa-east',
      name: 'SA-East (São Paulo)',
      lat: -23.5,
      lng: -46.6,
      x: '36%',
      y: '68%',
      nodes: 5200,
      latency: '78ms',
      successRate: '99.88%',
      status: 'Active',
      fingerprint: 'Edge 121 + Windows 11'
    }
  ];

  const [selectedRegion, setSelectedRegion] = useState(regions[0]);

  return (
    <section id="edge-map" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-950/80 border border-indigo-800 text-indigo-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Globe2 className="w-4 h-4 text-indigo-400 animate-spin-slow" />
              <span>Global Edge Proxy Visualizer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Distributed Scraping Nodes & <br />
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent">
                Low-Latency Mesh Map
              </span>
            </h2>
            <p className="max-w-2xl text-slate-400 text-base sm:text-lg">
              Over 42,000 residential proxy IPs distributed across major continental edge locations ensuring 99.98% ingestion success rates.
            </p>
          </div>
        </ScrollReveal>

        {/* Map Container */}
        <ScrollReveal delay={0.2}>
          <div className="relative rounded-3xl bg-slate-950/90 border border-slate-800 shadow-2xl overflow-hidden p-6 lg:p-8">
            
            {/* Map Controls Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1 bg-indigo-950/90 border border-indigo-800 text-indigo-400 rounded-full text-xs font-mono">
                  <Radio className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                  <span>Live Edge Routing Active</span>
                </div>
                <span className="text-xs text-slate-400 hidden sm:inline">
                  Click any node marker to view regional metrics
                </span>
              </div>

              {/* Region Switcher Pills */}
              <div className="flex flex-wrap items-center gap-1.5">
                {regions.map((reg) => (
                  <button
                    key={reg.id}
                    onClick={() => setSelectedRegion(reg)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      selectedRegion.id === reg.id
                        ? 'bg-indigo-600 text-white font-bold shadow-md shadow-indigo-500/20'
                        : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                    }`}
                  >
                    {reg.id.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Map Graphic Canvas */}
            <div className="relative w-full h-[360px] sm:h-[480px] bg-slate-950 bg-grid-matrix rounded-2xl border border-slate-800/80 overflow-hidden flex items-center justify-center">
              
              {/* World Map SVG Outline */}
              <svg
                className="absolute inset-0 w-full h-full opacity-25"
                viewBox="0 0 1000 500"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M150,120 Q200,100 280,140 Q320,180 250,260 Q180,240 140,180 Z"
                  fill="#818cf8"
                  opacity="0.3"
                />
                <path
                  d="M300,280 Q350,260 380,340 Q350,420 310,380 Z"
                  fill="#818cf8"
                  opacity="0.3"
                />
                <path
                  d="M480,100 Q560,80 620,140 Q580,220 490,180 Z"
                  fill="#818cf8"
                  opacity="0.3"
                />
                <path
                  d="M500,220 Q580,200 620,320 Q540,380 480,280 Z"
                  fill="#818cf8"
                  opacity="0.3"
                />
                <path
                  d="M680,120 Q820,100 880,200 Q820,280 720,240 Z"
                  fill="#818cf8"
                  opacity="0.3"
                />
              </svg>

              {/* Animated SVG Rays */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <path
                  d="M 260 175 Q 390 140 520 140"
                  stroke="#818cf8"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  fill="none"
                  opacity="0.6"
                  className="animate-pulse"
                />
                <path
                  d="M 260 175 Q 480 210 710 240"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  fill="none"
                  opacity="0.6"
                  className="animate-pulse"
                />
                <path
                  d="M 520 140 Q 690 160 860 190"
                  stroke="#818cf8"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                  opacity="0.5"
                />
              </svg>

              {/* Region Node Markers */}
              {regions.map((reg) => {
                const isSelected = selectedRegion.id === reg.id;
                return (
                  <div
                    key={reg.id}
                    onClick={() => setSelectedRegion(reg)}
                    style={{ left: reg.x, top: reg.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                  >
                    <span className="relative flex h-6 w-6 items-center justify-center">
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                          isSelected ? 'bg-indigo-400' : 'bg-emerald-400'
                        }`}
                      />
                      <span
                        className={`relative inline-flex rounded-full h-3 w-3 shadow-lg ${
                          isSelected
                            ? 'bg-indigo-400 ring-4 ring-indigo-500/40'
                            : 'bg-emerald-400 ring-2 ring-emerald-500/30'
                        }`}
                      />
                    </span>

                    <div
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[11px] font-mono whitespace-nowrap border transition-all ${
                        isSelected
                          ? 'bg-indigo-600 text-white border-indigo-400 shadow-lg scale-105'
                          : 'bg-slate-900/90 text-slate-300 border-slate-700 opacity-90 group-hover:opacity-100'
                      }`}
                    >
                      {reg.name.split(' ')[0]} ({reg.latency})
                    </div>
                  </div>
                );
              })}

              {/* Floating Live Telemetry Box */}
              <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-80 bg-slate-900/95 border border-indigo-500/40 rounded-2xl p-4 backdrop-blur-md shadow-2xl z-30 text-left">
                <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-indigo-400 animate-pulse" />
                    <span className="text-xs font-bold text-white font-mono">{selectedRegion.name}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 text-[10px] font-bold rounded border border-emerald-800">
                    {selectedRegion.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono mb-3">
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">P99 Latency</span>
                    <strong className="text-indigo-400 text-sm">{selectedRegion.latency}</strong>
                  </div>
                  <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Success Rate</span>
                    <strong className="text-emerald-400 text-sm">{selectedRegion.successRate}</strong>
                  </div>
                </div>

                <div className="space-y-1.5 text-[11px] font-mono text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Active Node Pool:</span>
                    <span className="text-white font-bold">{selectedRegion.nodes.toLocaleString()} IPs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">TLS Fingerprint:</span>
                    <span className="text-indigo-300 font-semibold">{selectedRegion.fingerprint}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
