// src/components/ForgotPasswordModal.js
import React from 'react';
import { Modal, Form, Input, Button } from 'antd';

const ForgotPasswordModal = ({ visible, onClose }) => {
  const handleFinish = values => {
    console.log('Forgot Password values:', values);
    // Handle forgot password logic here
  };

  return (
    <Modal
      title="Forgot Password"
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
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ForgotPasswordModal;
