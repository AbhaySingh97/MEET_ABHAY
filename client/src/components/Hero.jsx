import { motion } from 'framer-motion';
import { useTypewriter } from '../hooks/useTypewriter';
import './Hero.css';

const Hero = () => {
    const greeting = useTypewriter("Hello, I'm ", 80, 300);
    const name = useTypewriter("Abhay Singh Chauhan", 100, 1500);
    const role = useTypewriter("3D Artist & Full Stack Developer", 80, 3500);

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
                            {greeting.isComplete && !name.isComplete && <span className="cursor">|</span>}
                        </span>
                    </h2>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: name.isComplete ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {role.displayedText}
                        {name.isComplete && !role.isComplete && <span className="cursor">|</span>}
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
