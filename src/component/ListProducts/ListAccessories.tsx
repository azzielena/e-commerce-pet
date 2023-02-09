import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import useAFetch from '../../hooks/useAFetch';
import { AccessoriesItem } from '../../types/typeApp';
import Accessories from './Accessories';


const ListAccessories =(val:any)=>{
    const {dispatch} = useContext (CartContext);
    const { products, isLoading } = useAFetch(val);
    
    const handleAddToCart = (product:AccessoriesItem) => {
      dispatch({
        payload: product,
        type: 'ADD'
      })
    }
  
    if(isLoading){return <h1>Caricando...</h1>}

  return (  
    <>
    {
        products.map(product => (
          <Accessories 
          key={product.Id} 
          product={product}
          handleAddToCart={handleAddToCart}/>
        ))
    }
    </>
   
  );
}

export default  ListAccessories;