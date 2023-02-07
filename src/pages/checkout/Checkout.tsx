import React from 'react'
import { Container,  FormCheck,  Row } from 'react-bootstrap';
import FormCheckout from '../../component/FormCheckout';
import OrderSummary from '../../component/OrderSummary';

function Checkout() {
  return (  
    <Container>
    <div className='py-5 text-center'>
        <h2>Ultimo passo</h2>
        <p className='lead'>Per completare l'acquisto inserisci i tuoi dati</p>
    </div>
    <Row>
      <FormCheckout /> <OrderSummary />
    </Row>
</Container>
    
  )
}

export default Checkout;