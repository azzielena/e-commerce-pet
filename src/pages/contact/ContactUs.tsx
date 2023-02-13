import React from 'react';
import '../../App.css'


function ContactUs() {
  return (  
      <form className="formContact">

    <h2 className="h2Contact">CONTATTACI</h2>
  <p className="pContact">Nome:<input className="inputContact" placeholder="Scrivi il tuo nome qui..." style={{}}></input></p>
  <p className="pContact">Email:<input className="inputContact"  placeholder="Facci sapere come ricontattarti..."></input></p>
  <p className="pContact">Messaggio<input className="inputContact"  placeholder="Cosa vorresti dirci..."></input></p>
  <button className="buttonContact">Invia il messaggio</button>
  
</form>

  )
}

export default ContactUs;