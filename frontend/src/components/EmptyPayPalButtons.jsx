// EmptyPayPalButtons.jsx

import React from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const EmptyPayPalButtons = () => {
  return (
    <PayPalButtons
      style={{ layout: 'horizontal', color: 'gold', shape: 'rect', label: 'pay', tagline: false }}
      createOrder={() => {}}
      onApprove={() => {}}
      onError={() => {}}
    />
  );
};

export default EmptyPayPalButtons;
