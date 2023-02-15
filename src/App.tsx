import React, { useState } from 'react';

import Footer from './component/Footer';

import NavigationHeader from './component/NavigationHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarCart from './component/SidebarCart';
import {  Context } from './context/Context';

function App() {
  const [show, setShow] = useState(false);

  return (  
    
      <Router> 
        <Context>
        <NavigationHeader handleOpen={ setShow }/>
        {show && <SidebarCart handleClose={ setShow } /> }
        </Context>
        <Footer />
        </Router>
     
  );
}

export default App;
