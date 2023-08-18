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
            { lat: 37.782, lng: -122.445 },
            { lat: 37.782, lng: -122.445 },
            { lat: 37.782, lng: -122.445 },
            { lat: 37.782, lng: -122.445 },
            { lat: 37.7, lng: 28.4 },
            { lat: 37.7749, lng: 122.4194 },
            { lat: -3.71839, lng: -38.5434 },
            { lat: -3.75684, lng: -38.53638 },
            { lat: -3.72309, lng: -38.53672 },
            { lat: -3.72974, lng: -38.52024 },
            { lat: -3.75802, lng: -38.49156 },
            { lat: -3.74633, lng: -38.50208 },
            { lat: -3.74263, lng: -38.50347 },
            { lat: -3.73454, lng: -38.52231 },
            { lat: -3.71805, lng: -38.53411 },
            { lat: -3.70717, lng: -38.54547 },
            { lat: -3.71749, lng: -38.56182 },
            { lat: -3.72238, lng: -38.52381 },
            { lat: -3.76122, lng: -38.49821 },
            { lat: -3.72658, lng: -38.56623 },
            { lat: -3.71432, lng: -38.52859 },
            { lat: -3.73659, lng: -38.55287 },
            { lat: -3.72476, lng: -38.54895 },
            { lat: -3.71401, lng: -38.55669 },
            { lat: -3.71943, lng: -38.57715 },
            { lat: -3.75088, lng: -38.52097 },
            { lat: -3.73269, lng: -38.55678 },
            { lat: -3.72127, lng: -38.53191 },
            { lat: -3.73591, lng: -38.57889 },
            { lat: -3.74783, lng: -38.55813 },
            { lat: -3.70944, lng: -38.54263 },
            { lat: -3.72771, lng: -38.56058 },
            { lat: -3.74214, lng: -38.56398 },
            { lat: -3.75308, lng: -38.55886 },
            { lat: -3.72602, lng: -38.55489 },
            { lat: -3.73212, lng: -38.54714 },
            { lat: -3.73692, lng: -38.57204 },
            { lat: -3.71207, lng: -38.54314 },
            { lat: -3.73907, lng: -38.53412 },
            { lat: -3.71748, lng: -38.54737 },
            { lat: -3.73291, lng: -38.57495 },
            { lat: -3.71357, lng: -38.54458 },
            { lat: -3.71028, lng: -38.56805 },
            { lat: -3.73649, lng: -38.54817 },
            { lat: -3.72773, lng: -38.54011 },
            { lat: -3.72371, lng: -38.53452 },
            { lat: -3.73499, lng: -38.55823 },
            { lat: -3.75405, lng: -38.56192 },
            { lat: -3.74203, lng: -38.56962 },
            { lat: -3.72297, lng: -38.52718 },
            { lat: -3.74902, lng: -38.54611 },
            { lat: -3.74614, lng: -38.56888 },
            { lat: -3.75231, lng: -38.56967 },
            { lat: -3.71374, lng: -38.54918 },
            { lat: -3.74665, lng: -38.55799 },
            { lat: -3.74506, lng: -38.56391 },
            { lat: -3.73848, lng: -38.56558 },
            { lat: -15.79422, lng: -47.88281 },
            { lat: -12.97304, lng: -38.50136 },
            { lat: -22.90685, lng: -43.17290 },
            { lat: -3.10719, lng: -60.02609 },
            { lat: -22.91949, lng: -43.38892 },
            { lat: -20.30354, lng: -40.29620 },
            { lat: -8.04799, lng: -34.87700 },
            { lat: -5.08132, lng: -42.80115 },
            { lat: -23.55065, lng: -46.63338 },
            { lat: -16.68029, lng: -49.25838 },
            { lat: -20.32018, lng: -40.29552 },
            { lat: -9.64371, lng: -35.71911 },
            { lat: -19.93536, lng: -43.93961 },
            { lat: -22.87416, lng: -43.24456 },
            { lat: -27.59538, lng: -48.54874 },
            { lat: -22.80354, lng: -43.37211 },
            { lat: -22.80473, lng: -43.34915 },
            { lat: -3.71813, lng: -38.54858 },
            { lat: -8.04818, lng: -34.90953 },
            { lat: -7.13569, lng: -34.84661 },
            { lat: -25.43645, lng: -49.26466 },
            { lat: -20.35448, lng: -40.30981 },
            { lat: -25.44836, lng: -49.25295 },
            { lat: -16.69310, lng: -49.30815 },
            { lat: -29.97857, lng: -51.17915 },
            { lat: -27.61522, lng: -48.66335 },
            { lat: -3.10194, lng: -60.01123 },
            { lat: -22.97403, lng: -43.22165 },
            { lat: -23.56835, lng: -46.68676 },
            { lat: -22.98386, lng: -43.19311 },
            { lat: -22.90495, lng: -43.10068 },
            { lat: -20.33216, lng: -40.36853 },
            { lat: -25.44851, lng: -49.31087 },
            { lat: -15.83547, lng: -48.01416 },
            { lat: -3.13498, lng: -60.02020 },
            { lat: -15.77263, lng: -47.89022 },
            { lat: -22.91005, lng: -43.19602 },
            { lat: -19.91189, lng: -43.92683 },
            { lat: -15.76702, lng: -47.86570 },
            { lat: -12.97034, lng: -38.47118 },
            { lat: -22.93355, lng: -43.35589 },
            { lat: -8.05393, lng: -34.88121 },
            { lat: -23.56043, lng: -46.69648 },
            { lat: -3.76019, lng: -38.54534 },
            { lat: -23.55663, lng: -46.68583 },
            { lat: -20.31581, lng: -40.34499 },
            { lat: -22.90636, lng: -43.11994 },
            { lat: -3.10702, lng: -60.02618 },
            { lat: -22.88552, lng: -43.29988 },
            { lat: -20.34352, lng: -40.27689 },
            { lat: -27.59585, lng: -48.53806 },
            { lat: -22.90860, lng: -43.18155 },
            { lat: -23.54607, lng: -46.64482 },
            { lat: -3.13393, lng: -60.01501 },
            { lat: -19.92690, lng: -43.93551 },
            { lat: -15.85750, lng: -48.02058 },
            { lat: -23.57019, lng: -46.64397 },
            { lat: -8.03113, lng: -34.88535 },
            { lat: -12.99153, lng: -38.50242 },
            { lat: -22.90417, lng: -43.17602 },
            { lat: -27.59943, lng: -48.54885 },
            { lat: -22.95408, lng: -43.19874 },
            { lat: -12.97672, lng: -38.51189 },
            { lat: -25.41217, lng: -49.29001 },
            { lat: -20.30074, lng: -40.31643 },
            { lat: -22.90667, lng: -43.17861 },
            { lat: -20.33269, lng: -40.34299 },
            { lat: -22.92373, lng: -43.37123 },
            { lat: -3.08594, lng: -60.00827 },
            { lat: -22.90691, lng: -43.19056 },
            { lat: -27.59946, lng: -48.60358 },
            { lat: -19.91998, lng: -43.94174 },
            { lat: -15.76781, lng: -47.86508 },
            { lat: -22.89809, lng: -43.28355 },
            { lat: -15.83688, lng: -48.01140 },
            { lat: -25.43937, lng: -49.30056 },
            { lat: -22.91743, lng: -43.28467 },
            { lat: -19.92606, lng: -43.93436 },
            { lat: -3.08373, lng: -60.03805 },
            { lat: -12.99711, lng: -38.52254 },
            { lat: -22.88306, lng: -42.01850 },
            { lat: -25.41518, lng: -49.27680 },
            { lat: -22.90373, lng: -43.16875 },
            { lat: -20.31217, lng: -40.29861 },
            { lat: -22.91215, lng: -43.17799 },
            { lat: -20.31094, lng: -40.33746 },
            { lat: -3.08518, lng: -60.03632 },
            { lat: -22.90680, lng: -43.17083 },
            { lat: -22.90947, lng: -43.21359 },
            { lat: -15.79940, lng: -47.88772 },
            { lat: -20.31991, lng: -40.33607 },
            { lat: -27.59925, lng: -48.62004 },
            { lat: -23.54548, lng: -46.65025 },
            { lat: -22.90392, lng: -43.17469 },
            { lat: -15.76044, lng: -47.88167 },
            { lat: -12.98784, lng: -38.51067 },
            { lat: -22.88386, lng: -42.03590 },
            { lat: -3.12758, lng: -60.01586 },
            { lat: -20.33242, lng: -40.36800 },
            { lat: -22.91812, lng: -43.19218 }
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