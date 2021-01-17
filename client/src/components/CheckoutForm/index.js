import React, { useState } from 'react';
import { StepsHeader, StepButton, StepNumber, FormWrapper, CheckoutFormWrapper, Main } from './styles';
import ShippingForm from '../ShippingForm';
import PaymentForm from '../PaymentForm';
import ConfirmData from '../ConfirmData';

const CheckoutForm = () => {

  const [steps, setStep] = useState([
    {
      id: 1,
      name: "Shipping",
      active: true,
    },
    {
      id: 2,
      name: "Payment",
      active: false,
    },
    {
      id: 3,
      name: "Confirmation",
      active: false,
    }
  ]);

  const [checkoutData, setCheckoutData] = useState({
    postalCode: "",
    state: "",
    city: "",
    street: "",
    number: "",
    floor: "",
    state: "",
    cardNumber: "",
    fullName: "",
    expDate: "",
    code: "",
    dni: ""
  });

  const handleSteps = (id) => {
    setStep(steps.map(s => {
      if (s.id === id) {
        return { ...s, active: true };
      }
      return { ...s, active: false };
    }));
  };

  const handleChange = (e) => {
    setCheckoutData({ ...checkoutData, [e.target.name]: e.target.value });
  };

  return (
    <CheckoutFormWrapper>
      <StepsHeader>
        {steps.map(step => (
          <StepButton key={step.id} active={step.active} onClick={() => handleSteps(step.id)} >
            <StepNumber active={step.active}>{step.id}</StepNumber>
            <span>
              {step.name}
            </span>
          </StepButton>
        ))}
      </StepsHeader>

      <Main>
        <FormWrapper>
          {
            steps[0].active &&
            <ShippingForm checkoutData={checkoutData} handleChange={handleChange} />
          }
          {
            steps[1].active &&
            <PaymentForm checkoutData={checkoutData} handleChange={handleChange} />
          }
          {
            steps[2].active &&
            <ConfirmData />
          }
        </FormWrapper>
      </Main>

    </CheckoutFormWrapper>
  );
};

export default CheckoutForm;
