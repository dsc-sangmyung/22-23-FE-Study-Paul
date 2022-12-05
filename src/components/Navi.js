import React from "react"
import './Navi.css'
import { Link } from "react-router-dom"

import { GrHomeRounded } from 'react-icons/gr'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineCompass } from 'react-icons/ai'
import { TbSend } from 'react-icons/tb'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiPlusSquare } from 'react-icons/fi'


function navi() {
  return (
    <div className="nav">
      <div className="logo">
        <Link to={"/"}>
          <img id="nav-logo" alt='instagram-logo' src={require('../assets/Instagram_logo.png')} />
        </Link>
      </div>
      <div className="nav-list">
        <div className="home-button">
          <li>
            <Link to={"/"}>
              <GrHomeRounded id="home-icon"/>홈
            </Link>
          </li>
        </div>
        <div className="search-button">
          <li>
            <Link to={"/"}>
              <FiSearch id="search-icon"/>검색
            </Link>
          </li>
        </div>
        <div className="compass-button">
          <li>
            <Link to={"/"}>
              <AiOutlineCompass id="compass-icon"/>탐색 탭
            </Link>
          </li>
        </div>
        <div className="message-button">
          <li>
            <Link to={"/"}>
              <TbSend id="message-icon"/>메시지
            </Link>
          </li>
        </div>
        <div className="heart-button">
          <li>
            <Link to={"/"}>
              <AiOutlineHeart id="heart-icon"/>알림
            </Link>
          </li>
        </div>
        <div className="make-button">
          <li>
            <Link to={"/"}>
              <FiPlusSquare id="make-icon"/>만들기
            </Link>
          </li>
        </div>
      </div>
      <div className="blank"></div>
    </div>
  )
}

export default navi