import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cartItems: [],
  status: 'idle',
  error: null,
};

export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (token) => {
  const response = await axios.get('/api/cart', { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
});

export const addToCart = createAsyncThunk('cart/addToCart', async ({ productId, quantity, token }) => {
  const response = await axios.post('/api/cart/add', { productId, quantity }, { headers: { Authorization: `Bearer ${token}` } });
  return response.data;
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async ({ cartItemId, token }) => {
  await axios.delete(`/api/cart/remove/${cartItemId}`, { headers: { Authorization: `Bearer ${token}` } });
  return cartItemId;
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addToCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems.push(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(removeFromCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.cartItems = state.cartItems.filter((item) => item.id !== action.payload);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
