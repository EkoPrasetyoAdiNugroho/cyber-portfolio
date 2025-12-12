export default function Footer({ content }) {
  return (
    <footer className="py-8 border-t border-white/5 bg-black/50 text-center relative z-10 backdrop-blur-md">
      <p className="text-gray-500 text-sm font-mono">
        &copy; 2025 Eko Prasetyo Adi Nugroho. <span className="text-cyan-500 animate-pulse">{content}</span>
      </p>
    </footer>
  );
}