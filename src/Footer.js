import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faQrcode } from '@fortawesome/free-brands-svg-icons';


import second from "../src/img/second.png"
const Footer = () => {
    return (
        <>
           <div className="container-fluid">
            <di className="row">
            <div className="col-md-6 d-flex justify-content-around align-items-center">
      <div className="social-icon">
        <FontAwesomeIcon icon={faFacebookF} size="2x" />
      </div>
      <div className="social-icon">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </div>
      <div className="social-icon">
        <span>@</span>
      </div>
      <div className="social-icon">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </div>
      <div className="social-icon">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </div>
      <div className="social-icon">
        <FontAwesomeIcon icon={faQrcode} size="2x" />
      </div>
    </div>
                <div className="col-md-6">
                    
                </div>
            </di>
           </div>
        </>
    )
}

export default Footer