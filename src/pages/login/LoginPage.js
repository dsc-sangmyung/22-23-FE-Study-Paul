import React from "react";
import '../login/LoginPage.css'
import { Link } from "react-router-dom";

import LoginBox from "../../components/LoginBox";

function LoginPage() {
  return(
    <div className="login-page">
      <div className="login-tab">
        <LoginBox />
      </div>
      <div className="sign-up">
        <div id="no-account">
          계정이 없으신가요?
        </div>
        <div id="sign-up-link">
          <Link to={"/"}>
            가입하기
          </Link>
        </div>
      </div>
      <div className="download-guide">
        앱을 다운로드하세요.
      </div>
      <div className="link-meta">
        <div id="link-meta-style">
          <Link to={"/"}>
            Meta
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            소개
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            블로그
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            채용 정보
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            도움말
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            API
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            개인정보처리방침
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            약관
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            인기 계정
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            Instagram Lite
          </Link>
        </div>
        <div id="link-meta-style">
          <Link to={"/"}>
            연락처 업로드 & 비사용자
          </Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;