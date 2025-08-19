import React from 'react';
import { siteConfig } from '../../data/siteConfig';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt={siteConfig.clubName} className="h-10 w-10 mr-3" />
              <h3 className="text-xl font-bold text-white">{siteConfig.clubName}</h3>
            </div>
            <p className="text-gray-400 mb-4">
              {siteConfig.description}
            </p>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {siteConfig.clubName}. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a></li>
              <li><a href="#events" className="text-gray-400 hover:text-white transition-colors duration-200">Events</a></li>
              <li><a href="#location" className="text-gray-400 hover:text-white transition-colors duration-200">Location</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">{siteConfig.contact.address}</li>
              <li className="text-gray-400">{siteConfig.contact.phone}</li>
              <li className="text-gray-400">{siteConfig.contact.email}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Club Hours</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Monday - Friday: 18:00 - 23:00</li>
              <li className="text-gray-400">Saturday: 16:00 - 02:00</li>
              <li className="text-gray-400">Sunday: 14:00 - 22:00</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            Founded in {siteConfig.foundedYear} | {siteConfig.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;