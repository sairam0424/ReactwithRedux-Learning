import { BUY_ICECREAM } from "./iceCreamTypes";

const initialState = {
  numIceCream: 10,
  numCakes: 10,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numIceCream: state.numIceCream - 1,
      };
    default:
      return state;
  }
};

export default iceCreamReducer;
