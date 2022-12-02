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
      <div className="nav-list">
        <li>
          <Link to={"/"}>
            홈
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            검색
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            탐색 탭
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            메시지
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            알림
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            만들기
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            프로필
          </Link>
        </li>
      </div>
    </div>
  )
}

export default navi