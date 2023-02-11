import React, { useContext } from 'react';

import { CartContext } from '../../context/Context';
import useAFetch from '../../hooks/useAFetch';
import { AccessoriesItem } from '../../types/typeApp';
import Accessories from './Accessories';


type Props = {
  val: any;}


const ListAccessories =({val}:Props)=>{
    const {dispatch} = useContext (CartContext);
    const { products, isLoading } = useAFetch(val);
    
    const handleAddToCart = (product:AccessoriesItem) => {
      dispatch({
        payload: product,
        type: 'ADD'
      })
    }
  
    if(isLoading){return <h1>Caricando...</h1>}
    console.log("bbb:"+products[0].Nome);

  

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