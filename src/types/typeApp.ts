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
    Prezzo:number;
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
    productStateCat:{ byPuppyCat:boolean, byAdultCat:boolean};
    productDispatchCat: React.Dispatch<catActionReducer>;
}

 export type catActionReducer ={
    type : 'FILTER_BY_PUPPY' | 'FILTER_BY_ADULT' | 'CLEAR_FILTERS';
}

export type FilterDogConxt={
    productStateDog:{ byPuppyDog:boolean, byAdultDog:boolean, small:boolean, medium: boolean, big: boolean};
    productDispatchDog: React.Dispatch<dogActionReducer>;
}

 export type dogActionReducer ={
    type : 'FILTER_BY_PUPPY' | 'FILTER_BY_ADULT' | 'FILTER_BY_SMALL' | 'FILTER_BY_MEDIUM' |'FILTER_BY_BIG' |'CLEAR_FILTERS';
}

export type Message = {
    name: string;
    email: string;
    message: string;
}

export type News = {
    name: string;
    surname: string;
    email: string;
    
}

