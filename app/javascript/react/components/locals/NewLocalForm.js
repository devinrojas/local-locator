import ErrorList from "../errors1/ErrorList"
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
        zip: "",
        twitter: "",
        facebook: "",
        website: ""
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
        <div className="">
        <div className='form'>
          <h1 className='form-text'>SUBMIT A NEW LOCAL</h1>
        </div>
        <p>All inputs with the <strong>" <span className="input">*</span> "</strong> are required.</p>
        <div className="form-tile callout">
            <div>
                    <form onSubmit={onSubmitHandler}>
                        <ErrorList errors={errors} />
                        <div className="grid-x grid-padding-x">
                            <div className="medium-4 cell">
                                <label>
                                    Venue Name: <span className="input">*</span>
                                    <input
                                    type="text"
                                    id="name"
                                    onChange={handleInputChange}
                                    value={localObject.name}
                                    />
                                </label>
                            </div>
                            <div className="medium-8 cell">
                                <label>
                                    Venue Description: <span className="input">*</span>
                                    <input
                                    type="text"
                                    id="bio"
                                    onChange={handleInputChange}
                                    value={localObject.bio}
                                    />
                                </label>  
                            </div>
                        </div>
                        <div className="grid-x grid-padding-x">
                            <div className="medium-5 cell">
                                <label>
                                    Address: <span className="input">*</span>
                                    <input
                                    type="text"
                                    id="address"
                                    onChange={handleInputChange}
                                    value={localObject.address}
                                    />
                                </label>  
                            </div>
                            <div className="medium-3 cell">
                                <label>
                                    City: <span className="input">*</span>
                                    <input
                                    type="text"
                                    id="city"
                                    onChange={handleInputChange}
                                    value={localObject.city}
                                    />
                                </label>  
                            </div>
                            <div className="medium-2 cell">
                                <label >State: <span className="input">*</span> </label>
                                    <select
                                id="state"
                                onChange={handleInputChange}
                                value={localObject.state}>
                                {stateSelector}
                                </select>
                            </div>
                            <div className="medium-2 cell">
                                <label>
                                    Zip: <span className="input">*</span>
                                    <input
                                    type="text"
                                    id="zip"
                                    onChange={handleInputChange}
                                    value={localObject.zip}
                                    />
                                </label> 
                            </div>
                        </div>
                        <div className="grid-x grid-padding-x">
                            <div className="medium-6 cell">
                                <label>
                                    Local's Twitter URL:
                                    <input
                                    type="text"
                                    id="twitter"
                                    onChange={handleInputChange}
                                    value={localObject.twitter}
                                    />
                                </label>
                            </div>   
                            <div className="medium-6 cell" >
                                <label>
                                    Local's Facebook URL:
                                    <input
                                    type="text"
                                    id="facebook"
                                    onChange={handleInputChange}
                                    value={localObject.facebook}
                                    />
                                </label> 
                            </div>
                            <div className="medium-12 cell">
                                <label>
                                    Local's Website URL:
                                    <input
                                    type="text"
                                    id="website"
                                    onChange={handleInputChange}
                                    value={localObject.website}
                                    />
                                </label> 
                            </div>
                        </div>
                        
                        <label>Games played: <span className="input">*</span> </label>
                        <fieldset className="fieldset grid-x grid-padding-x">
                            <input id="sfv" type="checkbox"/><label for="sfv"> Street Fighter V </label>
                            <input id="ggst" type="checkbox"/><label for="ggst"> Guilty Gear: Strive</label>
                            <input id="t7" type="checkbox"/><label for="t7"> Tekken 7</label>
                            <input id="dbfz" type="checkbox"/><label for="dbfz"> Dragonball FighterZ</label>
                            <input id="kof" type="checkbox"/><label for="kof"> The King of Fighters XV </label>
                            <input id="anime" type="checkbox"/><label for="anime"> Anime( Melty Blood / Blazblue )</label>
                            <input id="retro" type="checkbox"/><label for="retro"> Retro( 3S, ST, USFIV, VSAV, etc. )</label>
                            <input id="other" type="checkbox"/><label for="other"> Other</label>
                        </fieldset>
                        <div>
                            <button onClick={clearForm} className="button blue">
                            Clear
                            </button>
                            <input className="button"type="submit" value="Submit" />
                        </div>
                    </form>
            </div>
        </div>
      </div>
     );
}
 
export default NewLocalForm;