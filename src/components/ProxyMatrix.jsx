import React, { useState, useEffect, useRef } from 'react';
import { 
  Globe2, 
  Activity, 
  ShieldCheck, 
  Zap, 
  Radio, 
  RefreshCw, 
  Sliders, 
  Layers,
  Server,
  Play
} from 'lucide-react';

export default function ProxyMatrix() {
  const canvasRef = useRef(null);
  const [trafficMode, setTrafficMode] = useState('normal'); // 'normal' | 'spike' | 'attack'
  const [activeRegion, setActiveRegion] = useState('all');
  const [stats, setStats] = useState({
    activeNodes: 42800,
    throughput: 12400,
    bypassedBlocks: 99.98,
    avgLatency: 48
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas dimensions
    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);

    // Node definitions
    const numNodes = trafficMode === 'attack' ? 50 : trafficMode === 'spike' ? 35 : 25;
    const nodes = [];

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * (width - 60) + 30,
        y: Math.random() * (height - 60) + 30,
        radius: Math.random() * 3 + 2,
        color: i % 4 === 0 ? '#10b981' : i % 3 === 0 ? '#0ea5e9' : '#6366f1',
        vx: (Math.random() - 0.5) * (trafficMode === 'attack' ? 1.5 : 0.6),
        vy: (Math.random() - 0.5) * (trafficMode === 'attack' ? 1.5 : 0.6),
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Packet definitions
    const packets = [];

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint grid background
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.06)';
      ctx.lineWidth = 1;
      const gridSize = 30;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connecting lines between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const opacity = (1 - dist / 130) * (trafficMode === 'attack' ? 0.4 : 0.2);
            ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Update & Draw Nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 20 || node.x > width - 20) node.vx *= -1;
        if (node.y < 20 || node.y > height - 20) node.vy *= -1;

        node.pulse += 0.05;
        const glowRadius = node.radius + Math.sin(node.pulse) * 2;

        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(1, glowRadius), 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = node.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Spawn random data packets
      if (Math.random() < (trafficMode === 'attack' ? 0.6 : 0.3) && nodes.length > 2) {
        const fromIdx = Math.floor(Math.random() * nodes.length);
        let toIdx = Math.floor(Math.random() * nodes.length);
        if (fromIdx !== toIdx) {
          packets.push({
            startX: nodes[fromIdx].x,
            startY: nodes[fromIdx].y,
            endX: nodes[toIdx].x,
            endY: nodes[toIdx].y,
            progress: 0,
            speed: Math.random() * 0.03 + 0.02
          });
        }
      }

      // Draw & Update Packets
      for (let p = packets.length - 1; p >= 0; p--) {
        const packet = packets[p];
        packet.progress += packet.speed;

        if (packet.progress >= 1) {
          packets.splice(p, 1);
          continue;
        }

        const currentX = packet.startX + (packet.endX - packet.startX) * packet.progress;
        const currentY = packet.startY + (packet.endY - packet.startY) * packet.progress;

        ctx.beginPath();
        ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#38bdf8';
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [trafficMode, activeRegion]);

  const handleTrafficChange = (mode) => {
    setTrafficMode(mode);
    if (mode === 'normal') {
      setStats({ activeNodes: 42800, throughput: 12400, bypassedBlocks: 99.98, avgLatency: 48 });
    } else if (mode === 'spike') {
      setStats({ activeNodes: 68400, throughput: 28900, bypassedBlocks: 99.94, avgLatency: 72 });
    } else {
      setStats({ activeNodes: 104000, throughput: 54100, bypassedBlocks: 99.91, avgLatency: 110 });
    }
  };

  return (
    <section id="proxy-matrix" className="py-20 bg-slate-950 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-950 border border-sky-800 text-sky-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
            <span>Interactive Proxy Mesh Visualizer</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            3D Particle Traffic <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">Node Simulator</span>
          </h2>
          <p className="max-w-2xl text-slate-400 text-base sm:text-lg">
            Real-time visualization of residential proxy rerouting, dynamic packet handshakes, and anti-bot mitigation protocols.
          </p>
        </div>

        {/* Matrix Card Container */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl p-6 lg:p-8 relative overflow-hidden">
          
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Simulate Traffic Load:</span>
              <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => handleTrafficChange('normal')}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    trafficMode === 'normal' ? 'bg-sky-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Normal (12k req/s)
                </button>
                <button
                  onClick={() => handleTrafficChange('spike')}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    trafficMode === 'spike' ? 'bg-sky-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Traffic Spike (28k req/s)
                </button>
                <button
                  onClick={() => handleTrafficChange('attack')}
                  className={`px-3 py-1 text-xs font-mono rounded-lg transition-all ${
                    trafficMode === 'attack' ? 'bg-rose-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Anti-Bot Defense (54k req/s)
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-mono text-emerald-400">JA3 Fingerprint Rotator: ACTIVE</span>
            </div>
          </div>

          {/* HTML5 Interactive Canvas Container */}
          <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
            <canvas ref={canvasRef} className="w-full h-full block" />

            {/* Floating Live Metrics Card */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-slate-900/90 border border-slate-800 backdrop-blur-md rounded-2xl p-4 shadow-xl max-w-xs text-left">
              <div className="text-[11px] font-mono text-slate-400 mb-1">Live Telemetry Metrics</div>
              <div className="text-2xl font-extrabold text-white font-mono mb-2">
                {stats.throughput.toLocaleString()} <span className="text-xs text-sky-400">req/sec</span>
              </div>
              <div className="space-y-1 text-xs font-mono text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">Active Node Pool:</span>
                  <span className="text-emerald-400 font-bold">{stats.activeNodes.toLocaleString()} IPs</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Bypass Accuracy:</span>
                  <span className="text-sky-300 font-bold">{stats.bypassedBlocks}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Avg Roundtrip:</span>
                  <span className="text-amber-400 font-bold">{stats.avgLatency}ms</span>
                </div>
              </div>
            </div>

            {/* Bottom Status Pill */}
            <div className="absolute bottom-4 right-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md px-3 py-1.5 rounded-xl text-xs font-mono text-slate-400 flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-sky-400 animate-spin" />
              <span>Canvas Particle Render: 60 FPS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
