import React from 'react'
import {Link} from 'react-router-dom'
import "../../styles/Footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <h4 className="text-center" style={{color:"white"}}>
             All Right Reserved &copy; E-kart 
        </h4>
        <p className="text-center mt-3">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/policy">Privacy Policy</Link>
        </p>
    </div>
  )
}

export default Footer