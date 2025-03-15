// src/components/ErrorPage.js
import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ status, title, subTitle }) => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/');
  };

  return (
    <Result
      status={status || "404"}
      title={title || "404"}
      subTitle={subTitle || "Sorry, the page you visited does not exist."}
      extra={
        <Button type="primary" onClick={handleBackHome}>
          Back Home
        </Button>
      }
    />
  );
};

export default ErrorPage;
