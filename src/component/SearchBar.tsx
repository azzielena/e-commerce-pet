import React from 'react';
import { Form } from 'react-bootstrap';
import '../App.css'

function SearchBar() {
  return (  
    <div className="main">
      <Form.Control
        className="form-control"
        type="search"
        id="inputSearch"
        placeholder='Ricerca il prodotto desiderato'
        style={ {width: "60%" , marginLeft: "20%", borderWidth:"4px" , marginTop:"40px"} }
      />
       <button className="btn-secondary" type="button" > <i>OK</i> </button>
    </div>
  );
}

export default SearchBar;
