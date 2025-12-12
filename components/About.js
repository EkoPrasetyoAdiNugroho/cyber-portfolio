import React, { useState, useRef, useEffect } from "react";

export default function About({ content }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  
  const cardRef = useRef(null);
  const sectionRef = useRef(null);

  // 1. Logic Intersection Observer (Animasi restart setiap kali masuk layar)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // 2. Logic Mouse Move (Parallax 3D)
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Efek putar 3D
    const rotateX = ((y - centerY) / centerY) * -20;
    const rotateY = ((x - centerX) / centerX) * 20;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section id="about" className="py-24 relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-center">
        
        {/* --- BAGIAN FOTO (SCANNER EFFECT) --- */}
        <div className="w-full md:w-1/3 perspective-container">
          <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full aspect-square max-w-sm mx-auto group rotate-3d-card rounded-2xl cursor-pointer z-10"
            style={{ 
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              perspective: '1000px'
            }}
          >
            {/* Border Belakang */}
            <div className="absolute inset-0 border-2 border-purple-500/50 rounded-2xl transform translate-z-[-20px] scale-105 group-hover:border-cyan-400/50 transition duration-300"></div>
            
            {/* Container Gambar */}
            <div className="absolute inset-0 bg-gray-900/80 rounded-2xl overflow-hidden card-glass shadow-[0_0_50px_rgba(168,85,247,0.15)] backdrop-blur-sm border border-white/10">
              
              {/* LOGIKA ANIMASI SCANNER:
                  Jika terlihat (isVisible), tampilkan Beam Laser dan Foto dengan efek muncul halus
              */}
              {isVisible && (
                <>
                  {/* INI GARIS LASER SCANNERNYA */}
                  <div className="scanner-beam"></div>

                  {/* FOTO UTAMA (Muncul pelan/particle style, bukan glitch kasar) */}
                  <img 
                    src="/eko.jpg" 
                    alt="Eko Prasetyo" 
                    className="w-full h-full object-cover particle-entrance" 
                  />
                </>
              )}

              {/* Jika tidak terlihat, kosongkan agar animasi bisa restart nanti */}
              {!isVisible && <div className="w-full h-full bg-black opacity-0"></div>}
              
              {/* Overlay Dekorasi */}
               <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-purple-500/10 pointer-events-none"></div>
               
               {/* Label Status */}
               <div className="absolute bottom-4 left-0 w-full text-center">
                 <p className="text-[10px] font-mono text-cyan-400 tracking-[0.3em] animate-pulse">
                   {isVisible ? "IDENTITY_CONFIRMED" : "SCANNING..."}
                 </p>
               </div>
            </div>
          </div>
        </div>
        
        {/* --- BAGIAN TEKS --- */}
        <div className="w-full md:w-2/3">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {content.title} <span className="text-purple-400">{content.highlight}</span>
          </h2>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            {content.desc1}
          </p>

          <h3 className="text-xl font-tech text-cyan-400 mb-6 border-b border-white/10 pb-2 inline-block">
            {content.timelineTitle}
          </h3>

          <div className="relative pl-4">
            <div className="timeline-line"></div>
            {content.timeline.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>
                <span className="text-xs font-mono text-purple-400 mb-1 block">{item.year}</span>
                <h4 className="text-lg font-bold text-white">{item.title}</h4>
                <p className="text-sm text-cyan-300 mb-2">{item.place}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}