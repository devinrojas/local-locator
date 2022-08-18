import React from 'react';



const LocalTile = ({name, bio, slug}) => {
    return ( <div>
        <h1><a href={`/locals/${slug}`}>{name}</a></h1>
        <p>{bio}</p>
    </div> );
}
 
export default LocalTile;