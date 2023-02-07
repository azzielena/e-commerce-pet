import React from 'react';
import { Container } from 'react-bootstrap';
import ListProducts from '../../component/ListProducts/ListProduct';
import CheckFoodDog from '../../component/CheckFoodDog';
import MenuOffCanvasDog from '../../component/MenuOffCanvasDog';
import '../../App.css'

function DogFood() {
  return (  
    <div>
      <MenuOffCanvasDog /> 
      <Container className="mt-3 viewProduct" > <ListProducts />
      </Container>
    </div>
    
  )
}

export default DogFood;