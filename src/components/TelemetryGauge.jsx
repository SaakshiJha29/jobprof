import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Gauge, 
  Zap, 
  Radio, 
  TrendingUp, 
  Sliders,
  Sparkles
} from 'lucide-react';

export default function TelemetryGauge() {
  const [multiplier, setMultiplier] = useState(1);
  const [currentSpeed, setCurrentSpeed] = useState(12400);

  useEffect(() => {
    const base = 12400 * multiplier;
    const interval = setInterval(() => {
      const variation = Math.floor(Math.random() * 800) - 400;
      setCurrentSpeed(base + variation);
    }, 1200);
    return () => clearInterval(interval);
  }, [multiplier]);

  // Gauge percentage calculation (max speed 150k)
  const maxSpeed = 150000;
  const percentage = Math.min(100, Math.max(0, (currentSpeed / maxSpeed) * 100));

  return (
    <section id="telemetry-gauge" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-950 border border-sky-800 text-sky-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Gauge className="w-4 h-4 text-sky-400" />
            <span>Real-Time Speedometer & Telemetry Meter</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            High-Frequency <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Ingestion Velocity</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-base sm:text-lg">
            Monitor real-time scraped request throughput, memory consumption, and TLS handshake latency under simulated high-concurrency loads.
          </p>
        </div>

        {/* Gauge Box Container */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-6 lg:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Speedometer Arc Graphic */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center p-6 bg-slate-900/80 rounded-3xl border border-slate-800">
              
              <div className="relative w-64 h-40 flex items-center justify-center">
                {/* SVG Gauge Arc */}
                <svg className="w-full h-full" viewBox="0 0 200 120">
                  {/* Outer Track */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  {/* Active Progress Arc */}
                  <path
                    d="M 20 100 A 80 80 0 0 1 180 100"
                    fill="none"
                    stroke="url(#gaugeGrad)"
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 * percentage) / 100}
                    className="transition-all duration-700 ease-out"
                  />
                  <defs>
                    <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#0ea5e9" />
                      <stop offset="50%" stopColor="#38bdf8" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Speedometer Counter Overlay */}
                <div className="absolute bottom-2 flex flex-col items-center text-center">
                  <span className="text-3xl font-extrabold font-mono text-white tracking-tight">
                    {currentSpeed.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-wider">
                    req / sec
                  </span>
                </div>
              </div>

              {/* Multiplier Toggle Buttons */}
              <div className="flex items-center gap-2 mt-4 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
                <button
                  onClick={() => setMultiplier(1)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xl transition-all ${
                    multiplier === 1 ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  1x Standard
                </button>
                <button
                  onClick={() => setMultiplier(4)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xl transition-all ${
                    multiplier === 4 ? 'bg-sky-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  4x High Concurrency
                </button>
                <button
                  onClick={() => setMultiplier(8)}
                  className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xl transition-all ${
                    multiplier === 8 ? 'bg-emerald-600 text-white shadow-sm' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  8x Enterprise Mesh
                </button>
              </div>

            </div>

            {/* Right Column: Key Performance Metrics */}
            <div className="lg:col-span-6 space-y-4 text-left font-mono">
              
              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-400 block">TLS Handshake Duration</span>
                  <strong className="text-sky-400 text-lg">12.4 ms avg</strong>
                </div>
                <span className="px-2.5 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[11px] font-bold rounded-md">
                  Optimal
                </span>
              </div>

              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-400 block">HTTP Stream Buffer</span>
                  <strong className="text-emerald-400 text-lg">99.98% Delivered</strong>
                </div>
                <span className="px-2.5 py-1 bg-sky-950 text-sky-400 border border-sky-800 text-[11px] font-bold rounded-md">
                  Zero Loss
                </span>
              </div>

              <div className="p-4 bg-slate-900 rounded-2xl border border-slate-800 flex justify-between items-center">
                <div>
                  <span className="text-xs text-slate-400 block">Memory Footprint per Node</span>
                  <strong className="text-indigo-400 text-lg">18 MB / worker</strong>
                </div>
                <span className="px-2.5 py-1 bg-indigo-950 text-indigo-400 border border-indigo-800 text-[11px] font-bold rounded-md">
                  Ultra Lightweight
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
