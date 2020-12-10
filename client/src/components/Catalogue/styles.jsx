import styled from 'styled-components';

export const CatalogueWrapper = styled.div`
  display: flex;
`;

export const ProductsColumn = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const CategoriesColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fafafa;
  margin: 1rem;
  padding: 1rem 1.5rem;
  border: 0.5px solid #e2e2e2;
`;

export const CategoryButton = styled.button`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  background: none;
  border: none;
  margin: 0.7rem 0.3rem;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  outline: none;
`;

export const CategoriesTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: 500;
`;