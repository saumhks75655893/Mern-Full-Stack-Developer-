import { ADD_TO_PRODUCT } from "../constants/productConstant";
export const addToProduct = (details) => {
  return {
    type: ADD_TO_PRODUCT,
    payload: details,
  };
};
