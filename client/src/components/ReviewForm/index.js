import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { ReviewFormWrapper } from './styles';
import { addReview } from '../../redux/actions/review';

const ReviewForm = ({ productId }) => {

  const [values, setValues] = useState({
    title: "",
    description: "",
    stars: 1
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addReview(values, productId));
  };

  return (
    <ReviewFormWrapper onSubmit={handleSubmit}>
      <label>
        Title:
        <input name="title" value={values.title} onChange={handleChange} />
      </label>
      <label>
        Stars:
        <select name="stars" value={values.stars} onChange={handleChange}>
          <option value={1}>1 star</option>
          <option value={2}>2 stars</option>
          <option value={3}>3 stars</option>
          <option value={4}>4 stars</option>
          <option value={5}>5 stars</option>
        </select>
      </label>
      <label>
        Description:
        <textarea name="description" value={values.description} onChange={handleChange} />
      </label>
      <input type="submit" value="Send Review" />
    </ReviewFormWrapper>
  );
};

export default ReviewForm;
