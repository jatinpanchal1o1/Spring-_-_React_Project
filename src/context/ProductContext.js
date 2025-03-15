import { useContext, createContext, useEffect, useReducer } from "react";
import reducer from "../redux/ProductReducer";
import axios from "axios";

const AppContext= createContext();

const API = "http://localhost:8080/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  sliderProducts:[],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
    //   console.log(JSON.stringify(products)+"llll");
      dispatch({ type: "SET_API_DATA", payload: products });
      // dispatch({type: "Set_Slider_Data", payload: products})
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

   // my 2nd api call for single product

   const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
    //   console.log(url+"uuuuuuuu");
      const singleProduct = await res.data;
    //   console.log(JSON.stringify(singleProduct)+"KKKK")
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct}}>{children}</AppContext.Provider>
  );
     
}
    
// custom hook
const useProductContext = ()=>{
        return useContext(AppContext);
    }

export {AppProvider, AppContext, useProductContext};