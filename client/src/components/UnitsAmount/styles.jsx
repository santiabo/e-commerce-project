import styled from "styled-components";

export const UnitsAmountWrapper = styled.div`
  background: #232323;
  min-width: 40px;
  height: 50px;
  color: white;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;

  span {
     font-size: 18px;
     margin-right: 15px;
  }
`
export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  svg {
    width: 18px;
    height: 18px;
    margin: 2px 0;
    cursor: pointer;
  }
`