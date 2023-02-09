import React from 'react';
import { Container } from 'react-bootstrap';
import ListProducts from '../../component/ListProducts/ListProduct';
import CheckFoodDog from '../../component/CheckFoodDog';
import MenuOffCanvasDog from '../../component/MenuOffCanvasDog';
import '../../App.css'
import FiltersDog from '../../component/FiltersDog';
import Footer from '../../component/Footer';

function DogFood() {
  return (  
    <div>
      <FiltersDog />
      <Container className="mt-3 viewProduct" style={{float:"right", width:"80%"}} > 
        <ListProducts />
        <Footer  />
      </Container>
    </div>
    
  )
}

export default DogFood;