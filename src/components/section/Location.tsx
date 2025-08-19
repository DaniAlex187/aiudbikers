import React from 'react';
import Map from '../ui/Map';
import { siteConfig } from '../../data/siteConfig';
import { MapPin, Phone, Mail } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Find Us</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Map />
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Club Headquarters</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-red-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Address</h4>
                  <p className="text-gray-300">{siteConfig.contact.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-red-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Phone</h4>
                  <p className="text-gray-300">{siteConfig.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="text-red-500 mr-4 flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <p className="text-gray-300">{siteConfig.contact.email}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-medium mb-4">Club Hours</h4>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                <div>Monday - Friday</div>
                <div>18:00 - 23:00</div>
                <div>Saturday</div>
                <div>16:00 - 02:00</div>
                <div>Sunday</div>
                <div>14:00 - 22:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;