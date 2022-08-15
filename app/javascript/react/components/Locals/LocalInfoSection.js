import React from 'react';

const LocalInfoSection = ({name, bio, address, city, state, zip}) => {
    return ( 
        <div>
            <h1>{name}</h1>
            <h3>{bio}</h3>
            <p>{address}</p>
            <p>{city}, {state} {zip}</p>
        </div>
     );
}
 
export default LocalInfoSection;