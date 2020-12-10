import React from 'react';
import { ButtonWrapper } from './styles';

const Button = ({ children }) => {
  return (
    <ButtonWrapper>
      <span>{children}</span>
    </ButtonWrapper>
  );
};


export default Button;
