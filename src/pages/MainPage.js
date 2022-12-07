import React from "react"
import './MainPage.css'

import Navi from '../components/Navi'
import PostCard from '../components/PostCard'

function mainpage() {
  return (
    <div>
      <Navi />
      <div>
        <PostCard />
      </div>
    </div>
  )
}

export default mainpage