import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ListProducts from '../../component/ListProducts/ListProduct';
import CheckFoodDog from '../../component/CheckFoodDog';
import MenuOffCanvasDog from '../../component/MenuOffCanvasDog';
import '../../App.css'
import FiltersDog from '../../component/FiltersDog';
import Footer from '../../component/Footer';

function DogFood(val:any) {
  return (  
    <div>
      <MenuOffCanvasDog />
      <Container className="mt-3 viewProduct">
            <ListProducts {...val}/>
      </Container>
    </div>

  )
}

export default DogFood;