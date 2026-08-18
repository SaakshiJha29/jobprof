import React, { useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import CommandPalette from './components/CommandPalette';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sandbox from './components/Sandbox';
import ProxyMatrix from './components/ProxyMatrix';
import DomParserVisualizer from './components/DomParserVisualizer';
import BentoFeatures from './components/BentoFeatures';
import SdkPlayground from './components/SdkPlayground';
import TelemetryGauge from './components/TelemetryGauge';
import CostCalculator from './components/CostCalculator';
import Pricing from './components/Pricing';
import AuthCallout from './components/AuthCallout';
import AuthModal from './components/AuthModal';
import EasterEgg from './components/EasterEgg';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [cmdPaletteOpen, setCmdPaletteOpen] = useState(false);

  const handleScrollToSandbox = () => {
    const el = document.getElementById('sandbox');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigate = (selector) => {
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="ambient-bento-mesh min-h-screen relative text-slate-900 selection:bg-sky-500/20 selection:text-sky-800">
      
      {/* Initial Splash Screen Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Dual Element Custom Cursor */}
      <CustomCursor />

      {/* Secret Konami Code Listener */}
      <EasterEgg />

      {/* Floating Glass Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Quick Command Palette (Cmd + K) */}
      <CommandPalette
        isOpen={cmdPaletteOpen}
        onClose={() => setCmdPaletteOpen(false)}
        onOpenAuth={() => setAuthModalOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* Sticky Light Glassmorphic Header */}
      <Navbar
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenCmdPalette={() => setCmdPaletteOpen(true)}
      />

      {/* Main App Content */}
      <main>
        {/* Bento Hero Section */}
        <Hero
          onOpenAuth={() => setAuthModalOpen(true)}
          onScrollToSandbox={handleScrollToSandbox}
          onOpenCmdPalette={() => setCmdPaletteOpen(true)}
        />

        {/* 3D Particle Proxy Node Matrix */}
        <ProxyMatrix />

        {/* Interactive Telemetry & Scraping Sandbox */}
        <Sandbox />

        {/* Live DOM Selector & Schema.org Parser */}
        <DomParserVisualizer />

        {/* Asymmetric Bento Features Grid */}
        <BentoFeatures />

        {/* Multi-Language SDK Generator */}
        <SdkPlayground />

        {/* Real-time Ingestion Speedometer Gauge */}
        <TelemetryGauge />

        {/* ROI Scraping Cost Calculator */}
        <CostCalculator onOpenAuth={() => setAuthModalOpen(true)} />

        {/* Developer Pricing Plans */}
        <Pricing onOpenAuth={() => setAuthModalOpen(true)} />

        {/* Pre-Footer Portal Callout */}
        <AuthCallout onOpenAuth={() => setAuthModalOpen(true)} />
      </main>

      {/* Enterprise Footer */}
      <Footer onOpenAuth={() => setAuthModalOpen(true)} />

      {/* Focused Sign In & Portal Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
      />

    </div>
  );
}
