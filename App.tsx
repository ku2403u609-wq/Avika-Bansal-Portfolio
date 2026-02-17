
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Footer from './components/Footer';
import { Theme } from './types';

const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme');
    return (saved as Theme) || Theme.LIGHT;
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === Theme.LIGHT ? Theme.DARK : Theme.LIGHT);
  };

  // Beige-Brown Theme Classes
  // Light: bg-[#FAF9F6] text-[#4A3728]
  // Dark: bg-[#2D241E] text-[#E6D5C3]
  const themeClasses = theme === Theme.LIGHT 
    ? "bg-[#FAF9F6] text-[#4A3728]" 
    : "bg-[#2D241E] text-[#E6D5C3]";

  return (
    <div className={`min-h-screen transition-colors duration-700 ${themeClasses}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Hobbies theme={theme} />
        <Footer />
      </main>
    </div>
  );
};

export default App;
