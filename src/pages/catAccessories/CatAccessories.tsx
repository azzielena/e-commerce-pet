import React from 'react';
import gatto from '../../component/img/gatto.jpg'
import { Container } from 'react-bootstrap';
import ListProducts from '../../component/ListProducts/ListProduct';

function CatAccessories() {
  return (  
    <div>
      <div style={{ textAlign: "center"}}><img
        className="img-gatto"
        src={gatto}
        alt="gatto"
        style={{width: "400px", height: "400px"}}
      /></div>
      <Container className="mt-3 viewProduct" > <ListProducts />
      </Container>
    </div>
    
  )
}
export default CatAccessories;