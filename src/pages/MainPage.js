import React from "react"
import './MainPage.css'

import Navi from '../components/Navi'
import PostCard from '../components/PostCard'

function mainpage() {
  return (
    <div className="main-page">
      <div className="navi-bar">
        <Navi/>
      </div>
      <div className="content-area">
        <div className="post-card">
          <PostCard id="1intheworld_hs.ryu__" location="Korea"/>
        </div>
      </div>
    </div>
  )
}

export default mainpage