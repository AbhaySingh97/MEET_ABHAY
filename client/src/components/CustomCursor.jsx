import { useState, useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
    const [particles, setParticles] = useState([]);
    const particlesRef = useRef([]);
    const animationFrameId = useRef();

    useEffect(() => {
        const addParticle = (x, y, burst = false) => {
            const count = burst ? 12 : 1;
            const newParticles = [];

            for (let i = 0; i < count; i++) {
                const angle = Math.random() * Math.PI * 2;
                const velocity = burst ? Math.random() * 4 + 2 : Math.random() * 2;
                const life = burst ? 1.5 : 1;

                newParticles.push({
                    id: Math.random(),
                    x,
                    y,
                    vx: Math.cos(angle) * velocity,
                    vy: Math.sin(angle) * velocity,
                    life,
                    color: `hsl(${Math.random() * 360}, 100%, 70%)`,
                    size: Math.random() * 4 + 2
                });
            }

            particlesRef.current = [...particlesRef.current, ...newParticles];

            // Start animation if not running
            if (!animationFrameId.current) {
                animate();
            }
        };

        const animate = () => {
            if (particlesRef.current.length === 0) {
                animationFrameId.current = null;
                setParticles([]); // Clear state once
                return;
            }

            particlesRef.current = particlesRef.current
                .map(p => ({
                    ...p,
                    x: p.x + p.vx,
                    y: p.y + p.vy + 0.5, // Gravity
                    life: p.life - 0.02
                }))
                .filter(p => p.life > 0);

            setParticles([...particlesRef.current]);
            animationFrameId.current = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            if (Math.random() > 0.5) {
                addParticle(e.clientX, e.clientY);
            }
        };

        const handleClick = (e) => {
            addParticle(e.clientX, e.clientY, true);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []);

    if (particles.length === 0) return null;

    return (
        <div className="cursor-container">
            {particles.map(p => (
                <div
                    key={p.id}
                    className="sprinkle"
                    style={{
                        left: p.x,
                        top: p.y,
                        backgroundColor: p.color,
                        width: p.size,
                        height: p.size,
                        opacity: p.life
                    }}
                />
            ))}
        </div>
    );
};

export default CustomCursor;
