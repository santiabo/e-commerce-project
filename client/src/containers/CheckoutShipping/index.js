import React from 'react';

import CheckoutForm from '../../components/CheckoutForm';

import { CheckoutShippingWrapper } from "./styles";

const CheckoutShipping = () => {
  return (
    <CheckoutShippingWrapper>
      <CheckoutForm />
    </CheckoutShippingWrapper>
  );
};

export default CheckoutShipping;
