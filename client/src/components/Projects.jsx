import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('tech');
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error('Error fetching projects:', err));
    }, []);

    const filteredProjects = projects.filter(p => p.category === activeCategory);

    const openModal = (project) => {
        setSelectedProject(project);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="projects" className="projects">
            <h2 className="section-title">Featured Projects</h2>

            {/* Category Tabs */}
            <div className="category-tabs">
                <button
                    className={`tab-btn ${activeCategory === 'tech' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('tech')}
                >
                    <span className="tab-icon">💻</span>
                    Tech Projects
                </button>
                <button
                    className={`tab-btn ${activeCategory === 'creative' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('creative')}
                >
                    <span className="tab-icon">🎨</span>
                    Creative Works
                </button>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid">
                <AnimatePresence mode="wait">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div
                                onClick={() => openModal(project)}
                                className="project-link"
                            >
                                <img src={project.image} alt={project.title} className="project-img" />
                                <div className="project-info">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <div className="tech-stack">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="tech-tag">{t}</span>
                                        ))}
                                    </div>
                                    <button className="view-details-btn">View Details →</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.8, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.8, y: 50 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close" onClick={closeModal}>×</button>

                            <div className="modal-header">
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    className="modal-img"
                                />
                            </div>

                            <div className="modal-body">
                                <h2>{selectedProject.title}</h2>

                                <div className="modal-tech-stack">
                                    {selectedProject.tech.map((t, i) => (
                                        <span key={i} className="tech-tag">{t}</span>
                                    ))}
                                </div>

                                <div className="modal-description">
                                    {selectedProject.fullDescription.split('\n\n').map((paragraph, i) => (
                                        <p key={i}>{paragraph}</p>
                                    ))}
                                </div>

                                {selectedProject.achievements && (
                                    <div className="modal-achievements">
                                        <h3>Key Highlights</h3>
                                        <ul>
                                            {selectedProject.achievements.map((achievement, i) => (
                                                <li key={i}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {selectedProject.link && selectedProject.link !== '#' && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="modal-external-link"
                                    >
                                        {selectedProject.category === 'tech' ? 'View Live Project →' : 'View on ArtStation →'}
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;

