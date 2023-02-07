import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';

import { Route, Routes } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import useFetch from '../../hooks/useFetch';
import { ProductItem } from '../../types/typeApp';
import Products from './Products';


const ListProducts =()=>{
    const {dispatch} = useContext (CartContext);
    const { products, isLoading } = useFetch();
    
    const handleAddToCart = (product:ProductItem) => {
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
          <Products 
          key={product.id} 
          product={product}
          handleAddToCart={handleAddToCart}/>
        ))
    }
    </>
   
  );
}

export default  ListProducts;