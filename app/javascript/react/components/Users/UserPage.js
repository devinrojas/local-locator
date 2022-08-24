import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import _ from "lodash";

const UserPage = (props) => {
    const [user, setUser] = useState({})
    const userId = props.match.params.id
    let localTwitter
    let localFacebook
    let localWeb
    
    const getUser = async () => {
        try {
            const response = await fetch(`/api/v1/users/${userId}`)
            if (!response.ok){
                const errorMessage = `${response.status} (${response.statusText})`
                const error = new Error (errorMessage)
                throw(error)
            }
            const userData = await response.json()
            setUser(userData)
        } catch (error){
            console.error(`Error in fetch: ${error.message}`)
        }
    }
    
    useEffect(() =>{
        getUser()
    }, [])

    if (_.isEmpty(user)) {
        return null
    }

    const dateJoined = () =>{    
        return new Date(user.created_at).toDateString()
    }

    if(user.twitter) {
        localTwitter =  <a href={`${user.twitter}`} className="button social twitter"> <i className="fa-brands fa-twitter" aria-hidden="true"></i> Twitter </a>
    }
    if(user.facebook){
        localFacebook = <a href={`${user.facebook}`}  className="button social facebook"> <i className="fa-brands fa-facebook-f" aria-hidden="true"></i> Facebook </a>
    }
    if(user.website){
        localWeb = <a href={`${user.website}`}  className="button social website"> Website </a>
    }

  return (
    <div className="grid-container">
    <div className="grid-x grid-margin-x">

      <div className="card cell medium-4">
        <div className="">
            <img src={user.avatar.url} alt= {`${user.username}`} />
        </div>
        <h4 className="username">{user.username}</h4>
        <p className="bio">{user.bio}</p>

        <div className="role-date">
            <p >Joined: {dateJoined()}</p>
            <p >Role: {user.role}</p>
        </div>

        <p className="social-link">Social Links</p>
        {localTwitter}
        {localFacebook}
        {localWeb}

        <hr></hr>

        <a className="button edit-button" href={`/users/edit`} > Edit Profile </a>
      </div>

      <div className="card cell medium-8">
            <div className="username">
                    <p>FAVORITE VENUES</p>
                </div>
                <h4 className="">Venue will go here once favorited</h4>
                <p>The venue's bio</p>

                <p className="username">Games Playing</p>

            <img src={'app/assets/images/Icons/sfv.png'} />
      </div>

    </div>
  </div>
  )
}

export default UserPage