// src/pages/Home.js
import React from 'react';
import SliderComponent from '../components/Common/Slider';
import ProductList from '../components/Common/ProductList';
import Services from '../components/service/Services';

const Home = () => {
  return (
    <div>
      <SliderComponent />
      <ProductList />
      <Services/>
    </div>
  );
};

export default Home;
