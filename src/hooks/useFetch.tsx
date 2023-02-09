import { useEffect, useState } from "react";
import getProducts from "../helpers/getData";
import { ProductFetch } from "../types/typeApp";

const useFetch=()=>{
    const [data,setData]= useState<ProductFetch>({
        products: [],
        isLoading: true,
        isError: false
    });

    useEffect(()=>{
        fetch("/getfood")
      .then((res) => res.json())
      .then((data) => setData({
        products:data,
        isLoading:false,
        isError:false}))
        .catch (err =>{
            console.log("error");
            setData({
                products:[],
                isLoading:false,
                isError:true
            })
        }) 
        ;
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