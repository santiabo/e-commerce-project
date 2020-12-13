import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/Search2.svg";

export const SearchIconStyled = styled(SearchIcon)`
  margin: 0 1rem;
 
`;

export const SearchBarForm = styled.form`
  display: flex;
  width: 450px;
  height: 36px;
`;

export const InputWrapper = styled.label`
  border: 1px solid #232323;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  display: flex;  
  
  margin-right: 1rem;
  padding: 0 1rem; 
  border: none;
  outline: none;
  height: 35px;
  font-size: 18px;

`;