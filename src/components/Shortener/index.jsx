import React, { useState } from "react";
import validator from 'validator';

import './styles.scss'

export function Shortener() {
  const [linkError, setLinkError] = useState('')
  const [link, setLink] = useState('')
  const [empty, setEmpty] = useState(false)



  const validateLink = () => {
    if (validator.isEmpty(link)) {
      console.log("validator", link)
      setLinkError('Please add a link') 
      setEmpty(true)     
    } else {
      setLinkError('')
      setEmpty(false)
    }
  }

  console.log("validator", link)

  return (
    <div className="shortener-box">
      <div className="form-box">
        <form>
          <input 
            type="text" 
            name="input-shortener" 
            id="inpt-short" 
            className={empty === true ? "inpt-short inpt-error" : "inpt-short"} 
            placeholder="Shorten a link here..."
            onChange={(e) => setLink(e.target.value)}
          />
          <span className="error-field">{linkError}</span>
          <button 
            type="button" 
            className="btn-short"
            onClick={validateLink}
          >
            Shorten It!
          </button>
        </form>
      </div>
    </div>
  )
}