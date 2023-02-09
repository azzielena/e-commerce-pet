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
            <ListProducts v={val}/>
      </Container>
    </div>


    /*
    <div>
      
      <Container>
        <Row>
          <FiltersDog />
          <Container className="mt-3 col-md-5 col-lg-4 viewProduct">
            <ListProducts v={val}/>
          </Container>
        </Row>
      </Container>

    </div>*/
  )
}

export default DogFood;