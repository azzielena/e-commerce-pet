import React from 'react';
import { FormEvent, useState,useRef } from "react";
import '../../App.css';
import useForm from "../../hooks/useForm";
import postMessage from "../../helpers/postMessage";
import { Message } from '../../types/typeApp';
import Tooltip from 'react-bootstrap/Tooltip'
import Overlay from 'react-bootstrap/Overlay';

const initialState = {
  name: '',
  email: '',
  message: ''
}
function ContactUs() {
  const {name, email, message, handleInputChange } = useForm<Message>(initialState);
  const target = useRef(null);
  const [show, setShow] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const mex: Message = {
          name, email, message   
        }
        
        await postMessage(mex);

    }
    
  return (  
      <form className="formContact" autoComplete='off' onSubmit={ handleSubmit }>

    <h2 className="h2Contact">CONTATTACI</h2>
  <p className="pContact">Nome:<input value={name} onChange={handleInputChange} name='name' id='name' className="inputContact" placeholder="Scrivi il tuo nome qui..."></input></p>
  <p className="pContact">Email:<input value={email} onChange={handleInputChange} className="inputContact" name='email' id='email' placeholder="Facci sapere come ricontattarti..."></input></p>
  <p className="pContact">Messaggio<input value={message} onChange={handleInputChange} className="inputContact" name='message' id='message' placeholder="Cosa vorresti dirci..."></input></p>
  <><button className="buttonContact" ref={target} onClick={() => setShow(!show)}>Invia il messaggio</button>
  <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Abbiamo ricevuto il tuo messaggio, ti ricontatteremo al più presto!
          </Tooltip>
        )}
      </Overlay></>
  
</form>

  )
}

export default ContactUs;