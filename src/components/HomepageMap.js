import React from 'react';
import MapContainer from './MapContainer';

const HomepageMap = () => {
    // Define latitude and longitude
    const latitude = 28.42012;
    const longitude = 77.04741;

    return (
        <div>
            
            {/* Use MapContainer component */}
            <MapContainer lat={latitude} lng={longitude} />
        </div>
    );
}

export default HomepageMap;
