const initialState = {
  cart: [],
};

export const CardReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_CART") {
    return state;
  } else {
    return state;
  }
};
