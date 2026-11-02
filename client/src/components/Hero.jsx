import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, MapPin, Download, ArrowUpRight } from 'lucide-react';
import useSound from '../hooks/useSound';

const Hero = () => {
  const { playSound } = useSound();

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-between overflow-hidden">
      
      {/* Hero Top Subheaders */}
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs tracking-widest font-semibold uppercase text-neutral-400">
        <div className="space-y-0.5">
          <p className="text-[#dc2626] font-bold">3D ARTIST / FULL STACK DEVELOPER</p>
          <p className="text-neutral-500">IMMERSIVE VISUALS &amp; ROBUST ARCHITECTURE</p>
        </div>
        <div className="flex items-center space-x-2 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-full">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-neutral-300 text-[11px] font-mono tracking-wider">AVAILABLE FOR COLLABORATION</span>
        </div>
      </div>

      {/* MAIN HERO STAGE (Layered Typography + Center Subject) */}
      <div className="relative w-full max-w-7xl mx-auto px-6 py-8 my-auto">
        
        {/* LAYER 1: Giant Background "PORTFOLIO" Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <h1 className="hero-big-text font-['Bebas_Neue'] font-extrabold text-[#b91c1c] opacity-80 red-text-glow tracking-tight text-center">
            PORTFOLIO
          </h1>
        </div>

        {/* Ambient Red Rim Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#dc2626]/20 rounded-full blur-[140px] pointer-events-none z-0"></div>

        {/* LAYER 2: Grid Layout (Left Content, Center Subject Silhouette, Right Stats) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[520px]">
          
          {/* LEFT COLUMN: Intro Bio & CTAs */}
          <div className="lg:col-span-4 space-y-6 pt-4">
            <div className="relative inline-block">
              <span className="font-['Caveat'] text-3xl md:text-4xl text-neutral-200 block -rotate-3 mb-1">
                Hello, I'm
              </span>
              <h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl font-bold tracking-tight text-white leading-none">
                ABHAY<span className="text-[#dc2626]">.</span>
              </h2>
              <p className="font-['Bebas_Neue'] text-xl md:text-2xl tracking-widest text-[#dc2626] font-bold mt-1">
                3D ARTIST &amp; FULL STACK DEV
              </p>
            </div>

            <p className="text-neutral-300 text-sm md:text-base leading-relaxed max-w-sm">
              Merging high-fidelity 3D artistry with cutting-edge full-stack engineering. Transforming complex requirements into unforgettable, high-performance digital experiences.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a 
                href="#work" 
                onClick={() => playSound?.('click')}
                className="inline-flex items-center space-x-2 bg-[#dc2626] hover:bg-red-700 text-white px-6 py-3.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all transform hover:scale-[1.02] shadow-lg shadow-red-950/40"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
              </a>
              <a 
                href="#breakdown" 
                onClick={() => playSound?.('click')}
                className="inline-flex items-center space-x-1.5 text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors py-3 px-2"
              >
                <span>Raw to Real</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#dc2626]" />
              </a>
            </div>

            <div className="pt-4 flex items-center space-x-2 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#dc2626]" />
              <span className="uppercase tracking-widest">UTTAR PRADESH, INDIA / REMOTE</span>
            </div>
          </div>

          {/* CENTER COLUMN: Visual Subject / Cutout Portrait */}
          <div className="lg:col-span-4 relative flex items-center justify-center">
            <div className="relative w-full max-w-[340px] md:max-w-[400px] h-[460px] md:h-[540px] flex items-end justify-center">
              
              {/* Cutout / High Quality Stylized Portrait SVG & Masked Visual */}
              <div className="relative w-full h-full flex items-end justify-center overflow-visible">
                <img 
                  src="/profile.jpg" 
                  alt="Abhay Singh Chauhan - 3D Artist & Full Stack Developer" 
                  className="w-full h-full object-cover object-top rounded-2xl filter contrast-125 brightness-95 shadow-2xl border border-white/10"
                  style={{
                    maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                  }}
                  onError={(e) => {
                    // Fallback to high quality creative visual if profile.jpg fails to load
                    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=700&h=900&q=80";
                  }}
                />
                
                {/* Subtle red rim-light overlay on image */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#dc2626]/40 pointer-events-none"></div>

                {/* Floating Tag Badge */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0a0a0c]/90 backdrop-blur-md border border-[#dc2626]/40 px-4 py-1.5 rounded-full shadow-xl flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-pulse"></span>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-white font-semibold">
                    ABHAY S. CHAUHAN
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN: Quotation & Live Counter Stats */}
          <div className="lg:col-span-4 lg:pl-10 space-y-8">
            
            {/* Micro quote */}
            <div className="flex items-start space-x-3 text-neutral-300 bg-white/[0.02] p-4 rounded-xl border border-white/5">
              <Sparkles className="w-5 h-5 text-[#dc2626] flex-shrink-0 mt-0.5" />
              <p className="text-sm font-medium leading-snug">
                Every frame. A distinct feeling.<br />
                Every line of code. Built for scale.
              </p>
            </div>

            {/* Live Numbers Stack */}
            <div className="space-y-6 border-t border-b border-white/10 py-6">
              
              {/* Stat 1 */}
              <div className="flex items-baseline space-x-4 group">
                <span className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#dc2626] font-bold group-hover:scale-105 transition-transform">
                  3+
                </span>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                  YEARS IN 3D &amp;<br />TECH INDUSTRY
                </p>
              </div>

              {/* Stat 2 */}
              <div className="flex items-baseline space-x-4 group">
                <span className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#dc2626] font-bold group-hover:scale-105 transition-transform">
                  15+
                </span>
                <p className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                  WEB PROJECTS &amp;<br />3D CGI WORKS
                </p>
              </div>

              {/* Stat 3 */}
              <div className="flex items-baseline space-x-4 group">
                <span className="font-['Bebas_Neue'] text-5xl md:text-6xl text-[#dc2626] font-bold group-hover:scale-105 transition-transform">
                  10+
                </span>
                <a 
                  href="#awards" 
                  onClick={() => playSound?.('click')}
                  className="group flex items-center space-x-1.5 text-xs uppercase tracking-widest text-neutral-300 hover:text-[#dc2626] font-medium transition-colors"
                >
                  <span>AWARDS WON</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#dc2626] group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>

            {/* Download CV Link */}
            <a 
              href="mailto:contact@abhay.com?subject=CV%20Request%20-%20Abhay%20Singh%20Chauhan" 
              onClick={() => playSound?.('click')}
              className="inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-neutral-300 hover:text-[#dc2626] transition-colors"
            >
              <Download className="w-4 h-4 text-[#dc2626]" />
              <span>DOWNLOAD RESUME / CV</span>
            </a>

          </div>

        </div>
      </div>

      {/* Bottom Anchor Indicator */}
      <div className="max-w-7xl mx-auto w-full px-6 flex justify-between items-center text-xs text-neutral-500 pt-4 border-t border-white/5">
        <span className="tracking-widest uppercase font-mono">SCROLL TO EXPLORE</span>
        <span className="font-mono text-neutral-600">01 / 06</span>
      </div>
    </section>
  );
};

export default Hero;
