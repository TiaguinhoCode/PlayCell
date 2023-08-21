import React from 'react';
import GoogleMapReact from 'google-map-react'; 
import clientes_nordeste from '../date/clientes_nordeste.json';

function Maps() {

    // Chave da API
    const MapWithHeatmap = () => {
        const bootstrapURLKeys = {
            key: "AIzaSyA0AzG2QAULAT-nU6-Tem2xyxYofoodNi4",
        };

        // Puxar os dados dentro Array JSON -> pecorre ela loop 
        const heatmapPositions = clientes_nordeste.map(cliente => ({
            lat: cliente.latitude,
            lng: cliente.longitude,
        })); 

        console.log(heatmapPositions);

        // Puxar latitude e longitude 
        // criar váriavel para usar como position no google maps 

        // Variavel de zoom e centralizar o map
        const center = {lat: -3.760571, lng: -38.526977};
        const zoom = 0;

        return (
            
            <div className='map-container'> 
                <div className="map" >
                    <GoogleMapReact
                        bootstrapURLKeys={bootstrapURLKeys}
                        defaultCenter={center}
                        defaultZoom={zoom}
                        heatmap={{
                            positions: heatmapPositions,
                            options: { radius: 20 }
                        }}
                    >
                    </GoogleMapReact>
                </div>
                <div className='card'>
                    <div className='value'>
                        <span className='valores'>Valor Total:</span>
                        <br/>
                        <span className='negrito'>R$ 27.446.475,50</span>
                        <br/>
                    </div>
                        <div className='divider'></div>
                    <div className='value'>
                        <span className='valores'>Valor visível:</span>
                        <br/>
                        <span className='negrito'>R$ 27.446.475,50</span>
                        <p className='valores'>100% do Total</p>
                    </div>
                    <div className='divider'></div>
                </div>
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