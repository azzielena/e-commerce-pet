
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
    <div style={{width: "100%", backgroundColor: "#39c010", marginTop: "60px", bottom: "0px", height: "40px"}}>
    <footer className='footer'>
        <div style={{padding: "25px", fontSize: "18px"}}>
            
            <div style={{float: 'left'}}><FaInstagram /> <FaFacebook /> @petStore </div> <div> Contacts: &emsp;&emsp; <FaPhone />+39 3391028431 &emsp;&emsp; <FaMailBulk/> petStore@gmail.com &emsp;&emsp; <div style={{float: 'right'}}><a href="index.tsx" >PetStore</a>
            <span>&copy; 2023 </span> </div></div>    
        </div>
    </footer>
</div>
  );
}

export default Footer;
