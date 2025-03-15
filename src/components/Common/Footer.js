// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';
import openNotificationWithIcon from "./PopupMessage";

const Footer = () => {

  const [state, handleSubmit] = useForm("mqkrowde");
  if (state.succeeded) {
     openNotificationWithIcon('success', 'Successfully Submit', 'Thank You !');
  }

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-2">About Us</h3>
            <p>
              We are a leading eCommerce website providing the best online shopping experience.
            </p>
          </div>

          {/* Customer Service Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-2">Customer Service</h3>
            <ul>
              <li className="mb-2">
                <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/faq" className="hover:text-gray-400">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link to="/shipping" className="hover:text-gray-400">Shipping & Returns</Link>
              </li>
              <li className="mb-2">
                <Link to="/privacy" className="hover:text-gray-400">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Information Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-2">Information</h3>
            <ul>
              <li className="mb-2">
                <Link to="/about" className="hover:text-gray-400">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/careers" className="hover:text-gray-400">Careers</Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="hover:text-gray-400">Terms & Conditions</Link>
              </li>
              <li className="mb-2">
                <Link to="/blog" className="hover:text-gray-400">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
            <h3 className="font-bold text-lg mb-2">Subscribe</h3>
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="p-2 mb-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none"
              />
                <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <button className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" type="submit" disabled={state.submitting}>Subscribe</button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>&copy; 2023 E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
