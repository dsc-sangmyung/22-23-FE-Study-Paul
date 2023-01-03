import React from "react";
import './LoginBox.css'
import { Link } from "react-router-dom";

function LoginBox() {
  return (
    <div className="box">
      <Link to={"/"}>
        <img id="login-logo" alt="instagram-logo" src={require('../assets/Instagram_logo.png')} />
      </Link>
    </div>
  )
}

export default LoginBox;