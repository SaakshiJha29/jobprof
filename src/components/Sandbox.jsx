import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Play, 
  Copy, 
  Check, 
  Sliders, 
  RefreshCw 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Sandbox() {
  const [activeTarget, setActiveTarget] = useState('linkedin');
  const [latency, setLatency] = useState(85);
  const [copied, setCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activePreset, setActivePreset] = useState('stealth');
  const [httpStatus, setHttpStatus] = useState({ code: 200, label: '200 OK', type: 'success' });
  const [responseData, setResponseData] = useState(null);

  const generateMockPayload = (target, preset, delay) => {
    const timestamp = new Date().toISOString();
    const proxyIp = `${Math.floor(Math.random() * 200 + 15)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;

    if (target === 'linkedin') {
      return {
        telemetry: {
          session_id: "sp_lk_9924810a",
          target_platform: "LinkedIn Jobs API",
          node_region: "us-east-virginia",
          fingerprint_hash: preset === 'stealth' ? "ja3_771_cyber_indigo_v4" : "ja3_rotated_edge_401",
          proxy_ip: proxyIp,
          latency_ms: delay,
          bypass_protocol: "HTTP2_TLS_CHACHA20",
          timestamp
        },
        payload: {
          job_id: "4019283104",
          title: "Staff Backend Infrastructure Engineer",
          company: "Datastream Global Inc.",
          location: "San Francisco, CA (Hybrid)",
          posted_at: "2 hours ago",
          applicants_count: 38,
          employment_type: "Full-Time",
          salary_range: "$190,000 - $245,000 USD",
          skills_required: ["Go", "Kubernetes", "Distributed Scraping", "Kafka"],
          raw_schema: "https://schema.org/JobPosting"
        }
      };
    } else if (target === 'indeed') {
      return {
        telemetry: {
          session_id: "sp_ind_774921b",
          target_platform: "Indeed Search Pipeline",
          node_region: "eu-central-frankfurt",
          fingerprint_hash: preset === 'captcha' ? "captcha_solving_fallback_active" : "ja3_301_indeed_bypass",
          proxy_ip: proxyIp,
          latency_ms: delay,
          bypass_protocol: "CHROME_122_HEADLESS_STEALTH",
          timestamp
        },
        payload: {
          job_key: "ind_jk_99214021",
          title: "Lead Data Pipeline Architect",
          company: "Nexus AI Solutions",
          location: "Remote / New York",
          rating: 4.8,
          job_description_snippet: "Designing scalable crawling microservices handling 50M+ requests daily...",
          salary_estimated: "$175,000 - $210,000 USD",
          parsed_attributes: {
            remote_friendly: true,
            visa_sponsorship: false
          }
        }
      };
    } else {
      return {
        telemetry: {
          session_id: "sp_wh_330918x",
          target_platform: "Webhook Dispatcher",
          destination_url: "https://api.yourdomain.com/v1/jobs/stream",
          delivery_status: "DELIVERED",
          retry_attempt: 0,
          latency_ms: delay,
          timestamp
        },
        payload: {
          event_type: "job.ingested.v1",
          batch_size: 1,
          job_summary: {
            title: "Senior Distributed Systems Engineer",
            source: "LinkedIn / Indeed Combined Stream",
            ingested_at: timestamp
          }
        }
      };
    }
  };

  useEffect(() => {
    setResponseData(generateMockPayload(activeTarget, activePreset, latency));
  }, [activeTarget, activePreset, latency]);

  const handleRunRequest = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setResponseData(generateMockPayload(activeTarget, activePreset, latency));
      if (activePreset === 'ip_spike') {
        setHttpStatus({ code: 429, label: '429 Auto-Rotated', type: 'warning' });
        setTimeout(() => {
          setHttpStatus({ code: 200, label: '200 OK', type: 'success' });
        }, 1200);
      } else {
        setHttpStatus({ code: 200, label: '200 OK', type: 'success' });
      }
    }, latency + 150);
  };

  const handleCopyCode = () => {
    if (!responseData) return;
    navigator.clipboard.writeText(JSON.stringify(responseData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePresetSelect = (presetKey) => {
    setActivePreset(presetKey);
    if (presetKey === 'stealth') {
      setLatency(65);
      setHttpStatus({ code: 200, label: '200 OK', type: 'success' });
    } else if (presetKey === 'ip_spike') {
      setLatency(340);
      setHttpStatus({ code: 429, label: '429 Auto-Rotated', type: 'warning' });
    } else if (presetKey === 'captcha') {
      setLatency(520);
      setHttpStatus({ code: 200, label: '200 Bypassed', type: 'success' });
    }
  };

  const getLatencyBadge = (val) => {
    if (val < 100) {
      return {
        bg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
        text: 'Neo-Mint Speed (<100ms)'
      };
    } else if (val <= 350) {
      return {
        bg: 'bg-indigo-50 text-indigo-800 border-indigo-200',
        text: 'Standard (100–350ms)'
      };
    } else {
      return {
        bg: 'bg-amber-50 text-amber-800 border-amber-200',
        text: 'Throttled (>350ms)'
      };
    }
  };

  const badgeInfo = getLatencyBadge(latency);

  return (
    <section id="sandbox" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Terminal className="w-4 h-4 text-indigo-600" />
              <span>Interactive Telemetry Playground</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Test Ingestion & <span className="gradient-headline-cyber">Stealth Protocol</span>
            </h2>
            <p className="max-w-2xl text-base sm:text-lg text-slate-600">
              Simulate real-time scraping queries, inspect response payload structures, and test latency throttling in an isolated sandbox.
            </p>
          </div>
        </ScrollReveal>

        {/* Sandbox Card Container */}
        <ScrollReveal delay={0.2}>
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white shadow-2xl relative">
            
            {/* Top Control Header */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-indigo-100">
              
              {/* Protocol Target Switcher */}
              <div className="flex flex-wrap items-center gap-2 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/80 w-full sm:w-auto">
                <button
                  onClick={() => setActiveTarget('linkedin')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    activeTarget === 'linkedin'
                      ? 'bg-white text-indigo-700 shadow-md border border-indigo-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <span>LinkedIn Target</span>
                </button>

                <button
                  onClick={() => setActiveTarget('indeed')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    activeTarget === 'indeed'
                      ? 'bg-white text-indigo-700 shadow-md border border-indigo-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-violet-600" />
                  <span>Indeed Target</span>
                </button>

                <button
                  onClick={() => setActiveTarget('webhook')}
                  className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                    activeTarget === 'webhook'
                      ? 'bg-white text-indigo-700 shadow-md border border-indigo-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>Webhook Sink</span>
                </button>
              </div>

              {/* Presets */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Presets:</span>
                <button
                  onClick={() => handlePresetSelect('stealth')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    activePreset === 'stealth'
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  Stealth Fingerprint
                </button>
                <button
                  onClick={() => handlePresetSelect('ip_spike')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    activePreset === 'ip_spike'
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  IP Rotation Spike
                </button>
                <button
                  onClick={() => handlePresetSelect('captcha')}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                    activePreset === 'captcha'
                      ? 'bg-indigo-600 text-white border-indigo-700 shadow-2xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  CAPTCHA Fallback
                </button>
              </div>
            </div>

            {/* Interactive Slider & Run Bar */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-6 items-center">
              
              <div className="lg:col-span-8 bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-4 h-4 text-indigo-600" />
                    <span className="text-xs font-bold text-slate-800">Latency Throttling Simulation</span>
                  </div>
                  <div className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeInfo.bg}`}>
                    {latency}ms — {badgeInfo.text}
                  </div>
                </div>
                <input
                  type="range"
                  min="10"
                  max="800"
                  value={latency}
                  onChange={(e) => setLatency(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />
                <div className="flex justify-between text-[10px] text-slate-600 font-mono mt-1">
                  <span>10ms (Local Cache)</span>
                  <span>350ms (Edge Proxy)</span>
                  <span>800ms (Heuristic Solves)</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex items-center justify-end gap-3">
                <button
                  onClick={handleRunRequest}
                  disabled={isLoading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-2xl shadow-lg shadow-indigo-500/20 transition-all interactive disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-emerald-300" />
                      <span>Scraping Node...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-current text-emerald-300" />
                      <span>Run Query Simulation</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* High-Contrast Code Inspector */}
            <div className="rounded-2xl bg-[#090e1a] border border-slate-800 shadow-2xl overflow-hidden text-left">
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1424] border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    scrapepulse_telemetry_out.json
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div
                    className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold ${
                      httpStatus.type === 'success'
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        : 'bg-amber-950 text-amber-400 border border-amber-800'
                    }`}
                  >
                    HTTP Status: {httpStatus.label}
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Copy JSON</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="p-5 font-mono text-xs sm:text-sm text-indigo-300 overflow-x-auto min-h-[300px] leading-relaxed relative">
                {isLoading ? (
                  <div className="absolute inset-0 bg-[#090e1a]/90 backdrop-blur-xs flex flex-col items-center justify-center gap-3 text-indigo-400">
                    <RefreshCw className="w-8 h-8 animate-spin" />
                    <span className="text-xs font-mono text-slate-300">
                      Dispatching query through proxy mesh ({latency}ms)...
                    </span>
                  </div>
                ) : null}

                <pre className="text-indigo-200">
                  <code>{JSON.stringify(responseData, null, 2)}</code>
                </pre>
              </div>

              <div className="px-5 py-2.5 bg-[#0b1120] border-t border-slate-800 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-4">
                  <span>TLS Fingerprint: <strong className="text-emerald-400">JA3 Cyber Verified</strong></span>
                  <span>Rotation Engine: <strong className="text-indigo-400">Active</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Stream Buffer Connected</span>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
