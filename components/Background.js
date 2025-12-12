export default function Background() {
  return (
    <>
      <div className="fixed-bg-gradient" />
      <div className="fixed-cyber-grid" />
      <div className="particles-container">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="particle" style={{ 
            left: `${10 + i * 20}%`, 
            animationDuration: `${8 + i * 2}s`, 
            animationDelay: `${i}s` 
          }} />
        ))}
      </div>
    </>
  );
}