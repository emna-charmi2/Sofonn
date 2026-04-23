'use client';

import { useEffect } from 'react';
import {
  Shield,
  Network,
  Ship,
  Fuel,
  Radio,
  Camera,
  Cpu,
  Zap,
  Cloud,
  LayoutDashboard,
  CheckCircle2,
  ArrowRight,
  Activity,
  BarChart3,
  Microchip,
  TrendingUp,
  RefreshCw,
  Leaf,
  Wifi,
  Gauge,
  Eye,
  Building2,
  HardHat,
  Heart,
  Settings,
  Users,
  Radar,
  Sparkles,
  Lock,
  Database,
  Bell,
  Share2,
  CheckSquare,
  Headphones,
  Plug,
  Box,
  Mail,
  Calendar,
  AlertCircle
} from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MarineEdge() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100, easing: 'ease-out-cubic' });
    return () => AOS.refresh(); // optional cleanup
  }, []);


  const features = [
    {
      icon: "insights",
      title: "Eliminate Estimation Bias",
      desc: "Replace manual deck occupation estimates with AI‑driven, objective real‑time measurements.",
    },
    {
      icon: "sync",
      title: "Real‑Time Verification",
      desc: "Transform reactive reporting into proactive, live validation of vessel operations.",
    },
    {
      icon: "eco",
      title: "Reduce Carbon Footprint",
      desc: "Accurate ROB tracking and route optimization directly cut emissions and fuel waste.",
    },
  ];

  const getFeatureIcon = (iconName: string) => {
    switch(iconName) {
      case 'insights': return <TrendingUp size={24} className="text-violet-400" />;
      case 'sync': return <RefreshCw size={24} className="text-violet-400" />;
      case 'eco': return <Leaf size={24} className="text-violet-400" />;
      default: return <TrendingUp size={24} className="text-violet-400" />;
    }
  };

  const getWhyChooseIcon = (iconName: string) => {
    switch(iconName) {
      case 'analytics': return <TrendingUp size={24} className="text-violet-400" />;
      case 'iot': return <Wifi size={24} className="text-violet-400" />;
      case 'speed': return <Gauge size={24} className="text-violet-400" />;
      case 'view_in_ar': return <Eye size={24} className="text-violet-400" />;
      case 'gas_meter': return <Fuel size={24} className="text-violet-400" />;
      case 'verified': return <CheckCircle2 size={24} className="text-violet-400" />;
      default: return <Activity size={24} className="text-violet-400" />;
    }
  };

  const getAudienceIcon = (iconName: string) => {
    switch(iconName) {
      case 'corporate': return <Building2 size={32} className="text-violet-400" />;
      case 'engineering': return <HardHat size={32} className="text-violet-400" />;
      case 'monitor_heart': return <Heart size={32} className="text-violet-400" />;
      case 'admin_panel_settings': return <Settings size={32} className="text-violet-400" />;
      default: return <Users size={32} className="text-violet-400" />;
    }
  };

  const getKeyFeatureIcon = (iconName: string) => {
    switch(iconName) {
      case 'radar': return <Radar size={24} className="text-violet-400" />;
      case 'auto_awesome': return <Sparkles size={24} className="text-violet-400" />;
      case 'lock': return <Lock size={24} className="text-violet-400" />;
      case 'database': return <Database size={24} className="text-violet-400" />;
      case 'notifications_active': return <Bell size={24} className="text-violet-400" />;
      case 'share': return <Share2 size={24} className="text-violet-400" />;
      case 'rule': return <CheckSquare size={24} className="text-violet-400" />;
      case 'insights': return <TrendingUp size={24} className="text-violet-400" />;
      case 'support_agent': return <Headphones size={24} className="text-violet-400" />;
      default: return <Activity size={24} className="text-violet-400" />;
    }
  };

  return (
    <>
      {/* Global background glows – violet */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-950/30 blur-[130px]" />
        <div className="absolute bottom-[-5%] right-[-5%] w-[500px] h-[500px] rounded-full bg-violet-900/30 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-800/10 blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      </div>

      {/* ========== Digitalizing the Maritime Edge ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-violet-400 uppercase border border-violet-400/30 rounded-full bg-violet-400/10">
                ADNOC × ELCOME × SOFONN
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Digitalizing the Maritime Edge<br />SOFONN Marine Gateway</h2>
              <p className="text-gray-300 text-lg mt-4">Bridge the critical information gap between ship and shore with an AI‑powered edge platform that automates deck space monitoring, validates sensor data, and delivers real‑time operational intelligence — even in disconnected environments.</p>
              <div className="flex flex-wrap gap-4 mt-6">
                <a href="#" className="inline-flex items-center gap-2 bg-violet-500 text-white font-semibold px-5 py-2.5 rounded-full shadow hover:bg-violet-600 transition">
                  <BarChart3 size={18} />
                  Live Dashboard Preview
                </a>
                <a href="#" className="inline-flex items-center gap-2 border border-violet-400 text-violet-400 font-semibold px-5 py-2.5 rounded-full hover:bg-violet-500/10 transition">
                  <Cpu size={18} />
                  Edge Specs
                </a>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
              <BarChart3 size={48} className="text-violet-400 mx-auto" />
              <p className="text-white mt-3">Real-time deck occupancy heatmap</p>
              <p className="text-sm text-gray-400">AI inference &lt; 2 sec</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== What This Project Delivers ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-16 text-center text-white">What This Project Delivers</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Camera, title: "Deck Occupation Analysis", desc: "AI-powered real-time monitoring of vessel deck space utilization, delivering before/after documentation and occupancy intelligence for every operation." },
              { icon: Fuel, title: "Fuel Level Tracking", desc: "Continuous tank-level sensor data displayed directly on the operational dashboard — giving vessel and shore teams clear, structured visibility into fuel readings." },
              { icon: Radio, title: "Ship-to-Shore Visibility", desc: "A unified operational dashboard connecting vessel data to shore management in real time, enabling smarter and faster operational decisions." }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-violet-500/40 transition-all">
                <div className="w-12 h-12 bg-violet-500/20 rounded-lg flex items-center justify-center mb-6">
                  <item.icon className="text-violet-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      {/* ========== Solving the Maritime Information Lag ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5" data-aos="fade-up">Solving the Maritime Information Lag</h2>
            <div className="w-16 h-0.5 bg-violet-500 rounded-full mx-auto mt-6" data-aos="fade-up" data-aos-delay="100" />
            <p className="max-w-2xl mx-auto mt-8 text-slate-300" data-aos="fade-up" data-aos-delay="200">
              Traditional maritime operations suffer from "The Two Halves Problem," where vessels and shore offices operate as disconnected worlds. This leads to reactive management, estimation bias in cargo reporting, and suboptimal fuel control.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              {features.map(({ icon, title, desc }, index) => (
                <div key={title} className="flex gap-4 mb-8 last:mb-0" data-aos="fade-up" data-aos-delay={300 + index * 100}>
                  <div className="w-12 h-12 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                    {getFeatureIcon(icon)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">{title}</h4>
                    <span className="text-zinc-400 leading-relaxed">{desc}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:flex justify-center items-center" data-aos="fade-left" data-aos-delay="400">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80" alt="Maritime information lag visualization" className="w-[700px] h-auto object-contain rounded-2xl border border-white/10 bg-white/5" />
            </div>
          </div>
        </div>
      </section>

      {/* ========== Strategic Three-Way Alliance ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-violet-400 font-semibold tracking-widest uppercase text-sm mb-3">THE SYNERGY</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">A Strategic Three-Way Alliance</h3>
            <div className="w-16 h-0.5 bg-violet-500 rounded-full mx-auto mt-6" data-aos="fade-up" data-aos-delay="100" />
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Setting a new standard for vessel digitalization by perfectly aligning operational vision, hardware integration, and advanced AI intelligence.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent -translate-y-1/2 z-0" />
            {/* ADNOC */}
            <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-violet-500/50 transition-colors group text-center ">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg"><Shield className="w-10 h-10 text-zinc-100" /></div>
              <h4 className="text-2xl font-bold text-white tracking-tight mb-2">ADNOC</h4>
              <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-4">PROJECT OWNER & VISION</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Defining the operational requirements and deploying the solution across the Marine Operations fleet to achieve decarbonization and efficiency limits.</p>
            </div>
            {/* ELCOME */}
            <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:border-violet-500/50 transition-colors group text-center border border-white/10">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg"><Network className="w-10 h-10 text-cyan-400" /></div>
              <h4 className="text-2xl font-bold text-white tracking-tight mb-2">ELCOME</h4>
              <div className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-4">HARDWARE & INTEGRATION</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Expert installation and seamless integration of onboard sensors, high-res CCTV, SVDR, and IoT networks in complex maritime environments.</p>
            </div>
            {/* SOFONN */}
            <div className="relative z-10 bg-white/5 backdrop-blur-sm rounded-3xl p-8 hover:border-violet-500/50 transition-colors group text-center border border-white/10">
              <div className="w-20 h-20 mx-auto rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(139,92,246,0.3)]"><Cpu className="w-10 h-10 text-violet-400" /></div>
              <h4 className="text-2xl font-bold text-white tracking-tight mb-2">SOFONN</h4>
              <div className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-4">AI SOFTWARE & ENGINE</div>
              <p className="text-zinc-400 text-sm leading-relaxed">Providing the Marine Edge Gateway, YOLOv8 computer vision analytics, and unified dashboards that turn raw sensor data into actionable intelligence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== WHY CHOOSE MARINE EDGE ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why Choose Marine Edge?</h2>
            <div className="w-16 h-0.5 bg-violet-500 rounded-full mx-auto mt-4" />
            <p className="max-w-2xl mx-auto mt-6 text-zinc-400">
              A powerful suite of AI‑powered modules that solve real maritime challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "analytics",
                title: "Real‑Time AI Vision",
                desc: "YOLOv8 on‑board processing delivers <2s latency, 98%+ occupancy accuracy, and eliminates manual estimation bias."
              },
              {
                icon: "iot",
                title: "Sensor Fusion",
                desc: "Native integration of SVDR, AIS, tank gauges (Modbus/NMEA) – cross‑verifies crew reports against live vessel data."
              },
              {
                icon: "speed",
                title: "Edge Computing Power",
                desc: "NVIDIA CUDA GPU at the edge ensures full offline resilience, local image analysis, and bandwidth‑optimized sync."
              },
              {
                icon: "view_in_ar",
                title: "Bridge Surveillance",
                desc: "360° camera coverage with AI‑driven occupancy heatmaps, automatic alerts on deviation >10%, and before/after snapshots."
              },
              {
                icon: "gas_meter",
                title: "Fuel Control & ROB",
                desc: "Real‑time remaining‑on‑board tracking via level sensors – reduces fuel waste and carbon emissions by up to 12%."
              },
              {
                icon: "verified",
                title: "Regulatory Compliance",
                desc: "Audit‑ready reports for IMO, MARPOL, CII, EEXI, EU ETS – automatically tracked and validated against sensor data."
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/40 hover:bg-violet-500/10 hover:shadow-xl hover:shadow-violet-500/10"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mb-4">
                  {getWhyChooseIcon(item.icon)}
                </div>
                <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== One Platform / How It Works ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">
            One Platform. Every Data Point. <span className="text-violet-400">Real-Time Intelligence.</span>
          </h2>
          <p className="text-center text-zinc-400 max-w-2xl mx-auto mb-16">
            From onboard sensors to unified dashboards – a seamless, secure, and intelligent data pipeline.
          </p>

          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent -translate-y-1/2 z-0" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
              {[
                {
                  step: "01",
                  icon: <Ship className="w-8 h-8" />,
                  title: "Onboard Sensors",
                  desc: "CCTV, tank gauges, SVDR, and GPS feed real‑time data into the edge gateway.",
                },
                {
                  step: "02",
                  icon: <Cpu className="w-8 h-8" />,
                  title: "SOFONN Edge",
                  desc: "Local AI processing & data fusion – active only when SOG < 1 knot to save power.",
                },
                {
                  step: "03",
                  icon: <Cloud className="w-8 h-8" />,
                  title: "Secure Cloud Sync",
                  desc: "Encrypted, compressed transmission to UAE-hosted cloud infrastructure (TLS 1.3).",
                },
                {
                  step: "04",
                  icon: <LayoutDashboard className="w-8 h-8" />,
                  title: "Unified Dashboard",
                  desc: "Live operational KPIs, alerts, and historical analytics accessible from anywhere.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1"
                >
                  <div className="absolute -top-3 left-6 bg-violet-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow-md">
                    STEP {item.step}
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-violet-500/15 border border-violet-500/30 flex items-center justify-center text-violet-400 mb-5 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== Proven in the Field ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap lg:flex-nowrap gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-white">Proven in the Field. Ready for the Fleet.</h2>
              <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                The solution is currently deployed as a Proof of Concept aboard ADNOC Marine Operations vessels, validating AI deck analysis performance, system reliability, and operational data display in real maritime conditions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3"><CheckCircle2 className="text-violet-400" size={20} /><span className="text-zinc-300 font-medium">Validating AI deck analysis performance</span></div>
                <div className="flex items-center gap-3"><CheckCircle2 className="text-violet-400" size={20} /><span className="text-zinc-300 font-medium">Fleet-scale deployment roadmap for 50+ vessels</span></div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-8 rounded-2xl"><div className="text-3xl font-bold text-violet-400 mb-1">≥ 95%</div><div className="text-xs uppercase tracking-wider font-semibold text-zinc-400">AI Accuracy Target</div></div>
              <div className="bg-white/5 p-8 rounded-2xl"><div className="text-3xl font-bold text-white mb-1">6-Month</div><div className="text-xs uppercase tracking-wider font-semibold text-zinc-400">POC Duration</div></div>
              <div className="bg-white/5 p-8 rounded-2xl"><div className="text-3xl font-bold text-white mb-1">50+</div><div className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Vessel Roadmap</div></div>
              <div className="bg-white/5 p-8 rounded-2xl"><div className="text-3xl font-bold text-violet-400 mb-1">99.9%</div><div className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Cloud Uptime SLA</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== Target Audience ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How Marine Edge Transforms Maritime Operations</h2>
            <div className="w-16 h-0.5 bg-violet-500 rounded-full mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: 'corporate', title: 'Shipowners', desc: 'Optimize fleet management & costs', users: 'Directors & Management' },
              { icon: 'engineering', title: 'Operators', desc: 'Visibility & control over operations', users: 'ADNOC L&S, Contractors' },
              { icon: 'monitor_heart', title: 'Crews', desc: 'Simplified onboard reporting', users: 'Officers & Crew' },
              { icon: 'admin_panel_settings', title: 'Shore Offices', desc: 'Reliable data for decisions', users: 'Shore Personnel' }
            ].map((audience, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-violet-500/40 hover:bg-violet-500/10 transition-all" data-aos="fade-up" data-aos-delay={idx * 80}>
                <div className="mb-4">
                  {getAudienceIcon(audience.icon)}
                </div>
                <h3 className="font-semibold text-white mb-2">{audience.title}</h3>
                <p className="text-sm text-zinc-400 mb-3">{audience.desc}</p>
                <div className="flex items-center gap-1 text-xs text-zinc-500">
                  <Users size={12} />
                  {audience.users}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Key Features Grid ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Key Features</h2>
            <div className="w-16 h-0.5 bg-violet-500 rounded-full mx-auto mt-4" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: 'radar', title: '360° Monitoring', desc: 'Full bridge coverage' },
              { icon: 'auto_awesome', title: 'Predictive AI', desc: 'Advanced algorithms' },
              { icon: 'lock', title: 'HTTPS Security', desc: 'Secure protocols' },
              { icon: 'database', title: 'Local Storage', desc: 'Gateway redundancy' },
              { icon: 'notifications_active', title: 'Real‑time Alerts', desc: 'Anomaly notifications' },
              { icon: 'share', title: 'Cloud API', desc: 'System integration' },
              { icon: 'rule', title: 'RBAC Compliance', desc: 'Auditable role management' },
              { icon: 'insights', title: 'Analytics', desc: 'Custom dashboards' },
              { icon: 'support_agent', title: '24/7 Support', desc: 'Continuous assistance' }
            ].map((feature, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-violet-500/40 hover:bg-violet-500/10 transition-all" data-aos="fade-up" data-aos-delay={idx * 40}>
                <div className="mb-3">
                  {getKeyFeatureIcon(feature.icon)}
                </div>
                <h3 className="font-semibold mb-1 text-sm text-white">{feature.title}</h3>
                <p className="text-xs text-zinc-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== How It Works (Steps) ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {[
              { title: '01. Data Capture', desc: 'Onboard cameras monitor deck operations continuously.' },
              { title: '02. Smart Activation', desc: 'AI activates only during cargo operations for efficiency.' },
              { title: '03. AI Analysis', desc: 'Computer vision calculates deck occupation percentage.' },
              { title: '04. Instant Validation', desc: 'Real-time alerts highlight discrepancies in reporting.' }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border-l-4 border-violet-400">
                <h3 className="text-xl font-bold text-white">{step.title}</h3>
                <p className="text-gray-300 mt-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== Offline Resilience & Dockerization ========== */}
      <section className="py-28 px-4 sm:px-8 relative overflow-hidden">
        <div className="w-[80%] max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 bg-violet-500/20 text-violet-300 px-4 py-1.5 rounded-full mb-4">
            <Plug size={16} />
            Operational resilience
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Designed for unreliable connectivity</h2>
          <div className="grid md:grid-cols-2 gap-12 mt-8">
            <div>
              <p className="text-gray-300 text-lg">The SOFONN Edge Gateway stores all data locally in a buffered queue. When internet is available, it synchronizes intelligently — compressing images, batching reports, and using exponential backoff retries.</p>
              <ul className="mt-6 space-y-3">
                {['Full offline operation for 7+ days', 'No data loss during connectivity loss', 'Bandwidth‑throttled sync for VSAT links'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 size={16} className="text-violet-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 flex items-start gap-4 border border-white/10">
              <Box size={48} className="text-violet-400" />
              <div><h3 className="text-xl font-bold text-white">Fully containerized (Docker Compose)</h3><p className="text-gray-300 mt-1">All services — web, database, AI inference, sync agent — run as isolated containers. Easy deployment, updates, and recovery.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section className="relative py-28 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-500/20 rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto">
          <div
            className="rounded-2xl md:rounded-3xl p-12 lg:p-20 text-center border shadow-2xl shadow-black/30"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              background: "rgba(139, 92, 246, 0.05)",
              borderColor: "rgba(139, 92, 246, 0.25)",
            }}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Ready to Digitize Your Fleet?
            </h2>
            <p
              className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join maritime leaders who trust SOFONN to optimize operations and achieve decarbonization goals.
              Start with a personalized demo today.
            </p>
            <div
              className="flex flex-wrap justify-center gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-violet-600 text-white font-semibold hover:bg-violet-500 transition shadow-lg shadow-violet-500/30"
              >
                <Mail size={18} />
                Contact Us
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-violet-400 text-violet-400 font-semibold hover:bg-violet-500/10 transition"
              >
                <Calendar size={18} />
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}