export type ProductFetch={
    products:ProductItem[],
    isLoading: boolean;
    isError: boolean;
}

export type AccessoriesFetch={
    products:AccessoriesItem[],
    isLoading: boolean;
    isError: boolean;
}

export type AllFetch={
    products:AllItem[],
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

export type AllItem ={ //all
    Id:number;
    Nome: string;
    Marca:string;
    Prezzo:number;
    Descrizione: string;
    Img: string;
}
 
export type AccessoriesItem ={ //accessori
    Id:number;
    Nome: string;
    Marca:string;
    Tipo:string;
    Specie:number;
    Prezzo:number;
    Descrizione: string;
    Recensione:number;
    Img: string;
}

export type CartItem = {
    Id:number;
    Nome: string;
    Marca:string;
    Consistenza:string;
    Age:number;
    Taglia:number;
    Prezzo:number;
    Kg: number;
    Img: string;
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

export type FilterCatConxt={
    productState:{ byPuppy:boolean, byAdult:boolean};
    productDispatch: React.Dispatch<catActionReducer>;
}

 export type catActionReducer ={
    type : 'FILTER_BY_PUPPY' | 'FILTER_BY_ADULT' | 'CLEAR_FILTERS';
}
