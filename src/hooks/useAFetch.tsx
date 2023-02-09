import { useEffect, useState } from "react";
import { AccessoriesFetch} from "../types/typeApp";

const useAFetch=(val:any)=>{
    const [data,setData]= useState<AccessoriesFetch>({
        products: [],
        isLoading: true,
        isError: false
    });
    console.log(val); //arriva o ' ' o 'gioco'

    if (val==""){
      useEffect(()=>{
          fetch("/getaccessories")
        .then((res) => res.json())
        .then((data) => setData({products:data,
          isLoading:false,
          isError:false}));
     }, []);
    }

    else if (val=="gioco"){
    useEffect(()=>{
        fetch("/getGiochiGatto")
      .then((res) => res.json())
      .then((data) => setData({products:data,
        isLoading:false,
        isError:false}));
    }, []);
    }
  return data;
 
       
}
export default useAFetch;