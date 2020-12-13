import React from "react";

// Styled Components
import { SearchBarForm, SearchInput, InputWrapper, SearchIconStyled } from "./styles";

const SearchBar = ({ handleSubmit }) => {

  return (
    <SearchBarForm onSubmit={handleSubmit}>

      <InputWrapper>
        <SearchInput placeholder={"Search..."} />
      </InputWrapper>

      <SearchIconStyled />
    </SearchBarForm>
  );
};

export default SearchBar;