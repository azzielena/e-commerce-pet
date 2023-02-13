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
      <h1 className="titlePayment" >Inserisci i tuoi dati per effettuare l'acquisto</h1> <br/>
      <Cards 
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
        style={{textAlign:"center"}}
      />

      <form className="formCards">
        <div >
          <input 
            className="inputCards"
            type='tel' 
            name='number' 
            placeholder='Card Number' 
            value={number} 
            onChange={e=> setNumber(e.target.value)}
            onFocus={e => setFocus(e.target.name)}
          />
          <br />
        <small style={{fontSize:"11px"}} >Esempio.: 49..., 51..., 36..., 37...</small>
        <br/> </div>
       
        
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
        <br/>
        <div className="row">
          <div className="col-6">
        <input 
        className="inputCards2"
        type='text' 
        name='expiry' 
        placeholder='MM/YY expiry' 
        value={expiry} 
        onChange={e=> setExpiry(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
        />
        </div>
        <div className="col-6">    
        <input 
        className="inputCards2"
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
              <button className="btn btn-block " 
              style={{backgroundColor:"#39c010",
              borderRadius: "10%",
              fontFamily: "'Trebuchet MS', sans-serif",
              color: "#f7fbf6",
              borderColor: "#a0a003"
              }}>PAY</button>
            </div>
      </form>
    </div>
    
  )
}
  
  
  export default CardPayment;
