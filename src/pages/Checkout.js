// CheckoutPage.js
import React from 'react';
import { Form, Input, Button, Select, Typography, Row, Col } from 'antd';
import '../style/CheckoutPage.css';

const { Title } = Typography;
const { Option } = Select;

const CheckoutPage = () => {
  const handleCheckout = values => {
    console.log('Checkout values:', values);
    // Implement checkout logic here
  };

  return (
    <div className="checkout-container">
      <Title level={2}>Checkout</Title>
      <Form layout="vertical" onFinish={handleCheckout}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Form.Item label="Country" name="country" rules={[{ required: true, message: 'Please select your country!' }]}>
              <Select placeholder="Select country">
                <Option value="usa">USA</Option>
                <Option value="uk">UK</Option>
                {/* Add more options as needed */}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="State" name="state" rules={[{ required: true, message: 'Please select your state!' }]}>
              <Select placeholder="Select state">
                <Option value="ny">New York</Option>
                <Option value="ca">California</Option>
                {/* Add more options as needed */}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
              <Input type="tel" />
            </Form.Item>
          </Col>
          <Col xs={24}>
            <Form.Item label="Shipping Address" name="shippingAddress" rules={[{ required: true, message: 'Please enter your shipping address!' }]}>
              <Input.TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">Place Order</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CheckoutPage;
