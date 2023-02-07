import {createContext} from "react";
const CartContext = createContext(null);

const CartProvider = () =>{
    return(
        <CartContext.Provider value={null}>

        </CartContext.Provider>
    )
}