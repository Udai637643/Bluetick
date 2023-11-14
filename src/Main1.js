import React from 'react'

import second from "../src/img/second.png"
import img2 from "./img/img2.png"
const Main1 = () => {
    const containerStyle = {
        backgroundImage: `url(${img2})`, // Set the background image
        backgroundSize: 'cover', // Adjust the background size property as needed
        backgroundPosition: 'center', // Adjust the background position property as needed
        padding: '14%', // Add padding to maintain content readability
      };
    return (
        <>
        
            <div className="container-fluid" style={containerStyle} >
                
                <div className="row">
                    <div className="col-md-6 " style={{marginTop:"-6rem"}}  >
                        <h1 style={{fontWeight:700,color:"#4169e1"}}>InterviewGPT</h1>
                        <h1 style={{fontWeight:700}}>Empowering Recruiters with Al-Driven Interviews</h1>
                        <p style={{fontSize:18}}>Revolutionize Your Hiring Process with InterviewGPT</p>
                        <p style={{fontSize:18}}>AI-Powered Question Generation for Accurate </p>
                        <p style={{fontSize:18,marginTop:"-0.7rem"}}>Candidate Assessment</p>
                        <button type="button" className="btn btn-primary mx-2 no-border-radius px-5 my-3"  style={{backgroundColor:"#4169e1"}}>TRY NOW</button>

                    </div>
                    <div className="col-md-6">
                                <img src={second} alt="" width="400" height="250" style={{marginTop:"-2rem"}} />
                    </div> 
                </div>
            </div>
            

        </>
    )
}

export default Main1