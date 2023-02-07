import Form from 'react-bootstrap/Form';
import React from 'react';
import Button from 'react-bootstrap/Button';

function CheckFoodDog() {
  return (
    <div>
    &emsp;
    <Form style={{fontSize: "20px"}}>
      <Form.Check 
        type="switch"
        id="cucciolo"
        label="Cucciolo"
      />
     &nbsp;
      <Form.Check 
        type="switch"
        id="adulto"
        label="Adulto"
      />
      &nbsp;
      <Form.Check 
        type="switch"
        id="piccolo"
        label="Taglia piccola"
      />
      &nbsp;
      <Form.Check 
        type="switch"
        id="medio"
        label="Taglia media"
      />
      &nbsp;
      <Form.Check 
        type="switch"
        id="grande"
        label="Taglia grande"
      />
    &emsp;  
    </Form>
    <button className="btnFilter" type="button" >Applica</button>
    </div>
   
  );
}

export default CheckFoodDog;