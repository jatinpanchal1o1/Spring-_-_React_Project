// src/components/ProductList.js

import React from 'react';
import Product from './Product';
import { Row, Col } from 'antd';
import '../../style/ProductList.css';
import { useProductContext } from '../../context/ProductContext';

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     price: 100,
//     image: 'https://via.placeholder.com/300',
//     description: 'This is the description for Product 1',
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     price: 200,
//     image: 'https://via.placeholder.com/300',
//     description: 'This is the description for Product 2',
//   },
//   {
//     id: 3,
//     name: 'Product 3',
//     price: 300,
//     image: 'https://via.placeholder.com/300',
//     description: 'This is the description for Product 3',
//   },
//   {
//     id: 4,
//     name: 'Product 4',
//     price: 400,
//     image: 'https://via.placeholder.com/300',
//     description: 'This is the description for Product 4',
//   },
// ];

const ProductList = () => {
  const handleAddToCart = (productId) => {
    console.log('Add to cart:', productId);
    // Handle add to cart logic here
  };

  const {isLoading, featureProducts} = useProductContext();

  if(isLoading){
    return<div>loading------</div>
  }

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <Row gutter={[16, 16]}>
        {featureProducts.map((product) => (
          <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
            <Product product={product} onAddToCart={handleAddToCart} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
