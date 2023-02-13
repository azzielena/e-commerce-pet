
import React from 'react';

import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer() {
  return (  
<div>
  <div className="footer">
    <div style={{float: 'left'}}><FaInstagram /> <FaFacebook /> @petStore </div> 
    <div style={{textAlign:"center"}}> 
    Contacts: &emsp;&emsp; <FaPhone />+39 3391028431 &emsp;&emsp; <FaMailBulk/> petStore@gmail.com &emsp;&emsp; 
    <Link to="/contactUs" style={{textDecoration:"none"}}><a href="action/4" >Invia un messaggio</a></Link>
      <Link to="/"><div style={{float: 'right'}}><a href="action/5" >PetStore</a>
        <span>&copy; 2023 </span> 
      </div>
      </Link>
    </div>  
    </div>
  </div>
  );
}

export default Footer;
