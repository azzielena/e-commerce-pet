import React, { useState, useRef } from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import Tooltip from 'react-bootstrap/Tooltip'
import Overlay from 'react-bootstrap/Overlay';


function CardPayment() {

  const [number, setNumber]=useState('');
  const [name, setName]=useState('');
  const [expiry, setExpiry]=useState('');
  const [cvc, setCvc]=useState('');
  const [focus, setFocus]=useState('');

  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(true);

  const target = useRef(null);
 
  return (
    <div>
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
            <>
            <label hidden={showError} style={{color:"red"}}>Parametri non accettabili, riprova</label> <br></br>
              <button className="btn btn-block " 
              ref={target} onClick={() => {
                if((expiry.length!==4)||(number.length<13)||(number.length>16)||(cvc.length!==3)) { 
                  setShowError(false)
                } else{ 
                  setShowError(true);
                  setShow(!show);
                } 
              }}
              style={{backgroundColor:"#39c010",
              borderRadius: "10%",
              fontFamily: "'Trebuchet MS', sans-serif",
              color: "#f7fbf6",
              borderColor: "#a0a003"
              }}>PAY</button>
              
              <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Ordine effettuato correttamente :)
          </Tooltip>

        )}
      </Overlay></>
          
            </div>
      </form>
     
    </div>
    
      
     </div>
  )
}
  
  
  export default CardPayment;
