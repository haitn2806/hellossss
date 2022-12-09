import React from 'react';
import { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader , Marker } from '@react-google-maps/api';
import './GoogleMap.css'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMapComponent = (props) => {
    const { isLoaded } = useJsApiLoader ({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    })

    const [center, setCenter] = useState({
        lat : 21.028614943686446,
        lng: 105.83082644205373,
    });
    // 21.028614943686446, 105.83082644205373

    useEffect(()=>{
        setCenter({
            lat : props.location.long,
            lng: props.location.lat,
        })    
    },[]);

    // const center = {
    //     lat : props.location.lat,
    //     lng: props.location.long,
    // }

    return (
        <>
            {!isLoaded 
            ? <div>Loading...</div> 
            : <div>
                <GoogleMap zoom={15} center={center} mapContainerClassName='map-container'>
                    <Marker position={center}/>
                </GoogleMap>
            </div>}
        </>
    )
}

export default GoogleMapComponent
