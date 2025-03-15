import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomHeader from './components/Common/Header';
import Footer from './components/Common/Footer';
import Home from './pages/Home';
// import ProductPage from './pages/ProductPage';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
// import Wishlist from './pages/Wishlist';
import LoginPage from './pages/Login';
import SignupPage from './pages/Signup';
import CheckoutPage from './pages/Checkout';
import ErrorPage from './pages/ErrorPage';
import { AuthProvider } from './context/authContext';
import { Layout } from 'antd';
import AboutPage from './pages/AboutPage';
import SingleProduct from './pages/SingleProduct';



const App = (props) => (
  <Layout>
  <AuthProvider>
    <Router>
      <div>
        <CustomHeader />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/products/:id" element={<SingleProduct/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/checkout" element={<CheckoutPage/>} />
          {/* <Route path="/wishlist" element={<Wishlist/>} /> */}
          <Route path="/about" element={<AboutPage/>} />
          <Route
            path="*"
            element={
              <ErrorPage />
            }
          />
        </Routes>
        {props.children}
        <Footer />
      </div>
    </Router>
  </AuthProvider>
  </Layout>
);

export default App;
