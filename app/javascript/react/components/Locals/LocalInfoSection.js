import React from 'react';

const LocalInfoSection = ({name, bio, address, city, state, zip, twitter, facebook, website}) => {
    let localTwitter = twitter
    let localFacebook = facebook
    let localWeb = website

    if(localTwitter != null){
       localTwitter =  <a href="{twitter}" class="button social twitter"> <i class="fa-brands fa-twitter" aria-hidden="true"></i> Twitter </a>
    }
    if(localFacebook != null){
       localFacebook = <a href="{facebook}" class="button social facebook"> <i class="fa-brands fa-facebook-f" aria-hidden="true"></i> Facebook </a>
    }
    if(localWeb != null){
        localWeb = <a href="{website}" class="button social website"> Website </a>
    }

    return ( 
        <div>
            <div className='local'>
             <h1 className='local-text'>{name}</h1>
            </div>

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