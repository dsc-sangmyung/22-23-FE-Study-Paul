import React from "react"
import './MainPage.css'
import { Link } from "react-router-dom"

import Navi from '../../components/Navi'
import PostCard from '../../components/PostCard'
import StoryCard from "../../components/StoryCard"
import MyProfile from "../../components/MyProfile"
import ProfileList from "../../components/ProfileList"

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
          <div className="profile-recommend">
            <div id="recommend-text">회원님을 위한 추천</div>
            <div id="blank" />
            <div id="see-all">모두 보기</div>
          </div>
          <ProfileList id="_dev.paul_" sub="회원님을 위한 추천"/>
          <ProfileList id="_dev.paul_" sub="회원님을 위한 추천"/>
          <ProfileList id="_dev.paul_" sub="회원님을 위한 추천"/>
          <ProfileList id="_dev.paul_" sub="회원님을 위한 추천"/>
          <ProfileList id="_dev.paul_" sub="회원님을 위한 추천"/>
          <div className="bottom-link1">
            <div id="bottom-link-style">
              <Link to={"/"}>
                소개
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                도움말
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                홍보 센터
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                API
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                채용 정보
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                개인정보처리방침
              </Link>
            </div>
            &#183;
          </div>
          <div className="bottom-link2">
            <div id="bottom-link-style">
              <Link to={"/"}>
                약관
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                위치
              </Link>
            </div>
            &#183;
            <div id="bottom-link-style">
              <Link to={"/"}>
                언어
              </Link>
            </div>
          </div>
          <div className="copyright">
            &#169; 2022 INSTAGRAM FROM META
          </div>
        </div>
      </div>
    </div>
  )
}

export default mainpage