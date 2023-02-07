import React, { useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { FaListUl } from 'react-icons/fa';
import '../App.css'
import CheckFoodDog from './CheckFoodDog';
import cane from './img/cane.jpg'

function MenuOffCanvasDog() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <Button onClick={handleShow} variant="light" style={{marginLeft: "55px"}}> 
      <FaListUl style={{ width:"40px", height:"40px"} } /> 
      </Button>
        
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filtri</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div style={{ textAlign: "center"}}>
              <img
                className="img-cane"
                src={cane}
                alt="cane"
              />
            </div>
            <h3>
              Scegli i filtri desiderati e conferma
            </h3>
            <CheckFoodDog />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}

export default MenuOffCanvasDog;
