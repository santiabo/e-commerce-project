import React from 'react';

// Components
import Review from '../Review';
import Rating from '../Rating';

// Styled Components
import { ReviewsListWrapper, RecommendPercentage, TopWrapper, ReviewsNumber, PositionWrapper } from "./styles";


const ReviewsList = ({ reviews }) => {
  reviews.push({
    stars: 4,
    title: "Muy Bueno!",
    description: "Muy recomendado! Las prestaciones superan mis expectativas.",
    firstName: "Alejo",
    lastName: "Gschwind",
    createdAt: "15 Enero 2021"
  });
  reviews.push({
    stars: 3,
    title: "Bueno!",
    description: "Muy recomendado! Las prestaciones superan mis expectativas.",
    firstName: "Alejo",
    lastName: "Gschwind",
    createdAt: "12 Diciembre 2020"
  });

  const average = reviews.reduce((prev, curr) => prev + curr.stars, 0) / reviews.length;
  const recomendedPercentage = reviews.reduce((prev, curr) => curr.stars >= 4 ? prev + 1 : prev, 0) / reviews.length * 100;

  return (
    <ReviewsListWrapper>
      <TopWrapper>
        <ReviewsNumber>{reviews.length} Review{reviews.length > 1 ? "s" : ""}</ReviewsNumber>
        <PositionWrapper>
          <Rating stars={average} />
          <RecommendPercentage>
            <h4>{recomendedPercentage} %</h4>
            <span>of customers recommend this product</span>
          </RecommendPercentage>
        </PositionWrapper>
      </TopWrapper>
      {reviews.map(r => <Review key={r.id} {...r} />)}
    </ReviewsListWrapper>
  );
};

export default ReviewsList;
