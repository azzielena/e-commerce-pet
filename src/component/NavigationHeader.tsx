import React from 'react';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Checkout from '../pages/checkout/Checkout';
import DogFood from '../pages/DogFood/DogFood';
import CatFood from '../pages/catFood/CatFood';
import DogAccessories from '../pages/dogAccessories/DogAccessories';
import CatAccessories from '../pages/catAccessories/CatAccessories';
import CardPayment from '../pages/payment/CardPayment';
import ContactUs from '../pages/contact/ContactUs';
import Newsletter from '../pages/Newsletter/Newsletter';

type Props = {
  handleOpen : (state:boolean) => void
}

const NavigationHeader =({ handleOpen }: Props)=>{
  return (  
    <>
        <NavBar handleOpen={handleOpen} />
        <Routes > 
        <Route  path='/contactUs' element={<ContactUs />}/> 
        <Route  path='/' element={<Home />}/>
        <Route  path='/checkout' element={<Checkout />}/>
        <Route  path='/dogfood' element={<DogFood val={"cibocane"}/>}/>
        <Route  path='/dogfood/umido' element={<DogFood val={"umidocane"}/>}/>
        <Route  path='/dogfood/secco' element={<DogFood val={"seccocane"} />}/>
        <Route  path='/catfood' element={<CatFood val={"cibogatto"}/>}/>
        <Route  path='/catfood/umido' element={<CatFood val={"umidogatto"}/>}/>
        <Route  path='/catfood/secco' element={<CatFood val={"seccogatto"}/>}/>
        <Route  path='/dogaccessories' element={<DogAccessories val={"alldog"}/>}/>
        <Route  path='/cataccessories' element={<CatAccessories val={"allcat"}/>}/>
        <Route  path='/cataccessories/gioco' element={<CatAccessories val={"giocogatto"} />}/>
        <Route  path='/cataccessories/tiragraffi' element={<CatAccessories val={"tiragraffi"} />}/>
        <Route  path='/cataccessories/lettiera' element={<CatAccessories val={"lettiera"} />}/>
        <Route  path='/cataccessories/ciotola' element={<CatAccessories val={"ciotolagatto"} />}/>
        <Route  path='/dogaccessories/gioco' element={<DogAccessories val={"giococane"} />}/>
        <Route  path='/dogaccessories/guinzaglio' element={<DogAccessories val={"guinzaglio"} />}/>
        <Route  path='/dogaccessories/collare' element={<DogAccessories val={"collare"} />}/>
        <Route  path='/dogaccessories/ciotola' element={<DogAccessories val={"ciotolacane"} />}/>

        
        <Route  path='/newsletter' element={<Newsletter />}/>
        <Route  path='/payment' element={<CardPayment />}/>
        </Routes>
    </>
   
  );
}

export default NavigationHeader;