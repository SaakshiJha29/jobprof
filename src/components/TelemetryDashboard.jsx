import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Database, 
  Radio, 
  Terminal, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Server, 
  Filter 
} from 'lucide-react';

export default function TelemetryDashboard() {
  const [feedItems, setFeedItems] = useState([
    { id: 101, source: 'LinkedIn', title: 'Senior AI Research Engineer', location: 'San Francisco, CA', latency: '42ms', status: 'INGESTED', time: 'Just now' },
    { id: 102, source: 'Indeed', title: 'Fullstack React Developer', location: 'Austin, TX', latency: '68ms', status: 'INGESTED', time: '2s ago' },
    { id: 103, source: 'LinkedIn', title: 'Principal Data Engineer', location: 'Remote', latency: '54ms', status: 'INGESTED', time: '5s ago' },
    { id: 104, source: 'Glassdoor', title: 'DevOps & Site Reliability Lead', location: 'New York, NY', latency: '89ms', status: 'INGESTED', time: '8s ago' },
  ]);

  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const interval = setInterval(() => {
      const titles = [
        'Backend Go Engineer',
        'Machine Learning Pipeline Architect',
        'Staff Infrastructure Specialist',
        'Lead Product Designer',
        'Security Operations Analyst',
        'Distributed Systems Core Engineer'
      ];
      const locations = ['San Francisco, CA', 'Remote / USA', 'Seattle, WA', 'London, UK', 'New York, NY', 'Berlin, DE'];
      const sources = ['LinkedIn', 'Indeed', 'Glassdoor'];

      const newItem = {
        id: Date.now(),
        source: sources[Math.floor(Math.random() * sources.length)],
        title: titles[Math.floor(Math.random() * titles.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        latency: `${Math.floor(Math.random() * 50 + 30)}ms`,
        status: 'INGESTED',
        time: 'Just now'
      };

      setFeedItems((prev) => [newItem, ...prev.slice(0, 5)]);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const filteredFeed = activeTab === 'all' 
    ? feedItems 
    : feedItems.filter(item => item.source.toLowerCase() === activeTab);

  return (
    <section id="telemetry" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-950/90 border border-sky-800 text-sky-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Live Stream Telemetry Console</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Real-Time Scraped <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">Job Stream Feed</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-base sm:text-lg">
            Monitor real-time payload ingestion metrics across global targets with low-latency WebSocket & Webhook streaming.
          </p>
        </div>

        {/* Dashboard Box */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-8">
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-sm font-mono font-bold text-white">Stream Pipeline: Active</span>
              <span className="text-xs text-slate-500 font-mono">| 4,280 msgs/sec</span>
            </div>

            {/* Filter Switcher */}
            <div className="flex items-center gap-1.5 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                  activeTab === 'all' ? 'bg-sky-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                All Sources
              </button>
              <button
                onClick={() => setActiveTab('linkedin')}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                  activeTab === 'linkedin' ? 'bg-sky-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                LinkedIn
              </button>
              <button
                onClick={() => setActiveTab('indeed')}
                className={`px-3 py-1 text-xs font-mono rounded-lg transition-colors ${
                  activeTab === 'indeed' ? 'bg-sky-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Indeed
              </button>
            </div>
          </div>

          {/* Live Ingestion Stream List */}
          <div className="mt-6 space-y-3 font-mono">
            {filteredFeed.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-slate-900/90 border border-slate-800/80 rounded-2xl hover:border-sky-500/50 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-0">
                  <span
                    className={`px-2.5 py-1 text-[11px] font-bold rounded-md border ${
                      item.source === 'LinkedIn'
                        ? 'bg-blue-950 text-blue-400 border-blue-800'
                        : item.source === 'Indeed'
                        ? 'bg-indigo-950 text-indigo-400 border-indigo-800'
                        : 'bg-emerald-950 text-emerald-400 border-emerald-800'
                    }`}
                  >
                    {item.source}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold text-white">{item.title}</span>
                    <span className="text-xs text-slate-400">{item.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs">
                  <span className="text-slate-400 font-mono">Latency: <strong className="text-sky-400">{item.latency}</strong></span>
                  <span className="px-2.5 py-1 bg-emerald-950/80 text-emerald-400 rounded-md border border-emerald-800 text-[11px] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item.status}
                  </span>
                  <span className="text-slate-500 text-[11px]">{item.time}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
