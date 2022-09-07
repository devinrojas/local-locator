import React from 'react';
import { Link } from "react-router-dom"

const CommentTile = (props) => {
    return ( 
    <div>
        <div className="review-tile callout">
      <div className="grid-x">
        <div className="cell small-3 medium-2" >
          <Link to={`/users/${props.commentUserId}`} >
            <img className="user-avatar-small" src={`${props.userAvatar}`} />
          </Link>
        </div>
      </div>
      <div className="callout" >
        <p className="" > <Link to={`/users/${props.commentUserId}`} className="" ><i> @{props.username} </i></Link>writes: </p>
        <p >{props.body}</p>
      </div>
        <div className="error-display">
          {errorDisplay()}
        </div>
      </div>
    </div>
    );
}
 
export default CommentTile;