import { initialProduct, type StateType } from "../types";
import type { ActionType } from "../types";

const ProductReducer = (state: StateType, action: ActionType): StateType => {

  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "SET_SINGLE_LOADING":
      return { ...state, isSingleLoading: true };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state, isSingleLoading: false, singleProduct: action.payload ?? initialProduct
      }

    case "SET_PRODUCTS":

      const featureData = action.payload?.filter((product) => { return product.rating.rate > 4.5 });
      return { ...state, isLoading: false, products: action.payload ?? [], featureProducts: featureData ?? [] };

    case "SET_ERROR":
      return { ...state, isLoading: false, isError: true };

    case "SET_SINGLE_ERROR":
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
}

export default ProductReducer