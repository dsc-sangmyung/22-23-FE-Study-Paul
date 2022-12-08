import React from "react";
import './PostCard.css'

import { Link } from "react-router-dom";

function PostCard(props) {
  return (
    <div className="post-box">
      <div className="post-head">
        <div id="post-head-profile">{props.profile}</div>
        <div id="post-head-info">
          <div id="post-head-id">{props.id}</div>
          <div id="post-head-location">{props.location}</div>
        </div>
      </div>
      <div className="post-body">
        <div id="post-body-photo">{props.photo}</div>
      </div>
      <div className="post-bottom">
        
      </div>
    </div>
  )
}

export default PostCard