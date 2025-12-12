import SpotlightCard from "./SpotlightCard";

export default function Portfolio({ content }) {
  return (
    <section id="portfolio" className="py-24 max-w-7xl mx-auto px-6 reveal-up">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            {content.title} <span className="text-cyan-400">{content.highlight}</span>
          </h2>
          <p className="text-gray-400">{content.subtitle}</p>
        </div>
        <a href="#" className="text-purple-400 hover:text-white transition mt-4 md:mt-0 font-mono text-sm cursor-pointer">&gt; {content.link}</a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.items.map((item, idx) => (
          <SpotlightCard key={idx} className="group cursor-pointer">
            
            {/* AREA GAMBAR (DIPERBAIKI) */}
            <div className="h-48 w-full relative overflow-hidden bg-gray-800">
               {/* 1. Tampilkan Gambar */}
               <img 
                 src={item.img} 
                 alt={item.t} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />

               {/* 2. Overlay Ungu (Hilang saat hover biar gambar jelas) */}
               <div className="absolute inset-0 bg-purple-900/40 mix-blend-overlay group-hover:opacity-0 transition duration-500"></div>
               
               {/* 3. Shadow Hitam (Hilang saat hover) */}
               <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition duration-500"></div>

               {/* 4. Indikator di Pojok Kanan Atas */}
               <div className="absolute top-4 right-4 p-2 bg-black/50 rounded-full backdrop-blur-sm border border-white/10">
                 <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
               </div>
            </div>

            {/* AREA KONTEN (Teks & Tag) */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition font-tech">{item.t}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">{item.d}</p>
              
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span key={i} className="px-2 py-1 text-[10px] font-mono border border-white/10 bg-white/5 rounded text-gray-300">{t}</span>
                ))}
              </div>
            </div>

            {/* Garis Bawah Dekorasi */}
            <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-500 group-hover:w-full"></div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}