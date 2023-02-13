import React, { useState } from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';


function CardPayment() {
  const [number, setNumber]=useState('');
  const [name, setName]=useState('');
  const [expiry, setExpiry]=useState('');
  const [cvc, setCvc]=useState('');
  const [focus, setFocus]=useState('');
 
  return (
    <div className="AppPayment">
      <h1 style={{fontWeight: "bold", margin: "0 0 10px"}}
      >Pagina Pagamento</h1>
      <Cards 
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
        
      />

      <form className="formCards">
        <div className="form-group">
          <input 
            className="inputCards"
            type='tel' 
            name='number' 
            placeholder='Card Number' 
            value={number} 
            onChange={e=> setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
        <small>E.g.: 49..., 51..., 36..., 37...</small>
        </div>
        
        <div className="form-group">
        <input 
        className="inputCards"
        type='text' 
        name='name' 
        placeholder='Name' 
        value={name} 
        onChange={e=> setName(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        />
        </div>
        <div className="row">
          <div className="col-6">
        <input 
        className="inputCards"
        type='text' 
        name='expiry' 
        placeholder='MM/YY expiry' 
        value={expiry} 
        onChange={e=> setExpiry(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        />
        </div><div className="col-6">    
        <input 
        className="inputCards"
        type='tel' 
        name='cvc' 
        placeholder='CVC' 
        value={cvc} 
        onChange={e=> setCvc(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        />

      </div>
      </div>
            <div className="form-actions">
              <button className="btn btn-primary btn-block">PAY</button>
            </div>
      </form>
    </div>
    
  )
}
  
  
  export default CardPayment;
