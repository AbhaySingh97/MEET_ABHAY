import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BouncingBall from './components/BouncingBall';
import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider } from './config/ThemeContext';
import './App.css';

function App() {

  // Scroll to top on page load/refresh
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
          <Hero />
          <Skills />
          <Journey />
          <Projects />
          <Stats />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
