import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    minimal: {
        name: 'Minimal',
        colors: {
            '--bg-color': '#FFF8E7',
            '--text-color': '#3D405B',
            '--primary-color': '#E07A5F',
            '--secondary-color': '#81B29A',
            '--accent-color': '#F4A261',
            '--card-bg': '#FFFBF5',
            '--border-color': '#3D405B',
        }
    },
    cyberpunk: {
        name: 'Cyberpunk',
        colors: {
            '--bg-color': '#0d0221',
            '--text-color': '#00ffcc',
            '--primary-color': '#ff007f',
            '--secondary-color': '#2de2e6',
            '--accent-color': '#f6019d',
            '--card-bg': '#1b03a3',
            '--border-color': '#00ffcc',
        }
    },
    midnight: {
        name: 'Midnight',
        colors: {
            '--bg-color': '#0f172a',
            '--text-color': '#f8fafc',
            '--primary-color': '#38bdf8',
            '--secondary-color': '#818cf8',
            '--accent-color': '#c084fc',
            '--card-bg': '#1e293b',
            '--border-color': '#334155',
        }
    },
    forest: {
        name: 'Forest',
        colors: {
            '--bg-color': '#1a2e1a',
            '--text-color': '#e0e7e0',
            '--primary-color': '#4ade80',
            '--secondary-color': '#22c55e',
            '--accent-color': '#fbbf24',
            '--card-bg': '#243b24',
            '--border-color': '#2d4d2d',
        }
    },
    rose: {
        name: 'Rose',
        colors: {
            '--bg-color': '#1a1216',
            '--text-color': '#ffe4e6',
            '--primary-color': '#fb7185',
            '--secondary-color': '#fda4af',
            '--accent-color': '#f43f5e',
            '--card-bg': '#2d1b22',
            '--border-color': '#4c2d3a',
        }
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState(() => {
        const saved = localStorage.getItem('portfolio-theme');
        return saved || 'minimal';
    });

    useEffect(() => {
        const themeData = themes[currentTheme];
        const root = document.documentElement;

        Object.entries(themeData.colors).forEach(([variable, value]) => {
            root.style.setProperty(variable, value);
        });

        localStorage.setItem('portfolio-theme', currentTheme);
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
