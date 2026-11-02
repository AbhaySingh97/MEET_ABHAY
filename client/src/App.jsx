import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import RawToReal from './components/RawToReal';
import About from './components/About';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import ProjectDetails from './components/ProjectDetails';
import './App.css';

const Home = () => (
  <>
    <SEO 
      title="ABHAY® — 3D Artist & Full Stack Developer | Portfolio" 
      description="Portfolio of Abhay Singh Chauhan, 3D Artist & Full Stack Developer. Merging high-fidelity 3D artistry with robust web engineering."
      keywords="3D Artist, Full Stack Developer, React Developer, Blender Artist, Unreal Engine, Web Development, Portfolio, Abhay Singh Chauhan"
    />
    <Hero />
    <Projects />
    <RawToReal />
    <About />
    <Awards />
    <Contact />
  </>
);

function App() {
  const location = useLocation();

  // Handle path / hash navigation smooth scroll
  useEffect(() => {
    const targetId = location.hash 
      ? location.hash.replace('#', '') 
      : (location.pathname !== '/' ? location.pathname.replace('/', '') : '');

    if (targetId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  return (
    <ErrorBoundary>
      <div className="app bg-[#0a0a0c] text-white selection:bg-[#dc2626] selection:text-white min-h-screen relative">
        <CustomCursor />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            {/* Fallback routes for SEO and direct links */}
            <Route path="/work" element={<Home />} />
            <Route path="/projects" element={<Home />} />
            <Route path="/breakdown" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/awards" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
