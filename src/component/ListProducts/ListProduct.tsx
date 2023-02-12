import React, { useContext } from 'react';

import { CartContext, CatFilter , DogFilter} from '../../context/Context';
import useFetch from '../../hooks/useFetch';
import { ProductItem } from '../../types/typeApp';
import Products from './Products';

type Props = {
  val: any;}


const ListProducts =({val}:Props)=>{

    const {dispatch} = useContext (CartContext);
    
    const {
      productStateCat: { byPuppyCat, byAdultCat },
    } = useContext(CatFilter);

    const {
      productStateDog: { byPuppyDog, byAdultDog, small, medium, big },
    } = useContext(DogFilter);

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

          if(products[0].Specie===2){
          if ((!byPuppyCat)&&(byAdultCat)) {
            p = p.filter((prod) => prod.Age===2);
          }

          else if ((byPuppyCat)&&(!byAdultCat)) {
            p = p.filter((prod) => prod.Age===1);
          }

          else {
            p = products;
          }
        }
        else if(products[0].Specie===1){
          if ((!byPuppyDog)&&(byAdultDog)&&(!small)&&(!medium)&&(!big)) {
            p = p.filter((prod) => prod.Age===2);
          }
      
          else if ((byPuppyDog)&&(!byAdultDog)&&(!small)&&(!medium)&&(!big)) {
            p = p.filter((prod) => prod.Age===1);
          }
          else if ((byPuppyDog)&&(small)&&(!medium)&&(!big)) {
            p = p.filter((prod) => ((prod.Age===1) && ((prod.Taglia===1)||(prod.Taglia===null))));
          }
          else if ((byPuppyDog)&&(!small)&&(medium)&&(!big)) {
            p = p.filter((prod) => ((prod.Age===1) && ((prod.Taglia===2)||(prod.Taglia===null))));
          }
          else if ((byPuppyDog)&&(!small)&&(!medium)&&(big)) {
            p = p.filter((prod) => ((prod.Age===1) && ((prod.Taglia===3)||(prod.Taglia===null))));
          }
          else if ((!byPuppyDog)&&(byAdultDog)&&(small)&&(!medium)&&(!big)) {
            p = p.filter((prod) => ((prod.Age===2)&& ((prod.Taglia===1)||(prod.Taglia===null))));
          }
          else if ((!byPuppyDog)&&(byAdultDog)&&(!small)&&(medium)&&(!big)) {
            p = p.filter((prod) => ((prod.Age===2) && ((prod.Taglia===2)||(prod.Taglia===null))));
          }
          else if ((!byPuppyDog)&&(byAdultDog)&&(!small)&&(!medium)&&(big)) {
            p = p.filter((prod) =>( (prod.Age===2) && ((prod.Taglia===3)||(prod.Taglia===null))));
          }
          else if (small) {
            p = p.filter((prod) => prod.Taglia===1);
          }
          else if (medium) {
            p = p.filter((prod) =>  prod.Taglia===2);
          }
          else if (big) {
            p = p.filter((prod) => prod.Taglia===3);
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