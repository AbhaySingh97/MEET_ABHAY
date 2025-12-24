import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaCode, FaPaintBrush, FaJs, FaCube } from 'react-icons/fa';
import { SiBlender, SiUnrealengine, SiExpress, SiMongodb, SiCanva, SiFigma, SiSocketdotio, SiThreedotjs } from 'react-icons/si';
import SkillTree from './SkillTree';
import './Skills.css';

const Skills = () => {
    const [viewMode, setViewMode] = useState('tree'); // 'tree' or 'grid'

    const techSkills = [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
        { name: 'Express', icon: <SiExpress color="#808080" /> },
        { name: 'Socket.io', icon: <SiSocketdotio color="#010101" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'Three.js', icon: <SiThreedotjs color="#000000" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'Full Stack', icon: <FaCode color="#FF4500" /> },
    ];

    const creativeSkills = [
        { name: '3D Artist', icon: <FaCube color="#FFD700" /> },
        { name: 'Blender', icon: <SiBlender color="#E87D0D" /> },
        { name: 'Unreal Engine', icon: <SiUnrealengine color="#333" /> },
        { name: 'UI/UX', icon: <SiFigma color="#F24E1E" /> },
        { name: 'Design', icon: <SiCanva color="#00C4CC" /> },
    ];

    return (
        <section id="skills" className="skills">
            <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 className="section-title" style={{ margin: 0 }}>Skills & Expertise</h2>
                <div className="view-toggle">
                    <button
                        onClick={() => setViewMode('tree')}
                        className={`toggle-btn ${viewMode === 'tree' ? 'active' : ''}`}
                        style={{ padding: '0.5rem 1rem', background: viewMode === 'tree' ? 'var(--accent-color)' : 'transparent', border: '1px solid var(--accent-color)', borderRadius: '5px 0 0 5px', cursor: 'pointer', color: '#fff' }}
                    >
                        Interactive
                    </button>
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                        style={{ padding: '0.5rem 1rem', background: viewMode === 'grid' ? 'var(--accent-color)' : 'transparent', border: '1px solid var(--accent-color)', borderRadius: '0 5px 5px 0', cursor: 'pointer', color: '#fff' }}
                    >
                        Classic
                    </button>
                </div>
            </div>

            {viewMode === 'tree' ? (
                <SkillTree />
            ) : (
                <>
                    {/* Tech Skills Section */}
                    <div className="skills-category">
                        <h3 className="category-title">Technical Skills</h3>
                        <div className="skills-grid">
                            {techSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="skill-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="icon">{skill.icon}</div>
                                    <p>{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Creative Skills Section */}
                    <div className="skills-category">
                        <h3 className="category-title">Creative Skills</h3>
                        <div className="skills-grid">
                            {creativeSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    className="skill-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="icon">{skill.icon}</div>
                                    <p>{skill.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Skills;
