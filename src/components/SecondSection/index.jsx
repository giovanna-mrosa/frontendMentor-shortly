import React from "react";
import { Shortener } from "../Shortener";
import graphicIcon from '../../assets/icon-brand-recognition.svg'
import watchIcon from '../../assets/icon-detailed-records.svg'
import pencilIcon from '../../assets/icon-fully-customizable.svg'

import './styles.scss'

export function SecondSection() {
  return (
    <div className="container-2">
      <Shortener />
      <div className="text-adv">
        <h2>Advanced Statistics</h2>
        <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
      </div>
      <div className="detail-cards">
        <div className="detail"></div>
        <div className="cards">
          <div className="card-box position1">
            <div className="dot-icon">
              <img src={graphicIcon} alt="Graphic Icon" />
            </div>
            <h4>Brand Recognition</h4>
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className="card-box position2">
            <div className="dot-icon">
              <img src={watchIcon} alt="Watch icon" />
            </div>
            <h4>Detailed Records</h4>
            <p>Gain insights into who is clicking your links. Knowing whem=n and where people engage with your content helps inform better decisions.</p>
          </div>
          <div className="card-box position3">
            <div className="dot-icon">
              <img src={pencilIcon} alt="Art material icon" />
            </div>
            <h4>Fully Customizable</h4>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
    </div>
  )
}