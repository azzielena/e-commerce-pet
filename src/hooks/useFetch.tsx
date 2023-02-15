import { useEffect, useState } from "react";
import { ProductFetch } from "../types/typeApp";

const useFetch=(val: any)=>{
    const [data,setData]= useState<ProductFetch>({
        products: [],
        isLoading: true,
        isError: false
    });
    console.log(JSON.stringify(val));
    useEffect(()=>{

        if(JSON.stringify(val)==='"cibocane"'){
            fetch("/getDogFood")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}

        else if(JSON.stringify(val)==='"seccocane"'){
            fetch("/getDogFoodSecco")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));
        }

        else if(JSON.stringify(val)==='"umidocane"'){
            fetch("/getDogFoodUmido")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));
        }

        else if(JSON.stringify(val)==='"cibogatto"'){
            fetch("/getCatFood")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}

        else if(JSON.stringify(val)==='"seccogatto"'){
            fetch("/getCatFoodSecco")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}

        else if(JSON.stringify(val)==='"umidogatto"'){
            fetch("/getCatFoodUmido")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}

  }, [val]);
    
    return data;
       
}



export default useFetch;