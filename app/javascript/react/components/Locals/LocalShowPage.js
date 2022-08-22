import React, {useState, useEffect} from 'react'
import LocalInfoSection from './LocalInfoSection'

const LocalShowPage = (props) => {
    const [local, setLocal] = useState({})

    let localId = props.match.params.id

    const getLocal = async () => {
      try {
        const response = await fetch(`/api/v1/locals/${localId}`);
        if (!response.ok) {
          const errorMessage = `${response.status} (${response.statusText})`;
          throw new Error(errorMessage);
        }
        const localData = await response.json();
        setLocal(localData);
      } catch (err) {
        console.log(err);
      }
    };

    useEffect(() => {
      getLocal();
    }, []);

    return ( 
      <div>
        <LocalInfoSection
                address={local.address}
                bio={local.bio}
                city={local.city}
                facebook={local.facebook}
                id={local.id}
                key={local.id}
                name={local.name}
                photo={local.photo}
                state={local.state}
                twitter={local.twitter}
                website={local.website}
                zip={local.zip}
          />
      </div> 
    );
}
 
export default LocalShowPage;