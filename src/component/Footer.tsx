
import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo2 from './img/logo2.jpg'
import secondImg from './img/omaggio.jpg'
import thirdImg from './img/contattoImg.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';




function Footer() {
  return (  

  <div className="footer">
    <div style={{float: 'left'}}><FaInstagram /> <FaFacebook /> @petStore </div> 
    <div style={{textAlign:"center"}}> Contacts: &emsp;&emsp; <FaPhone />+39 3391028431 &emsp;&emsp; <FaMailBulk/> petStore@gmail.com &emsp;&emsp; 
      <div style={{float: 'right'}}><a href="index.tsx" >PetStore</a>
        <span>&copy; 2023 </span> 
      </div>
    </div>    
  </div>
  );
}

export default Footer;
