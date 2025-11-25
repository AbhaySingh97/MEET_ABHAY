import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { title: 'Home', href: '#home' },
        { title: 'Skills', href: '#skills' },
        { title: 'Journey', href: '#journey' },
        { title: 'Projects', href: '#projects' },
        { title: 'Contact', href: '#contact' },
    ];

    const getRandomColor = () => {
        const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0000', '#00ff00', '#7000ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <motion.h1
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="logo"
                    whileHover={{ color: getRandomColor() }}
                >
                    MEET ABHAY
                </motion.h1>

                <div className="desktop-menu">
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={index}
                            href={link.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.1,
                                color: getRandomColor(),
                                textShadow: "0 0 8px rgba(255,255,255,0.5)"
                            }}
                        >
                            {link.title}
                        </motion.a>
                    ))}
                </div>

                <div className="mobile-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        {navLinks.map((link, index) => (
                            <a key={index} href={link.href} onClick={toggleMenu}>
                                {link.title}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
