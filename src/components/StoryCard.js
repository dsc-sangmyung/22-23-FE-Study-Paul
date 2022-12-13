import React from "react";
import './StoryCard.css'

function StoryCard(props) {
  return (
    <div className="story-profile">
      <div id="story-profile-pic"></div>
      <div id="story-id">{props.id}</div>
    </div>
  )
}

export default StoryCard