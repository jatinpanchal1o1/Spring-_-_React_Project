// src/components/CartPage.js
import React from 'react';
import { List, Avatar, Button, InputNumber, Row, Col, Card, Typography } from 'antd';
import CheckoutPage from './Checkout';
import { useCartState } from '../context/CartContext';

const { Title, Text } = Typography;


const CartPage = () => {

  const {state:{cart}, dispatch} = useCartState();
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.qty*item.price, 0);
  };

  return (
    <div className="container" style={{ padding: '20px' }}>
      <Title level={2}>Shopping Cart</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <List
            itemLayout="horizontal"
            dataSource={cart}
            renderItem={item => (
              <List.Item
                actions={[
                  <InputNumber
                    min={1}
                    defaultValue={item.qty}
                    onChange={(e)=>
                      dispatch({
                        type:"CHANGE_QTY",
                        payload:{
                          id: item.id,
                          qty: e,
                        }
                      })
                    }
                  />,
                  <Button 
                  type="primary" 
                  danger
                  onClick={()=>dispatch({type:"REMOVE_FROM_CART", payload: item})}
                  >
                    Remove
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.image} size={64} />}
                  title={item.name}
                  description={`Price: $${item.price}`}
                />
                <Text>Total: ${item.price * item.qty}</Text>
              </List.Item>
            )}
          />
        </Col>
        <Col xs={24} lg={8}>
          <Card>
            <Title level={4}>Cart Summary</Title>
            <Text>Total Price: ${getTotalPrice()}</Text>
            <Button type="primary" block style={{ marginTop: '10px' }}>
              Proceed to Checkout
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
