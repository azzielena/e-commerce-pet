
import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo2 from './img/logo2.jpg'
import secondImg from './img/omaggio.jpg'
import thirdImg from './img/contattoImg.png'
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { FaMailBulk } from 'react-icons/fa';
import { Link, Route, Routes } from 'react-router-dom';
import ContactUs from '../pages/contact/ContactUs';




function Footer() {
  return (  
<div><Routes> <Route  path='/contactUs' element={<ContactUs />}/> </Routes> 
  <div className="footer">
    <div style={{float: 'left'}}><FaInstagram /> <FaFacebook /> @petStore </div> 
    <div style={{textAlign:"center"}}> 
    Contacts: &emsp;&emsp; <FaPhone />+39 3391028431 &emsp;&emsp; <FaMailBulk/> petStore@gmail.com &emsp;&emsp; 
    <Link to="/contactUs" style={{textDecoration:"none"}}><a href="action/4" >Invia un messaggio</a></Link>
      <Link to="/"><div style={{float: 'right'}}><a href="#" >PetStore</a>
        <span>&copy; 2023 </span> 
      </div>
      </Link>
    </div>  
    </div>
  </div>
  );
}

export default Footer;
