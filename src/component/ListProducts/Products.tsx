
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
      <Card.Img variant="top" src={product.image} className="img-card"  />
      <Card.Body>
        <Card.Title className="title-card">{product.title}</Card.Title>
        <Card.Text className="description-card">
          {product.description}
        </Card.Text>
        Prezzo: ${product.price} 
        <button className="btnAddCart" type="button"  onClick={() =>handleAddToCart(product)} >Aggiungi al carrello</button>
        
      </Card.Body>
    </Card>
  )
}

export default Products;