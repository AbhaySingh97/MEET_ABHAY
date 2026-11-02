import { Quote, GraduationCap, Wrench, CheckCircle2 } from 'lucide-react';

const About = () => {
  const creativeToolkit = [
    "React 19", "Blender", "Unreal Engine 5", "Three.js",
    "Node.js", "Express", "MongoDB", "Socket.io",
    "Substance Painter", "Python", "IoT / Arduino", "Tailwind CSS",
    "CGI / Lighting", "PBR Shading", "Git & CI/CD", "REST & WebSocket"
  ];

  const steps = [
    {
      num: "01",
      title: "THE CONCEPT",
      desc: "Understanding your vision and core objectives. Establishing the architectural foundation, visual language, and the emotional resonance to convey."
    },
    {
      num: "02",
      title: "THE BLUEPRINT",
      desc: "Drafting system schemas, 3D blockout geometry, wireframe UI, and precision production roadmaps."
    },
    {
      num: "03",
      title: "THE CRAFT",
      desc: "Full-stack engineering, 3D modeling, PBR material synthesis, and real-time state synchronization into a cohesive whole."
    },
    {
      num: "04",
      title: "THE POLISH",
      desc: "Cinematic lighting, benchmark stress-testing, frame rate optimization, and secure production deployment."
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dc2626] font-semibold">
              <span className="w-8 h-[2px] bg-[#dc2626]"></span>
              <span>02 / BEHIND THE FRAMES</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
              NOT JUST CODE.<br />
              A WAY TO TELL <span className="text-[#dc2626]">STORIES.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-neutral-300 leading-relaxed font-sans">
            I'm Abhay Singh Chauhan, a full-stack engineer &amp; 3D artist based in India. Working at the intersection of robust web engineering, 3D CGI, and real-time interactive systems, I combine logical precision with artistic depth to craft stories and systems that endure.
          </p>
        </div>

        {/* 3-Column Layout: Skills, Process Pipeline, Quote Badge */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Education & Skills */}
          <div className="lg:col-span-4 space-y-8">
            <h3 className="font-display text-2xl tracking-wider text-white uppercase border-b border-white/10 pb-2 flex items-center justify-between">
              <span>EDUCATION &amp; SKILLS</span>
              <GraduationCap className="w-5 h-5 text-[#dc2626]" />
            </h3>

            <div className="space-y-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#dc2626] font-bold">
                  HIGHER EDUCATION
                </span>
                <div className="flex justify-between text-sm font-semibold text-white">
                  <span>ABESIT Group of Institutions</span>
                  <span className="text-[#dc2626] font-mono text-xs">2024 — Present</span>
                </div>
                <p className="text-xs text-neutral-400">
                  B.Tech in Computer Science &amp; Artificial Intelligence (CS-AI).
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-white/5">
                <div className="flex justify-between text-sm font-semibold text-white">
                  <span>SSA Vidhyapith</span>
                  <span className="text-neutral-400 font-mono text-xs">CGPA 8.1</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Senior Secondary Education with focus on Science &amp; Computing.
                </p>
              </div>

              <div className="space-y-1 pt-4 border-t border-white/5">
                <div className="flex justify-between text-sm font-semibold text-white">
                  <span>KMCA</span>
                  <span className="text-neutral-400 font-mono text-xs">82% Distinction</span>
                </div>
                <p className="text-xs text-neutral-400">
                  Secondary School Board distinction honors.
                </p>
              </div>
            </div>

            {/* Creative Toolkit Pills */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#dc2626] font-bold">
                  CREATIVE &amp; TECH TOOLKIT
                </span>
                <Wrench className="w-3.5 h-3.5 text-neutral-500" />
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {creativeToolkit.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded bg-neutral-900 border border-white/10 text-neutral-300 font-mono text-[11px] hover:border-[#dc2626]/50 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: 4-Step Pipeline (From Idea to Final Frame) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display text-2xl tracking-wider text-white uppercase border-b border-white/10 pb-2">
              FROM IDEA TO FINAL FRAME
            </h3>

            <div className="space-y-6 relative pl-6 border-l border-[#dc2626]/30">
              {steps.map((step) => (
                <div key={step.num} className="relative space-y-1.5 group">
                  <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#dc2626] ring-4 ring-[#0a0a0c] group-hover:scale-125 transition-transform" />
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[#dc2626] text-2xl font-bold leading-none shrink-0">
                      {step.num}
                    </span>
                    <h4 className="font-semibold text-white text-sm uppercase tracking-wide">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Red Callout Card */}
          <div className="lg:col-span-3">
            <div className="h-full bg-gradient-to-br from-[#991b1b]/70 via-[#121215] to-[#0a0a0c] p-8 rounded-2xl border border-[#dc2626]/40 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#dc2626]/10 rounded-full blur-2xl pointer-events-none" />
              
              <Quote className="w-10 h-10 text-[#dc2626]/50 mb-6 group-hover:text-[#dc2626] transition-colors" />
              
              <p className="text-xl md:text-2xl font-bold text-white leading-snug">
                "From core architecture and storytelling, to cinematic visuals and battle-tested code."
              </p>

              <div className="pt-8 border-t border-white/10 mt-6">
                <span className="font-script text-3xl md:text-4xl text-neutral-100 block">
                  Abhay Singh Chauhan
                </span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 block mt-1">
                  3D ARTIST &amp; ENGINEER
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
