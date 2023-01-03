import React from "react";
import './LoginBox.css'
import { Link } from "react-router-dom";

import MainPage from "../pages/MainPage"

function LoginBox() {
  return (
    <div className="box">
      <div className="login-logo">
        <Link to={"/"}>
          <img id="login-logo-img" alt="instagram-logo" src={require('../assets/Instagram_logo.png')} />
        </Link>
      </div>
      <div className="input-box">
        <input id="id-input-box" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input id="pw-input-box" placeholder="비밀번호"/>
      </div>
      <div className="button-area">
        <Link to={"/"}>
          <div className="login-button">
            로그인
          </div>      
        </Link>
      </div>
      <div className="or">
        <div id="hr-tag" ></div>
        <div id="or-text">또는</div>
        <div id="hr-tag"></div>
      </div>
      <div className="facebook-link">
        Facebook으로 로그인
      </div>
      <div className="find-pw-link">
        비밀번호를 잊으셨나요?
      </div>
    </div>
  )
}

export default LoginBox;