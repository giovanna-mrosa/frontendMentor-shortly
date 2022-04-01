import React from "react";
import { Nav } from "../Nav";
import { NavMob } from "../NavMob";
import girlDoodle from '../../assets/illustration-working.svg'

import './styles.scss'

export function FirstSection() {
  return (
    <div className="container-1">
      {window.screen.width > 768 ? (
        <Nav />
        ) : (
        <NavMob />
        )
      }
      <div className="first-section-content">
        <div className="first-section-content-text">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button type="button" className="btn-start">Get Started</button>
        </div>
        <img src={girlDoodle} alt="Girl working" />
      </div>
      
    </div>
  )
}