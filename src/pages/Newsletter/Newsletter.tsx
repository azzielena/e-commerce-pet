import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'
import zampa from "../../component/img/zampa.jpg"

function Newsletter() {
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
    
      <form className="formNewsletter">
        <input className="formEmail" type="email" placeholder="inserisci il tuo indirizzo email"/>
        <Link to="/" ><input className="formSubmit" type="submit" value="Iscriviti"/></Link>
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Newsletter;