import React from 'react';
import cane from './img/cane.jpg'
import '../App.css'
import CheckFoodDog from './CheckFoodDog';
import { Container } from 'react-bootstrap';

function DogFood() {
  return (  
    <Container style={{width:"20%", float: "left"}}>
    <div style={{ textAlign: "center"}}>
        <img
          className="img-cane"
          style={{width:"250px", height:"auto"}}
          src={cane}
          alt="cane"
        />
      </div>
      <h3>
        Scegli i filtri desiderati e conferma
      </h3>
      <CheckFoodDog />
  </Container>
    
  )
}

export default DogFood;