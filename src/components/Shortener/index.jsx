import React, { useState } from "react";
import validator from 'validator';
import api from "../../services/api";
import Loader from "react-js-loader";

import './styles.scss'

export function Shortener() {
  const [linkError, setLinkError] = useState('')
  const [link, setLink] = useState('')
  const [empty, setEmpty] = useState(false)
  const [shortLink, setShortLink] = useState()
  const [loader, setLoader] = useState(false)
  const [toggleCopied, setToggleCopied] = useState(false)
  const [copiedBg, setCopiedBg] = useState(false)


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

  async function handleSubmit(event) {
    event.preventDefault()
    setLoader(true)

    const response = await api.post(`/shorten?url=${link}`)

    setShortLink(response.data)
    setLoader(false)

    // console.log(response)
  }

  function copyText() {
    navigator.clipboard.writeText(shortLink.result?.full_short_link)

    setToggleCopied(true)
    setCopiedBg(true)

    setTimeout(() => {
      setToggleCopied(false)
      setCopiedBg(false)
    }, 3000)
  }
  console.log(shortLink)

  return (
    <div className="shortener-box">
      <div className="form-container">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
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
              type="submit"
              className="btn-short"
              onClick={validateLink}
            >
              Shorten It!
            </button>
          </form>
        </div>        
      </div>      
        <div>
        {shortLink && (
          <div className="response-box">
            <p className="written-link">{link}</p>
            <div className="result-box">
              <p className="result">{shortLink.result?.full_short_link}</p>
              <button
                type="button"
                className={ copiedBg === true ? "btn-copy copied-bg" : "btn-copy"}
                onClick={copyText}
              >
                {toggleCopied === true ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
        {loader 
          && linkError === ''
          && (<Loader 
            type="spinner-default" 
            bgColor={"#3b3054"} 
            size={100} 
          />)
        }
      </div>      
    </div>
  )
}