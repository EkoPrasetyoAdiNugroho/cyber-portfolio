import { useEffect, useState } from "react";

export default function CyberCursor({ loading }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (loading) return; // Jangan jalankan jika masih loading

    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    const onHover = (e) => setHover(!!e.target.closest('a, button, .cursor-pointer, .card-glass, .hacker-text'));

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onHover);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onHover);
    };
  }, [loading]);

  if (loading) return null;

  return (
    <div 
      className={`cyber-cursor hidden md:block ${hover ? 'hovered' : ''}`} 
      style={{ left: pos.x, top: pos.y }} 
    />
  );
}