// src/components/AboutPage.js
import React from 'react';
import { Typography, Row, Col, Card } from 'antd';
import '../style/AboutPage.css';
import { useProductContext } from '../context/ProductContext';

const { Title, Paragraph } = Typography;

const AboutPage = () => {
    const {gname} = useProductContext();
  return (
    <div className="about-container">
      <div className="hero-section">
        <Title className="hero-title">About Us {gname}</Title>
        <Paragraph className="hero-subtitle">Learn more about our story, values, and team.</Paragraph>
      </div>

      <div className="content-section">
        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Card className="about-card">
              <Title level={3}>Our Mission</Title>
              <Paragraph>
                Our mission is to provide the best quality products and exceptional customer service. We strive to make a positive impact in the lives of our customers.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="about-card">
              <Title level={3}>Our Values</Title>
              <Paragraph>
                Integrity, innovation, and customer satisfaction are at the core of everything we do. We believe in building long-lasting relationships based on trust and respect.
              </Paragraph>
            </Card>
          </Col>
        </Row>
        
        <Row gutter={[16, 16]} style={{ marginTop: '2rem' }}>
          <Col xs={24} md={12}>
            <Card className="about-card">
              <Title level={3}>Our Story</Title>
              <Paragraph>
                Founded in 2020, our company has grown from a small startup to a leading provider of quality products. Our journey is driven by our passion for excellence and our commitment to our customers.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={12}>
            <Card className="about-card">
              <Title level={3}>Our Team</Title>
              <Paragraph>
                Our team is made up of dedicated professionals who are passionate about what they do. We work together to bring the best products and services to our customers.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AboutPage;
