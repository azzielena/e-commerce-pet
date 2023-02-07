import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo2 from './img/logo2.jpg'
import secondImg from './img/omaggio.jpg'
import thirdImg from './img/contattoImg.png'
import fourthImg from './img/quartaImg.jpg'


function HomeImageScroll() {
  return (  
    
<Carousel  style={ {width: "60%" , height:"400px",  marginLeft: "20%", marginRight: "20%", marginTop:"2%"}}>
    <Carousel.Item interval={2000}  >
      <img
        className="d-block w-100"
        src={logo2}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={secondImg}
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={thirdImg}
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={fourthImg}
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  );
}

export default HomeImageScroll;

