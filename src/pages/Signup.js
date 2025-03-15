import React, { useState } from 'react';
import { Form, Input, Button, Typography, Row, Col, Tabs } from 'antd';
import { GoogleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import '../style/SignupPage.css';

const { Title } = Typography;
const { TabPane } = Tabs;

const SignupPage = () => {
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const handleFinish = values => {
    console.log('Signup values:', values);
    // Handle signup logic here
  };

  return (
    <div className="signup-container">
      <Row justify="center" align="middle" style={{ minHeight: '100vh', width: '100%' }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <div className="signup-box">
            <Title level={2}>Sign Up</Title>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Email Sign Up" key="1">
                <Form
                  name="email_signup"
                  initialValues={{ remember: true }}
                  onFinish={handleFinish}
                  layout="vertical"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The two passwords do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Sign Up
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Phone Sign Up" key="2">
                <Form
                  name="phone_signup"
                  initialValues={{ remember: true }}
                  onFinish={handleFinish}
                  layout="vertical"
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Phone Number"
                    name="phone"
                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="confirm"
                    dependencies={['password']}
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject(new Error('The two passwords do not match!'));
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Sign Up
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
            <Form.Item>
              <Row justify="space-between">
                <Col>
                <Link to={"/login"}>
                  <Button type="link" onClick={() => setRegisterVisible(true)}>
                    Already have an account? Log in
                  </Button>
                  </Link>
                </Col>
              </Row>
            </Form.Item>
            <div className="social-signup">
              <Button
                type="primary"
                icon={<GoogleOutlined />}
                size="large"
                className="social-button"
              >
                Google
              </Button>
              <Button
                type="primary"
                icon={<FacebookOutlined />}
                size="large"
                className="social-button"
              >
                Facebook
              </Button>
              <Button
                type="primary"
                icon={<TwitterOutlined />}
                size="large"
                className="social-button"
              >
                Twitter
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SignupPage;
