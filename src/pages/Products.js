import React, { useState } from 'react';
import { Card, Row, Col, Slider, Select, InputNumber, Rate, Checkbox } from 'antd';
// import { products } from './ProductPage'; // Assume this imports your product data
import '../style/Product.css'; // Assume this imports your custom styles
import { useFilterContext } from '../context/Filter_Context';
import FormatPrice from '../Helper/FormatPrice';
import Product from '../components/Common/Product';
// import { useCartState } from '../context/CartContext';

const { Option } = Select;
const { Meta } = Card;

const ProductListing = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedReview, setSelectedReview] = useState(0);
  

 const {filter_products, sorting} = useFilterContext();

//  console.log(JSON.stringify(filter_products)+"llllll");
 const brands = [...new Set(filter_products.map(product => product.brand))];


  const handlePriceChange = value => {
    setPriceRange(value);
  };

  const handleBrandChange = value => {
    setSelectedBrand(value);
  };

  const handleReviewChange = value => {
    setSelectedReview(value);
  };

  
  const handleAddToCart = (productId) => {
      console.log('Add to cart:', productId);
      // Handle add to cart logic here
    };

  const filteredProducts = filter_products.filter(product => {
    return (
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedBrand ? product.brand === selectedBrand : true) &&
      product.stars >= selectedReview
    );
  });

  return (
    <div className="product-listing grid grid-rows-1 grid-flow-col gap-4">
      <div className="filters row-span-3">
        <div className="filter">
          <h4>Price Range</h4>
          <Slider
            range
            step={10}
            defaultValue={priceRange}
            min={0}
            max={1000}
            onChange={handlePriceChange}
            value={priceRange}
          />
          <div className="price-inputs">
            <InputNumber
              min={0}
              max={1000}
              value={priceRange[0]}
              onChange={value => setPriceRange([value, priceRange[1]])}
            />
            <InputNumber
              min={0}
              max={1000}
              value={priceRange[1]}
              onChange={value => setPriceRange([priceRange[0], value])}
            />
          </div>
        </div>

        {/* <div className="filter">
          <h4>Sort By</h4>
          <Select
            defaultValue="lowest"
            style={{ width: '100%' }}
            placeholder="Sort products"
            onClick={sorting}
            allowClear
          >
            <Option value="lowest">Lowest Price</Option>
            <Option value="highest">Highest Price</Option>
            <Option value="a-z">A-Z</Option>
            <Option value="z-a">Z-A</Option>
          </Select>
        </div> */}

        <div className="filter">
          <h4>Brand</h4>
          <Select
            style={{ width: '100%' }}
            placeholder="Select a brand"
            onChange={handleBrandChange}
            value={selectedBrand}
            allowClear
          >
            {brands.map(brand => (
              <Option key={brand} value={brand}>
                {brand}
              </Option>
            ))}
          </Select>
        </div>

        <div className="filter">
          <h4>Review</h4>
          <Rate allowHalf value={selectedReview} onChange={handleReviewChange} />
        </div>
      </div>
       <div className='col-span-1'>
      <Row gutter={[16, 16]}>
        {filteredProducts.map(product => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            {/* <Card
              hoverable
              cover={<img alt={product.name} src={product.image[0].url} />}
              actions={[
                <button onClick={() => console.log('Add to Cart:', product.id)}>Add to Cart</button>,
              ]}
            >
              <Meta title={product.name} description={product.description} />
              <p>Price: <FormatPrice price={product.price}/></p>
              <p>Brand: {product.brand}</p>
              <Rate disabled defaultValue={product.stars} />
            </Card> */}
            <Product product={product} onAddToCart={handleAddToCart}/>
          </Col>
        ))}
      </Row>
      </div>
    </div>
  );
};

export default ProductListing;
