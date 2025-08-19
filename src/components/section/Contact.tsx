import React, { useState } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { Facebook, Instagram, Youtube } from 'lucide-react';

// Newsletter form component
function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  interface NewsletterResponse {
    success: boolean;
    message?: string;
    error?: string;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Subscribing...');
    try {
      const res = await fetch('http://localhost:5000/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data: NewsletterResponse = await res.json();
      if (data.success) setStatus('Subscribed!');
      else setStatus('Error subscribing.');
    } catch {
      setStatus('Error subscribing.');
    }
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="email"
        className="bg-gray-800 text-white px-4 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-red-500 flex-grow"
        placeholder="Your email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-medium px-4 py-2 rounded-r transition-colors duration-300">
        Subscribe
      </button>
      <div className="ml-4 text-white">{status}</div>
    </form>
  );
}

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) setStatus('Message sent!');
      else setStatus('Error sending message.');
    } catch {
      setStatus('Error sending message.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Join The Ride</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Interested in becoming a member or just want to join us for a ride? Drop us a message and we'll get back to you.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-white font-medium mb-2">Name</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="bg-gray-800 text-white w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="bg-gray-800 text-white w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="bg-gray-800 text-white w-full px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-red-500 min-h-32"
                  placeholder="What would you like to know?"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded transition-colors duration-300"
              >
                Send Message
              </button>
              <div className="mt-4 text-center text-white">{status}</div>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Us</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <a 
                    href={siteConfig.social.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Facebook className="text-blue-500 mr-4" size={24} />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Follow us on Facebook</span>
                  </a>
                </div>
                <div className="flex items-center group">
                  <a 
                    href={siteConfig.social.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Instagram className="text-pink-500 mr-4" size={24} />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Follow us on Instagram</span>
                  </a>
                </div>
                <div className="flex items-center group">
                  <a 
                    href={siteConfig.social.youtube} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Youtube className="text-red-500 mr-4" size={24} />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">Subscribe to our YouTube</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="text-2xl font-bold text-white mb-6">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to our newsletter to get updates on upcoming rides and events.
              </p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ...existing code...

export default Contact;