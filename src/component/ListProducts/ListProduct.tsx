import React, { useContext } from 'react';

import { CartContext, CatFilter } from '../../context/Context';
import useFetch from '../../hooks/useFetch';
import { ProductItem } from '../../types/typeApp';
import Products from './Products';

type Props = {
  val: any;}


const ListProducts =({val}:Props)=>{

    const {dispatch} = useContext (CartContext);
    
    const {
      productState: { byPuppy, byAdult },
    } = useContext(CatFilter);

    const { products, isLoading } = useFetch(val);
    
    const handleAddToCart = (product:ProductItem) => {
      dispatch({
        payload: product,
        type: 'ADD'
      })
    }
  
    if(isLoading){return <h1>Caricando...</h1>}

    const trasformProducts=() =>{
      let p = products;
      products.map((i)=> console.log(i.Specie));

      if(products[0].Specie==2){
      if ((!byPuppy)&&(byAdult)) {
        p = p.filter((prod) => prod.Age==2);
      }

      else if ((byPuppy)&&(!byAdult)) {
        p = p.filter((prod) => prod.Age==1);
      }

      else {
        p = products;
      }
    }
    else{
       p=products;
      }

      return p;
    };

  return (  
    <>
    {
        trasformProducts().map(product => (
          <Products 
          key={product.Id} 
          product={product}
          handleAddToCart={handleAddToCart}/>
        ))
    }
    </>
   
  );
}

export default  ListProducts;