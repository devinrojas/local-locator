import React from 'react';



const LocalTile = ({name, bio}) => {
    return ( <div>
        <h1>{name}</h1>
        <p>{bio}</p>
    </div> );
}
 
export default LocalTile;