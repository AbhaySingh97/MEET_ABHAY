import './Footer.css';
import { FaLinkedin } from 'react-icons/fa';
import { SiCodechef, SiArtstation } from 'react-icons/si';

const Footer = () => {
    return (
        <footer className="footer">
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
