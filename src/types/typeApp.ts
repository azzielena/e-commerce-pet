export type ProductFetch={
    products:ProductItem[],
    isLoading: boolean;
    isError: boolean;
}




export type ProductItem ={ //food
    Id:number;
    Nome: string;
    Marca:string;
    Consistenza:string;
    Age:number;
    Taglia:number;
    Specie:number;
    Prezzo:number;
    Descrizione: string;
    Kg: number;
    Recensione:number;
    Img: string;
}

export type CartItem = {
    id?:number;
    title:string;
    image?:string;
    price:number;
    amount:number;
}

export type CartActionReducer ={
    payload:any;
    type : 'ADD' | 'REMOVE' | 'REMOVE-ALL' | 'CLEAR';
}

export type CartContextType = {
    cartItems: CartItem[],
    dispatch: React.Dispatch<CartActionReducer>
}

export type Customer = {
    name: string;
    lastName: string;
    email: string;
    address: string;
}

export type Order = {
    customer: Customer,
    order_details: CartItem[]
}
