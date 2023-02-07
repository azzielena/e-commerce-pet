import React, { useState } from 'react';

import {  Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cart from './cart/Cart';

type Props ={
    handleClose: (state:boolean) => void
}

const SidebarCart =({handleClose}:Props)=>{
    
  return (  
    <Offcanvas show={true} onHide={() => handleClose(false)} placement='end' >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Carrello</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
     <Cart />
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default SidebarCart;