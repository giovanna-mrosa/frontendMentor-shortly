/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logoImg from '../../assets/logo.svg'

import './styles.scss'

export function Nav() {
  return (  
    <div className="nav-box">
      <div className="left-box">
        <img src={logoImg} alt="Logo" />
        <div className="links">
          <a>Features</a>
          <a>Pricing</a>
          <a>Resources</a>
        </div>
      </div>
      <div className="right-box">
        <button className="btn-login" type="button">Login</button>
        <button className="btn-sign-up" type="button">Sign Up</button>
      </div>
    </div>
  )
}