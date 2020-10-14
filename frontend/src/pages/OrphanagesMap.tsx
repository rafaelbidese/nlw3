import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import pin from '../assets/pin.svg';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={pin} alt="Happy"/>
                    <h2>Choose an orphanage in the map</h2>
                    <p>The kids are waiting for your visit! :)</p>
                </header>
                <footer>
                    <strong>Auburn</strong>
                    <span>Alabama</span>
                </footer>
            </aside>
            <Map 
                center = {[ 32.6129413, -85.4911543]}
                zoom = {15}
                style={{width: '100%', height: '100%'}}
            >
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
}

export default OrphanagesMap;