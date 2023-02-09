import { CartActionReducer, CartItem } from "../types/typeApp";

const cartReducer =(state:CartItem[], action:CartActionReducer) =>{
    
    switch(action.type){
        
        case 'ADD': 
            const existProduct=state.find(item => item.Id === action.payload.Id);
            if(existProduct){
                return state.map(item =>{
                    if(item.Id === action.payload.Id){
                        return {
                            ...item,
                            amount:item.amount + 1,
                        }
                    }
                    return item;
                });
            } else{
                const {Id, Nome, Marca, Consistenza, Age, Taglia, Prezzo, Kg, Img} = action.payload;
                return [...state, {Id, Nome, Marca, Consistenza, Age, Taglia, Prezzo, Kg, Img, amount:1 }];
            }

        case 'REMOVE': 
            return state.reduce((acum,item) => {
                if (item.Id === action.payload){
                    if(item.amount===1) return acum;
                    else return [...acum, {...item, amount:item.amount-1}];
                }
                return [...acum, item];
            }, [] as CartItem[]);

        case 'REMOVE-ALL': 
            return state.filter(item => item.Id !== action.payload);
        
        case 'CLEAR': 
            return [];

        default: return state;

    }
    
}
export default cartReducer;