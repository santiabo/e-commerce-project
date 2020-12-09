import React from 'react';
import { ButtonWrapper } from './styles';

const Button = ({ children }) => {
  return (
    <ButtonWrapper>
      {children}
    </ButtonWrapper>
  )
};


export default Button;
