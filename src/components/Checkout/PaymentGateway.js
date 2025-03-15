import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { PayPalButtons } from '@paypal/react-paypal-js';
import axios from 'axios';
import { useAuth } from '../../context/authContext';

const PaymentGateway = () => {
  const { token } = useAuth();

  const handleStripeToken = async (token) => {
    try {
      const response = await axios.post('/api/payment/stripe', { token }, { headers: { Authorization: `Bearer ${token}` } });
      console.log('Stripe payment successful', response);
    } catch (error) {
      console.error('Stripe payment failed', error);
    }
  };

  const handlePayPalApprove = (data, actions) => {
    return actions.order.capture().then(async (details) => {
      try {
        const response = await axios.post('/api/payment/paypal', { details }, { headers: { Authorization: `Bearer ${token}` } });
        console.log('PayPal payment successful', response);
      } catch (error) {
        console.error('PayPal payment failed', error);
      }
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <StripeCheckout
        stripeKey="YOUR_STRIPE_PUBLIC_KEY"
        token={handleStripeToken}
        name="E-Commerce"
        amount={1000}
      />
      <PayPalButtons
        createOrder={(data, actions) => actions.order.create({
          purchase_units: [{ amount: { value: '10.00' } }],
        })}
        onApprove={handlePayPalApprove}
      />
    </div>
  );
};

export default PaymentGateway;
