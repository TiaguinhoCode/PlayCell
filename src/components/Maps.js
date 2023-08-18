import React from 'react';
import GoogleMapReact from 'google-map-react'; 

function Maps() {

    // Chave da API
    const MapWithHeatmap = () => {
        const bootstrapURLKeys = {
            key: "AIzaSyA0AzG2QAULAT-nU6-Tem2xyxYofoodNi4",
        };

        // Map calor
        const heatMapData = [
            { lat: 37.775, lng: -122.434 },
            { lat: 37.775, lng: -122.434 },
            { lat: 37.782, lng: -122.445 },
        ];

        // Variavel de zoom e centralizar o map
        const center = {lat: 37.775, lng: -122.434};
        const zoom = 10;

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
            <MapWithHeatmap />
        </div>
    )
}

export default Maps;

/* Antigo Código

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        GoogleMapApiKey: "AIzaSyA0AzG2QAULAT-nU6-Tem2xyxYofoodNi4"
    });
 return (
        <div className="map">  
        
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "100%" }}
                    center={{ lat: -3.728464, lng: -38.529904 }}
                    zoom={15}
                />
            )}
        </div>
    );
*/

/* Backup GoogleMap 
    <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyA0AzG2QAULAT-nU6-Tem2xyxYofoodNi4" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="Meu marcador"
                />
            </GoogleMapReact>
*/