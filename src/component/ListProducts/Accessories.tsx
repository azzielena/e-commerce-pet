import Card from 'react-bootstrap/Card'
import { AccessoriesItem } from '../../types/typeApp';
import '../../App.css'

type Props = {
    product: AccessoriesItem;
    handleAddToCart: (product: AccessoriesItem) => void;
  }

function Accessories({product, handleAddToCart}: Props) {
    return (  
      <Card style={{ width: '15rem', margin:"5px" }}>
        <Card.Img variant="top" src={product.Img} className="img-card"  />
        <Card.Body>
          <Card.Title className="title-card">{product.Nome}</Card.Title>
          <Card.Subtitle className="subtitle-card">{product.Marca}</Card.Subtitle> <br></br>
          <Card.Text className="description-card">
            {product.Descrizione}
          </Card.Text>
          Prezzo: ${product.Prezzo} 
          <button className="btnAddCart" type="button"  onClick={() =>handleAddToCart(product)} >Aggiungi al carrello</button>
          
        </Card.Body>
      </Card>
    )
  }
  export default Accessories;