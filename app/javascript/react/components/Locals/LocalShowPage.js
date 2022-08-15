import React, {useState, useEffect} from 'react'
import LocalInfoSection from './LocalInfoSection'

const LocalShowPage = (props) => {
    const [local, setLocal] = useState({})

    let localId = props.match.params.id

    const fetchLocal = async () => {
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
        fetchLocal();
      }, []);
    return ( 
    <div>
    <LocalInfoSection
            key={local.id}
            name={local.name}
            bio={local.bio}
            photo={local.photo}
            address={local.address}
            state={local.state}
            city={local.city}
            zip={local.zip}
            id={local.id}
      />
    </div> 
    );
}
 
export default LocalShowPage;