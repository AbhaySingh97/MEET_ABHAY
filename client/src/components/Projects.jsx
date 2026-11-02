import { useState, useEffect, useMemo } from 'react';
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
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#dc2626] font-semibold">
              <span className="w-8 h-[2px] bg-[#dc2626]"></span>
              <span>01 / SELECTED WORK</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-white leading-none">
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
            className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-neutral-400 hover:text-white transition-colors"
          >
            <span>ALL WORKS ({projects.length})</span>
            <ArrowRight className="w-4 h-4 text-[#dc2626]" />
          </a>
        </div>

        {/* Filter Categories Bar & Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between border-b border-white/10 pb-4 mb-10 gap-4">
          
          {/* Tabs */}
          <div className="flex items-center gap-8 overflow-x-auto pb-2 scrollbar-none text-xs uppercase tracking-wider font-semibold">
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
                    <div className="flex items-start gap-3">
                      <span className="font-display text-3xl font-bold text-[#dc2626] leading-none shrink-0">
                        {displayIndex}
                      </span>
                      <div>
                        <h3 className="font-display text-xl tracking-wide text-white group-hover:text-[#dc2626] transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <p className="text-xs text-neutral-500 font-mono tracking-wider mt-0.5">
                          {project.categoryLabel || (is3d ? "3D" : "FULL STACK")} • {project.year || "2025"}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#dc2626] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 mt-1" />
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Partner / Ecosystem Tools Strip */}
        <div className="mt-24 pt-12 border-t border-white/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 text-xs text-neutral-400 gap-3">
            <div className="space-y-0.5">
              <span className="text-neutral-500 font-mono">BEEN PART OF / TOOLS OF THE CRAFT</span>
              <p className="font-semibold text-neutral-300 tracking-wider">THE BIGGER PICTURE &amp; STACK.</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-neutral-400 font-mono text-[11px]">EXPLORE ECOSYSTEM ({ecosystemTools.length}+)</span>
              <div className="flex items-center gap-1 text-neutral-500">
                <ChevronLeft className="w-4 h-4 cursor-pointer hover:text-white" />
                <ChevronRight className="w-4 h-4 cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 items-center">
            {ecosystemTools.map((tool, i) => (
              <div
                key={i}
                className="h-12 flex items-center justify-center font-display text-lg tracking-widest text-neutral-400 hover:text-white bg-white/[0.02] border border-white/5 rounded-lg hover:border-[#dc2626]/40 transition-all cursor-default"
              >
                {tool}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div
          onClick={closeProjectModal}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#121215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Modal Header Image */}
            <div className="relative aspect-video w-full bg-black">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={closeProjectModal}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/70 hover:bg-[#dc2626] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-white border border-white/20">
                {selectedProject.categoryLabel || "FEATURED WORK"}
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8 space-y-6">
              <div>
                <h3 className="font-display text-3xl md:text-4xl text-white font-bold">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-[#dc2626] uppercase tracking-widest mt-1">
                  YEAR {selectedProject.year || '2025'} • {selectedProject.role || 'CORE ARCHITECTURE & DESIGN'}
                </p>
              </div>

              <p className="text-sm md:text-base text-neutral-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {/* Technologies */}
              {selectedProject.tech && (
                <div className="space-y-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block">
                    TECH STACK &amp; PIPELINE
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-neutral-900 border border-white/10 rounded text-xs font-mono text-neutral-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                {selectedProject.live && selectedProject.live !== '#' && (
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSound?.('click')}
                    className="inline-flex items-center gap-2 bg-[#dc2626] hover:bg-red-700 text-white px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {selectedProject.github && selectedProject.github !== '#' && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSound?.('click')}
                    className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white border border-white/10 px-5 py-2.5 rounded text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Inspect Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}

                <Link
                  to={`/project/${selectedProject.id}`}
                  onClick={() => {
                    closeProjectModal();
                    playSound?.('click');
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-white uppercase tracking-wider font-semibold ml-auto"
                >
                  <span>Detailed Case Study</span>
                  <ArrowRight className="w-4 h-4 text-[#dc2626]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
