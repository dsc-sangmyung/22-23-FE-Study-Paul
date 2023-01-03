import React from "react";
import './LoginPage.css'
import { Link } from "react-router-dom";

import LoginBox from "../components/LoginBox";

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
    </div>
  )
}

export default LoginPage;