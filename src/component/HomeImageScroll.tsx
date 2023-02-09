import React from 'react';
import { Carousel } from 'react-bootstrap';
import logo from './img/petstore.jpg'
import secondImg from './img/omaggio.jpg'
import thirdImg from './img/contattoImg.png'
import fourthImg from './img/banner1.png'
import fifthImg from './img/banner2.jpg'


function HomeImageScroll() {
  return (  
    
<Carousel  style={ {width: "60%" , height:"400px",  marginLeft: "20%", marginRight: "20%", marginTop:"2%"}}>
    <Carousel.Item interval={2000}  >
      <img
        className="d-block w-100"
        src={logo}
        alt="First slide"
        //style={{width: "1400px", height: "430px"}}
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={secondImg}
        alt="Second slide"
        //style={{width: "1400px", height: "430px"}}
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={thirdImg}
        alt="Third slide"
        //style={{width: "1400px", height: "430px"}}
      />
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <img
        className="d-block w-100"
        src={fourthImg}
        alt="Fourth slide"
        //style={{width: "1400px", height: "430px"}}
      />
    </Carousel.Item>
    
  </Carousel>
  );
}

export default HomeImageScroll;

