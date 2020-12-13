import React from "react";

// Components
import Button from "../Button";


// Styled Components
import { SearchBarForm, SearchInput, InputWrapper, SearchIconStyled } from "./styles";

const SearchBar = ({ handleSubmit }) => {
  return (
    <SearchBarForm onSubmit={handleSubmit}>
      <InputWrapper>
        
        <SearchInput placeholder={"Search..."} />
      </InputWrapper>
      <Button><SearchIconStyled /></Button>
    </SearchBarForm>
  );
};

export default SearchBar;