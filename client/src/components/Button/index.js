import React from 'react';
import { ButtonWrapper } from './styles';

const Button = ({ children, color }) => {
  return (
    <ButtonWrapper color={color}>
      <span>{children}</span>
    </ButtonWrapper>
  );
};


export default Button;
