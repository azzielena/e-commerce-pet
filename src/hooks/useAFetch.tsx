import { useEffect, useState } from "react";
import { AccessoriesFetch} from "../types/typeApp";

const useAFetch=(val:any)=>{
    const [data,setData]= useState<AccessoriesFetch>({
        products: [],
        isLoading: true,
        isError: false
    });
    
    console.log(JSON.stringify(val)); //arriva o ' ' o 'gioco'

      useEffect(()=>{
        
        if (JSON.stringify(val)==='{"v":{"val":"allcat"}}'){
          fetch("/getCatAccessories")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
               
        }

        if (JSON.stringify(val)==='{"v":{"val":"alldog"}}'){
            fetch("/getDogAccessories")
              .then((res) => res.json())
              .then((data) => setData({products:data,
              isLoading:false,
              isError:false}));
                 
          }

        else if(JSON.stringify(val)==='{"v":{"val":"giocogatto"}}'){
            console.log("siamo nei giochi");
            fetch("/getCatGame")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));  
        }

        else if(JSON.stringify(val)==='{"v":{"val":"tiragraffi"}}'){
            console.log("siamo nei tiragraffi");
            fetch("/getCatTiragraffi")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
           
        }

        else if(JSON.stringify(val)==='{"v":{"val":"lettiera"}}'){
            console.log("siamo nelle lettiere");
            fetch("/getCatLitter")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
            
           
        }

        else if(JSON.stringify(val)==='{"v":{"val":"ciotolagatto"}}'){
            console.log("siamo nelle ciotole");
            fetch("/getCatBowl")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
           
        }

        else if(JSON.stringify(val)==='{"v":{"val":"giococane"}}'){
            
            fetch("/getDogGame")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));  
        }

        else if(JSON.stringify(val)==='{"v":{"val":"guinzaglio"}}'){
            fetch("/getDogGuinzaglio")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false})); 
        }

        else if(JSON.stringify(val)==='{"v":{"val":"collare"}}'){
            fetch("/getDogCollare")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));  
        }

        else if(JSON.stringify(val)==='{"v":{"val":"ciotolacane"}}'){
            fetch("/getDogBowl")
            .then((res) => res.json())
            .then((data) => setData({products:data,
            isLoading:false,
            isError:false}));
           
        }
    }, []);
    //window.location.reload();
    return data;
    
    


  
 
       
}
export default useAFetch;