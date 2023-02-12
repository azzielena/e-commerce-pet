import React from 'react';
import CheckFoodCat from '../../component/CheckFoodCat';
import MenuOffCanvasCat from '../../component/MenuOffCanvasCat';
import { Container } from 'react-bootstrap';
import ListProducts from '../../component/ListProducts/ListProduct';
import '../../App.css'

function CatFood(val:any) {
  return (  
    <div>
    <MenuOffCanvasCat /> 
    <Container className="mt-3 viewProduct" > <ListProducts {...val} />
    </Container>
    </div>
  )
}
export default CatFood;