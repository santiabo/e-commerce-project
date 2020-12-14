import styled from 'styled-components';

export const CatalogueWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
`;

export const ProductsColumn = styled.div`
  width: 75%;
  display: grid;
  align-items: center;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-template-rows: repeat(auto, 100%)
`;

export const CategoriesColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20%;
  background-color: #fafafa;
  margin: 0 1rem;
  padding: 1rem 1.5rem;
  border: 0.5px solid #e2e2e2;
`;

export const CategoryButton = styled.button`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #f7f7f7;
  border: 0.5px solid #dedede;
  margin: 0.5rem 0.3rem;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  outline: none;

  color: #323232;
  
  &:hover {
    background: #dedede;
  }
  
  &:focus {
    background: #dedede;
    outline: none;
    
  }
`;

export const CategoriesTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: 500;
`;
