import React, { useState } from "react";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrowup.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/icons/arrowdown.svg";

// StyledComponents
import { UnitsAmountWrapper, ButtonsWrapper } from "./styles"

const UnitsAmount = () => {

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    if (count > 1)
      setCount(count - 1)
  }

  return (
    <UnitsAmountWrapper>
      <span>{count}</span>
      <ButtonsWrapper>
        <ArrowUpIcon onClick={increment}>+</ArrowUpIcon>
        <ArrowDownIcon onClick={decrement}>-</ArrowDownIcon>
      </ButtonsWrapper>
    </UnitsAmountWrapper>
  )
}

export default UnitsAmount;