import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs, FaCode, FaDatabase, FaServer, FaGamepad } from 'react-icons/fa';
import { SiBlender, SiUnrealengine, SiExpress, SiMongodb, SiCanva, SiFigma, SiSocketdotio, SiThreedotjs } from 'react-icons/si';
import { FaCube, FaLayerGroup, FaPaintBrush } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
    const skills = [
        {
            name: 'React 19',
            icon: <FaReact color="#61DAFB" />,
            category: 'Frontend',
            description: 'Building modern, high-performance web applications with React 19 and Vite.',
            size: 'large'
        },
        {
            name: 'Node.js & Express',
            icon: <FaNodeJs color="#68A063" />,
            category: 'Backend',
            description: 'Scalable server-side solutions and RESTful APIs.',
            size: 'medium'
        },
        {
            name: '3D Artist',
            icon: <FaCube color="#FFD700" />,
            category: 'Creative',
            description: 'Expertise in Blender for high-quality 3D modeling and rendering.',
            size: 'large'
        },
        {
            name: 'Socket.io',
            icon: <SiSocketdotio color="#fff" />,
            category: 'Real-time',
            size: 'small'
        },
        {
            name: 'Three.js',
            icon: <SiThreejs color="#fff" />,
            category: '3D Web',
            size: 'small'
        },
        {
            name: 'Unreal Engine 5',
            icon: <SiUnrealengine color="#fff" />,
            category: 'Game Dev',
            description: 'Creating immersive experiences with UE5.',
            size: 'medium'
        },
        {
            name: 'Full Stack Development',
            icon: <FaCode color="#00FF00" />,
            category: 'Development',
            size: 'medium'
        },
        {
            name: 'MongoDB',
            icon: <SiMongodb color="#47A248" />,
            category: 'Database',
            size: 'small'
        },
        {
            name: 'JavaScript',
            icon: <FaJs color="#F7DF1E" />,
            category: 'Language',
            size: 'small'
        },
        {
            name: 'UI/UX Design',
            icon: <SiFigma color="#F24E1E" />,
            category: 'Design',
            description: 'Designing intuitive and aesthetic user interfaces.',
            size: 'medium'
        }
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Skills & Expertise
                </motion.h2>

                <div className="bento-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            className={`bento-card ${skill.size}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                        >
                            <div className="card-content">
                                <div className="icon-wrapper">
                                    {skill.icon}
                                </div>
                                <div className="text-wrapper">
                                    <span className="category-tag">{skill.category}</span>
                                    <h3>{skill.name}</h3>
                                    {skill.description && <p>{skill.description}</p>}
                                </div>
                            </div>
                            <div className="card-glow"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
