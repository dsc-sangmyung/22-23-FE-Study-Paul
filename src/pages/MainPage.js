import React from "react"
import './MainPage.css'

import Navi from '../components/Navi'
import PostCard from '../components/PostCard'
import StoryCard from "../components/StoryCard"
import MyProfile from "../components/MyProfile"

function mainpage() {
  return (
    <div className="main-page">
      <div className="navi-bar">
        <Navi/>
      </div>
      <div className="content-area">
        <div className="main-contents">
          <div className="story-card">
            <div className="story-box">
              <div id="left-margin" />
              <StoryCard id="1intheworld_hs.ryu__"/>
              <StoryCard id="test"/>
              <div id="right-margin" />
            </div>
          </div>
          <div className="post-card">
            <PostCard id="1intheworld_hs.ryu__" location="Korea"/>
            <PostCard id="1intheworld_hs.ryu__" location="Korea"/>
          </div>
        </div>
        <div className="profile-area">
          <MyProfile id="1intheworld_hs.ryu__" name="H.S.Ryu"/>
        </div>
      </div>
    </div>
  )
}

export default mainpage