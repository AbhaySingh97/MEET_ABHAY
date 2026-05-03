import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Philosophy from './components/Philosophy';
import TestimonialCarousel from './components/TestimonialCarousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BouncingBall from './components/BouncingBall';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import ProjectDetails from './components/ProjectDetails';
import { ThemeProvider } from './config/ThemeContext';
import './App.css';

const Home = () => (
  <>
    <SEO 
      title="Home" 
      description="Explore the portfolio of Abhay Singh Chauhan, a 3D Artist and Full Stack Developer. Discover immersive 3D experiences, robust web applications, and a unique blend of art and technology."
      keywords="3D Artist, Full Stack Developer, React Developer, Blender Artist, Unreal Engine, Web Development, Portfolio, Abhay Singh Chauhan"
    />
    <Hero />
    <Skills />
    <Journey />
    <Projects />
    <Stats />
    <div className="seo-hidden">
      <Philosophy />
    </div>
    <TestimonialCarousel />
    <Contact />
  </>
);

function App() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    return () => {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'auto';
      }
    };
  }, []);

  return (
    <ThemeProvider>
      <ErrorBoundary>
        <div className="app">
          <CustomCursor />
          <BouncingBall />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            {/* Fallback for SEO indexing of hash routes */}
            <Route path="/projects" element={<Home />} />
            <Route path="/skills" element={<Home />} />
            <Route path="/philosophy" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
