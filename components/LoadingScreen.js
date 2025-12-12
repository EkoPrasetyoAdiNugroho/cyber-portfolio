import { useEffect, useState } from "react";

export default function LoadingScreen({ loading, onEnter }) {
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (loading) {
      const t = setTimeout(() => setShowBtn(true), 2500);
      return () => clearTimeout(t);
    }
  }, [loading]);

  return (
    <div className={`fixed inset-0 bg-black z-[9999] flex flex-col items-center justify-center transition-all duration-700 px-6 ${!loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      
      <div className="glitch-wrapper mb-8 text-center max-w-full">
        <h1 
          className="glitch !text-4xl md:!text-6xl font-bold tracking-widest break-words w-full" 
          data-text="SYSTEM_INIT"
        >
          SYSTEM_INIT
        </h1>
      </div>
      
      <div className="w-full max-w-[300px] h-2 bg-gray-900 rounded-full overflow-hidden border border-white/10 relative shadow-[0_0_20px_rgba(0,0,0,0.8)] mb-8">
        <div className="h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-[fill-bar_2.5s_cubic-bezier(0.2,0.8,0.2,1)_forwards]"></div>
      </div>

      {!showBtn ? (
         <div className="font-mono text-[10px] md:text-xs flex flex-col items-center gap-2 text-center">
           <span className="text-cyan-500 animate-pulse">&gt; ESTABLISHING SECURE CONNECTION...</span>
           <span className="text-purple-500 opacity-70">&gt; LOADING ASSETS... OK</span>
         </div>
      ) : (
         <button 
           onClick={onEnter}
           className="w-full max-w-[300px] px-6 py-3 border border-neon-secondary text-neon-secondary font-tech tracking-widest hover:bg-cyan-500/20 hover:shadow-[0_0_20px_rgba(0,234,255,0.5)] transition-all duration-300 animate-pulse cursor-pointer text-xs md:text-sm rounded"
           style={{ color: '#00eaff', borderColor: '#00eaff' }}
         >
           [ ACCESS GRANTED: ENTER ]
         </button>
      )}
    </div>
  );
}