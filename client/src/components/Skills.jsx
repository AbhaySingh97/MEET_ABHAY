import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaCode, FaPaintBrush, FaJs, FaCube, FaPython, FaGitAlt, FaDocker, FaBrush, FaImage } from 'react-icons/fa';
import { SiBlender, SiUnrealengine, SiExpress, SiMongodb, SiCanva, SiFigma, SiSocketdotio, SiThreedotjs, SiVite, SiNextdotjs, SiFastapi, SiPostgresql, SiTailwindcss, SiUnity, SiRedux } from 'react-icons/si';
import SkillTree from './SkillTree';
import './Skills.css';

const Skills = () => {
    const [viewMode, setViewMode] = useState('grid'); // 'tree' or 'grid'

    const techSkills = [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Next.js', icon: <SiNextdotjs color="#000000" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
        { name: 'Express', icon: <SiExpress color="#808080" /> },
        { name: 'FastAPI', icon: <SiFastapi color="#009688" /> },
        { name: 'Python', icon: <FaPython color="#3776AB" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#336791" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
        { name: 'Three.js', icon: <SiThreedotjs color="#000000" /> },
        { name: 'Socket.io', icon: <SiSocketdotio color="#010101" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'Tailwind', icon: <SiTailwindcss color="#06B6D4" /> },
        { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
    ];

    const creativeSkills = [
        { name: '3D Artist', icon: <FaCube color="#FFD700" /> },
        { name: 'Blender', icon: <SiBlender color="#E87D0D" /> },
        { name: 'Unreal Engine', icon: <SiUnrealengine color="#333" /> },
        { name: 'Unity', icon: <SiUnity color="#222" /> },
        { name: 'Substance', icon: <FaBrush color="#FF0000" /> },
        { name: 'Photoshop', icon: <FaImage color="#31A8FF" /> },
        { name: 'UI/UX', icon: <SiFigma color="#F24E1E" /> },
        { name: 'Design', icon: <SiCanva color="#00C4CC" /> },
    ];

    return (
        <section id="skills" className="skills">
            <div className="section-header">
                <h2 className="section-title">Skills & Expertise</h2>
                <div className="view-toggle">
                    <button
                        onClick={() => setViewMode('tree')}
                        className={`toggle-btn ${viewMode === 'tree' ? 'active' : ''}`}
                    >
                        Interactive
                    </button>
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    >
                        Classic
                    </button>
                </div>
            </div>
            <p className="skills-intro">
                My technical stack is a deliberate blend of modern web technologies and high-end creative tools. By mastering both the logical structure of full-stack development and the visual intricacies of 3D modeling, I am able to architect digital solutions that are as powerful as they are beautiful. From real-time state management to optimized 3D rendering, each skill in my toolkit is honed to deliver premium user experiences.
            </p>

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
