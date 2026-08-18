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
  ArrowRight 
} from 'lucide-react';

export default function Navbar({ onOpenAuth }) {
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
    { name: 'Sandbox', href: '#sandbox', icon: Terminal },
    { name: 'Edge Map', href: '#edge-map', icon: Globe2 },
    { name: 'Features', href: '#features', icon: Cpu },
    { name: 'Telemetry', href: '#telemetry', icon: ShieldCheck },
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
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  Scrape<span className="text-sky-600">Pulse</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider px-1.5 py-0.5 bg-sky-100 text-sky-700 border border-sky-200 rounded-full">
                  v2.4
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 tracking-widest uppercase">
                Job Telemetry Mesh
              </span>
            </div>
          </a>

          {/* Desktop Nav Items - Highlighted Icon Pill Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-sky-800 bg-sky-50/80 hover:bg-sky-100 border border-sky-200 hover:border-sky-300 rounded-xl transition-all duration-200 shadow-sm hover:shadow"
                >
                  <Icon className="w-4 h-4 text-sky-600 group-hover:scale-110 transition-transform duration-200" />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Live Operational Status Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-sky-200/80 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[11px] text-slate-600">Nodes: <strong className="text-slate-900">42 Active</strong></span>
            </div>

            {/* Quick Sign In Action Button */}
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-slate-800 bg-white hover:bg-sky-50 border border-slate-300 hover:border-sky-300 rounded-xl shadow-xs transition-all duration-200 interactive"
            >
              <User className="w-4 h-4 text-slate-600" />
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
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAuth}
              className="p-2 text-sky-700 bg-sky-50 border border-sky-200 rounded-lg"
              title="Sign In"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-sky-600 bg-white border border-slate-200 rounded-xl shadow-xs"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-sky-100 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-300">
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

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuth();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl shadow-md shadow-sky-500/20"
              >
                <Sparkles className="w-4 h-4" />
                <span>Get Enterprise API Keys</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
