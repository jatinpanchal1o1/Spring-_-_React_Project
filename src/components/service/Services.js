// src/components/Services.js
import React from 'react';
import { TbTruckDelivery } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import '../../style/Services.css';

const services = [
  {
    id: 1,
    icon: <TbTruckDelivery size={40} color="#4caf50" />,
    title: 'Free Delivery',
    description: 'We offer free delivery for all orders over $100.',
  },
  {
    id: 2,
    icon: <MdSecurity size={40} color="#2196f3" />,
    title: 'Secure Payment',
    description: 'Your payment information is processed securely.',
  },
  {
    id: 3,
    icon: <GiReceiveMoney size={40} color="#ff9800" />,
    title: 'Money Back Guarantee',
    description: 'We offer a 30-day money-back guarantee.',
  },
  {
    id: 4,
    icon: <RiSecurePaymentLine size={40} color="#f44336" />,
    title: 'Secure Transactions',
    description: 'We ensure secure transactions for all our customers.',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
