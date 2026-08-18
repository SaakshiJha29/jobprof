import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Cpu, Terminal, Zap } from 'lucide-react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  const statusMessages = [
    { text: "Spinning up headless residential proxies...", icon: Cpu },
    { text: "Bypassing Cloudflare & Akamai turnstiles...", icon: ShieldCheck },
    { text: "Calibrating stealth TLS fingerprint hooks...", icon: Terminal },
    { text: "Connecting telemetry engine to global edge...", icon: Activity },
    { text: "ScrapePulse operational. Ready!", icon: Zap }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onComplete) onComplete();
            }, 600);
          }, 300);
          return 100;
        }

        const next = prev + Math.floor(Math.random() * 12) + 6;
        const bounded = next > 100 ? 100 : next;

        // Step status message according to progress threshold
        if (bounded > 80) setStatusIndex(4);
        else if (bounded > 60) setStatusIndex(3);
        else if (bounded > 40) setStatusIndex(2);
        else if (bounded > 20) setStatusIndex(1);

        return bounded;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  const CurrentIcon = statusMessages[statusIndex].icon;

  return (
    <div
      className={`fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-50/98 backdrop-blur-2xl transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Ambient background glow */}
      <div className="absolute w-96 h-96 bg-sky-400/20 rounded-full blur-3xl animate-pulse-glow" />

      <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
        {/* Animated Brand Logo Icon */}
        <div className="relative mb-8 group">
          <div className="absolute -inset-3 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur-md opacity-60 animate-pulse" />
          <div className="relative flex items-center justify-center w-20 h-20 bg-white border border-sky-200 rounded-2xl shadow-xl shadow-sky-500/10">
            <Zap className="w-10 h-10 text-sky-600 animate-bounce" />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">
          Scrape<span className="text-sky-600">Pulse</span>
        </h1>
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-600 mb-8">
          Enterprise Telemetry Engine
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-slate-200/80 rounded-full h-3 p-0.5 mb-6 shadow-inner border border-slate-300/50">
          <div
            className="bg-gradient-to-r from-sky-500 via-sky-400 to-blue-600 h-full rounded-full transition-all duration-300 ease-out shadow-sm shadow-sky-500/40 relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-md animate-ping" />
          </div>
        </div>

        {/* Progress Counter & Status Text */}
        <div className="flex items-center justify-between w-full text-xs text-slate-500 font-mono mb-4">
          <span className="flex items-center gap-1.5 text-slate-700 font-medium">
            <CurrentIcon className="w-4 h-4 text-sky-600 animate-spin-slow" />
            {statusMessages[statusIndex].text}
          </span>
          <span className="font-bold text-sky-700 bg-sky-100/80 px-2 py-0.5 rounded-md border border-sky-200">
            {progress}%
          </span>
        </div>

        {/* Micro System Pill */}
        <div className="flex items-center gap-2 px-3 py-1 bg-white/80 border border-sky-200 rounded-full text-[11px] text-slate-600 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Global Proxy Nodes: <span className="font-semibold text-slate-900">Online</span>
        </div>
      </div>
    </div>
  );
}
