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
  const [listLinks, setListLinks] = useState([])
  const [paramLink, setParamlink] = useState('')


  const validateLink = () => {
    if (validator.isEmpty(link)) {
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

    setShortLink(response.data.result.full_short_link)

    saveListLinks(response.data.result.full_short_link)

    setLoader(false)    
  }

  function saveListLinks(newShortLink) {
    let linkBar = {}
    linkBar = {
      link: link,
      shortLink: newShortLink
    }
    setListLinks([...listLinks, linkBar])
  }

  function copyText(param) {
    setParamlink(param)

    navigator.clipboard.writeText(param)

    setToggleCopied(true)
    setCopiedBg(true)

    setTimeout(() => {
      setToggleCopied(false)
      setCopiedBg(false)
    }, 3000)
  }

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
        {shortLink && listLinks.map(listLink => (
          <div key={listLink.link} className="response-box">
            <p className="written-link">{listLink.link}</p>
            <div className="result-box">
              <p className="result">{listLink?.shortLink}</p>
              <button
                type="button"
                className={ copiedBg === true && listLink?.shortLink === paramLink ? "btn-copy copied-bg" : "btn-copy"}
                onClick={() => copyText(listLink?.shortLink)}
              >
                {toggleCopied === true && listLink?.shortLink === paramLink ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        ))}
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