import React, { useState } from "react";

export default function Navbar({ toggleAudio, isAudioPlaying, toggleLang, lang, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-black/40 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7] animate-pulse"></div>
          <span className="font-tech text-xl font-bold tracking-wider text-white">
            EKO<span className="text-purple-500">.DEV</span>
          </span>
        </div>

        <div className="flex items-center gap-6">
          
          {/* Menu Desktop */}
          <ul className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            {content.map((item, idx) => {
              const links = ["home", "about", "skills", "portfolio", "contact"];
              return (
                <li key={idx}>
                  <a href={`#${links[idx]}`} className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer text-xs tracking-widest uppercase">
                    {item}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Language Switch */}
          <button 
            onClick={toggleLang}
            className="hidden md:block font-mono text-xs text-cyan-400 border border-cyan-500/50 px-2 py-1 rounded hover:bg-cyan-500/10 transition cursor-pointer"
          >
            {lang === "id" ? "EN" : "ID"}
          </button>

          {/* Audio Button */}
          <button onClick={toggleAudio} className="p-2 border border-white/20 rounded-full hover:bg-white/10 hover:border-cyan-400 transition cursor-pointer z-50 flex items-center justify-center w-10 h-10">
            {isAudioPlaying ? "🔊" : "🔇"}
          </button>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-white border border-white/20 rounded-md hover:bg-white/10 transition">
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-purple-500/30 animate-[slideDown_0.3s_ease-out] shadow-2xl">
          <ul className="flex flex-col p-6 gap-4 font-mono text-sm">
            {content.map((item, idx) => {
               const links = ["home", "about", "skills", "portfolio", "contact"];
               return (
                <li key={idx} className="border-b border-white/5 pb-2">
                  <a href={`#${links[idx]}`} onClick={() => setIsOpen(false)} className="block text-gray-300 hover:text-cyan-400 hover:pl-2 transition-all duration-300">
                    <span className="text-purple-500 mr-2">&gt;</span> {item.toUpperCase()}
                  </a>
                </li>
               )
            })}
            <li className="pt-2">
              <button onClick={() => {toggleLang(); setIsOpen(false);}} className="text-cyan-400 border border-cyan-500/50 px-4 py-2 w-full text-left rounded hover:bg-cyan-500/10">
                Switch Language: <span className="font-bold">{lang === "id" ? "ENGLISH" : "INDONESIA"}</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}