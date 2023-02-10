import { useEffect, useState } from "react";
import getProducts from "../helpers/getData";
import { AllFetch } from "../types/typeApp";

const useFetch=(val: any)=>{
    const [data,setData]= useState<AllFetch>({
        products: [],
        isLoading: true,
        isError: false
    });
    console.log("j:"+JSON.stringify(val));
    useEffect(()=>{

     if(JSON.stringify(val)==='"all"'){
            fetch("/getAll")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}
    

  }, []);
    
    return data;
       
}



export default useFetch;