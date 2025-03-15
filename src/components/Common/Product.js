// src/components/Product.js

import React from 'react';
import { Card, Button, Rate } from 'antd';
import '../../style/Product.css';
import { NavLink } from 'react-router-dom';
import FormatPrice from '../../Helper/FormatPrice';
import { useCartState } from '../../context/CartContext';

const { Meta } = Card;


const Product = ({ product, onAddToCart }) => {

  const {state:{cart},dispatch} = useCartState();

  // console.log(JSON.stringify(cart)+"III");

  return (
    <NavLink to={`/products/${product.id}`}>
    <Card
      hoverable
      cover={<img alt={product.name} src={product.image[0].url} />}
      className="product-card"
    >
      <div>
      
      <Meta
        title={product.name}
        description={
          <>
            <p>{product.description}</p>
            <p className="product-price">{product.price}</p>
            <Rate disabled defaultValue={product.stars} />
          </>
        }
      />
      </div>
      <br/>
      {cart.some(p=>p.id === product.id)?(
      <Button
      onClick={()=>dispatch({type:"REMOVE_FROM_CART", payload: product})}
      type="primary" 
      danger
      className="add-to-cart-button"
      >
        Remove
      </Button>
    ):(<Button
      onClick={()=>dispatch({type:"ADD_TO_CART", payload: product})}
      type="primary"
      className="add-to-cart-button"
    >
     {!product.stock? "Out Of Stock" : "Add To Cart"} 
    </Button>)}
    </Card>
     </NavLink>
  );
};

export default Product;
