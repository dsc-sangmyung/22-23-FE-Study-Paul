import React from "react"
import './Navi.css'
import { Link } from "react-router-dom"

function navi() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to={"/"}>
          <img id="nav-logo" alt='instagram-logo' src={require('../assets/Instagram_logo.png')} />
        </Link>
      </div>
    </div>
  )
}

export default navi