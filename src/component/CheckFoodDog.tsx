import Form from 'react-bootstrap/Form';
import React, { useContext } from 'react';
import { DogFilter } from '../context/Context';

function CheckFoodDog() {
  const {
    productDispatchDog,
    productStateDog: { byPuppyDog, byAdultDog, small, medium, big},
  } = useContext(DogFilter);

  return (
    <div>
    &emsp;
      <Form.Check  
        style={{fontSize: "20px"}}
        type="switch"
        id="cucciolo"
        label="Cucciolo"
        onChange={()=>{
          productDispatchDog({
            type:"FILTER_BY_PUPPY",
          })
        }}
        checked={byPuppyDog}
      />
     &nbsp;
      <Form.Check 
        style={{fontSize: "20px"}}
        type="switch"
        id="adulto"
        label="Adulto"
        onChange={()=>{
          productDispatchDog({
            type:"FILTER_BY_ADULT",
          })
        }}
        checked={byAdultDog}
      />
      &nbsp;
      <Form.Check 
        style={{fontSize: "20px"}}
        type="switch"
        id="piccolo"
        label="Taglia piccola"
        onChange={()=>{
          productDispatchDog({
            type:"FILTER_BY_SMALL",
          })
        }}
        checked={small}
      />
      &nbsp;
      <Form.Check 
        style={{fontSize: "20px"}}
        type="switch"
        id="medio"
        label="Taglia media"
        onChange={()=>{
          productDispatchDog({
            type:"FILTER_BY_MEDIUM",
          })
        }}
        checked={medium}
      />
      &nbsp;
      <Form.Check 
        style={{fontSize: "20px"}}
        type="switch"
        id="grande"
        label="Taglia grande"
        onChange={()=>{
          productDispatchDog({
            type:"FILTER_BY_BIG",
          })
        }}
        checked={big}
      />
      &nbsp;
    &emsp;  
  
    <button
        className="btnFilter"
        onClick={() =>
          productDispatchDog({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Resetta i filtri
      </button>
    
    </div>
   
  );
}

export default CheckFoodDog;