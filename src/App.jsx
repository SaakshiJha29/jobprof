import React, { useState } from 'react';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sandbox from './components/Sandbox';
import EdgeMap from './components/EdgeMap';
import Features from './components/Features';
import TelemetryDashboard from './components/TelemetryDashboard';
import Pricing from './components/Pricing';
import AuthCallout from './components/AuthCallout';
import AuthModal from './components/AuthModal';
import EasterEgg from './components/EasterEgg';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  const handleScrollToSandbox = () => {
    const el = document.getElementById('sandbox');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="ambient-mesh min-h-screen relative text-slate-900 selection:bg-sky-500/20 selection:text-sky-800">
      
      {/* Initial Splash Screen Loader */}
      {loading && <Loader onComplete={() => setLoading(false)} />}

      {/* Dual Element Custom Trailing Cursor */}
      <CustomCursor />

      {/* Secret Konami Code Key Listener */}
      <EasterEgg />

      {/* Floating Glass Scroll-to-Top Button */}
      <ScrollToTop />

      {/* Sticky Light Glassmorphic Header */}
      <Navbar onOpenAuth={() => setAuthModalOpen(true)} />

      {/* Main Page Layout */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenAuth={() => setAuthModalOpen(true)}
          onScrollToSandbox={handleScrollToSandbox}
        />

        {/* Interactive Telemetry & Scraping Sandbox */}
        <Sandbox />

        {/* Global Edge Map Visualizer */}
        <EdgeMap />

        {/* Enterprise Developer Features Grid */}
        <Features />

        {/* Real-time Telemetry Live Stream */}
        <TelemetryDashboard />

        {/* Transparent Developer Pricing */}
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
