import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { siteConfig } from '../../data/siteConfig';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Create a custom icon instance to guarantee the marker icon works with Vite
const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { center, zoom, markerText } = siteConfig.mapConfig;

  // Ensure center is a LatLngTuple ([number, number])
  const mapCenter: [number, number] = [center[0], center[1]];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-96 bg-gray-800 flex items-center justify-center">
        <p className="text-gray-400">Loading map...</p>
      </div>
    );
  }

  return (
    <div className="w-full h-96 relative">
      <MapContainer
        center={mapCenter}
        zoom={zoom}
        className="w-full h-full z-10"
        scrollWheelZoom={true}
        zoomControl={true}
        dragging={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapCenter} icon={customIcon}>
          <Popup>
            <div className="font-medium">{markerText}</div>
            <div className="text-sm mt-1">{siteConfig.contact.address}</div>
            <a
              href={`https://www.openstreetmap.org/directions?from=&to=${mapCenter[0]}%2C${mapCenter[1]}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-sm mt-2 block"
            >
              Get Directions
            </a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;