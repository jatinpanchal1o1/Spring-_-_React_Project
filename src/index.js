import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
// import { Provider } from 'react-redux';
import {AppProvider} from './context/ProductContext';
// import store from './redux/store';
import { FilterContextProvider } from "./context/Filter_Context";
import {CartContext} from "./context/CartContext";
import './i18n';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
    
  <AppProvider>
    <FilterContextProvider>
      <CartContext>
      <App />
      </CartContext>
      </FilterContextProvider>
  </AppProvider>
    
  // </Provider>,
);
