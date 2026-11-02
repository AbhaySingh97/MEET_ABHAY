import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';
import SEO from './SEO';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(() => {
    return PORTFOLIO_PROJECTS.find((p) => String(p.id) === String(id)) || null;
  });
  const [loading, setLoading] = useState(!project);

  useEffect(() => {
    fetch('/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error('API unavailable');
        return res.json();
      })
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(id) || String(p._id) === String(id));
        if (found) {
          setProject(found);
        }
      })
      .catch(() => {
        // Fallback already assigned in initial state
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center text-neutral-400 font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#dc2626] animate-ping"></span>
          <span>Loading project details...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen pt-32 flex flex-col items-center justify-center gap-4 text-center px-6">
        <h2 className="font-display text-4xl text-white">Project Not Found</h2>
        <p className="text-sm text-neutral-400 font-mono">The requested project could not be located.</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-5 py-2.5 rounded-md text-xs font-mono uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Portfolio</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6">
      <SEO
        title={project.title}
        description={project.description}
        canonical={`/project/${id}`}
        ogImage={project.image}
      />

      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-[#dc2626] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 text-[#dc2626]" />
          <span>BACK TO PORTFOLIO</span>
        </Link>

        {/* Project Header */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-3 text-xs font-mono uppercase text-[#dc2626]">
            <span className="w-6 h-[2px] bg-[#dc2626]"></span>
            <span>{project.categoryLabel || project.category?.toUpperCase()}</span>
            <span>•</span>
            <span className="text-neutral-400">{project.year || '2025'}</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold text-white tracking-wide leading-none">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tech?.map((t, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded text-neutral-300 font-mono text-[11px]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Project Banner Image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = "https://images.unsplash.com/photo-1542751371-adc38448a05e?fit=crop&w=1200&q=80";
            }}
          />
        </div>

        {/* Project Content Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Story & Overview */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-display text-3xl text-white tracking-wide border-b border-white/10 pb-2">
              OVERVIEW &amp; STORY
            </h2>
            <div className="text-sm text-neutral-300 leading-relaxed space-y-4 whitespace-pre-line font-sans">
              {(project.fullDescription || project.description).split('\n\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {project.achievements && project.achievements.length > 0 && (
              <div className="pt-6">
                <h3 className="font-display text-2xl text-[#dc2626] tracking-wide mb-3">
                  KEY HIGHLIGHTS &amp; ACHIEVEMENTS
                </h3>
                <ul className="space-y-2 text-xs font-mono text-neutral-300">
                  {project.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#dc2626] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar Info Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#121215] border border-white/10 rounded-2xl p-6 space-y-6 shadow-xl">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block mb-1">
                  PROJECT CATEGORY
                </span>
                <span className="text-sm font-semibold text-white">
                  {project.categoryLabel || project.category}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 block mb-1">
                  ROLE &amp; FOCUS
                </span>
                <span className="text-sm font-semibold text-white">
                  {project.category === '3d'
                    ? '3D Modeling, Lighting & Rendering'
                    : 'Architecture, Frontend & Full Stack Engineering'}
                </span>
              </div>

              {project.link && project.link !== '#' && (
                <div className="pt-4 border-t border-white/10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-red-700 text-white py-3 rounded-lg text-xs font-bold tracking-widest uppercase transition-colors shadow-lg"
                  >
                    <span>
                      {project.category === '3d' ? 'VIEW ON ARTSTATION' : 'LAUNCH LIVE DEMO'}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>

        </div>

      </motion.div>
    </div>
  );
};

export default ProjectDetails;
