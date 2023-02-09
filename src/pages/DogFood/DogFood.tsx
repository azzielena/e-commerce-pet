import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ListProducts from '../../component/ListProducts/ListProduct';
import CheckFoodDog from '../../component/CheckFoodDog';
import MenuOffCanvasDog from '../../component/MenuOffCanvasDog';
import '../../App.css'
import FiltersDog from '../../component/FiltersDog';
import Footer from '../../component/Footer';

function DogFood() {
  return (  
    <div>
      <Container>
        <Row>
          <FiltersDog />
          <Container className="mt-3 col-md-5 col-lg-4 viewProduct">
            <ListProducts />
          </Container>
        </Row>
      </Container>

    </div>
  )
}

export default DogFood;