import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

function MapContainer({ lat, lng }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAEAliQlREHxNzfZeOyFJRBjrMaZRrsPu0'
  });

  const center = {
    lat: lat,
    lng: lng
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  ) : <></>;
}

export default MapContainer;
