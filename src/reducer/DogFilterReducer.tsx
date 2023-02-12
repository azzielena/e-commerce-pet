import { dogActionReducer } from "../types/typeApp";


export const DogFilterReducer = (state:{byPuppyDog:boolean,byAdultDog:boolean, small: boolean, medium:boolean, big:boolean}, action:dogActionReducer) => {
    switch (action.type) {
      
      case "FILTER_BY_PUPPY":
        return { ...state, byPuppyDog: !state.byPuppyDog };
      case "FILTER_BY_ADULT":
        return { ...state, byAdultDog: !state.byAdultDog };
      case "FILTER_BY_SMALL":
        return { ...state, small: !state.small };
      case "FILTER_BY_MEDIUM":
        return { ...state, medium: !state.medium };
      case "FILTER_BY_BIG":
        return { ...state, big: !state.big };
      case "CLEAR_FILTERS":
        return { byPuppyDog: false, byAdultDog: false , small:false, medium:false, big:false};
      default:
        return state;
    }
  };