import React, { useState, useEffect } from "react";

export default function Navbar({ toggleAudio, isAudioPlaying, toggleLang, lang, content }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Mapping ID Section
  const sectionIds = ["hero", "about", "skills", "portfolio", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
        scrolled ? "bg-black/80 backdrop-blur-md border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
        
        {/* --- LOGO (TETAP DI KIRI) --- */}
        <div 
          className="text-2xl font-bold font-tech tracking-wider cursor-pointer group shrink-0" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-white group-hover:text-cyan-400 transition-colors">EKO</span>
          <span className="text-cyan-400 group-hover:text-white transition-colors">.DEV</span>
        </div>

        {/* --- DESKTOP MENU (PINDAH KE KANAN) --- */}
        {/* 'ml-auto' akan mendorong menu ini mentok ke kanan */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          {content.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(sectionIds[index] || "hero")}
              className="relative group py-2"
            >
              <span className="text-sm font-mono tracking-wider text-gray-400 group-hover:text-white transition-colors duration-300 relative z-10">
                {item}
              </span>
              
              {/* Efek Sinar Laser */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 shadow-[0_0_15px_#22d3ee] transition-all duration-300 group-hover:w-full"></span>
              <span className="absolute inset-0 bg-cyan-500/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></span>
            </button>
          ))}
        </div>

        {/* --- KONTROL (AUDIO/BAHASA) --- */}
        {/* Beri jarak 'ml-8' biar tidak terlalu nempel dengan menu */}
        <div className="flex items-center gap-4 ml-8 md:ml-8 ml-auto">
          
          <button 
            onClick={toggleLang}
            className="px-2 py-1 text-xs font-mono border border-white/20 rounded hover:border-cyan-400 hover:text-cyan-400 transition text-gray-400"
          >
            {lang.toUpperCase()}
          </button>

          <button 
            onClick={toggleAudio}
            className={`p-2 rounded-full border transition-all duration-300 ${
              isAudioPlaying 
                ? "border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)]" 
                : "border-gray-600 text-gray-400 hover:border-white hover:text-white"
            }`}
          >
            {isAudioPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            )}
          </button>

          <button 
            className="md:hidden text-white ml-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU --- */}
      <div className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="flex flex-col p-6 gap-4">
          {content.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(sectionIds[index] || "hero")}
              className="text-left text-gray-300 hover:text-cyan-400 font-mono text-sm py-2 border-b border-white/5 hover:pl-2 transition-all duration-300"
            >
              <span className="mr-2 text-cyan-400 opacity-50">&gt;</span>
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}