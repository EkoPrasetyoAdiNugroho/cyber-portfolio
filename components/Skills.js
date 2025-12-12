import { skillsList } from "../data/content";

export default function Skills({ content }) {
  const revSkills = [...skillsList].reverse();
  
  return (
    <section id="skills" className="py-20 relative reveal-up">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"><span className="text-cyan-400">#</span> {content.title}</h2>
         <p className="text-gray-400">{content.desc}</p>
      </div>
      <div className="marquee-container mb-6">
        <div className="marquee-track">
          {[...skillsList, ...skillsList].map((s, i) => (
            <div key={i} className="skill-item"><span className="text-cyan-500">&gt;</span><span className={`font-bold ${s.c}`}>{s.n}</span></div>
          ))}
        </div>
      </div>
      <div className="marquee-container">
        <div className="marquee-track-reverse">
          {[...revSkills, ...revSkills].map((s, i) => (
            <div key={i + 'rev'} className="skill-item"><span className="text-purple-500">&gt;</span><span className={`font-bold ${s.c}`}>{s.n}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}