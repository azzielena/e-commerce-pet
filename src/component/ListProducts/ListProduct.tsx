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
          if(((byPuppyDog)&&(byAdultDog))||((!byPuppyDog)&&(!byAdultDog))){

            /*filtri per le taglie*/
            
            if ((small)&&(!medium)&&(!big))  { //filtri per cani di taglia piccola
              p = p.filter((prod) => prod.Taglia===1);
            }
            else if ((!small)&&(medium)&&(!big))  { //filtri per cani di taglia media
              p = p.filter((prod) =>  prod.Taglia===2);
            }
            else if ((!small)&&(!medium)&&(big))  { //filtri per cani di taglia grande
              p = p.filter((prod) => prod.Taglia===3);
            }
            else if ((small)&&(medium)&&(!big))  { //filtri per cani di taglia piccola e media
              p = p.filter((prod) => ((prod.Taglia===1)||(prod.Taglia===2)));
            }
            else if ((!small)&&(medium)&&(big))  { //filtri per cani di taglia media e grande
              p = p.filter((prod) =>  ((prod.Taglia===3)||(prod.Taglia===2)));
            }
            else if ((small)&&(!medium)&&(big))  { //filtri per cani di taglia grande e piccola
              p = p.filter((prod) =>  ((prod.Taglia===1)||(prod.Taglia===3)));
            }
            else {
              p = products; //tutti veri o tutti falsi, veri cuccioli e adulti con falsi le taglie, falsi età e veri tutte le taglie
            }

          }
          else{

            if ((!byPuppyDog)&&(byAdultDog)&&(!small)&&(!medium)&&(!big)) { //solo filtro adulti
              p = p.filter((prod) => prod.Age===2);
            }

            else if ((byPuppyDog)&&(!byAdultDog)&&(!small)&&(!medium)&&(!big)) { //solo filtro cuccioli
              p = p.filter((prod) => prod.Age===1);
            }

            /* filtri per i cuccioli*/ 

            else if ((byPuppyDog)&&(!byAdultDog)&&(small)&&(!medium)&&(!big)) { //filtro cuccioli di taglia piccola
              p = p.filter((prod) => ((prod.Age===1) && ((prod.Taglia===1)||(prod.Taglia===null))));
            }
            else if ((byPuppyDog)&&(!byAdultDog)&&(!small)&&(medium)&&(!big)) { //filtro cuccioli di taglia media
              p = p.filter((prod) => ((prod.Age===1) && ((prod.Taglia===2)||(prod.Taglia===null))));
            }
            else if ((byPuppyDog)&&(!byAdultDog)&&(!small)&&(!medium)&&(big)) { //filtro cuccioli di taglia grande
              p = p.filter((prod) => ((prod.Age===1) && ((prod.Taglia===3)||(prod.Taglia===null))));
            }
            else if ((byPuppyDog)&&(!byAdultDog)&&(small)&&(medium)&&(!big)) { //filtro cuccioli di taglia piccola o media
              p = p.filter((prod) => ((prod.Age===1) && ( ((prod.Taglia===1)||(prod.Taglia===2))||(prod.Taglia===null))));
            }
            else if ((byPuppyDog)&&(!byAdultDog)&&(!small)&&(medium)&&(big)) { //filtro cuccioli di taglia media o grande
              p = p.filter((prod) => ((prod.Age===1) && ( ((prod.Taglia===3)||(prod.Taglia===2))||(prod.Taglia===null))));
            }
            else if ((byPuppyDog)&&(!byAdultDog)&&(small)&&(!medium)&&(big)) { //filtro cuccioli di taglia grande o piccola
              p = p.filter((prod) => ((prod.Age===1) && ( ((prod.Taglia===1)||(prod.Taglia===3))||(prod.Taglia===null))));
            }

            /* filtri per gli adulti*/ 
            else if ((!byPuppyDog)&&(byAdultDog)&&(small)&&(!medium)&&(!big)) { //filtro adulti di taglia piccola
              p = p.filter((prod) => ((prod.Age===2)&& ((prod.Taglia===1)||(prod.Taglia===null))));
            }
            else if ((!byPuppyDog)&&(byAdultDog)&&(!small)&&(medium)&&(!big)) {//filtro adulti di taglia media
              p = p.filter((prod) => ((prod.Age===2) && ((prod.Taglia===2)||(prod.Taglia===null))));
            }
            else if ((!byPuppyDog)&&(byAdultDog)&&(!small)&&(!medium)&&(big)) {//filtro adulti di taglia grande
              p = p.filter((prod) =>( (prod.Age===2) && ((prod.Taglia===3)||(prod.Taglia===null))));
            }
            else if ((!byPuppyDog)&&(byAdultDog)&&(small)&&(medium)&&(!big)) { //filtro adulti di taglia piccola e media
              p = p.filter((prod) => ((prod.Age===2)&& ( ((prod.Taglia===1)||(prod.Taglia===2))||(prod.Taglia===null))));
            }
            else if ((!byPuppyDog)&&(byAdultDog)&&(!small)&&(medium)&&(big)) {//filtro adulti di taglia media e grande
              p = p.filter((prod) => ((prod.Age===2) && ( ((prod.Taglia===3)||(prod.Taglia===2))||(prod.Taglia===null))));
            }
            else if ((!byPuppyDog)&&(byAdultDog)&&(small)&&(!medium)&&(big)) {//filtro adulti di taglia grande e piccola
              p = p.filter((prod) =>( (prod.Age===2) && ( ((prod.Taglia===1)||(prod.Taglia===3))||(prod.Taglia===null))));
            }
        }
    }

      else{
        p=products; //non sono ne specie 1 ne 2
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