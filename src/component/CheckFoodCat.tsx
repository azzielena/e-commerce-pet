import Form from 'react-bootstrap/Form';
import React from 'react';
import Button from 'react-bootstrap/Button';

function CheckFoodCat() {
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
    &emsp;  
    </Form>
    <button className="btnFilter" type="button" >Applica</button>
    </div>
   
  );
}

export default CheckFoodCat;