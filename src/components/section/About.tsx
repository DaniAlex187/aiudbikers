import React from 'react';
import { siteConfig } from '../../data/siteConfig';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">About Our Club</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg" 
                alt="Bikers on the road" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            {siteConfig.about.map((paragraph, index) => (
              <p key={index} className="text-gray-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
            
            <div className="mt-8 p-4 border-l-4 border-red-600 bg-gray-800 rounded">
              <p className="text-xl font-semibold text-white">"{siteConfig.tagline}"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;