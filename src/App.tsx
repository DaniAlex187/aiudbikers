import Navbar from './components/layout/Navbar';
// Update the import path to match the actual file name and extension, e.g.:
import Hero from './components/section/Hero.tsx';
// Or, if the file is named 'Hero.jsx':
// import Hero from './components/sections/Hero.jsx';
// Or, if the file is named 'hero.tsx':
// import Hero from './components/sections/hero.tsx';
import About from './components/section/About';
import Events from './components/section/Events';
import Location from './components/section/Location';
import Contact from './components/section/Contact';
import Footer from './components/layout/Footer';
import './index.css';

// Define siteConfig with a backgroundImage property
const siteConfig = {
  backgroundImage: '/path/to/your/background1987.jpg', // Update this path as needed
};

function App() {
  return (
    <div
      className="relative bg-black text-white min-h-screen"
      style={{
        backgroundImage: `url(${siteConfig.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-100 pointer-events-none"></div>
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Events />
        <Location />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;