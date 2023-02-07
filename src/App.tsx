import React, { useState } from 'react';
import NavBar from './component/NavBar';
import HomeImageScroll from './component/HomeImageScroll';
import Footer from './component/Footer';
import SearchBar from './component/SearchBar';
import MenuOffCanvasDog from './component/MenuOffCanvasDog';
import { Button } from 'react-bootstrap';
import NavigationHeader from './component/NavigationHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarCart from './component/SidebarCart';

function App() {
  const [show, setShow] = useState(false);

  return (  
    <div>
      <Router> 
        <NavigationHeader handleOpen={ setShow }/>
        {show && <SidebarCart handleClose={ setShow } /> }
        </Router>
      <Footer />
    </div>
  );
}

export default App;
