import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import '../App.css'
import ListAll from './ListProducts/ListAll';

function SearchBar() {
  const [search, setSearch] = useState('');

  return (  
    <div className="main">
      <Form.Control
        className="form-control"
        type="search"
        id="inputSearch"
        placeholder='Ricerca il prodotto desiderato'
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={ {width: "60%" , marginLeft: "20%", borderWidth:"4px" , marginTop:"40px"} }
      />
       
       <Container className="mt-3 viewProduct">
            <ListAll val={"all"} search={search}/> 
      </Container>
    </div>
  );
}

export default SearchBar;
