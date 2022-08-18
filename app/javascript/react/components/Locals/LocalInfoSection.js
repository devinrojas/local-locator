import React, {useState, useEffect} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow, } from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyACTxTtjv8zzjp5kgFi6lnu5Jx0VjRBJM0")

const LocalInfoSection = ({name, bio, address, city, state, zip, twitter, facebook, website}) => {
    const [geolocation, setGeolocation] = useState({
        lat: 0,
        lng: 0
    });
    let localTwitter = twitter
    let localFacebook = facebook
    let localWeb = website
    const getCoordinates = async () => {
        try {
          const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},${city},${state}&key=AIzaSyACTxTtjv8zzjp5kgFi6lnu5Jx0VjRBJM0`);
          if (!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`;
            throw new Error(errorMessage);
          }
          const localData = await response.json();
          geolocation.lat = localData.results[0]?.geometry.location.lat
          geolocation.lng = localData.results[0]?.geometry.location.lng
          setGeolocation({ lat: geolocation.lat , lng: geolocation.lng } )
        } catch (err) {
          console.log(err);
        }
    };

    useEffect(() => {
    getCoordinates();
    }, []);
    
    if(localTwitter != null){
        localTwitter =  <a href="{twitter}" className="button social twitter"> <i className="fa-brands fa-twitter" aria-hidden="true"></i> Twitter </a>
    }
    if(localFacebook != null){
        localFacebook = <a href="{facebook}" className="button social facebook"> <i className="fa-brands fa-facebook-f" aria-hidden="true"></i> Facebook </a>
    }
    if(localWeb != null){
        localWeb = <a href="{website}" className="button social website"> Website </a>
    }

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: geolocation.lat , lng: geolocation.lng }}
      >
        <Marker
          position={{ lat: geolocation.lat , lng: geolocation.lng }}
        >
        <InfoWindow><div>{name}</div></InfoWindow>
        </Marker>
      </GoogleMap>
    ));

    return ( 
        <div>
            <div className='local'>
             <h1 className='local-text'>{name}</h1>
            </div>
            <MapWithAMarker
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyACTxTtjv8zzjp5kgFi6lnu5Jx0VjRBJM0&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `90%` }} />}
            containerElement={<div style={{ height: `300px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
            <div className='grid-x grid-padding-x'>
                    <div className='medium-8 cell'>
                        <h5>Description:</h5>
                        <p>{bio}</p>
                        <p>Address: {address} | {city}, {state} {zip}</p>
                    </div>
                    <div className='medium-4 cell'>
                        <h5>Social Links:</h5>
                        {localTwitter}
                        {localFacebook}
                        {localWeb}
                    </div>
            </div>
        </div>
     );
}
 
export default LocalInfoSection;



  