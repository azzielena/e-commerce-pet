import { catActionReducer } from "../types/typeApp";


export const CatFilterReducer = (state:{byPuppy:boolean,byAdult:boolean}, action:catActionReducer) => {
    switch (action.type) {
      
      case "FILTER_BY_PUPPY":
        return { ...state, byPuppy: !state.byPuppy };
      case "FILTER_BY_ADULT":
        return { ...state, byAdult: !state.byAdult };
       case "CLEAR_FILTERS":
        return { byPuppy: false, byAdult: false };
      default:
        return state;
    }
  };