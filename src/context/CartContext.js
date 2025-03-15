import React, {createContext, useReducer, useEffect, useContext} from "react";
import { useProductContext } from "./ProductContext";
import reducer from "../redux/CartReducer";

const Cart = createContext();

const initialState = {
    isLoading: false,
    isError: false,
    cart:[],
  };

export const CartContext = ({children}) => {
    
    const { products } = useProductContext();

    const [state, dispatch] = useReducer(reducer, initialState);

    // useEffect(() => {
    //     dispatch({ type: "LOAD_CART_PRODUCTS", payload: products });
    //   }, [products]);

    return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>
}

export const useCartState = ()=>{
    return useContext(Cart);
}