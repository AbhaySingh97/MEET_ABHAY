import { Link } from 'react-router-dom';
import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiCodechef, SiArtstation } from 'react-icons/si';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    <div className="footer-info">
                        <h3 className="footer-logo">Abhay Singh<span>.</span></h3>
                        <p className="footer-desc">
                            A fusion of 3D artistry and full-stack development, creating immersive digital experiences that push the boundaries of the web.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.artstation.com/abhay_singh_chauhan" target="_blank" rel="noopener noreferrer" aria-label="ArtStation"><SiArtstation /></a>
                            <a href="https://www.linkedin.com/in/abhay-singh-chauhan-485706310" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
                            <a href="https://www.codechef.com/users/gun_abhay_23" target="_blank" rel="noopener noreferrer" aria-label="CodeChef"><SiCodechef /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><a href="#projects">Portfolio</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#journey">Experience</a></li>
                            <li><a href="#philosophy">Philosophy</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li>3D Modeling & Rendering</li>
                            <li>Full Stack Development</li>
                            <li>Interactive Web Experiences</li>
                            <li>UI/UX Design Strategy</li>
                            <li>Real-time Applications</li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Get in Touch</h4>
                        <p>Interested in collaboration or have a project in mind?</p>
                        <a href="mailto:contact@abhay.com" className="footer-email">contact@abhay.com</a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Abhay Singh Chauhan. All rights reserved.</p>
                    <div className="footer-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
