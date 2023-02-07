import React from 'react';
import Container from 'react-bootstrap/Container';

import { Route, Routes } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Products from './Products';


const ListProducts =()=>{
    const { products, isLoading } = useFetch();
    //console.log(products);

  const handleAddToCart = () => {
    console.log('Agregando...')
  }

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