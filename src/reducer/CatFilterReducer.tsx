import { catActionReducer } from "../types/typeApp";


export const CatFilterReducer = (state:{byPuppyCat:boolean,byAdultCat:boolean}, action:catActionReducer) => {
    switch (action.type) {
      
      case "FILTER_BY_PUPPY":
        return { ...state, byPuppyCat: !state.byPuppyCat };
      case "FILTER_BY_ADULT":
        return { ...state, byAdultCat: !state.byAdultCat };
       case "CLEAR_FILTERS":
        return { byPuppyCat: false, byAdultCat: false };
      default:
        return state;
    }
  };