import React from "react";

// Components
import Button from "../Button";

// Styled Components
import { SearchBarForm, SearchInput, InputWrapper, SearchIconStyled } from "./styles"

const SearchBar = () => {
  return (
    <SearchBarForm>
      <InputWrapper>
        <SearchIconStyled />
        <SearchInput placeholder={"Search..."} />
      </InputWrapper>
      <Button>Search</Button>
    </SearchBarForm>
  )
}

export default SearchBar;