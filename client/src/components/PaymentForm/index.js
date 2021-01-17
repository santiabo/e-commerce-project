import React from 'react';
import Input from '../Input';
import { PaymentFormWrapper } from './styles';

const PaymentForm = ({ checkoutData, handleChange }) => {
  return (
    <PaymentFormWrapper>
      <Input name="cardNumber" label="Numero de la tarjeta" value={checkoutData.cardNumber} onChange={handleChange} />
      <Input name="fullName" label="Nombre y apellido" value={checkoutData.fullName} onChange={handleChange} />
      <Input name="expDate" label="Fecha de expiración" value={checkoutData.expDate} onChange={handleChange} />
      <Input name="code" label="Codigo de seguridad" value={checkoutData.code} onChange={handleChange} />
      <Input name="dni" label="DNI del titular de la tarjeta" value={checkoutData.dni} onChange={handleChange} />

      <Input type="submit" value="Siguiente" />
    </PaymentFormWrapper>
  );
};

export default PaymentForm;
