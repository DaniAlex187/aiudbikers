import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events: React.FC = () => {
  const [openEventId, setOpenEventId] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <section id="events" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Upcoming Rides & Events</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.events.map((event) => (
            <div 
              key={event.id} 
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col"
            >
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-400 mb-2">
                  <Calendar size={18} className="mr-2" />
                  <span>{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-gray-400 mb-2">
                  <Clock size={18} className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-400 mb-4">
                  <MapPin size={18} className="mr-2" />
                  <span>{event.meetingPoint}</span>
                </div>
                {/* Description section toggled by Join Ride */}
                {openEventId === event.id && (
                  <div className="mt-4 bg-gray-800 p-4 rounded text-gray-100 transition-all">
                    <strong>Description:</strong>
                    <p>{event.description}</p>
                  </div>
                )}
              </div>
              <div className="px-6 py-4 bg-gray-800">
                <button
                  className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors duration-200"
                  onClick={() => setOpenEventId(openEventId === event.id ? null : event.id)}
                >
                  Join Ride
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;