import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Checkout from '../pages/checkout/Checkout';
import DogFood from '../pages/DogFood/DogFood';
import CatFood from '../pages/catFood/CatFood';
import DogAccessories from '../pages/dogAccessories/DogAccessories';
import CatAccessories from '../pages/catAccessories/CatAccessories';

type Props = {
  handleOpen : (state:boolean) => void
}

const NavigationHeader =({ handleOpen }: Props)=>{
  return (  
    <>
        <NavBar handleOpen={handleOpen} />
        <Routes > 
        <Route  path='/' element={<Home />}/>
        <Route  path='/checkout' element={<Checkout />}/>
        <Route  path='/dogfood' element={<DogFood />}/>
        <Route  path='/catfood' element={<CatFood />}/>
        <Route  path='/dogaccessories' element={<DogAccessories />}/>
        <Route  path='/cataccessories' element={<CatAccessories val={""}/>}/>
        <Route  path='/cataccessories/gioco' element={<CatAccessories val={"gioco"} />}/>
        </Routes>
    </>
   
  );
}

export default NavigationHeader;