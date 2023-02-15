import { useEffect, useState } from "react";
import { AccessoriesFetch} from "../types/typeApp";


const useAFetch=(val:any)=>{
    const [data,setData]= useState<AccessoriesFetch>({
        products: [],
        isLoading: true,
        isError: false
    });

      useEffect(()=>{
        
        if (JSON.stringify(val)==='"allcat"'){
          fetch("/getCatAccessories")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
            
        }

       else if (JSON.stringify(val)==='"alldog"'){
            fetch("/getDogAccessories")
              .then((res) => res.json())
              .then((data) => setData({products:data,
              isLoading:false,
              isError:false}));
                 
          }

        else if(JSON.stringify(val)==='"giocogatto"'){
            fetch("/getCatGame")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));  
        }

        else if(JSON.stringify(val)==='"tiragraffi"'){
            fetch("/getCatTiragraffi")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
           
        }

        else if(JSON.stringify(val)==='"lettiera"'){
            
            fetch("/getCatLitter")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
            
           
        }

        else if(JSON.stringify(val)==='"ciotolagatto"'){

            fetch("/getCatBowl")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
           
        }

        else if(JSON.stringify(val)==='"giococane"'){
            
            fetch("/getDogGame")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));  
        }

        else if(JSON.stringify(val)==='"guinzaglio"'){
            fetch("/getDogGuinzaglio")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false})); 
        }

        else if(JSON.stringify(val)==='"collare"'){
            fetch("/getDogCollare")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));  
        }

        else if(JSON.stringify(val)==='"ciotolacane"'){
            fetch("/getDogBowl")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
           
        }
    }, [val]);

    return data;
    
       
}
export default useAFetch;