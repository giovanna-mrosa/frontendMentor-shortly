/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import logoImg from '../../assets/logo.svg'
import burgerImg from '../../assets/icon-hamburger.svg'
import closeImg from '../../assets/icon-close.svg'

import './styles.scss'

export function NavMob() {
  const [toggle, setToggle] = useState(false)

  function handleToggle() {
    setToggle(!toggle)
  }

  return (
    <div className="nav-box-mob">
      <img src={logoImg} alt="Logo" className="logo-mob"/>
      <img 
        src={toggle === true 
            ? closeImg 
            : burgerImg
        } 
        alt="Hamburger Menu Icon" 
        className="burger" 
        onClick={handleToggle}
      />
      <div className={toggle === true ? "menu-box" : "hidden-menu-box menu-box"}>
        <a className="link-menu-box">Features</a>
        <a className="link-menu-box">Pricing</a>
        <a className="link-menu-box">Resources</a>
        <div className="line"></div>
        <button className="btn-login-mob" type="button">Login</button>
        <button className="btn-sign-up-mob" type="button">Sign Up</button>
      </div>
    </div>
  )
}