import React from 'react';
import { siteConfig } from '../../data/siteConfig';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${siteConfig.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center">
          <img 
            src="/logo.png" 
            alt={siteConfig.clubName} 
            className="h-48 sm:h-56 md:h-64 w-auto animate-pulse-slow"
          />
        </div>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 tracking-tight relative inline-block"
          style={{ 
            fontFamily: "'Bebas Neue', 'Arial Black', Arial, sans-serif",
            color: "#fff",
            textShadow: `
              2px 2px 0 #000, 
              4px 4px 0 #e3342f
            `
          }}
        >
          {siteConfig.clubName}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 font-medium">
          {siteConfig.tagline}
        </p>
        <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
          {siteConfig.description}
        </p>
        <div className="mt-8 animate-bounce absolute bottom-8">
          <a href="#about" className="text-white">
            <ChevronDown size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;