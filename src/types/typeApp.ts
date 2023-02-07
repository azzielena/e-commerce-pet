export type ProductFetch={
    products:ProductItem[],
    isLoading: boolean;
    isError: boolean;
}

export type ProductItem ={
    id:number;
    category:string;
    title:string;
    image:string;
    description:string;
    price:number;
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
    type : 'ADD' | 'REMOVE' | 'REMOVE-ALL' | 'CLEAR'
}