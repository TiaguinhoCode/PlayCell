import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

function Maps() {

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        GoogleMapApiKey: "AIzaSyA0AzG2QAULAT-nU6-Tem2xyxYofoodNi4"
    });


    return (
        <div className="map">
            isLoaded ? (
      <GoogleMap
        mapContainerStyle={ { width: "100%", height: "100%"} }
        center={ {
            lat: -3.728464,
            lng: -38.529904
        }}
        zoom={15}
      ></GoogleMap>
  ) 

        </div>
    );
}

export default Maps