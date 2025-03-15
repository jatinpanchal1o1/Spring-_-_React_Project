import React, { useState, useEffect } from 'react';
import { Button, Select, Rate } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { FaRegHeart } from 'react-icons/fa';
import { useParams, NavLink } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import {InputNumber} from 'antd';
// import 'antd/dist/antd.css';
import '../style/SingleProduct.css';
import FormatPrice from '../Helper/FormatPrice';
import Star from '../components/Common/Star';
import { useCartState } from '../context/CartContext';

const { Option } = Select;

const API = "http://localhost:8080/api/products";

const SingleProduct = () => {

  const { getSingleProduct, isSingleLoading, singleProduct } =
  useProductContext();

  const {state:{cart},dispatch} = useCartState();

const { id } = useParams();


useEffect(() => {
  getSingleProduct(`${API}/${id}`);
  // setSelectedImage(SingleProduct.image[0].url)
}, []);

// console.log(JSON.stringify(colors[0])+"jjjj"+id);

const [selectedImage, setSelectedImage] = useState("");
const [selectedColor, setSelectedColor] = useState("");
const [selectedQty, setQty] = useState();

const handleAddToCart = () => {
  console.log('Add to cart:', singleProduct.id);
};

if (isSingleLoading) {
  return <div className="page_loading">Loading.....</div>;
}

const setfuncion=(value)=>{
   setQty(value);
   return selectedQty
}

return (
    <div className="single-product-container">
      <div className="product-gallery">
        <img src={selectedImage} alt="Selected" className="main-image" />
        <div className="image-thumbnails">
          {singleProduct.image?.map((img) => (
            <img
              key={img.id}
              src={img.url}
              alt={img.alt}
              className="thumbnail"
              onClick={() => setSelectedImage(img.url)}
            />
          ))}
        </div>
      </div>
      <div className="product-details">
        <h1 className="product-name">{singleProduct.name}</h1>
        <p className="product-brand">{singleProduct.brand}</p>
        <p className="product-price"><FormatPrice price={singleProduct.price}/></p>
        <p className="product-description">{singleProduct.description}</p>
        <div className="product-colors">
          <p>Color:</p>
          <Select defaultValue={selectedColor} onChange={setSelectedColor}>
            {singleProduct.colors?.map((color) => (
              <Option key={color} value={color}>
                {color}
              </Option>
            ))}
          </Select>
        </div>
        <div className="product-stock">
          {singleProduct.stock > 0 ? (
            <p className="in-stock">In Stock</p>
          ) : (
            <p className="out-of-stock">Out of Stock</p>
          )}
        </div>
        <div className='mb-2'>
        <InputNumber
            min={1}
            defaultValue={ cart[0] == null ? 1 : cart[0].qty}
            onChange={(e)=>
              // setQty(e),
              dispatch({
                type:"CHANGE_QTY",
                payload:{
                  id: singleProduct.id,
                  qty: setfuncion(e),
                }
              })
            }
        />
        </div>
        {/* <NavLink to="/cart"> */}
        {cart.some(p=>p.id === singleProduct.id)?(<Button
      onClick={()=>dispatch({type:"REMOVE_FROM_CART", payload: singleProduct})}
      type="primary" 
      danger
      className="add-to-cart-button"
      >
        Remove
      </Button>):(<Button
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={()=>dispatch({type:"ADD_TO_QTY", payload: {product:singleProduct, qty:selectedQty}})}
          disabled={singleProduct.stock === 0}
        >
          Add to Cart
        </Button>)}
        
        {/* </NavLink> */}
        {/* <Button
          type="default"
          icon={<FaRegHeart />}
          className="wishlist-button"
        >
          Add to Wishlist
        </Button> */}
        <div className="product-reviews">
          {/* <Rate allowHalf defaultValue={4.5} /> */}
          <Star stars={singleProduct.stars}/>
          <span>({singleProduct.review} reviews)</span>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
