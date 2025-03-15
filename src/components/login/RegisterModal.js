// src/components/RegisterModal.js
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const RegisterModal = ({ visible, onClose }) => {
  const handleFinish = values => {
    console.log('Register values:', values);
    // Handle registration logic here
  };

  return (
    <Modal
      title="Register"
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form onFinish={handleFinish} layout="vertical">
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
            Register
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default RegisterModal;
