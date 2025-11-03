import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Custom marker icon
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 30px;
        height: 30px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 5px rgba(0,0,0,0.3);
      ">
        <div style="
          width: 10px;
          height: 10px;
          background-color: white;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        "></div>
      </div>
    `,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
};

// Component to fit bounds
function ChangeView({ locations }) {
  const map = useMap();
  
  useEffect(() => {
    if (locations && locations.length > 0) {
      const bounds = L.latLngBounds(locations.map(loc => loc.coordinates));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [locations, map]);
  
  return null;
}

const MapView = ({ locations, center = [-6.9175, 107.6191], zoom = 10, height = '500px' }) => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height, width: '100%' }}
        scrollWheelZoom={false}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <ChangeView locations={locations} />

        {locations?.map((location) => (
          <Marker
            key={location.id}
            position={location.coordinates}
            icon={createCustomIcon('#2563eb')}
            eventHandlers={{
              click: () => setSelectedLocation(location),
            }}
          >
            <Popup>
              <div className="p-2">
                <img
                  src={location.image}
                  alt={location.name}
                  className="w-full h-32 object-cover rounded-lg mb-2"
                />
                <h3 className="font-bold text-lg mb-1">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{location.location}</p>
                <p className="text-primary font-bold">
                  Rp {location.price?.toLocaleString('id-ID')}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map Legend */}
      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-4 z-[1000]">
        <h4 className="font-bold text-sm mb-2">Legenda</h4>
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 rounded-full bg-primary"></div>
          <span>Lokasi Wisata</span>
        </div>
      </div>
    </div>
  );
};

export default MapView;
