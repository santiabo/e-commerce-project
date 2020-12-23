import React from "react";

// Components
import Rating from "../Rating";

// Styled Components
import { ReviewWrapper, TopWrapper, Title, Date, Description, Author } from "./styles";

const Review = ({ starts, title, description, createdAt, firstName, lastName }) => {
  return (
    <ReviewWrapper>
      <Rating starts={starts} />
      <TopWrapper>
        <Title>{title}</Title>
        <Date>{createdAt}</Date>
      </TopWrapper>
      <Description>
        {description}
      </Description>
      <Author>{firstName + " " + lastName[0]}</Author>
    </ReviewWrapper>
  );
};

export default Review;