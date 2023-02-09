import { useEffect, useState } from "react";
import getProducts from "../helpers/getData";
import { AccessoriesFetch} from "../types/typeApp";

const useAFetch=()=>{
    const [data,setData]= useState<AccessoriesFetch>({
        products: [],
        isLoading: true,
        isError: false
    });

    useEffect(()=>{
        fetch("/getaccessories")
      .then((res) => res.json())
      .then((data) => setData({products:data,
        isLoading:false,
        isError:false}));
  }, []);
  return data;
       
}
export default useAFetch;