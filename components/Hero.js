import useTypewriter from "../hooks/useTypewriter";

export default function Hero({ content }) {
  // Gabungkan array role menjadi string untuk efek ketik
  const typingText = useTypewriter(content.role.join(" · "), 80);
  const hackerLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&";

  const handleHackerHover = (e) => {
    let iteration = 0;
    const originalText = e.target.dataset.value;
    if (e.target.interval) clearInterval(e.target.interval);
    e.target.interval = setInterval(() => {
      e.target.innerText = originalText.split("").map((_, i) => {
          if(i < iteration) return originalText[i];
          return hackerLetters[Math.floor(Math.random() * hackerLetters.length)];
        }).join("");
      if(iteration >= originalText.length) clearInterval(e.target.interval);
      iteration += 1 / 3;
    }, 30);
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[150px] animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="relative z-10 text-center max-w-5xl reveal-up">
        <div className="inline-block px-3 py-1 mb-6 border border-cyan-500/30 rounded-full bg-cyan-900/10 backdrop-blur-md">
          <span className="text-cyan-400 text-xs font-mono tracking-widest">{content.tag}</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
          {content.title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 cursor-pointer hacker-text" data-value="EKO PRASETYO" onMouseOver={handleHackerHover}>EKO PRASETYO</span>
        </h1>
        <div className="h-8 md:h-12 mb-8">
          <p className="text-lg md:text-2xl text-gray-300 font-light font-mono">&gt; {typingText}<span className="animate-pulse">_</span></p>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed text-sm md:text-base">{content.desc}</p>
        <div className="flex flex-wrap justify-center gap-5">
          <a href="#portfolio" className="btn-cyber px-8 py-4 rounded-md font-bold tracking-wide uppercase text-sm cursor-pointer">{content.btn1}</a>
          <a href="#contact" className="px-8 py-4 rounded-md text-white border border-white/20 hover:bg-white/5 transition font-bold tracking-wide uppercase text-sm cursor-pointer">{content.btn2}</a>
        </div>
      </div>
    </section>
  );
}