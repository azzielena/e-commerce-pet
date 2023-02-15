import React from 'react'
import { Container,  Row } from 'react-bootstrap';
import Footer from '../../component/Footer';
import FormCheckout from '../../component/FormCheckout';
import OrderSummary from '../../component/OrderSummary';


function Checkout() {
  return (  
    <div>
      <Container>
      <div className='py-5 text-center'>
      <h1 className="titlePayment" >Inserisci i tuoi dati per effettuare l'acquisto</h1> <br/>
      </div>
      <Row>
        <FormCheckout /> <OrderSummary />
      </Row>
      </Container>
    </div>
    
  )
}

export default Checkout;