import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import imgFooter from '../../images/harryFooter.jpg'
function Footer() {
  return (
    
      <div className="footer">
       
        <div className="hecho">
          
          <img src={imgFooter} alt='footer'/>
                    
        </div>
      </div>
    
  );
}

export default Footer;
