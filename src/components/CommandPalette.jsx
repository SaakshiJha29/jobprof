import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Terminal, 
  Globe2, 
  Code2, 
  Calculator, 
  Zap, 
  X, 
  Cpu, 
  Key, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onOpenAuth, onNavigate }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open palette
          if (onNavigate) onNavigate('#command-palette');
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen) return null;

  const commands = [
    { id: 'sandbox', label: 'Interactive Sandbox & Code Inspector', icon: Terminal, section: '#sandbox' },
    { id: 'proxy-matrix', label: '3D Live Proxy Node Matrix & Traffic Simulator', icon: Globe2, section: '#proxy-matrix' },
    { id: 'dom-parser', label: 'Live DOM Selector & AI Schema.org Parser', icon: Code2, section: '#dom-parser' },
    { id: 'sdk', label: 'Multi-Language SDK & API Code Generator (Python, Node, Go)', icon: Cpu, section: '#sdk-playground' },
    { id: 'cost-calc', label: 'ROI Scraping Cost Calculator & Savings Estimator', icon: Calculator, section: '#cost-calculator' },
    { id: 'pricing', label: 'Developer Pricing & Tier Plans', icon: Zap, section: '#pricing' },
    { id: 'auth', label: 'Get Free API Session Key', icon: Key, action: () => { onClose(); onOpenAuth(); } }
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd) => {
    onClose();
    if (cmd.action) {
      cmd.action();
    } else if (cmd.section && onNavigate) {
      onNavigate(cmd.section);
    }
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[10000] flex items-start justify-center pt-20 p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-sky-200 overflow-hidden text-left"
      >

        
        {/* Search Header Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100">
          <Search className="w-5 h-5 text-sky-600 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search feature... (e.g. SDK, Proxy, DOM)"
            className="w-full text-sm font-medium text-slate-900 placeholder:text-slate-400 outline-none bg-transparent"
          />
          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono text-slate-500 bg-slate-100 border border-slate-200 rounded-md">
            ESC
          </kbd>
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Command List */}
        <div className="max-h-80 overflow-y-auto p-3 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500 font-mono">
              No matching commands found. Try searching "proxy" or "SDK".
            </div>
          ) : (
            filteredCommands.map((cmd) => {
              const IconComp = cmd.icon;
              return (
                <button
                  key={cmd.id}
                  onClick={() => handleSelect(cmd)}
                  className="w-full flex items-center justify-between p-3 rounded-2xl text-left hover:bg-sky-50 transition-colors group interactive"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-slate-100 text-slate-700 rounded-xl group-hover:bg-sky-500 group-hover:text-white transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-sky-900">
                      {cmd.label}
                    </span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-5 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Tip: Press <kbd className="px-1.5 py-0.5 bg-white border rounded">Cmd + K</kbd> anywhere</span>
          <span className="flex items-center gap-1 text-emerald-600">
            <ShieldCheck className="w-3.5 h-3.5" /> All System Commands Active
          </span>
        </div>

      </div>
    </div>
  );
}
