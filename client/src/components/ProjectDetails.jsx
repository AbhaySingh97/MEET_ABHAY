import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from './SEO';
import './Projects.css'; // Reusing some styles

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('/api/projects')
            .then(res => res.json())
            .then(data => {
                const found = data.find(p => p.id === id || p._id === id);
                setProject(found);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching project:', err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="loading">Loading project details...</div>;
    if (!project) return <div className="error">Project not found. <Link to="/">Go Back</Link></div>;

    return (
        <div className="project-details-page">
            <SEO 
                title={project.title} 
                description={project.description} 
                canonical={`/project/${id}`}
                ogImage={project.image}
            />
            <motion.div 
                className="container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link to="/" className="back-link">← Back to Portfolio</Link>
                
                <div className="project-header">
                    <h1>{project.title}</h1>
                    <div className="project-tags">
                        {project.tech.map((t, i) => (
                            <span key={i} className="tech-tag">{t}</span>
                        ))}
                    </div>
                </div>

                <div className="project-main-content">
                    <div className="project-image-wrapper">
                        <img src={project.image} alt={project.title} className="main-project-img" />
                    </div>
                    
                    <div className="project-info-section">
                        <h2>Overview</h2>
                        <div className="description-text">
                            {project.fullDescription.split('\n\n').map((paragraph, i) => (
                                <p key={i}>{paragraph}</p>
                            ))}
                        </div>

                        {project.achievements && (
                            <div className="highlights-section">
                                <h3>Key Highlights & Achievements</h3>
                                <ul>
                                    {project.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <div className="action-buttons">
                            {project.link && project.link !== '#' && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cta-btn"
                                >
                                    {project.category === 'tech' || project.category === 'hybrid'
                                        ? 'View Live Project'
                                        : 'View on ArtStation'}
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Content Injection for SEO - More text about the project type (Hidden from users) */}
                <div className="seo-content-injection seo-hidden">
                    <h3>Deep Dive into {project.title}</h3>
                    <p>
                        This project represents a significant milestone in my journey as a {project.category === 'tech' ? 'Developer' : '3D Artist'}. 
                        The technical challenges encountered during the development of {project.title} pushed me to explore advanced concepts in {project.tech.join(', ')}. 
                        By focusing on performance and user experience, I was able to create a solution that not only meets the requirements but also provides a premium feel.
                    </p>
                    <p>
                        The architecture of {project.title} was designed with scalability in mind. Whether it was optimizing 3D assets for the web or building efficient API endpoints, every decision was made to ensure long-term viability and ease of maintenance. This project is a testament to my commitment to delivering high-quality, professional results in every endeavor.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
