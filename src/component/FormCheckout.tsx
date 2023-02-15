import { FormEvent, useContext, useState } from "react";
import { CartContext } from "../context/Context";
import postData from "../helpers/postData";
import useForm from "../hooks/useForm";
import { Customer, Order } from "../types/typeApp";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'react-credit-cards/es/styles-compiled.css';

import Cards from 'react-credit-cards';

const initialState = {
    name: '',
    lastName: '',
    email: '',
    address: ''
}


const FormCheckout = () => {

    const [number, setNumber]=useState('');
    const [nameCard, setnameCard]=useState('');
    const [expiry, setExpiry]=useState('');
    const [cvc, setCvc]=useState('');
    const [focus, setFocus]=useState('');
  
    const [showErrorCard, setShowErrorCard] = useState(true); //per i parametri della carta
  

    const [showPopup, setShowPopup] = useState(false);
    const handleClosePopup = () => setShowPopup(false);
    const handleShowPopup = () => setShowPopup(true);
    
    const [showError, setShowError] = useState(true); //per i campi vuoti 
    const [showEmptyCart, setShowEmptyCart] = useState(true); //per il carrello vuoto

    
    const {cartItems, dispatch } = useContext(CartContext);
    const {name, email, lastName, address, handleInputChange, resetValues } = useForm<Customer>(initialState);

    const viewPopup=async (e: FormEvent) =>{
        e.preventDefault();
        console.log("faccio controlli");

        if((name.length===0)||(email.length===0)||(lastName.length===0)||(address.length===0)){
            setShowError(false);
        }
        else{
            console.log("controllo campi passato, ora carta")
            if((expiry.length!==4)||(number.length<13)||(number.length>16)||(cvc.length!==3)) { 
                console.log("errore parametri carta");
                setShowErrorCard(false);
                setShowError(true);
                
            } 
            else{
            setShowError(true);
            setShowErrorCard(true);
            
            const orderDetails = cartItems.map(({...item}) => item);

            if(orderDetails.length > 0){
                setShowEmptyCart(true);
                setShowPopup(true);

            }else {
                console.log("non ci sono prodotti, aggiungi prima qualcosa al carrello");
                setShowEmptyCart(false);
                setShowPopup(false);
                }
            }
        }
    }

    const generateOrder= async ()=>{
        const orderDetails = cartItems.map(({...item}) => item);
        const order:Order = {
            customer: {
                name, email, lastName, address
            },
            order_details: orderDetails
        }

        const fetchApi = await postData(order);
        
        if(!fetchApi.ok){
            console.log("errore, riprova")
        }else{
            console.log("Ordine generato correttamente");
            resetValues();

            dispatch ({
            payload:[],
            type:'CLEAR'
            });
            //bisogna tornare alla home

        }
    }
    
    return (
        <div className='col-md-7 col-lg-8'>
            <h4 className='mb-3'>Checkout</h4>
            <form autoComplete='off' onSubmit={ viewPopup }>
                <div className="row g-3">
                    <div className="col-sm-6">
                        <label htmlFor="name" className='form-label'>Nome</label>
                        <input type="text" className='form-control' name='name' id='name' placeholder='Nome...' value={name} onChange={handleInputChange}/>
                    </div>
                    <div className="col-sm-6">
                        <label htmlFor="lastName" className='form-label'>Cognome</label>
                        <input type="text" className='form-control' name='lastName' id='lastName' placeholder='Cognome...' value={lastName} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" className='form-control' name='email' id='email' placeholder='Email..' value={email} onChange={handleInputChange}/>
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className='form-label'>Indirizzo</label>
                        <input type="text" className='form-control' name='address' id='address' placeholder='Indirizzo..' value={address} onChange={handleInputChange}/>
                    </div>
                    
                </div>
                <br />
                <div>
    <div className="AppPayment">
      <Cards 
        number={number}
        name={nameCard}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
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
        name='nameCard' 
        placeholder='Name' 
        value={nameCard} 
        onChange={e=> setnameCard(e.target.value)}
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
        
          
            </div>
      </form>
    </div> 
    </div>         <>
      <label hidden={showError} style={{color:"red"}}>Compila tutti i campi</label> <br></br>
      <label hidden={showErrorCard} style={{color:"red"}}>Parametri non accettabili, riprova</label> <br></br>         
      <button onClick={viewPopup} className='btnAddCart'>
      Effettua l'ordine
      </button>
      <br></br>
      <label hidden={showEmptyCart} style={{color:"red"}}>Carrello vuoto</label> 

      <Modal show={showPopup} onHide={handleClosePopup}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confermi il modulo e procedi al pagamento?</Modal.Body>
        <Modal.Footer>
          <button className="btn-secondary" onClick={handleClosePopup} style={{width:"90px"}}>
            Annulla
          </button>
          <Link to="/"><button className="btn-secondary" style={{width:"90px"}} onClick={generateOrder}>
            Confermo
          </button></Link>
        </Modal.Footer>
      </Modal>
    </>
                
            </form>
        </div>
    )
}

export default FormCheckout;


