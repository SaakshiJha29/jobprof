import React, { useState, useEffect } from 'react';
import { 
  Zap, 
  Terminal, 
  Globe2, 
  Cpu, 
  CreditCard, 
  User, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  Search,
  Code2,
  Calculator
} from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenCmdPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '3D Mesh', href: '#proxy-matrix', icon: Globe2 },
    { name: 'DOM Parser', href: '#dom-parser', icon: Code2 },
    { name: 'SDKs', href: '#sdk-playground', icon: Cpu },
    { name: 'ROI Calc', href: '#cost-calculator', icon: Calculator },
    { name: 'Pricing', href: '#pricing', icon: CreditCard },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-sky-150 shadow-md shadow-sky-500/5 py-3'
          : 'bg-white/90 backdrop-blur-md border-b border-sky-100 shadow-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition duration-300" />
              <div className="relative flex items-center justify-center w-10 h-10 bg-white border border-sky-200 rounded-xl shadow-sm">
                <Zap className="w-5 h-5 text-sky-600 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  Scrape<span className="text-sky-600">Pulse</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 bg-sky-100 text-sky-700 border border-sky-200 rounded-full">
                  v3.0 Bento
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase">
                Enterprise Telemetry Engine
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 px-3 py-1.5 text-xs font-bold text-sky-800 bg-sky-50/70 hover:bg-sky-100 border border-sky-200 hover:border-sky-300 rounded-xl transition-all duration-200 shadow-2xs"
                >
                  <Icon className="w-3.5 h-3.5 text-sky-600 group-hover:scale-110 transition-transform duration-200" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Command Palette Trigger & Actions */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Quick Cmd + K Search Trigger */}
            <button
              onClick={onOpenCmdPalette}
              className="flex items-center gap-3 px-3 py-1.5 bg-slate-100 hover:bg-slate-200/80 border border-slate-200 rounded-xl text-xs text-slate-600 transition-all font-medium interactive"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span>Search features...</span>
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-white border border-slate-300 rounded-md font-bold text-slate-700 shadow-2xs">
                ⌘K
              </kbd>
            </button>

            {/* Quick Sign In Action Button */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-bold text-slate-800 bg-white hover:bg-sky-50 border border-slate-300 hover:border-sky-300 rounded-xl shadow-2xs transition-all duration-200 interactive"
            >
              <User className="w-3.5 h-3.5 text-slate-600" />
              <span>Sign In</span>
            </button>

            {/* Launch Console Action Button */}
            <button
              onClick={onOpenAuth}
              className="group relative inline-flex items-center justify-center px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 hover:from-sky-500 hover:to-blue-700 rounded-xl shadow-md shadow-sky-500/20 hover:shadow-sky-500/35 transition-all duration-200 interactive"
            >
              <span>Get API Key</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCmdPalette}
              className="p-2 text-sky-700 bg-sky-50 border border-sky-200 rounded-lg"
              title="Search Palette"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-sky-600 bg-white border border-slate-200 rounded-xl shadow-2xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 border-b border-sky-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-sm font-bold text-sky-800 bg-sky-50/70 hover:bg-sky-100 border border-sky-200 rounded-xl"
                >
                  <Icon className="w-5 h-5 text-sky-600" />
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
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl"
              >
                <User className="w-4 h-4 text-slate-600" />
                <span>Account Sign In</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
