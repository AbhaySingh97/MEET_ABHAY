import { ArrowUpRight, Trophy } from 'lucide-react';
import { AWARDS_LIST } from '../data/portfolioData';
import useSound from '../hooks/useSound';

const Awards = () => {
  const { playSound } = useSound();

  return (
    <section id="awards" className="py-24 border-t border-white/5 relative bg-neutral-950/40">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Award Counter & Laurel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 font-mono">
              <span className="w-6 h-[2px] bg-[#dc2626]"></span>
              <span>RECOGNITION &amp; AWARDS</span>
            </div>
            
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
              THE WORK.<br />
              <span className="text-[#dc2626]">THE RECOGNITION.</span>
            </h2>

            {/* Giant 10+ Laurel Wreath */}
            <div className="flex items-center gap-4 py-4">
              <svg className="w-12 h-16 text-[#dc2626]" viewBox="0 0 24 36" fill="currentColor">
                <path d="M12 0 C10 10 2 12 0 24 C5 22 8 18 10 14 C10 20 6 26 2 30 C8 28 11 22 12 18 Z" />
              </svg>
              <div className="text-center">
                <span className="font-display text-7xl md:text-8xl font-black text-white leading-none red-text-glow">
                  10<span className="text-[#dc2626]">+</span>
                </span>
                <p className="text-xs font-mono tracking-widest uppercase text-[#dc2626] font-bold mt-1">
                  AWARDS &amp; HONORS
                </p>
              </div>
              <svg className="w-12 h-16 text-[#dc2626] scale-x-[-1]" viewBox="0 0 24 36" fill="currentColor">
                <path d="M12 0 C10 10 2 12 0 24 C5 22 8 18 10 14 C10 20 6 26 2 30 C8 28 11 22 12 18 Z" />
              </svg>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed max-w-sm">
              Work crafted with purpose and dedication. Industry honors and competition validations that fuel the drive to innovate further.
            </p>

            <a 
              href="https://www.linkedin.com/in/abhay-singh-chauhan-485706310" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound?.('click')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-white hover:text-[#dc2626] transition-colors pt-2 group"
            >
              <span>VIEW CREDENTIALS &amp; VALIDATION</span>
              <ArrowUpRight className="w-4 h-4 text-[#dc2626] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Column: Awards Table List */}
          <div className="lg:col-span-7">
            <div className="flex justify-between items-center text-xs font-mono text-neutral-400 pb-3 border-b border-white/10 uppercase tracking-widest">
              <span className="flex items-center gap-2">
                <Trophy className="w-3.5 h-3.5 text-[#dc2626]" />
                <span>SELECTED RECOGNITION</span>
              </span>
              <span>2021 — 2025</span>
            </div>

            <div className="divide-y divide-white/5">
              {AWARDS_LIST.map((award) => (
                <div 
                  key={award.id}
                  className="py-5 flex items-center justify-between group hover:bg-white/[0.02] px-3 rounded-lg transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-xs text-[#dc2626] font-bold shrink-0">
                      {award.id}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-[#dc2626] transition-colors font-sans">
                        {award.title}
                      </h4>
                      <p className="text-xs text-neutral-400 font-mono mt-0.5">
                        {award.event}
                      </p>
                    </div>
                  </div>
                  <span className="font-display text-2xl font-bold text-[#dc2626] shrink-0">
                    {award.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Awards;
