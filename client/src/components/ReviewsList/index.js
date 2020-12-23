import React from 'react';

// Components
import Review from '../Review';

// Styled Components

const ReviewsList = ({ reviews }) => {
  return (
    <ReviewsListWrapper>
      {reviews.map(r => <Review key={r.id} {...r} />)}
    </ReviewsListWrapper>
  );
};

export default ReviewsList;
