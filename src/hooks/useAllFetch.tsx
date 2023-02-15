import { useEffect, useState } from "react";
import { AllFetch } from "../types/typeApp";

const useFetch=(val: any)=>{
    const [data,setData]= useState<AllFetch>({
        products: [],
        isLoading: true,
        isError: false
    });
    
    useEffect(()=>{

     if(JSON.stringify(val)==='"all"'){
            fetch("/getAll")
            .then((res) => res.json())
            .then((data) => setData({
            products:data,
            isLoading:false,
            isError:false}));}
    

  }, [val]);
    
    return data;
       
}



export default useFetch;