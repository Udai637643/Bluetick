import React from 'react';
import second from "../src/img/second.png";
import img2 from "./img/img2.png";
import "./css/main1.css"
// Import a separate CSS file for custom styles

const Main1 = () => {
    const containerStyle = {
        backgroundImage: `url(${img2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '14%',
    };

    return (
        <>
            <div className="container-fluid main-container" style={containerStyle}>
                <div className="row">
                    <div className="col-md-6" style={{ marginTop: "-6rem" }}>
                        <h1 style={{ fontWeight: 700, color: "#4169e1" }}>InterviewGPT</h1>
                        <h1 style={{ fontWeight: 700 }}>Empowering Recruiters with AI-Driven Interviews</h1>
                        <p style={{ fontSize: 18 }}>Revolutionize Your Hiring Process with InterviewGPT</p>
                        <p style={{ fontSize: 18 }}>AI-Powered Question Generation for Accurate </p>
                        <p style={{ fontSize: 18, marginTop: "-0.7rem" }}>Candidate Assessment</p>
                        <button type="button" className="btn btn-primary mx-2 no-border-radius px-5 my-5" style={{ backgroundColor: "#4169e1" }}>TRY NOW</button>
                    </div>
                    <div className="col-md-6">
                        <img src={second} alt="" className="non-fluid-img"  width="400" height="250" style={{ marginTop: "-2rem" }} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main1;
