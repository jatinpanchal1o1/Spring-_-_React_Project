// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/outline'; // Use outline icons for a lighter look
import { useFilterContext } from "../../context/Filter_Context";
import { useCartState } from '../../context/CartContext';

const Header = () => {

  const {
    filters: { text, category, color },
    updateFilterValue,
    all_products,
  } = useFilterContext();

  const {state:{cart},dispatch} = useCartState();

  return (
    <header className="bg-gray-800 py-4 sticky">
      <div className="container mx-auto flex items-center justify-end space-x-4 h-3 ">
          <Link to="/login" className="text-white hover:text-gray-300">Login</Link>
          <Link to="/signup" className="text-white hover:text-gray-300">Sign Up</Link>
      </div>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 text-white">
          <Link to="/" className="text-2xl font-semibold">E-Commerce</Link>
        </div>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 mx-4">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search for products"
            value={text}
            onChange={updateFilterValue}
            className="w-3/4 px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
          />
          </form>
        </div>
        
        {/* Icons and Buttons */}
        <div className="flex items-center space-x-4">
        <Link to="/products" className="text-white hover:text-gray-300">Products</Link>
          {/* <Link to="/wishlist" className="text-white hover:text-gray-300">
            <HeartIcon className="h-6 w-6" />
          </Link> */}
          <Link to="/cart" className="relative text-white hover:text-gray-300">
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-xs text-white">{cart.length}</span>
          </Link>
         
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="block md:hidden mx-4 mt-4">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
        />
      </div>
    </header>
  );
};

export default Header;
