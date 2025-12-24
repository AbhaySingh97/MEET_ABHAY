import { motion } from 'framer-motion';
import { useDecryption } from '../hooks/useDecryption';
import { useTypewriter } from '../hooks/useTypewriter'; // Keep for simple text if needed, or remove if unused.
import './Hero.css';

const Hero = () => {
    const greeting = useTypewriter("Hello, I'm ", 80, 300); // Keep typewriter for "Hello, I'm" as acts as setup
    const name = useDecryption("Abhay Singh Chauhan", 50, 1000); // Decrypt name
    const role = useDecryption("3D Artist & Full Stack Developer", 40, 2500); // Decrypt role

    return (
        <section id="home" className="hero">
            <div className="hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>
                        {greeting.displayedText}
                        {!greeting.isComplete && <span className="cursor">|</span>}
                        <span className="highlight">
                            {name.displayedText}
                            {/* Cursor for name is less relevant in decryption mode, but can keep for style if incomplete */}
                        </span>
                    </h2>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: greeting.isComplete ? 1 : 0 }} // Start showing role container roughly when greeting done
                        transition={{ duration: 0.5 }}
                    >
                        {role.displayedText}
                    </motion.h1>
                    <p>Building digital experiences with modern technologies.</p>
                    <motion.a
                        href="#projects"
                        className="cta-btn"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        View Work
                    </motion.a>
                </motion.div>

                <motion.div
                    className="hero-image-container"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 0.8,
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                >
                    <motion.img
                        src="/profile.jpg"
                        alt="Abhay Singh Chauhan"
                        className="hero-img"
                        animate={{
                            boxShadow: [
                                "8px 8px 0px var(--accent-color), -3px -3px 0px var(--secondary-color)",
                                "12px 12px 0px var(--accent-color), -5px -5px 0px var(--secondary-color)",
                                "8px 8px 0px var(--accent-color), -3px -3px 0px var(--secondary-color)"
                            ]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
