import React, { useState } from 'react';
import { 
  Zap, 
  Terminal, 
  Globe2, 
  Cpu, 
  CreditCard, 
  User, 
  Menu, 
  X, 
  Search, 
  Code2, 
  Calculator,
  ArrowRight
} from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenCmdPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: '3D Mesh', href: '#proxy-matrix', icon: Globe2 },
    { name: 'DOM Parser', href: '#dom-parser', icon: Code2 },
    { name: 'SDKs', href: '#sdk-playground', icon: Cpu },
    { name: 'ROI Calc', href: '#cost-calculator', icon: Calculator },
    { name: 'Pricing', href: '#pricing', icon: CreditCard },
  ];

  return (
    <header className="mx-auto max-w-6xl mt-4 px-4 sticky top-4 z-50">
      
      {/* Floating Pill-Shaped Command Bar */}
      <div className="bg-white/80 backdrop-blur-2xl border border-indigo-100/80 shadow-xl shadow-indigo-500/5 rounded-2xl p-2.5 px-4 sm:px-6 flex items-center justify-between transition-all duration-300">
        
        {/* Left (Brand): Minimalist Logo + Pulse Dot Indicator */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative flex items-center justify-center w-9 h-9 bg-indigo-600 text-white rounded-xl shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Zap className="w-5 h-5 fill-current text-white" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-extrabold tracking-tight text-slate-900">
                Scrape<span className="text-indigo-600">Pulse</span>
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-md font-mono">
                NEO
              </span>
            </div>
            <span className="text-[9px] font-semibold text-slate-500 tracking-wider uppercase">
              Telemetry Mesh
            </span>
          </div>
        </a>

        {/* Center (Pill Nav Items): Compact Icon & Text Pills */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((item) => {
            const IconComp = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center gap-1.5 border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-100/60 text-indigo-900 font-medium rounded-xl px-3 py-1.5 text-xs transition-all shadow-2xs"
              >
                <IconComp className="w-3.5 h-3.5 text-indigo-600 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right (Actions): Live Status Pill & Solid Indigo Sign In Button */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Quick Cmd + K Trigger */}
          <button
            onClick={onOpenCmdPalette}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-xl text-xs text-slate-600 font-mono transition-all interactive"
            title="Search Palette (Cmd + K)"
          >
            <Search className="w-3.5 h-3.5 text-slate-500" />
            <kbd className="px-1 py-0.2 bg-white border border-slate-300 rounded text-[10px] font-bold">
              ⌘K
            </kbd>
          </button>

          {/* Live Status Indicator Badge (🟢 42 Nodes) */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200/80 rounded-xl text-xs font-bold text-emerald-800 shadow-2xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>42 Nodes</span>
          </div>

          {/* Primary Solid Indigo Sign In Action Button */}
          <button
            onClick={onOpenAuth}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md shadow-indigo-500/20 hover:shadow-indigo-500/35 px-4 py-2 transition-all interactive"
          >
            <User className="w-4 h-4" />
            <span>Sign In</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={onOpenCmdPalette}
            className="p-2 text-indigo-700 bg-indigo-50 border border-indigo-200 rounded-xl"
            title="Search Palette"
          >
            <Search className="w-4.5 h-4.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-indigo-600 bg-white border border-slate-200 rounded-xl"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 bg-white/98 border border-indigo-100 rounded-2xl shadow-xl p-4 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const IconComp = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-indigo-900 bg-indigo-50/50 hover:bg-indigo-100/60 border border-indigo-100 rounded-xl"
                >
                  <IconComp className="w-5 h-5 text-indigo-600" />
                  <span>{item.name}</span>
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-md"
              >
                <User className="w-4 h-4" />
                <span>Account Sign In</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </header>
  );
}
