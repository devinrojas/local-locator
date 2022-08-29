import React, {useState, useEffect} from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, } from "react-google-maps";
import Geocode from "react-geocode";
import { faHelicopterSymbol } from '@fortawesome/free-solid-svg-icons';

Geocode.setApiKey("AIzaSyACTxTtjv8zzjp5kgFi6lnu5Jx0VjRBJM0")

const LocalInfoSection = ({name, bio, address, city, state, zip, twitter, facebook, website, id}) => {
  const [likeActive, setLikeActive] = useState(false)
  // const [likeText, setLikeText] = useState("Like This Venue")
  const [geolocation, setGeolocation] = useState({
        lat: 0,
        lng: 0
    });
    let localTwitter
    let localFacebook
    let localWeb

    // see about moving this maps request to the backend
    const getCoordinates = async () => {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address},${city},${state}&key=AIzaSyACTxTtjv8zzjp5kgFi6lnu5Jx0VjRBJM0`);
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`;
          throw new Error(errorMessage);
        }
        const localData = await response.json();
        console.log(localData)
        geolocation.lat = localData.results[0]?.geometry.location.lat
        geolocation.lng = localData.results[0]?.geometry.location.lng
        setGeolocation({ lat: geolocation.lat , lng: geolocation.lng } )
      } catch (err) {
        console.log(err);
      }
    };
    
    useEffect(() => {
      if (address && city && state) {
        getCoordinates();
      }
    }, []);

    const addLike = async () => {
      try {
          const response = await fetch(`/api/v1/locals/${id}/likes`, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
          });
          // note: it would be best practice to check for an error. If an error is present, dont do `setLikeActive(true);`
          setLikeActive(true);
        } catch (err) {
            console.log(err);
        }
    };

    let likeText = "Like Venue"
    if(likeActive){
      likeText = "Venue Liked"
    }
      if (twitter) {
          localTwitter =  <a href={`${twitter}`} className="button social twitter"> <i className="fa-brands fa-twitter" aria-hidden="true"></i> Twitter </a>
      }
      if (facebook) {
          localFacebook = <a href={`${facebook}`}  className="button social facebook"> <i className="fa-brands fa-facebook-f" aria-hidden="true"></i> Facebook </a>
      }
      if (website) {
          localWeb = <a href={`${website}`}  className="button social website"> Website </a>
    }

    const MapWithAMarker = withScriptjs(withGoogleMap(props =>
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: geolocation.lat , lng: geolocation.lng }}
      >
        <Marker
          position={{ lat: geolocation.lat , lng: geolocation.lng }}
        >
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
                <div className='medium-6 cell card'>
                    <button onClick={addLike} className="button social like"><i class="fa-solid fa-thumbs-up"></i> {likeText}</button>
                    <h5 className="username">DESCRIPTION</h5>
                    <p>{bio}</p>
                    <h5 className="username">Address</h5>
                    <p>{address} | {city}, {state} {zip}</p>
                </div>
                <div className='medium-5 cell card'>
                    <h5 className="social-link">Social Links</h5>
                    {localTwitter}
                    {localFacebook}
                    {localWeb}
                </div>
            </div>
        </div>
     );
}
 
export default LocalInfoSection;



  