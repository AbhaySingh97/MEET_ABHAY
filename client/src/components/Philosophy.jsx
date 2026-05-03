import { motion } from 'framer-motion';
import './Philosophy.css';

const Philosophy = () => {
    return (
        <section id="philosophy" className="philosophy">
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Design & Development Philosophy</h2>
                    <div className="philosophy-content">
                        <div className="philosophy-text">
                            <h3>The Intersection of Art and Code</h3>
                            <p>
                                In the rapidly evolving digital landscape, the boundary between aesthetic brilliance and technical robustness is becoming increasingly blurred. My philosophy centers on bridging this gap, leveraging my background as both a 3D Artist and a Full Stack Developer to create experiences that are not only functional but also visually stunning. I believe that every line of code should serve a purpose, and every pixel should contribute to a cohesive narrative.
                            </p>
                            <p>
                                My approach to development is rooted in the principle of "Immersive Utility." This means creating applications that users don't just use, but inhabit. By integrating 3D elements using technologies like Three.js and Unreal Engine with modern web frameworks like React and Node.js, I build interfaces that feel alive and responsive. This synergy allows for a more intuitive user journey, where the interface guides the user naturally through the content.
                            </p>
                            <h3>Technical Excellence and Scalability</h3>
                            <p>
                                Beyond the surface, I am deeply committed to technical excellence. Building a "premium" experience requires a foundation of clean, scalable, and maintainable code. I utilize the MERN stack (MongoDB, Express, React, Node.js) to create high-performance backends that can handle complex data structures while maintaining low latency. My use of Socket.io for real-time interactions ensures that applications feel instantaneous and dynamic.
                            </p>
                            <p>
                                Performance optimization is not an afterthought; it is a core component of my development process. From minimizing bundle sizes in Vite to implementing efficient rendering patterns in React, I ensure that the user experience is smooth across all devices. This commitment to quality extends to my work in 3D modeling and animation, where I focus on creating optimized assets that maintain high fidelity without compromising on performance.
                            </p>
                            <h3>Continuous Learning and Innovation</h3>
                            <p>
                                The tech industry moves at breakneck speed, and staying relevant requires a mindset of continuous growth. I am constantly exploring new frontiers in AI-driven development, advanced 3D rendering techniques, and emerging web standards. Whether it's mastering the latest features of Unreal Engine 5 or experimenting with next-generation CSS architectures, my goal is to always stay at the cutting edge of what's possible in the digital realm.
                            </p>
                            <p>
                                Collaboration and transparency are the pillars of my professional relationships. I believe that the best products are born from open communication and a shared vision. By working closely with clients and stakeholders, I transform abstract ideas into tangible digital realities that exceed expectations and drive meaningful engagement.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Philosophy;
