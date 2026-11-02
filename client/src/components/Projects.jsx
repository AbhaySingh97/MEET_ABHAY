import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, ArrowUpRight, Play, Sparkles, X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import useSound from '../hooks/useSound';

const Projects = () => {
  const [projects, setProjects] = useState(PORTFOLIO_PROJECTS);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const { playSound } = useSound();

  // Try fetching dynamic updates from /api/projects while falling back smoothly
  useEffect(() => {
    fetch('/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error('API unavailable');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Merge dynamic data with category labels if missing
          const merged = data.map((p) => {
            const staticMatch = PORTFOLIO_PROJECTS.find((sp) => sp.id == p.id || sp._id == p._id);
            return {
              ...p,
              id: String(p.id || p._id),
              categoryLabel: p.categoryLabel || staticMatch?.categoryLabel || (p.category === 'tech' ? 'WEB & SYSTEMS' : p.category === '3d' ? '3D & CGI' : 'HYBRID WORK'),
              year: p.year || staticMatch?.year || '2025'
            };
          });
          setProjects(merged);
        }
      })
      .catch(() => {
        // Fallback is already loaded from PORTFOLIO_PROJECTS
      });
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'tech', label: 'Web & Systems' },
    { id: '3d', label: '3D & CGI' },
    { id: 'hybrid', label: 'Tech + 3D' },
    { id: 'iot', label: 'IoT & Hardware' },
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' ||
        project.category?.toLowerCase() === activeCategory.toLowerCase();

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        project.title?.toLowerCase().includes(query) ||
        project.description?.toLowerCase().includes(query) ||
        project.tech?.some((t) => t.toLowerCase().includes(query)) ||
        project.categoryLabel?.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [projects, activeCategory, searchQuery]);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
    playSound?.('modal');
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
    playSound?.('click');
  };

  // Keyboard Escape listener for modal
  useEffect(() => {
    if (!selectedProject) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeProjectModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const ecosystemTools = [
    "REACT 19", "BLENDER", "UNREAL ENGINE 5", "NODE.JS", "THREE.JS", 
    "SUBSTANCE 3D", "ARDUINO / IOT", "MONGODB", "SOCKET.IO", "TYPESCRIPT"
  ];

  return (
    <section id="work" className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#dc2626] font-semibold">
              <span className="w-8 h-[2px] bg-[#dc2626]"></span>
              <span>01 / SELECTED WORK</span>
            </div>
            <h2 className="font-['Bebas_Neue'] text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
              WORK THAT SPEAKS<span className="text-[#dc2626]">.</span>
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm tracking-wide font-mono">
              PROJECTS THAT BLEND ENGINEERING PRECISION WITH VISUAL ARTISTRY
            </p>
          </div>

          <a
            href="#work"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
              playSound?.('click');
            }}
            className="mt-4 md:mt-0 inline-flex items-center space-x-2 text-xs font-semibold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          >
            <span>ALL WORKS ({projects.length})</span>
            <ArrowRight className="w-4 h-4 text-[#dc2626]" />
          </a>
        </div>

        {/* Filter Categories Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-white/10 pb-4 mb-10 gap-4">
          
          {/* Tabs */}
          <div className="flex items-center space-x-6 overflow-x-auto pb-2 scrollbar-none text-xs uppercase tracking-wider font-semibold">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    playSound?.('click');
                  }}
                  className={`pb-2 transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'text-white border-b-2 border-[#dc2626] font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Live Search */}
          <div className="relative w-full lg:w-72">
            <Search className="w-3.5 h-3.5 text-neutral-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, technology, or tag..."
              className="w-full bg-neutral-900/80 border border-white/10 rounded-md py-2 pl-9 pr-4 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-[#dc2626] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Project Cards Grid (3 Columns) */}
        {filteredProjects.length === 0 ? (
          <div className="py-16 text-center text-neutral-500 font-mono text-sm border border-dashed border-white/10 rounded-2xl">
            No projects found matching your search criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const displayIndex = String(index + 1).padStart(2, '0');
              const is3d = project.category === '3d';

              return (
                <article
                  key={project.id || index}
                  onClick={() => openProjectModal(project)}
                  onMouseEnter={() => playSound?.('hover', 0.1)}
                  className="project-card group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-900 border border-white/10 mb-4 transition-all duration-300 group-hover:border-[#dc2626]/50 group-hover:shadow-[0_0_30px_-5px_rgba(220,38,38,0.25)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=800&q=80";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono tracking-wider uppercase text-neutral-300 border border-white/10">
                      {project.categoryLabel || (is3d ? "3D BREAKDOWN" : "FULL STACK")}
                    </div>

                    {/* Bottom Right Hover Action Icon */}
                    <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-[#dc2626]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
                      {is3d ? (
                        <Sparkles className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Play className="w-3.5 h-3.5 text-white fill-current translate-x-0.5" />
                      )}
                    </div>
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <span className="font-['Bebas_Neue'] text-3xl font-bold text-[#dc2626] leading-none">
                        {displayIndex}
                      </span>
                      <div>
                        <h3 className="font-['Bebas_Neue'] text-2xl tracking-wide text-white group-hover:text-[#dc2626] transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-neutral-500 font-mono tracking-wider mt-0.5 uppercase">
                          {project.categoryLabel} • {project.year || '2025'}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#dc2626] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all mt-1" />
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Partner / Client / Tech Marquee Ticker */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 text-xs text-neutral-400">
            <div className="space-y-0.5">
              <span className="text-neutral-500 font-mono uppercase tracking-widest">BEEN PART OF / TOOLS OF THE CRAFT</span>
              <p className="font-semibold text-neutral-300 tracking-wider font-mono">THE BIGGER PICTURE &amp; STACK.</p>
            </div>
            <div className="flex items-center space-x-4 mt-3 sm:mt-0 font-mono text-neutral-400">
              <span>EXPLORE ECOSYSTEM (10+)</span>
              <div className="flex items-center space-x-1 text-neutral-500">
                <button className="p-1 hover:text-white transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                <button className="p-1 hover:text-white transition-colors"><ChevronRight className="w-4 h-4" /></button>
              </div>
            </div>
          </div>

          {/* Logos / Stack Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
            {ecosystemTools.map((tool, i) => (
              <div
                key={i}
                className="h-12 flex items-center justify-center font-['Bebas_Neue'] text-xl font-bold tracking-widest text-neutral-400 hover:text-[#dc2626] border border-white/5 rounded-lg bg-white/[0.01] hover:bg-white/[0.04] transition-all cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div 
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeProjectModal();
              }
            }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#121215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl my-8"
            >
              {/* Close Button */}
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-[#dc2626] text-white flex items-center justify-center border border-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image */}
              <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-black/40"></div>
                
                <div className="absolute bottom-4 left-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#dc2626] bg-black/60 px-2 py-1 rounded border border-white/10">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="font-['Bebas_Neue'] text-3xl md:text-4xl text-white font-bold tracking-wide mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#dc2626] font-bold mb-2">
                    OVERVIEW &amp; STORY
                  </h4>
                  <p className="text-sm text-neutral-300 leading-relaxed whitespace-pre-line">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {/* Achievements */}
                {selectedProject.achievements && selectedProject.achievements.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-widest text-[#dc2626] font-bold mb-2">
                      KEY HIGHLIGHTS &amp; MILESTONES
                    </h4>
                    <ul className="space-y-1.5 text-xs text-neutral-300 font-mono">
                      {selectedProject.achievements.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <span className="text-[#dc2626] font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Pills */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 font-bold mb-2">
                    TECHNOLOGY &amp; TOOLS
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {selectedProject.tech?.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded text-neutral-300 font-mono text-[11px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to={`/project/${selectedProject.id}`}
                    onClick={() => {
                      document.body.style.overflow = 'auto';
                    }}
                    className="inline-flex items-center space-x-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
                  >
                    <span>OPEN FULL PROJECT PAGE</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#dc2626]" />
                  </Link>

                  {selectedProject.link && selectedProject.link !== '#' && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 bg-[#dc2626] hover:bg-red-700 text-white px-5 py-2.5 rounded-md text-xs font-bold tracking-widest uppercase transition-all shadow-lg"
                    >
                      <span>
                        {selectedProject.category === '3d'
                          ? 'VIEW ON ARTSTATION'
                          : 'LAUNCH LIVE PROJECT'}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
