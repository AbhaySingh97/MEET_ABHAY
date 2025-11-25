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
import './App.css';

import ErrorBoundary from './components/ErrorBoundary';

function App() {
  // Scroll to top on page load/refresh
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
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
  );
}

export default App;
