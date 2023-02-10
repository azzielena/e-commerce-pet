import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { CardElement, Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe("pk_test_XUIpXpyaGuuw0Dc9Ng80xFWs");


function CardPayment() {

  return (
    <div className="App">
    </div>)
  }
  
  
  export default CardPayment;