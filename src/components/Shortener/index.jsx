import React from "react";

import './styles.scss'

export function Shortener() {
  return (
    <div className="shortener-box">
      <div className="form-box">
        <form>
          <input 
            type="text" 
            name="input-shortener" 
            id="inpt-short" 
            className="inpt-short" 
            placeholder="Shorten a link here..."
          />
          <button type="button" className="btn-short">Shorten It!</button>
        </form>
      </div>
    </div>
  )
}