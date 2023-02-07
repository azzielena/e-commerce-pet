import React, { useState } from 'react';

import {  Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type Props ={
    handleClose: (state:boolean) => void
}

const SidebarCart =({handleClose}:Props)=>{
    
  return (  
    <Offcanvas show={true} onHide={() => handleClose(false)} placement='end' sroll={true}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Carrellos</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>
     cart
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default SidebarCart;