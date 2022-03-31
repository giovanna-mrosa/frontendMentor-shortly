/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logoImg from '../../assets/logo.svg'
import facebookIcon from '../../assets/icon-facebook.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import pinterestIcon from '../../assets/icon-pinterest.svg'
import instagramIcon from '../../assets/icon-instagram.svg'

import './styles.scss'

export function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <img src={logoImg} alt="Logo" className="logo" />
        <div className="links-footer">
          <div className="row">
            <p>Features</p>
            <a>Link Shortening</a>
            <a>Branded Links</a>
            <a>Analytics</a>
          </div>
          <div className="row">
            <p>Resources</p>
            <a>Blog</a>
            <a>Developers</a>
            <a>Support</a>
          </div>
          <div className="row">
            <p>Company</p>
            <a>About</a>
            <a>Our Team</a>
            <a>Careers</a>
            <a>Contact</a>
          </div>
        </div>
        <div className="medias">
          <img src={facebookIcon} alt="Facebook icon" className="medias-icon" />
          <img src={twitterIcon} alt="Twitter icon " className="medias-icon" />
          <img src={pinterestIcon} alt="Pinterest icon" className="medias-icon" />
          <img src={instagramIcon} alt="Instagram icon" className="medias-icon" />
        </div>
      </div>
    </div>
  )
}