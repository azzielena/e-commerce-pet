import React from 'react';
import cane from '../../component/img/cane.jpg'
import { Container } from 'react-bootstrap';
import ListProducts from '../../component/ListProducts/ListProduct';

function DogAccessories() {
  return (  
    <div>
      <div style={{ textAlign: "center"}}>
            <img
              className="img-cane"
              src={cane}
              alt="cane"
            />
      </div>
      <Container className="mt-3 viewProduct"> <ListProducts />
      </Container>
    </div>
    
  )
}

export default DogAccessories;