import { createContext, useReducer } from "react";
import cartReducer from "../reducer/cartReducer";
import { CatFilterReducer } from "../reducer/CatFilterReducer";
import { CartContextType, FilterCatConxt } from "../types/typeApp";

const initialState = {
    cartItems: [],
    dispatch: () => {}
}
const initialStateFilter = {
    productState:{ byPuppy:false, byAdult:false},
    productDispatch: () => {}
}

 

export const CatFilter = createContext<FilterCatConxt>(initialStateFilter);

export const CartContext = createContext<CartContextType>(initialState);

export const Context = ({ children }: any) => {

    const [cartItems, dispatch] = useReducer(cartReducer, initialState.cartItems);
    const [productState, productDispatch] = useReducer(CatFilterReducer, initialStateFilter.productState);

  
    return (
        <CartContext.Provider value={{cartItems,dispatch }}>
            <CatFilter.Provider value={{  productState, productDispatch}}>
                 {children}
            </CatFilter.Provider>
        </CartContext.Provider>
    )
}