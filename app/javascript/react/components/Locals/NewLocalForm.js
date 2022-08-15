import ErrorList from "../Errors/ErrorList"
import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

let states = (states =["AK","AL","AR","AS","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"])


const NewLocalForm = (props) => {
    const [redirect, setRedirect] = useState(false)
    const [errors, setErrors] = useState({});
    const [localObject, setLocalObject] = useState({
        name: "",
        bio: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    })

    const clearForm = (event) => {
        event.preventDefault();
        setLocalObject({
            name: "",
            bio: "",
            address: "",
            city: "",
            state: "",
            zip: ""
        });
        setErrors({});
      };

    const addLocal = async () => {
    try {
        const response = await fetch("/api/v1/locals", {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(localObject),
        });
        const localData = await response.json();
        setLocalObject(localData);
        setRedirect(true)
        } catch (err) {
            console.log(err);
        }
    };

    if (redirect) {
    return <Redirect push to={`/locals`} />;
    }

    const handleInputChange = (event) => {
        setLocalObject({
            ...localObject, 
            [event.currentTarget.id]: event.currentTarget.value
        })
    }

    const validForSubmission = () => {
        let submitErrors = {};
        const requiredFields = ["name", "bio", "address", "city", "state", "zip"];
        requiredFields.forEach((field) => {
            if (localObject[field].trim() === "") {
            submitErrors = {
                ...submitErrors,
                [field]: "is blank",
            };
            }
        });
        setErrors(submitErrors);
            return _.isEmpty(submitErrors);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (validForSubmission()) {
            addLocal();
        }
    };

    const stateSelector = states.map((state) =>{
        return (
            <option key={state} value={state}>
                {state}
            </option>
        )
    })

    return ( 
        <div>
        <form onSubmit={onSubmitHandler}>
          <ErrorList errors={errors} />
          <label>
            Name:
            <input
              type="text"
              id="name"
              onChange={handleInputChange}
              value={localObject.name}
            />
          </label>
  
          <label>
            Bio:
            <input
              type="text"
              id="bio"
              onChange={handleInputChange}
              value={localObject.bio}
            />
          </label>  
          <label>
            Address:
            <input
              type="text"
              id="address"
              onChange={handleInputChange}
              value={localObject.address}
            />
          </label>  
          <label>
            City:
            <input
              type="text"
              id="city"
              onChange={handleInputChange}
              value={localObject.city}
            />
          </label>  
          <label >State</label>
            <select
          id="state"
          onChange={handleInputChange}
          value={localObject.state}>
          {stateSelector}
        </select>
          <label>
            Zip Code:
            <input
              type="text"
              id="zip"
              onChange={handleInputChange}
              value={localObject.zip}
            />
          </label>  
          <div>
            <button onClick={clearForm}>
              Clear
            </button>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
     );
}
 
export default NewLocalForm;