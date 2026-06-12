const initialState = { products: [], count: [] };

export const ProductReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_PRODUCT") {
    return { products: [...state.products, action.payload] };
  }
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: [Number(state.count) + 1],
    };
  } else {
    return state;
  }
};
