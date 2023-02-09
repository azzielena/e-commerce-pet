import React, { useState } from 'react';

import Footer from './component/Footer';

import NavigationHeader from './component/NavigationHeader';
import { BrowserRouter as Router } from 'react-router-dom';
import SidebarCart from './component/SidebarCart';
import { CartProvider } from './context/CartContext';

function App() {
  const [show, setShow] = useState(false);

  const [data, setData] = React.useState(null);


  return (  
    <div>
      <Router> 
        <CartProvider>
        <NavigationHeader handleOpen={ setShow }/>
        {show && <SidebarCart handleClose={ setShow } /> }
        </CartProvider>
        </Router>
        <Footer />
    </div>
  );
}

export default App;
