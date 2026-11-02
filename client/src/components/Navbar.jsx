import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import useSound from '../hooks/useSound';

const Navbar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('work');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [motionActive, setMotionActive] = useState(() => {
    return document.documentElement.dataset.motion !== 'off';
  });
  const { playSound } = useSound();
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      if (!isHome) return;

      const sections = ['work', 'breakdown', 'about', 'awards', 'contact'];
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  const navLinks = [
    { label: 'Work', targetId: 'work' },
    { label: 'Raw to Real', targetId: 'breakdown' },
    { label: 'Behind The Frames', targetId: 'about' },
    { label: 'Awards', targetId: 'awards' },
    { label: 'Contact', targetId: 'contact' },
  ];

  const handleNavClick = (e, targetId) => {
    playSound?.('click');
    setMobileMenuOpen(false);

    if (!isHome) {
      e.preventDefault();
      navigate(`/#${targetId}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const handleLogoClick = (e) => {
    playSound?.('click');
    setMobileMenuOpen(false);
    if (!isHome) {
      e.preventDefault();
      navigate('/');
    }
  };

  const toggleMotion = () => {
    const nextMotion = !motionActive;
    setMotionActive(nextMotion);
    document.documentElement.dataset.motion = nextMotion ? 'on' : 'off';
    window.dispatchEvent(new CustomEvent('toggle-motion', { detail: { active: nextMotion } }));
    playSound?.('click');
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-[#dc2626] z-50 transition-all duration-75 ease-out shadow-[0_0_10px_#dc2626]"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#0a0a0c]/85 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href={isHome ? "#hero" : "/"}
            onClick={handleLogoClick}
            className="group flex items-center gap-1.5"
          >
            <span className="font-display text-3xl md:text-4xl tracking-wider text-white group-hover:text-[#dc2626] transition-colors">
              ABHAY
            </span>
            <span className="text-[#dc2626] text-xs font-bold -translate-y-2.5">®</span>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-widest font-semibold text-neutral-400">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.targetId;
              const href = isHome ? `#${link.targetId}` : `/#${link.targetId}`;
              return (
                <a
                  key={link.targetId}
                  href={href}
                  onClick={(e) => handleNavClick(e, link.targetId)}
                  className={`relative py-1 flex items-center gap-2 transition-colors ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-[#dc2626] transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                    }`}
                  />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Group */}
          <div className="flex items-center gap-5 text-xs tracking-wider">
            {/* Motion / Sound Dynamics Toggle */}
            <button
              type="button"
              onClick={toggleMotion}
              className="hidden sm:flex items-center gap-2 text-neutral-400 hover:text-white transition-colors cursor-pointer py-1.5 px-3 rounded border border-white/10 bg-white/[0.03]"
              title="Toggle ambient motion and cursor dynamics"
            >
              <span className="inline-flex items-center gap-0.5">
                <span className={`w-0.5 h-3 bg-[#dc2626] ${motionActive ? 'animate-pulse' : 'opacity-40'}`} />
                <span className={`w-0.5 h-2 bg-[#dc2626] ${motionActive ? '' : 'opacity-40'}`} />
                <span className={`w-0.5 h-4 bg-[#dc2626] ${motionActive ? 'animate-pulse' : 'opacity-40'}`} />
              </span>
              <span className="font-mono text-[11px] uppercase text-neutral-300">
                {motionActive ? 'Motion on' : 'Motion off'}
              </span>
            </button>

            {/* CTA "Let's talk" */}
            <a
              href={isHome ? "#contact" : "/#contact"}
              onClick={(e) => handleNavClick(e, 'contact')}
              className="group flex items-center gap-1.5 text-white hover:text-[#dc2626] font-medium transition-colors text-xs tracking-wider uppercase font-semibold"
            >
              <span>Let's talk</span>
              <ArrowUpRight className="w-4 h-4 text-[#dc2626] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-neutral-400 hover:text-white p-2 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0c]/98 border-b border-white/10 px-6 py-6 space-y-4 backdrop-blur-xl animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.targetId}
                href={isHome ? `#${link.targetId}` : `/#${link.targetId}`}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className="block text-sm font-semibold uppercase tracking-widest text-neutral-300 hover:text-[#dc2626] py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex justify-between items-center text-xs text-neutral-400">
              <span className="uppercase tracking-widest">Abhay Singh Chauhan</span>
              <span className="text-[#dc2626] font-mono">2026®</span>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
