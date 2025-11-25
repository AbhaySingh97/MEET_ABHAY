import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import './Socials.css';

const Socials = () => {
    const [socials, setSocials] = useState([]);

    useEffect(() => {
        fetch('/api/socials')
            .then(res => res.json())
            .then(data => setSocials(data))
            .catch(err => console.error('Error fetching socials:', err));
    }, []);

    const getIcon = (iconName) => {
        if (iconName === 'FaLinkedin') return <FaLinkedin />;
        if (iconName === 'SiLeetcode') return <SiLeetcode />;
        return null;
    };

    return (
        <section id="connect" className="socials">
            <h2 className="section-title">Connect With Me</h2>
            <div className="socials-grid">
                {socials.map((social, index) => (
                    <motion.a
                        key={social.id}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-card"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, borderColor: social.color }}
                        style={{ '--hover-color': social.color }}
                    >
                        <div className="card-header">
                            <div className="icon-wrapper" style={{ color: social.color }}>
                                {getIcon(social.icon)}
                            </div>
                            <div className="header-info">
                                <h3>{social.platform}</h3>
                                <span>@{social.username}</span>
                            </div>
                        </div>
                        <p className="bio">{social.bio}</p>
                        <div className="stats-preview">
                            {Object.entries(social.stats).map(([key, value]) => (
                                <div key={key} className="stat-item">
                                    <span className="stat-value">{value}</span>
                                    <span className="stat-label">{key}</span>
                                </div>
                            ))}
                        </div>
                        <div className="visit-btn" style={{ backgroundColor: social.color }}>
                            Visit Profile
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};

export default Socials;
