// src/components/WishlistPage.js
import React from 'react';
import { Card, Row, Col, Button, Typography } from 'antd';
import { DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import '../style/WishlistPage.css';

const { Title } = Typography;

const wishlistItems = [
  {
    id: 1,
    name: 'Product 1',
    description: 'This is the description for product 1',
    price: '$10.00',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Product 2',
    description: 'This is the description for product 2',
    price: '$20.00',
    image: 'https://via.placeholder.com/150'
  }
  // Add more products as needed
];

const WishlistPage = () => {
  const handleAddToCart = item => {
    console.log('Add to cart:', item);
    // Handle add to cart logic here
  };

  const handleRemoveFromWishlist = item => {
    console.log('Remove from wishlist:', item);
    // Handle remove from wishlist logic here
  };

  return (
    <div className="wishlist-container">
      <Title level={2}>My Wishlist</Title>
      <Row gutter={[16, 16]}>
        {wishlistItems.map(item => (
          <Col xs={24} sm={12} md={8} lg={6} key={item.id}>
            <Card
              cover={<img alt={item.name} src={item.image} />}
              actions={[
                <Button
                  type="primary"
                  icon={<ShoppingCartOutlined />}
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>,
                <Button
                  type="danger"
                  icon={<DeleteOutlined />}
                  onClick={() => handleRemoveFromWishlist(item)}
                >
                  Remove
                </Button>
              ]}
            >
              <Card.Meta
                title={item.name}
                description={
                  <div>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WishlistPage;
