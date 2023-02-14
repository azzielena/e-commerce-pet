import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import zampa from "../../component/img/zampa.jpg"
import { FormEvent, useContext, useState,useRef } from "react";
import useForm from "../../hooks/useForm";
import postNews from "../../helpers/postNews";
import { News } from '../../types/typeApp';
import Tooltip from 'react-bootstrap/Tooltip'
import Overlay from 'react-bootstrap/Overlay';

const initialState = {
  name: '',
  surname: '',
  email: ''
 
}

function Newsletter() {

  const {name, surname, email, handleInputChange, resetValues } = useForm<News>(initialState);
  const target = useRef(null);
  const [show, setShow] = useState(false);
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log("inviato al server");

  
        const news: News = {
          name, surname, email 
        }
        
        const fetchApi = await postNews(news);
    }
    //console.log("siamo nel post use");  
  return (  
    <div className="pop-up">
    <div className="contentNewsletter">
    <div className="containerNewsletter">
      
    <div >
      <h1 className="titleNewsletter">iscriviti</h1>
    
    </div>
    
    <img src={zampa} alt="Car" className="imgNewsletter" />
    
    <div className="subscribe">
      <h1>Iscriviti per ricevere le ultime <span>notizie &amp; aggiornamenti</span>.</h1>
    
      <form className="formNewsletter" autoComplete='off' onSubmit={ handleSubmit }>
      <input className="formEmail" value={name} onChange={handleInputChange} name='name' id='name'  placeholder="inserisci il tuo nome"></input>
      <input className="formEmail"  value={surname} onChange={handleInputChange} name='surname' id='surname' placeholder="inserisci il tuo cognome"></input>
        <input className="formEmail" value={email} onChange={handleInputChange}  name='email' id='email' placeholder="inserisci il tuo indirizzo email"></input>
        <><button  className="formSubmit" ref={target} onClick={() => setShow(!show)}>Iscriviti</button><Overlay target={target.current} show={show} placement="bottom">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            Grazie per esserti iscritto alla nostra newsletter!
          </Tooltip>
        )}
      </Overlay></>
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Newsletter;