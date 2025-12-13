import { useEffect, useState } from 'react';
import './Footer.css';
import { FaLinkedin, FaUsers, FaEye, FaGlobe, FaChartLine } from 'react-icons/fa';
import { SiCodechef, SiArtstation } from 'react-icons/si';

const Footer = () => {
    const [stats, setStats] = useState({
        pageViews: 0,
        uniqueVisitors: 0,
        totalVisitors: 0,
        sources: []
    });

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await fetch('/api/analytics/stats');
                if (res.ok) {
                    const data = await res.json();
                    setStats(data);
                }
            } catch (error) {
                console.error('Error fetching stats:', error);
            }
        };
        fetchStats();
    }, []);

    return (
        <footer className="footer">
            <div className="analytics-container">
                <div className="stat-item">
                    <FaEye className="stat-icon" />
                    <div className="stat-info">
                        <span className="stat-value">{stats.pageViews}</span>
                        <span className="stat-label">Page Views</span>
                    </div>
                </div>
                <div className="stat-item">
                    <FaUsers className="stat-icon" />
                    <div className="stat-info">
                        <span className="stat-value">{stats.uniqueVisitors}</span>
                        <span className="stat-label">Unique Visitors</span>
                    </div>
                </div>
                <div className="stat-item">
                    <FaGlobe className="stat-icon" />
                    <div className="stat-info">
                        <span className="stat-value">{stats.totalVisitors}</span>
                        <span className="stat-label">Total Visits</span>
                    </div>
                </div>
                <div className="stat-item traffic-sources">
                    <FaChartLine className="stat-icon" />
                    <div className="stat-info">
                        <span className="stat-label">Traffic Sources</span>
                        <div className="sources-list">
                            {stats.sources.length > 0 ? (
                                stats.sources.map((s, i) => (
                                    <span key={i} className="source-tag">{s.name}: {s.count}</span>
                                ))
                            ) : (
                                <span className="source-tag">Direct</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Abhay Singh Chauhan. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://www.artstation.com/abhay_singh_chauhan" className="social-icon" target="_blank" rel="noopener noreferrer"><SiArtstation /></a>
                    <a href="https://www.linkedin.com/in/abhay-singh-chauhan-485706310" className="social-icon" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://www.codechef.com/users/gun_abhay_23" className="social-icon" target="_blank" rel="noopener noreferrer"><SiCodechef /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
