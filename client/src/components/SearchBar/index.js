import React from "react";
import { Link } from "react-router-dom";

// Components
import Button from "../Button";

// Styled Components
import { SearchBarForm, SearchInput, InputWrapper, SearchIconStyled } from "./styles"

const SearchBar = ({ handleSubmit }) => {
  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <InputWrapper>
        <SearchIconStyled />
        <SearchInput placeholder={"Search..."} />
      </InputWrapper>
      <Button>Search</Button>
    </SearchBarForm>
  )
}

export default SearchBar;