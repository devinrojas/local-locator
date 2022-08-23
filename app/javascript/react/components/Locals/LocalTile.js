import React from 'react';



const LocalTile = ({name, bio, slug, city, state}) => {
    return ( 
    <div className=''>
        <div className='card local-tile'>
        <h1 className=''><a className='sign-text' href={`/locals/${slug}`}>{name} </a><span className='small'>( {city}, {state} )</span></h1>
        <p className='bio-text'>{bio}</p>
        </div>
    </div> );
}
 
export default LocalTile;