import React from 'react';
import cane from '../../component/img/cane.jpg'
import { Container } from 'react-bootstrap';
import ListAccessories from '../../component/ListProducts/ListAccessories';

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
      <Container className="mt-3 viewProduct"> <ListAccessories val={" "}/>
      </Container>
    </div>
    
  )
}

export default DogAccessories;