import Form from 'react-bootstrap/Form';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import { CatFilter } from '../context/Context';


function CheckFoodCat() {

  const {
    productDispatch,
    productState: { byPuppy, byAdult },
  } = useContext(CatFilter);

  console.log( byPuppy, byAdult);
  return (
    <div>
    &emsp;
      <Form.Check  
        style={{fontSize: "20px"}}
        type="switch"
        id="cucciolo"
        label="Cucciolo"
        onChange={()=>{
          productDispatch({
            type:"FILTER_BY_PUPPY",
          })
        }}
        checked={byPuppy}
      />
     &nbsp;
      <Form.Check 
        style={{fontSize: "20px"}}
        type="switch"
        id="adulto"
        label="Adulto"
        onChange={()=>{
          productDispatch({
            type:"FILTER_BY_ADULT",
          })
        }}
        checked={byAdult}
      />
      &nbsp;
    &emsp;  
    <button
        className="btnFilter"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear
      </button>
    
    </div>
   
  );
}

export default CheckFoodCat;