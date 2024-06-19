/* import { useState, useRef } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import osm from './osm-providers';
const LiveMap = () => {
  const [center, setCenter] = useState({ lat: 22.996582, lng: 72.50903 });
  const ZOOM_LEVEL = 9;

  const mapRef = useRef();

  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-center'>
          <div className='col'>
            <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
              <TileLayer url={osm.maptiler.url} attribution={osm.maptiler.attribution} />
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveMap;
 */
