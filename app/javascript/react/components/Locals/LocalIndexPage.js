import React, {useState, useEffect } from 'react';
import LocalTile from './LocalTile';

const LocalIndexPage = (props) => {
    const [locals, setLocals] = useState([]);
  
    const getLocals = async () => {
      try {
        const response = await fetch("/api/v1/locals");
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`;
          throw new Error(errorMessage);
        }
        const localData = await response.json();
        setLocals(localData)
      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      getLocals();
    }, []);

    const localArray = locals.map((local) => {
      return (
        <LocalTile
        bio={local.bio}
        city={local.city}
        id={local.id}
        key={local.id}
        name={local.name}
        state={local.state}
        slug={local.slug}
        />
      );
    });

    return (  
        <div>
            <div className='about'>
             <h1 className='about-text'>ALL LOCALS</h1>
            </div>
            <div>
                {localArray}
            </div>
        </div>
    );
}
 
export default LocalIndexPage;