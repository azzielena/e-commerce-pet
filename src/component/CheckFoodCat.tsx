import Form from 'react-bootstrap/Form';
import React, { useContext } from 'react';
import { CatFilter } from '../context/Context';


function CheckFoodCat() {

  const {
    productDispatchCat,
    productStateCat: { byPuppyCat, byAdultCat },
  } = useContext(CatFilter);

  return (
    <div>
    &emsp;
      <Form.Check  
        style={{fontSize: "20px"}}
        type="switch"
        id="cucciolo"
        label="Cucciolo"
        onChange={()=>{
          productDispatchCat({
            type:"FILTER_BY_PUPPY",
          })
        }}
        checked={byPuppyCat}
      />
     &nbsp;
      <Form.Check 
        style={{fontSize: "20px"}}
        type="switch"
        id="adulto"
        label="Adulto"
        onChange={()=>{
          productDispatchCat({
            type:"FILTER_BY_ADULT",
          })
        }}
        checked={byAdultCat}
      />
      &nbsp;
    &emsp;  
    <button
        className="btnFilter"
        onClick={() =>
          productDispatchCat({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Resetta i filtri
      </button>
    
    </div>
   
  );
}

export default CheckFoodCat;