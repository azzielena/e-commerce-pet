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
      <h1 className="titleNewsletter">subscribe</h1>
    
    </div>
    
    <img src={zampa} alt="Car" className="imgNewsletter" />
    
    <div className="subscribe">
      <h1>Subscribe to get the latest <span>news &amp; updates</span>.</h1>
    
      <form className="formNewsletter">
        <input className="formEmail" type="email" placeholder="Your email address"/>
        <Link to="/" ><input className="formSubmit" type="submit" value="Subscribe"/></Link>
      </form>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Newsletter;