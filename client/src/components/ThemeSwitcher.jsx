import { useTheme, themes } from '../config/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaPalette } from 'react-icons/fa';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
    const { currentTheme, setCurrentTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="theme-switcher-container">
            <motion.button
                className="theme-toggle-btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaPalette />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="theme-menu"
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    >
                        {Object.entries(themes).map(([key, theme]) => (
                            <button
                                key={key}
                                className={`theme-option ${currentTheme === key ? 'active' : ''}`}
                                onClick={() => {
                                    setCurrentTheme(key);
                                    setIsOpen(false);
                                }}
                            >
                                <div
                                    className="theme-preview"
                                    style={{ backgroundColor: theme.colors['--bg-color'], borderColor: theme.colors['--primary-color'] }}
                                >
                                    <div
                                        className="theme-preview-accent"
                                        style={{ backgroundColor: theme.colors['--primary-color'] }}
                                    ></div>
                                </div>
                                <span>{theme.name}</span>
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;
