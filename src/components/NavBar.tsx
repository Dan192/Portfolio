import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <span className="text-python-blue font-bold text-xl">Portfolio</span>
          <div className="space-x-8">
            <a href="#home" className="text-gray-600 hover:text-python-blue transition-colors">Home</a>
            <a href="#projects" className="text-gray-600 hover:text-python-blue transition-colors">Projects</a>
            <a href="#about" className="text-gray-600 hover:text-python-blue transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-python-blue transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;