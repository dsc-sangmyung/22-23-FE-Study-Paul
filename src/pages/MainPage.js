import React from "react"
import './MainPage.css'

import Navi from '../components/Navi'
import PostCard from '../components/PostCard'
import StoryCard from "../components/StoryCard"

function mainpage() {
  return (
    <div className="main-page">
      <div className="navi-bar">
        <Navi/>
      </div>
      <div className="content-area">
        <div className="main-contents">
          <div className="story-card">
            <StoryCard />
          </div>
          <div className="post-card">
            <PostCard id="1intheworld_hs.ryu__" location="Korea"/>
            <PostCard id="1intheworld_hs.ryu__" location="Korea"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default mainpage