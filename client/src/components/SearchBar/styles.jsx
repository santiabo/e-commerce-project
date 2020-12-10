import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

export const SearchIconStyled = styled(SearchIcon)`
  margin: 0 1rem;
`

export const SearchBarForm = styled.form`
  display: flex;
`

export const InputWrapper = styled.div`
  border: 1px solid #232323;
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  margin-right: 1rem;
  /* padding: 0 1rem; */
  border: none;
  outline: none;
  height: 40px;
  font-size: 18px;

`