import React, { useState } from 'react';
import { Form, Input, Button, Typography, Row, Col, Tabs } from 'antd';
import { GoogleOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import ForgotPasswordModal from '../components/login/ForgotPasswordModal';
import RegisterModal from '../components/login/RegisterModal';
import { Link } from 'react-router-dom';
import '../style/LoginPage.css';

const { Title } = Typography;
const { TabPane } = Tabs;

const LoginPage = () => {
  const [isForgotPasswordVisible, setForgotPasswordVisible] = useState(false);
  const [isRegisterVisible, setRegisterVisible] = useState(false);

  const handleFinish = values => {
    console.log('Login values:', values);
    // Handle login logic here
  };

  return (
    <div className="login-container">
      <Row justify="center" align="middle" style={{ minHeight: '100vh', width: '100%' }}>
        <Col xs={24} sm={16} md={12} lg={8}>
          <div className="login-box">
            <Title level={2}>Login</Title>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Email Login" key="1">
                <Form
                  name="email_login"
                  initialValues={{ remember: true }}
                  onFinish={handleFinish}
                  layout="vertical"
                >
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
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Phone Login" key="2">
                <Form
                  name="phone_login"
                  initialValues={{ remember: true }}
                  onFinish={handleFinish}
                  layout="vertical"
                >
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
                  <Form.Item>
                    <Button type="primary" htmlType="submit" block>
                      Login
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
            <Form.Item>
              <Row justify="space-between">
                <Col>
                  <Button type="link" onClick={() => setForgotPasswordVisible(true)}>
                    Forgot Password?
                  </Button>
                </Col>
                <Col>
                <Link to={"/signup"}>
                  {/* <Button type="link" onClick={() => setRegisterVisible(true)}>
                    Register
                  </Button> */}
                  <Button type="link">
                    create account !
                  </Button>
                  </Link>
                </Col>
              </Row>
            </Form.Item>
            <div className="social-login">
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
      <ForgotPasswordModal
        visible={isForgotPasswordVisible}
        onClose={() => setForgotPasswordVisible(false)}
      />
      <RegisterModal
        visible={isRegisterVisible}
        onClose={() => setRegisterVisible(false)}
      />
    </div>
  );
};

export default LoginPage;
