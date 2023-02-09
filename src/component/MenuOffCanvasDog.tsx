import React, { useState } from 'react';
import { Button, Form, Offcanvas } from 'react-bootstrap';
import { FaListUl } from 'react-icons/fa';
import '../App.css'
import CheckFoodDog from './CheckFoodDog';
import cane from './img/cane.jpg'
import filtrocane from './img/dogfilter.png'
import cibopercane from './img/cibopercani.jpg'

function MenuOffCanvasDog() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      <div>
          <Button onClick={handleShow} variant="light" style={{marginLeft: "55px", marginTop: "55px"}}> 
            <img 
              alt= "filtrocane"
              src= {filtrocane}
              style={{width:"150px", height:"150px"}}
            /> 
          </Button>

          <img 
              alt= "cibo"
              src= {cibopercane}
              style={{width:"800px", height:"250px", marginLeft:"15%"}}
            /> 
        
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

      </div>
      </>
    );
}

export default MenuOffCanvasDog;
