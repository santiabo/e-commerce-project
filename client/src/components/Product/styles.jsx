import styled from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
`

export const LeftSide = styled.div`
  display: flex;
  width: 60%;
`

export const RightSide = styled.div`
  width: 40%;
`

export const ImageContainer = styled.div`
  width: 90%;
  max-height: 500px;
  object-fit:  cover;

  img {
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`

export const RatingWrapper = styled.div`
  display: flex;
`


export const Title = styled.h1`
  /* font-size: 16px;
  color: #323232; */

`
export const Description = styled.p``;
export const CategoryTag = styled.h3``;
export const Price = styled.h3``;
export const ButtonsWrapper = styled.div`
  display: flex
`;
