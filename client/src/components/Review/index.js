import React from "react";

// Components
import Rating from "../Rating";

// Styled Components
import { ReviewWrapper, TopWrapper, Title, Date, Description, Author } from "./styles";

const Review = ({ stars, title, description, createdAt, firstName, lastName }) => {
  return (
    <ReviewWrapper>
      <Rating stars={stars} />
      <TopWrapper>
        <Title>{title}</Title>
        <Date>{createdAt}</Date>
      </TopWrapper>
      <Description>
        {description}
      </Description>
      <Author>{firstName + " " + lastName[0]} <span>- Client</span></Author>
    </ReviewWrapper>
  );
};

export default Review;