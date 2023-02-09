
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { ProductItem } from '../../types/typeApp';
import '../../App.css'

type Props = {
  product: ProductItem;
  handleAddToCart: (product: ProductItem) => void;
}

function Products({product, handleAddToCart}: Props) {
  return (  
    <Card style={{ width: '15rem', margin:"5px" }}>
      <Card.Img variant="top" src={product.Img} className="img-card"  />
      <Card.Body>
        <Card.Title className="title-card">{product.Nome}</Card.Title>
        <Card.Subtitle className="subtitle-card">{product.Marca}</Card.Subtitle>
        <br></br>
        <Card.Text className="description-card">
          {product.Descrizione}
          <br></br>
          Formato: {product.Kg} kg
        </Card.Text>
        
        Prezzo: ${product.Prezzo} 
        <button className="btnAddCart" type="button"  onClick={() =>handleAddToCart(product)} >Aggiungi al carrello</button>
        
      </Card.Body>
    </Card>
  )
}


export default Products;



