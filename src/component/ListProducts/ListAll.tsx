import React, { useContext } from 'react';

import { CartContext } from '../../context/CartContext';
import useAllFetch from '../../hooks/useAllFetch';
import { AllItem } from '../../types/typeApp';
import All from './All';


type Props = {
  val: any;
  search: any;}


const ListAll =({val, search}: Props)=>{
    const {dispatch} = useContext (CartContext);
    const { products, isLoading } = useAllFetch(val);
    
    const handleAddToCart = (product:AllItem) => {
      dispatch({
        payload: product,
        type: 'ADD'
      })
    }
  
    if(isLoading){return <h1>Caricando...</h1>}

  return (  
    <>
    {
        products.filter((item) => {
          console.log("search:"+JSON.stringify(search));
          return (JSON.stringify(search).toLowerCase() === '{}')
            ? item
            : item.Nome.toLowerCase().includes(search);
        }).map(product => (
          <All 
          key={product.Id} 
          product={product}
          handleAddToCart={handleAddToCart}/>
        ))
    }
    </>
   
  );
}

export default  ListAll;