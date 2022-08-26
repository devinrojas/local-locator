import React, {useState, useEffect } from 'react';
import LocalTile from './LocalTile';

const LocalIndexPage = (props) => {
  const [locals, setLocals] = useState([]);
  const [query, setQuery] = useState("");

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

  const changeHandler = (event) => {
    setQuery(event.target.value)
  };
  
  const localArray = locals.filter(local=>local.name.toLowerCase().includes(query)).map((local) => {
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
          <div className='grid-x grid-padding-x'>
              <div className='medium-5 cell'>
                <input type="text"
                placeholder='Search locals...'
                className='animated-search-form'
                onChange={changeHandler}
                />
              </div>
          </div>
          <div >
            <div >
                {localArray}
            </div>
          </div>
      </div>
  );
}
 
export default LocalIndexPage;