import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaCode, FaHistory, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';
import logo from '../assets/logo.png';
import './Navbar.css';
import ThemeSwitcher from './ThemeSwitcher';
import MagneticButton from './MagneticButton';

const Navbar = () => {
    const navLinks = [
        { title: 'Home', href: '#home', icon: <FaHome /> },
        { title: 'Skills', href: '#skills', icon: <FaCode /> },
        { title: 'Journey', href: '#journey', icon: <FaHistory /> },
        { title: 'Projects', href: '#projects', icon: <FaProjectDiagram /> },
        { title: 'Contact', href: '#contact', icon: <FaEnvelope /> },
    ];

    const getRandomColor = () => {
        const colors = ['#ff00ff', '#00ffff', '#ffff00', '#ff0000', '#00ff00', '#7000ff'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <div className="logo-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <motion.img
                            src={logo}
                            alt="meet_abhay logo"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="logo-img"
                            style={{ height: '40px', width: 'auto' }}
                        />
                        <motion.h1
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="logo"
                            whileHover={{ color: getRandomColor() }}
                        >
                            meet_abhay
                        </motion.h1>
                    </div>

                    <div className="navbar-right">
                        <div className="desktop-menu">
                            {navLinks.map((link, index) => (
                                <MagneticButton key={index}>
                                    <motion.a
                                        href={link.href}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{
                                            color: getRandomColor(),
                                            textShadow: "0 0 8px rgba(255,255,255,0.5)"
                                        }}
                                    >
                                        {link.title}
                                    </motion.a>
                                </MagneticButton>
                            ))}
                        </div>

                        <ThemeSwitcher />
                    </div>
                </div>
            </nav>

            {/* Bottom Navigation for Mobile */}
            <div className="bottom-nav">
                {navLinks.map((link, index) => (
                    <a key={index} href={link.href} className="bottom-nav-item">
                        <span className="bottom-nav-icon">{link.icon}</span>
                        <span className="bottom-nav-label">{link.title}</span>
                    </a>
                ))}
            </div>
        </>
    );
};

export default Navbar;
