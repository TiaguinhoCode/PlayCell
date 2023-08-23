import React from 'react';
import GoogleMapReact from 'google-map-react'; 
import clientes_nordeste from '../../date/clientes_nordeste.json';
import { Filtro } from './inputFiltro/Filtro';
import { Card } from '../cards/Card';
import { Data } from './inputData/Data';


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

        //Remove UI do fullscreen
        const mapOptions = {
            fullscreenControl: false,
        }

        // Puxar latitude e longitude 
        // criar váriavel para usar como position no google maps 

        // Variavel de zoom e centralizar o map
        const center = {lat: -3.760571, lng: -38.526977};
        const zoom = 0;

        return (
            <div className='map-container'> 
                <div className="map" >        
                    <GoogleMapReact
                        className="googleMaps"
                        bootstrapURLKeys={bootstrapURLKeys}
                        defaultCenter={center}
                        defaultZoom={zoom}
                        heatmap={{
                            positions: heatmapPositions,
                            options: { radius: 8 }
                        }}  
                        options={mapOptions} 
                        
                    > 
                    </GoogleMapReact> 
                    <Card/>   
                    <div className="filtro">
                        <Filtro/>
                    </div>
                    <div className="data">
                        <Data/>
                    </div>
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