import React from "react";
import './LoginBox.css'
import { Link } from "react-router-dom";

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
    </div>
  )
}

export default LoginBox;