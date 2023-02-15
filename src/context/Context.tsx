import { createContext, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";
import { CatFilterReducer } from "../reducer/CatFilterReducer";
import { DogFilterReducer } from "../reducer/DogFilterReducer";
import { CartContextType, FilterCatConxt, FilterDogConxt } from "../types/typeApp";

const initialState = {
    cartItems: [],
    dispatch: () => {}
}
const initialStateFilterCat = {
    productStateCat:{ byPuppyCat:false, byAdultCat:false},
    productDispatchCat: () => {}
}

const initialStateFilterDog = {
    productStateDog:{ byPuppyDog:false, byAdultDog:false, small: false, medium: false, big:false},
    productDispatchDog: () => {}
}

 

export const CatFilter = createContext<FilterCatConxt>(initialStateFilterCat);
export const DogFilter = createContext<FilterDogConxt>(initialStateFilterDog);

export const CartContext = createContext<CartContextType>(initialState);

export const Context = ({ children }: any) => {

    const [cartItems, dispatch] = useReducer(cartReducer, initialState.cartItems);
    const [productStateCat, productDispatchCat] = useReducer(CatFilterReducer, initialStateFilterCat.productStateCat);
    const [productStateDog, productDispatchDog] = useReducer(DogFilterReducer, initialStateFilterDog.productStateDog);

  
    return (
        <>
        <CartContext.Provider value={{cartItems,dispatch}}>
            
            
            <CatFilter.Provider value={{ productStateCat, productDispatchCat}}>
                <DogFilter.Provider value={{  productStateDog, productDispatchDog}}>
                    {children}
                 
                </DogFilter.Provider>
            </CatFilter.Provider>
     
        </CartContext.Provider> 
        </>
         
    )
}