import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import { translations } from "../data/content";

// --- IMPORTS KOMPONEN ---
import LoadingScreen from "../components/LoadingScreen";
import Background from "../components/Background";
import CyberCursor from "../components/CyberCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const [lang, setLang] = useState("id"); 
  const t = translations[lang];

  const audioRef = useRef(null);

  // --- FUNGSI CEK ANIMASI (DIPISAH SUPAYA BISA DIPANGGIL KAPAN SAJA) ---
  const checkRevealElements = () => {
    document.querySelectorAll(".reveal-up").forEach((reveal) => {
      const windowHeight = window.innerHeight;
      const elementTop = reveal.getBoundingClientRect().top;
      // Jika elemen sudah masuk area layar, munculkan!
      if (elementTop < windowHeight - 100) {
        reveal.classList.add("visible");
      }
    });
  };

  useEffect(() => {
    // Paksa scroll ke atas saat refresh (Opsional)
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(Number(totalScroll / windowHeight));

      if (totalScroll > 500) setShowBackToTop(true);
      else setShowBackToTop(false);

      // Panggil fungsi cek animasi setiap kali scroll
      checkRevealElements();
    };

    window.addEventListener("scroll", handleScroll);
    
    // Cek sekali saat awal load (jaga-jaga)
    checkRevealElements();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- PERBAIKAN UTAMA ADA DI SINI ---
  // Gunakan useEffect untuk memantau status 'loading'.
  // Begitu loading selesai (!loading), kita paksa cek animasi lagi.
  useEffect(() => {
    if (!loading) {
      // Beri jeda 100ms agar transisi loading screen benar-benar hilang dulu
      setTimeout(() => {
        checkRevealElements();
      }, 100);
    }
  }, [loading]);

  const handleEnterSystem = () => {
    window.scrollTo(0, 0); // Pastikan posisi di paling atas
    setLoading(false);
    
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(() => {});
      setIsAudioPlaying(true);
    }
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) audioRef.current.pause();
      else audioRef.current.play();
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  const toggleLang = () => {
    setLang(prev => prev === "id" ? "en" : "id");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>Eko Prasetyo | Cyber Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Eko Prasetyo Adi Nugroho - Web Developer, Data Analyst & Logo Designer." />
        <link rel="icon" href="/favicon.ico" /> 
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Orbitron:wght@400;500;700;900&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet" />
      </Head>

      <audio ref={audioRef} src="/bgm.mp3" loop />

      <style jsx global>{`
        html { scroll-behavior: smooth; }
        :root { --neon-primary: #a855f7; --neon-secondary: #00eaff; --bg-dark: #050505; }
        body { margin: 0; font-family: 'Inter', sans-serif; background-color: var(--bg-dark); color: #ffffff; overflow-x: hidden; }
        
        @keyframes quantum-assembly { 0% { opacity: 0; filter: blur(20px) contrast(3) hue-rotate(180deg) brightness(2); transform: scale(1.5) translateY(20px); letter-spacing: 10px; } 30% { opacity: 1; filter: blur(10px) contrast(2) hue-rotate(90deg); transform: scale(0.9); } 50% { transform: scale(1.05) skew(2deg); filter: blur(2px) contrast(1.2) hue-rotate(0deg); } 100% { opacity: 1; filter: none; transform: scale(1); } }
        .particle-entrance { animation: quantum-assembly 1.5s cubic-bezier(0.22, 1, 0.36, 1) forwards; mix-blend-mode: normal; }
        
        @keyframes scan-line { 0% { top: -10%; opacity: 0; } 50% { opacity: 1; } 100% { top: 110%; opacity: 0; } }
        .scanner-beam { position: absolute; left: 0; width: 100%; height: 5px; background: #00eaff; box-shadow: 0 0 15px #00eaff, 0 0 30px #a855f7; opacity: 0; animation: scan-line 1.5s ease-out forwards; z-index: 20; }

        @keyframes heavy-glitch-appear { 0% { opacity: 0; transform: scale(0.8) skew(10deg) translateX(-20px); filter: blur(10px) hue-rotate(90deg) contrast(2); clip-path: inset(50% 0 50% 0); } 20% { opacity: 1; transform: scale(1.1) skew(-10deg); filter: blur(0px) invert(1); clip-path: inset(0 50% 0 50%); } 40% { transform: scale(0.9) skew(5deg); filter: hue-rotate(-45deg) contrast(1.5); clip-path: inset(10% 0 80% 0); } 60% { transform: scale(1.05) skew(-2deg) translateX(10px); filter: none; clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%); } 80% { transform: scale(0.98); } 100% { opacity: 1; transform: scale(1) skew(0); filter: none; clip-path: inset(0); } }
        .glitch-entrance { animation: heavy-glitch-appear 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards; animation-delay: 0.3s; }

        .perspective-container { perspective: 1000px; }
        .rotate-3d-card { transition: transform 0.2s ease-out; transform-style: preserve-3d; }
        h1, h2, h3, .font-tech { font-family: 'Orbitron', sans-serif; }
        
        ${!loading ? `@media (min-width: 768px) { body, a, button, input, select, textarea, .cursor-pointer, .card-glass, .hacker-text { cursor: none !important; } }` : ''}
        
        .reveal-up { opacity: 0; transform: translateY(40px); transition: all 0.8s cubic-bezier(0.5, 0, 0, 1); }
        .reveal-up.visible { opacity: 1; transform: translateY(0); }
        .fixed-bg-gradient { position: fixed; inset: 0; z-index: -2; background: linear-gradient(45deg, #050505, #130826, #031f29, #050505); background-size: 400% 400%; animation: gradientBG 15s ease infinite; }
        .fixed-cyber-grid { position: fixed; inset: 0; z-index: -1; background-size: 50px 50px; background-image: linear-gradient(to right, rgba(168, 85, 247, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.03) 1px, transparent 1px); mask-image: radial-gradient(circle at center, black 30%, transparent 80%); pointer-events: none; }
        @keyframes gradientBG { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .particles-container { position: fixed; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; z-index: -1; pointer-events: none; }
        .particle { position: absolute; width: 2px; height: 2px; background: var(--neon-secondary); border-radius: 50%; opacity: 0.3; animation: floatUp 10s infinite linear; }
        @keyframes floatUp { 0% { transform: translateY(0); opacity: 0; } 20% { opacity: 0.5; } 80% { opacity: 0.5; } 100% { transform: translateY(-100vh); opacity: 0; } }
        .cyber-cursor { position: fixed; top: 0; left: 0; width: 20px; height: 20px; border: 1px solid var(--neon-secondary); background: rgba(0, 234, 255, 0.1); transform: translate(-50%, -50%); pointer-events: none; z-index: 9999; border-radius: 50%; mix-blend-mode: difference; transition: width 0.3s, height 0.3s, background 0.3s; }
        .cyber-cursor.hovered { width: 60px; height: 60px; background: rgba(168, 85, 247, 0.3); border-color: var(--neon-primary); border-width: 2px; }
        .cyber-cursor::after { content: ''; position: absolute; top: 50%; left: 50%; width: 4px; height: 4px; background: white; transform: translate(-50%, -50%); border-radius: 50%; }
        .card-glass { background: rgba(20, 20, 30, 0.4); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.05); transition: 0.4s ease; }
        .card-glass:hover { border-color: var(--neon-primary); box-shadow: 0 0 25px rgba(168, 85, 247, 0.15); transform: translateY(-5px); }
        .btn-cyber { position: relative; background: transparent; color: var(--neon-secondary); border: 1px solid var(--neon-secondary); overflow: hidden; transition: 0.3s; }
        .btn-cyber::before { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(0,234,255,0.2), transparent); transition: 0.5s; }
        .btn-cyber:hover { box-shadow: 0 0 20px rgba(0,234,255,0.4); text-shadow: 0 0 8px rgba(0,234,255,0.8); transform: translateY(-2px); }
        .btn-cyber:hover::before { left: 100%; }
        .glitch-wrapper { position: relative; }
        .glitch { font-family: 'Orbitron'; font-size: 3.5rem; font-weight: 900; color: white; letter-spacing: 4px; position: relative; }
        .glitch::before, .glitch::after { content: attr(data-text); position: absolute; inset: 0; }
        .glitch::before { color: #ff00c1; z-index: -1; animation: g1 2.5s infinite linear alternate-reverse; }
        .glitch::after { color: #00fff9; z-index: -2; animation: g2 3s infinite linear alternate-reverse; }
        @keyframes g1 { 0%{clip-path:inset(20% 0 80% 0);transform:translate(-2px,1px)} 100%{clip-path:inset(30% 0 20% 0);transform:translate(1px,-1px)} }
        @keyframes g2 { 0%{clip-path:inset(10% 0 60% 0);transform:translate(2px,-1px)} 100%{clip-path:inset(40% 0 30% 0);transform:translate(-2px,-1px)} }
        @keyframes fill-bar { 0% { width: 0%; } 100% { width: 100%; } }
        .marquee-container { overflow: hidden; white-space: nowrap; position: relative; mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent); }
        .marquee-track { display: inline-flex; animation: marquee 25s linear infinite; }
        .marquee-track-reverse { display: inline-flex; animation: marquee-reverse 25s linear infinite; }
        .marquee-track:hover, .marquee-track-reverse:hover { animation-play-state: paused; }
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes marquee-reverse { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .skill-item { font-family: 'JetBrains Mono'; padding: 0.5rem 1.5rem; margin: 0 0.5rem; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; display: flex; align-items: center; gap: 0.5rem; transition: 0.3s; }
        .skill-item:hover { background: rgba(255,255,255,0.08); border-color: var(--neon-secondary); box-shadow: 0 0 15px rgba(0,234,255,0.2); }
        .timeline-line { position: absolute; left: 0; top: 0; bottom: 0; width: 2px; background: rgba(255,255,255,0.1); }
        .timeline-item { position: relative; padding-left: 2rem; padding-bottom: 3rem; }
        .timeline-dot { position: absolute; left: -5px; top: 0; width: 12px; height: 12px; background: var(--neon-primary); border-radius: 50%; box-shadow: 0 0 10px var(--neon-primary); transition: 0.3s; }
        .timeline-item:hover .timeline-dot { transform: scale(1.5); background: var(--neon-secondary); box-shadow: 0 0 20px var(--neon-secondary); }
      `}</style>

      <Background />
      <CyberCursor loading={loading} />
      <div style={{ position:'fixed', top:0, left:0, height:'3px', background:'var(--neon-secondary)', width:`${scrollProgress * 100}%`, zIndex:10000, boxShadow:'0 0 10px var(--neon-secondary)' }} />
      
      <button onClick={scrollToTop} className={`fixed bottom-8 right-8 z-40 p-3 rounded-full border border-cyan-500 bg-black/80 text-cyan-400 shadow-[0_0_15px_rgba(0,234,255,0.5)] transition-all duration-500 hover:scale-110 hover:bg-cyan-500/20 group cursor-pointer ${showBackToTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      <LoadingScreen loading={loading} onEnter={handleEnterSystem} />

      <Navbar 
        toggleAudio={toggleAudio} 
        isAudioPlaying={isAudioPlaying} 
        toggleLang={toggleLang} 
        lang={lang} 
        content={t.navbar} 
      />

      <main className="relative pt-20">
        <Hero content={t.hero} />
        <Skills content={t.skills} />
        <About content={t.about} />
        <Portfolio content={t.portfolio} />
        <Contact content={t.contact} />
        <Footer content={t.footer} />
      </main>
    </>
  );
}