import React from 'react';



const LocalTile = ({name, bio, slug, city, state}) => {
    return ( 
    <div>
        <div className='card local-tile'>
        <h1 className=''><a className='sign-text' href={`/locals/${slug}`}>{name} </a><span className='small'>( {city}, {state} )</span></h1>
        <p>{bio}</p>
        </div>
    </div> );
}
 
export default LocalTile;