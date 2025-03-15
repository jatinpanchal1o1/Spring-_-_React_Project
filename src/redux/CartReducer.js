import React from 'react'

const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
        return {
          ...state,
         cart: [...state.cart,{...action.payload, qty:1}],
        // cart: [...state.cart,{...action.payload.product, qty:(action.payload.qty == null ? 1 : action.payload.qty)}]
        };
        case "REMOVE_FROM_CART":
            return {
              ...state,
             cart: state.cart.filter((c)=>c.id !== action.payload.id),
            };
        case "CHANGE_QTY":
            return{
                ...state,
                cart: state.cart.filter((c)=>c.id === action.payload.id?(c.qty =action.payload.qty) : c.qty),
            }
        case "ADD_TO_QTY":
            return {
            ...state,
                //  cart: [...state.cart,{...action.payload, qty:1}],
            cart: [...state.cart,{...action.payload.product, qty:(action.payload.qty == null ? 1 : action.payload.qty)}]
            };        

        default:
        return state;
    }
}

export default CartReducer;