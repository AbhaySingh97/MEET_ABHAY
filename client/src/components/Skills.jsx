import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaCode, FaDatabase } from 'react-icons/fa';
import { SiBlender, SiUnrealengine, SiExpress, SiMongodb, SiCanva, SiFigma } from 'react-icons/si';
import { FaCube, FaLayerGroup, FaPaintBrush } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const techSkills = [
        { name: 'React', icon: <FaReact color="#61DAFB" /> },
        { name: 'Node.js', icon: <FaNodeJs color="#68A063" /> },
        { name: 'Express', icon: <SiExpress color="#fff" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'HTML', icon: <FaHtml5 color="#E34F26" /> },
        { name: 'CSS', icon: <FaCss3 color="#1572B6" /> },
        { name: 'JavaScript', icon: <FaJs color="#F7DF1E" /> },
        { name: 'Full Stack Dev', icon: <FaCode color="#00FF00" /> },
    ];

    const creativeSkills = [
        { name: '3D Artist', icon: <FaCube color="#FFD700" /> },
        { name: '3D Generalist', icon: <FaLayerGroup color="#FF69B4" /> },
        { name: 'Blender', icon: <SiBlender color="#E87D0D" /> },
        { name: 'Unreal Engine 5', icon: <SiUnrealengine color="#fff" /> },
        { name: 'Canva', icon: <SiCanva color="#00C4CC" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
    ];

    return (
        <section id="skills" className="skills">
            <h2 className="section-title">Skills & Expertise</h2>

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
        </section>
    );
};

export default Skills;
