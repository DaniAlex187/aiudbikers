import React from 'react';

// The Logo component - replace image URL to change the logo easily
const Logo: React.FC = () => {
  return (
    <div className="h-12 w-12 relative overflow-hidden">
      <img 
        src="/logo.png" 
        alt="AIUD BIKERS Logo" 
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default Logo;