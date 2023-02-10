import { useEffect, useState } from "react";
import getProducts from "../helpers/getData";
import { ProductFetch } from "../types/typeApp";

const useFetch=(val: any)=>{
    const [data,setData]= useState<ProductFetch>({
        products: [],
        isLoading: true,
        isError: false
    });
    console.log(JSON.stringify(val));
    useEffect(()=>{

        if(JSON.stringify(val)==='{"v":{"val":"cibocane"}}'){
            fetch("/getDogFood")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}

        else if(JSON.stringify(val)==='{"v":{"val":"seccocane"}}'){
            fetch("/getDogFoodSecco")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));
        }

        else if(JSON.stringify(val)==='{"v":{"val":"umidocane"}}'){
            fetch("/getDogFoodUmido")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));
        }

        else if(JSON.stringify(val)==='{"v":{"val":"cibogatto"}}'){
            fetch("/getCatFood")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}

        else if(JSON.stringify(val)==='{"v":{"val":"seccogatto"}}'){
            fetch("/getCatFoodSecco")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}

        else if(JSON.stringify(val)==='{"v":{"val":"umidogatto"}}'){
            fetch("/getCatFoodUmido")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}

        else if(JSON.stringify(val)==='{"val":"all"}'){
            fetch("/getAll")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}
    

  }, []);
    
    return data;
       /* getProducts()
        .then((data)=>{
           
            const customData= data.map((product: ProductItem) => ({...product, description: product.description.substring(0,55)}) )
            console.log("c:"+customData);
            
            setData({
                products:data,
                isLoading:false,
                isError:false
            })
        })
        .catch (err =>{
            console.log("error");
            setData({
                
                products:[],
                isLoading:false,
                isError:true
            })
        })
    },[]);
    
    return data;*/
}



export default useFetch;