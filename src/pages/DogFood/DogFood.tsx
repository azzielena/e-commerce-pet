import React from 'react';
import { Container} from 'react-bootstrap';
import ListProducts from '../../component/ListProducts/ListProduct';
import MenuOffCanvasDog from '../../component/MenuOffCanvasDog';
import '../../App.css'



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