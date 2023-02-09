import React, { useState } from 'react';
import { Button, Container, Form, Offcanvas } from 'react-bootstrap';
import { FaListUl } from 'react-icons/fa';
import '../App.css'
import CheckFoodCat from './CheckFoodCat';
import gatto from './img/gatto.jpg'
import filtrogatto from './img/catfilter.png'
import cibopergatto from './img/cibopergatti.jpg'


function MenuOffCanvasCat() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div>
      
      <Button onClick={handleShow} variant="light" style={{marginLeft: "55px", marginTop: "55px"}}> 
            <img 
              alt= "filtro"
              src= {filtrogatto}
              style={{width:"150px", height:"150px"}}
            /> 
      </Button>
      <img 
              alt= "cibo"
              src= {cibopergatto}
              style={{width:"800px", height:"250px", marginLeft:"15%"}}
            /> 
        <Container>
      
        
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filtri</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div style={{ textAlign: "center"}}>
              <img
                className="img-gatto"
                src={gatto}
                alt="gatto"
              />
            </div>
            <h3>
              Scegli i filtri desiderati e conferma
            </h3>
            <CheckFoodCat />
          </Offcanvas.Body>
        </Offcanvas>
        </Container>
        </div>
      </>
      
    );
}
export default MenuOffCanvasCat;