import styled from "styled-components";

export const ButtonWrapper = styled.button`
  width: 100%;
  height: auto;
  background: ${(props) => props.color ? props.color : "#232323"};
  color: white;
  padding: 0 1rem;
  border: none;
  cursor: pointer;
  -webkit-user-select: none;
  
  span {
    font-size: 20px;
    font-weight: 500;
  }
`;