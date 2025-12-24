import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ children, className }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth out the rotation
    const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

    // Calculate rotation: 
    // Mouse on left -> rotate Y negative (tilt left)
    // Mouse on top -> rotate X positive (tilt up)
    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-7deg", "7deg"]);

    // Calculate glare opacity based on distance from center
    const glareOpacity = useTransform(mouseX, [-0.5, 0.5], [0, 0.4]);
    const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);


    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Get mouse position relative to card center (-0.5 to 0.5)
        // 0.5 = right/bottom edge, -0.5 = left/top edge
        const width = rect.width;
        const height = rect.height;

        const mouseXRel = e.clientX - rect.left;
        const mouseYRel = e.clientY - rect.top;

        const xPct = mouseXRel / width - 0.5;
        const yPct = mouseYRel / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative will-change-transform ${className}`}
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
            >
                {children}
            </div>

            {/* Glare Effect */}
            <motion.div
                style={{
                    opacity: glareOpacity,
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.3) 0%, transparent 80%)`,
                    pointerEvents: "none",
                }}
                className="absolute inset-0 rounded-xl z-20 mix-blend-overlay"
            />
        </motion.div>
    );
};

export default TiltCard;
