import { createContext, useContext, useEffect, useReducer, type ReactNode } from "react";
import axios from 'axios'
import ProductReducer from "../reducer/ProductReducer";
import type {  ProductContextType, StateType } from "../types";
import { initialState } from "../types";

const url = "https://fakestoreapi.com/products/";



// create context

export const productContext = createContext<ProductContextType|undefined>(undefined);

// create context provider
export const ProductContextProvider = ({ children }: { children: ReactNode }) => {

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  const getProduct = async (url: string) => {

    dispatch({ type: "SET_LOADING" });
    try {

      const res = await axios.get(url);
      dispatch({ type: "SET_PRODUCTS", payload: res.data });
    } catch (error) {
      dispatch({ type: "SET_ERROR" });
    }

  }

  const getSingleProduct = async(urlSingleProduct:string) => { 
    dispatch({type:"SET_SINGLE_LOADING"});
    try{
      const res = await axios.get(urlSingleProduct);
      const singleProduct = await res.data; 
      dispatch({type:"SET_SINGLE_PRODUCT",payload:singleProduct})
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getProduct(url);
  }, [])


  return (
    <productContext.Provider value={{ ...state,getSingleProduct }}>
      {children}
    </productContext.Provider>
  );
};

//custom hook

export const useProductContext = () => {
  const context = useContext(productContext);

  //handling the or case of the context here itself
  
  if(context === undefined){
    throw new Error("useProductContext must be used within a ProductContextProvider")
  }
  return context
};














































// WAS COMPARING AXIOS VS FETCH
//   console.log("product from axios: :",product)
//   const productFromFetch = await fetch(url,{
//     method:"GET",
//     headers:{
//       "Content-Type":"application/json"
//     },
//   });
//   console.log("product from fetch: ",productFromFetch);
//   console.log("product from fetch converted to json: ",productFromFetch.json());
// 