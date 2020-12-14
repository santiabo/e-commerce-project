import styled from 'styled-components';

import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
  height: 100% !important;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const ProductCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100% !important;
  padding: 1rem;
  background-color: #fafafa;
  border: 0.5px solid #e2e2e2;
`;

export const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 60%;


  img {
    width: 100%;
    height: 320px;
    object-fit: contain;
  }
`;

export const Price = styled.h2`
  display: flex;
  margin: 0.5rem 0;
  color: #202020;
  text-decoration: none;

  &:hover {
    text-decoration: none !important;
    color: #202020;
  }
`;

export const Title = styled.h1`
  display: flex;
  font-size: 18px;
  overflow: hidden;
  color: #323232;
  text-decoration: none;

`;

export const CategoryTag = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: #323232;
  text-decoration: none;
  margin: 0 !important;

`;

export const InfoBox = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;