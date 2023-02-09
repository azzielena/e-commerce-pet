import React from 'react';
import cane from './img/cane.jpg'
import '../App.css'
import CheckFoodDog from './CheckFoodDog';
import { Container } from 'react-bootstrap';

function DogFood() {
  return (  
    <div  className='col-md-7 col-lg-8'>
      <div >
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
    </div>
    
    
    
  )
}

export default DogFood;