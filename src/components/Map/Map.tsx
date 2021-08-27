import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import { DrupalBodyField, DrupalGeoLocationField } from '@libs/types/AppTypes';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

interface MapProps {
  marker: DrupalBodyField;
  geolocation: DrupalGeoLocationField;
}

function Map(props: MapProps): React.ReactElement {
  const {
    marker,
    geolocation: { lat, lng },
  } = props;

  return (
    <MapContainer center={[lat, lng]} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lng]}>
        <Popup>
          <div dangerouslySetInnerHTML={{ __html: marker.processed }} />
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default React.memo(Map);
