import React from "react";
import './MyProfile.css'

function MyProfile(props) {
  return (
    <div className="my-profile">
      <div className="profile-pic">{props.profilePic}</div>
      <div className="profile-text">
        <div id="profile-id">{props.id}</div> 
        <div id="profile-name">{props.name}</div>
      </div>
      <div id="blank" />
      <div className="profile-change">
        전환
      </div>
    </div>
  )
}

export default MyProfile