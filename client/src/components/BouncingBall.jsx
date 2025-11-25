import { motion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import './BouncingBall.css';

const BouncingBall = () => {
    // Scroll physics
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);

    // Map scroll velocity to Y position (falling effect)
    const y = useSpring(
        useTransform(scrollVelocity, [-2000, 2000], [-300, 300]),
        { stiffness: 200, damping: 30 }
    );

    return (
        <motion.div
            className="bouncing-ball"
            style={{
                y, // Bind Y movement to scroll velocity
                x: '-50%' // Center horizontally
            }}
        >
            <div className="ball-core"></div>
            <div className="ball-glow"></div>
        </motion.div>
    );
};

export default BouncingBall;
