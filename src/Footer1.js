import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faQuora } from '@fortawesome/free-brands-svg-icons';


import second from "../src/img/second.png"
const Footer1 = () => {
    return (
        <>
            <div className="container-fluid">
                
                <di className="row">
                
                    <div className="col-md-6 d-flex justify-content-around align-items-center py-5" style={{backgroundColor:"#00008b"}}>
                        <hr />
                        <div className="social-icon" style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                            <FontAwesomeIcon icon={faFacebookF} size="2x" />
                        </div>
                        <div className="social-icon" style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </div>
                        <div className="social-icon" style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                            <span>@</span>
                        </div>
                        <div className="social-icon" style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </div>
                        <div className="social-icon" style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
                            <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
                        </div>
                        <div className="social-icon" style={{ background: 'white', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
  <FontAwesomeIcon icon={faQuora} size="2x" />
</div>

                    </div>
                    <div className="col-md-6 d-flex justify-content-around align-items-center py-5" style={{backgroundColor:"#0000cd"}}>
                                <p style={{fontSize:"1.2rem",color:"white"}}>2023 © All right reserved by Bluetick Consultants LLP</p>
                    </div>
                </di>
            </div>
        </>
    )
}

export default Footer1