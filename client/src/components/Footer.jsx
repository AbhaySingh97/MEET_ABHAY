import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiArtstation, SiCodechef } from 'react-icons/si';
import useSound from '../hooks/useSound';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { playSound } = useSound();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const handleBrandClick = (e) => {
    playSound?.('click');
    if (!isHome) {
      e.preventDefault();
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    playSound?.('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-white/5 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-neutral-500">
        
        {/* Brand */}
        <a 
          href={isHome ? "#hero" : "/"} 
          onClick={handleBrandClick}
          className="font-display text-3xl tracking-wider text-white hover:text-[#dc2626] transition-colors"
        >
          ABHAY<span className="text-[#dc2626] text-xs">®</span>
        </a>

        {/* Copyright */}
        <p className="font-mono text-[11px] text-center text-neutral-400">
          © {currentYear} ABHAY SINGH CHAUHAN. EVERY FRAME &amp; FUNCTION HAS A PURPOSE.
        </p>

        {/* Social Links & Back to top */}
        <div className="flex items-center gap-6 text-neutral-400">
          <a
            href="https://www.artstation.com/abhay_singh_chauhan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dc2626] transition-colors p-1"
            title="ArtStation"
          >
            <SiArtstation className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhay-singh-chauhan-485706310"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dc2626] transition-colors p-1"
            title="LinkedIn"
          >
            <FaLinkedin className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/AbhaySingh97"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dc2626] transition-colors p-1"
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" />
          </a>
          <a
            href="https://www.codechef.com/users/gun_abhay_23"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#dc2626] transition-colors p-1"
            title="CodeChef"
          >
            <SiCodechef className="w-4 h-4" />
          </a>

          <button
            onClick={scrollToTop}
            className="hover:text-[#dc2626] transition-colors flex items-center gap-1 cursor-pointer font-mono text-[11px] uppercase tracking-wider ml-2"
          >
            <span>TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
