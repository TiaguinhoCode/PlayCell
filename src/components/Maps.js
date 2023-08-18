import React from 'react';
import GoogleMapReact from 'google-map-react'; 

function Maps({ heatMapData }) {

    // Chave da API
    const MapWithHeatmap = () => {
        const bootstrapURLKeys = {
            key: "AIzaSyA0AzG2QAULAT-nU6-Tem2xyxYofoodNi4",
        };

        // Preciso criar arquivo JSON 
        // Preciso ler arquivo JSON
        // Preciso transforma em string para float
        // criar variavel e chamar

        // Variavel de zoom e centralizar o map
        const center = {lat: -3.760571, lng: -38.526977};
        const zoom = 0;

        return (
            <div className="map" >
                <GoogleMapReact
                    bootstrapURLKeys={bootstrapURLKeys}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    heatmap={{
                        positions: heatMapData,
                        options: { radius: 20 }
                    }}
                >
                </GoogleMapReact>
            </div>
        );
    }


    return (
        <div className="map">
            <MapWithHeatmap/>
        </div>
    )
}

export default Maps;