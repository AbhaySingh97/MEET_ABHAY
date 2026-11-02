import { useState, useRef, useCallback, useEffect } from 'react';
import useSound from '../hooks/useSound';

const RawToReal = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);
  const { playSound } = useSound();

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(Math.round(percentage * 10) / 10);
  }, []);

  const handlePointerDown = (e) => {
    setIsDragging(true);
    if (e.currentTarget && e.currentTarget.setPointerCapture) {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // Fallback gracefully
      }
    }
    handleMove(e.clientX);
    playSound?.('hover', 0.1);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    if (e.currentTarget && e.currentTarget.releasePointerCapture) {
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {
        // Fallback
      }
    }
  };

  useEffect(() => {
    const handleGlobalPointerUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    window.addEventListener('pointerup', handleGlobalPointerUp);
    return () => window.removeEventListener('pointerup', handleGlobalPointerUp);
  }, [isDragging]);

  return (
    <section id="breakdown" className="py-24 border-t border-white/5 relative bg-neutral-950/60">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Explanatory Text */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-mono">
              <span className="w-6 h-[2px] bg-[#dc2626]"></span>
              <span>A LOOK UNDER THE SURFACE</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
              FROM RAW.<br />
              <span className="text-[#dc2626]">TO REAL.</span>
            </h2>

            <div className="space-y-3 text-sm text-neutral-300 leading-relaxed">
              <p className="font-semibold text-white">
                One scene. Layers of craftsmanship.
              </p>
              <p>
                Experience how a 3D environment transitions from raw unlit clay geometry and wireframe meshes into a photorealistic, atmosphere-drenched visual world.
              </p>
              <p className="text-xs text-neutral-400">
                Balancing geometric topology, PBR shader networks, volumetric scattering, and real-time GPU illumination.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-1.5 text-xs font-mono text-neutral-400">
              <p className="text-white font-semibold tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626]"></span>
                <span>NEON DRIFT &amp; ARCHVIZ | 2025</span>
              </p>
              <p className="text-neutral-500">
                PIPELINE: BLENDER • UNREAL ENGINE 5 • SUBSTANCE PAINTER
              </p>
            </div>

            {/* Quick Toggle Presets */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono">
              <button
                type="button"
                onClick={() => {
                  setSliderPosition(15);
                  playSound?.('click');
                }}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  sliderPosition <= 20
                    ? 'bg-[#dc2626] text-white font-bold'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300'
                }`}
              >
                Clay (15%)
              </button>
              <button
                type="button"
                onClick={() => {
                  setSliderPosition(50);
                  playSound?.('click');
                }}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  sliderPosition > 20 && sliderPosition < 80
                    ? 'bg-[#dc2626] text-white font-bold'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300'
                }`}
              >
                Split (50%)
              </button>
              <button
                type="button"
                onClick={() => {
                  setSliderPosition(85);
                  playSound?.('click');
                }}
                className={`px-3 py-1.5 rounded transition-all cursor-pointer ${
                  sliderPosition >= 80
                    ? 'bg-[#dc2626] text-white font-bold'
                    : 'bg-white/5 hover:bg-white/10 text-neutral-300'
                }`}
              >
                Render (85%)
              </button>
            </div>
          </div>

          {/* Right Comparison Slider Container */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              className="relative rounded-2xl overflow-hidden border border-[#dc2626]/50 shadow-2xl comparison-container select-none cursor-ew-resize aspect-[16/10] bg-neutral-900 group touch-none"
            >
              
              {/* Layer 1: Final Render (Full Background Image) */}
              <div className="absolute inset-0 w-full h-full pointer-events-none">
                <img 
                  src="/neon-drift.jpg" 
                  alt="Final Render - Neon Drift" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=1200&q=80";
                  }}
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono tracking-widest uppercase text-white border border-white/20 shadow-lg">
                  FINAL RENDER
                </div>
              </div>

              {/* Layer 2: Solid View / Clay (Clipped via clipPath for 100% pixel-perfect alignment) */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-none transition-none overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
              >
                <img 
                  src="/neon-drift.jpg" 
                  alt="Solid Clay View - Neon Drift" 
                  className="w-full h-full object-cover filter grayscale contrast-150 brightness-75"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=1200&q=80";
                  }}
                />
                
                {/* 3D Wireframe Grid Graphic Overlay to simulate true Solid Topology */}
                <div 
                  className="absolute inset-0 opacity-25 pointer-events-none"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                />

                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono tracking-widest uppercase text-white border border-white/20 shadow-lg">
                  SOLID VIEW / CLAY
                </div>
              </div>

              {/* Draggable Divider Handle */}
              <div 
                className="absolute top-0 bottom-0 w-[2px] bg-[#dc2626] pointer-events-none z-20 flex items-center justify-center transition-none shadow-[0_0_15px_#dc2626]"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-9 h-9 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-2xl text-[10px] font-bold border-2 border-white/50 transform group-hover:scale-110 transition-transform">
                  &lt; &gt;
                </div>
              </div>

            </div>

            {/* Slider Instructions */}
            <div className="flex justify-between items-center mt-3 text-[11px] font-mono text-neutral-400 uppercase tracking-widest px-1">
              <span className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-[#dc2626]"></span>
                <span>DRAG SLIDER TO REVEAL PROCESS</span>
              </span>
              <span>CLAY MESH / FINAL RENDER</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RawToReal;
