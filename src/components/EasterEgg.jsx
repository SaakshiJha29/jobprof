import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Terminal, ShieldAlert, Cpu, Sparkles, X, Activity } from 'lucide-react';

export default function EasterEgg() {
  const [active, setActive] = useState(false);
  const [inputSequence, setInputSequence] = useState([]);

  // Konami Code: Up Up Down Down Left Right Left Right B A
  const konamiCode = [
    'ArrowUp', 'ArrowUp', 
    'ArrowDown', 'ArrowDown', 
    'ArrowLeft', 'ArrowRight', 
    'ArrowLeft', 'ArrowRight', 
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expectedKey = konamiCode[inputSequence.length].length === 1 
        ? konamiCode[inputSequence.length].toLowerCase() 
        : konamiCode[inputSequence.length];

      if (key === expectedKey) {
        const nextSeq = [...inputSequence, e.key];
        if (nextSeq.length === konamiCode.length) {
          // Trigger Easter Egg
          setActive(true);
          setInputSequence([]);
          confetti({
            particleCount: 120,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#0ea5e9', '#38bdf8', '#10b981', '#6366f1']
          });
        } else {
          setInputSequence(nextSeq);
        }
      } else {
        setInputSequence([]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inputSequence]);

  if (!active) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[10000] max-w-sm bg-[#090e1a] text-slate-100 border border-sky-400/80 rounded-2xl shadow-2xl p-5 backdrop-blur-xl animate-in slide-in-from-bottom duration-300 font-mono text-xs">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-sky-400 animate-pulse" />
          <span className="font-bold text-sky-300">CYBERPUNK DEBUG MODE</span>
        </div>
        <button
          onClick={() => setActive(false)}
          className="text-slate-400 hover:text-white p-1 rounded-md"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-2 mb-4 text-slate-300">
        <div className="flex justify-between">
          <span>Konami Sequence:</span>
          <span className="text-emerald-400 font-bold">UNLOCKED ✓</span>
        </div>
        <div className="flex justify-between">
          <span>TLS Fingerprint:</span>
          <span className="text-sky-400">JA3_OMNI_OVERRIDE</span>
        </div>
        <div className="flex justify-between">
          <span>Global Node Access:</span>
          <span className="text-emerald-400">GOD_MODE (0ms)</span>
        </div>
        <div className="flex justify-between">
          <span>Cluster Mesh:</span>
          <span className="text-indigo-400">42/42 Sync OK</span>
        </div>
      </div>

      <div className="p-2.5 bg-sky-950/60 border border-sky-800 rounded-xl text-[11px] text-sky-300">
        🚀 Developer Easter Egg Activated! All rate limiters bypassed for this session.
      </div>
    </div>
  );
}
