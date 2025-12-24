import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaCode, FaPaintBrush } from 'react-icons/fa';
import { SiBlender, SiUnrealengine, SiExpress, SiMongodb, SiCanva, SiFigma, SiSocketdotio, SiThreedotjs, SiJavascript } from 'react-icons/si';

const SkillTree = () => {
    const [selectedNode, setSelectedNode] = useState(null);

    // Node Configuration
    const nodes = [
        // Center Hubs
        { id: 'fullstack', label: 'Full Stack', icon: <FaCode />, x: 400, y: 300, type: 'core', color: '#FF4500' },
        { id: 'creative', label: 'Creative', icon: <FaPaintBrush />, x: 800, y: 300, type: 'core', color: '#FFD700' },

        // Full Stack Branch
        { id: 'frontend', label: 'Frontend', x: 250, y: 150, type: 'sub', parent: 'fullstack', color: '#61DAFB' },
        { id: 'backend', label: 'Backend', x: 250, y: 450, type: 'sub', parent: 'fullstack', color: '#68A063' },

        // Frontend Leaves
        { id: 'react', label: 'React', icon: <FaReact />, x: 100, y: 100, type: 'leaf', parent: 'frontend', color: '#61DAFB' },
        { id: 'three', label: 'Three.js', icon: <SiThreedotjs />, x: 100, y: 200, type: 'leaf', parent: 'frontend', color: '#000000' },
        { id: 'js', label: 'JS', icon: <SiJavascript />, x: 50, y: 150, type: 'leaf', parent: 'frontend', color: '#F7DF1E' },

        // Backend Leaves
        { id: 'node', label: 'Node.js', icon: <FaNodeJs />, x: 100, y: 400, type: 'leaf', parent: 'backend', color: '#68A063' },
        { id: 'mongo', label: 'MongoDB', icon: <SiMongodb />, x: 100, y: 500, type: 'leaf', parent: 'backend', color: '#47A248' },

        // Creative Branch
        { id: '3d', label: '3D Art', x: 950, y: 150, type: 'sub', parent: 'creative', color: '#E87D0D' },
        { id: 'design', label: 'UI/UX', x: 950, y: 450, type: 'sub', parent: 'creative', color: '#F24E1E' },

        // Creative Leaves
        { id: 'blender', label: 'Blender', icon: <SiBlender />, x: 1100, y: 100, type: 'leaf', parent: '3d', color: '#E87D0D' },
        { id: 'unreal', label: 'Unreal', icon: <SiUnrealengine />, x: 1100, y: 200, type: 'leaf', parent: '3d', color: '#333' },
        { id: 'figma', label: 'Figma', icon: <SiFigma />, x: 1100, y: 400, type: 'leaf', parent: 'design', color: '#F24E1E' },
    ];

    const connections = nodes.filter(n => n.parent).map(node => {
        const parent = nodes.find(p => p.id === node.parent);
        return {
            from: { x: parent.x, y: parent.y },
            to: { x: node.x, y: node.y },
            color: node.color
        };
    });

    return (
        <div className="skill-tree-container"
            style={{
                position: 'relative',
                height: '600px',
                width: '100%',
                overflow: 'hidden',
                background: 'rgba(255, 255, 255, 0.4)', // Light semi-transparent bg
                borderRadius: '20px',
                border: '2px dashed var(--accent-color)', // Dashed border fits retro theme
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)'
            }}>

            {/* SVG Connections - Darker lines for visibility on light bg */}
            <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                {connections.map((line, i) => (
                    <motion.line
                        key={i}
                        x1={line.from.x}
                        y1={line.from.y}
                        x2={line.to.x}
                        y2={line.to.y}
                        stroke="var(--secondary-color)"
                        strokeWidth="3"
                        strokeOpacity="0.4"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                    />
                ))}
            </svg>

            {/* Nodes */}
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="tree-node"
                    style={{
                        position: 'absolute',
                        left: node.x,
                        top: node.y,
                        transform: 'translate(-50%, -50%)',
                        width: node.type === 'core' ? 80 : 60,
                        height: node.type === 'core' ? 80 : 60,
                        borderRadius: '50%',
                        background: 'var(--bg-color)', // Match site background
                        border: `3px solid ${node.color}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        boxShadow: `4px 4px 0px var(--text-color)` // Retro shadow
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.15, transform: 'translate(-50%, -55%)', boxShadow: `6px 6px 0px ${node.color}` }}
                    onClick={() => setSelectedNode(node)}
                >
                    <div style={{ fontSize: node.type === 'core' ? '2rem' : '1.5rem', color: 'var(--text-color)' }}>
                        {node.icon || node.label[0]}
                    </div>
                </motion.div>
            ))}

            {/* Floating label for hover could be added here if needed, or stick to simpler UI */}
            {nodes.map((node) => (
                <div key={`label-${node.id}`} style={{
                    position: 'absolute',
                    left: node.x,
                    top: node.y + 60,
                    transform: 'translateX(-50%)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    color: 'var(--secondary-color)',
                    pointerEvents: 'none',
                    opacity: 0.8
                }}>
                    {node.label}
                </div>
            ))}
        </div>
    );
};

export default SkillTree;
