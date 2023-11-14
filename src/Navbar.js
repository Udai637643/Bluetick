import React from 'react'
import title from "../src/img/first2.png"
import "./css/navcss.css"

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
      <div className="container col-sm-12">
        <a className="navbar-brand img-fluid" href="#"><img src={title} width="139" alt=""/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mr-5 p-9 " style={{fontWeight:700}}>
            <li className="nav-item mx-5  ">
              <a className="nav-link"  href="#">Home</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="#" >Features</a>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link" href="#">Benefits</a>
            </li>
            <button type="button" className="btn btn-primary mx-2 ">GO TO APP</button>
          </ul>
        </div>
      </div>
    </nav>


    </>
  )
}

export default Navbar