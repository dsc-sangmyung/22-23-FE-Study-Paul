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
    </div>
  )
}

export default LoginPage;