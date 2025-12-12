export default function Contact({ content }) {
  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6 text-center reveal-up">
      <div className="card-glass p-10 md:p-16 rounded-3xl relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/30 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-cyan-600/30 rounded-full blur-[100px] pointer-events-none"></div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">{content.title} <span className="text-purple-500">{content.highlight}</span></h2>
        <p className="text-gray-400 mb-10 text-lg relative z-10 max-w-xl mx-auto">{content.desc}</p>
        <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10 font-mono">
          <a href="mailto:eko081241@gmail.com" className="px-8 py-3 bg-white text-black font-bold rounded hover:bg-cyan-300 transition cursor-pointer">
            <span>[ {content.btn1} ]</span>
          </a>
          <a href="https://wa.me/62882021235766" className="px-8 py-3 border border-white/20 text-white font-bold rounded hover:bg-white/10 hover:border-cyan-500 transition cursor-pointer">
            <span>[ {content.btn2} ]</span>
          </a>
        </div>
      </div>
    </section>
  );
}