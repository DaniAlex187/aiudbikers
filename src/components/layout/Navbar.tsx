import React, { useState, useEffect } from 'react';
import Logo from '../ui/Logo';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Logo />
            <span
              className="ml-4 text-xl font-bold hidden sm:block"
              style={{
              fontFamily: '"Algerian", serif',
              color: 'black',
              background: 'rgba(255,255,255,0.5)',
              padding: '0.25rem 0.75rem',
              borderRadius: '0.25rem',
              border: '3px solid red'
              }}
            >
              {siteConfig.clubName}
            </span>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About</a>
            <a href="#events" className="text-gray-300 hover:text-white transition-colors duration-200">Events</a>
            <a href="#location" className="text-gray-300 hover:text-white transition-colors duration-200">Location</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden bg-black/95 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#events"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Events
          </a>
          <a
            href="#location"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Location
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;