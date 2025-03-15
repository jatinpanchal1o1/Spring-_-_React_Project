import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems } from '../../redux/slices/cartSlice';
import { useAuth } from '../../context/authContext';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartStatus = useSelector((state) => state.cart.status);
  const { token } = useAuth();

  useEffect(() => {
    if (cartStatus === 'idle' && token) {
      dispatch(fetchCartItems(token));
    }
  }, [cartStatus, token, dispatch]);

  if (cartStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (cartStatus === 'failed') {
    return <div>Error loading cart items</div>;
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.product.name} - {item.quantity} x ${item.product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
