import React from 'react';
import '../../App.css'


function ContactUs() {
  return (  
      <form className="formContact">

    <h2 className="h2Contact">CONTACT US</h2>
  <p className="pContact">Name:<input className="inputContact" placeholder="Write your name here.." style={{}}></input></p>
  <p className="pContact">Email:<input className="inputContact"  placeholder="Let us know how to contact you back.."></input></p>
  <p className="pContact">Message<input className="inputContact"  placeholder="What would you like to tell us.."></input></p>
  <button className="buttonContact">Send Message</button>
  
</form>
      

  )
}

export default ContactUs;