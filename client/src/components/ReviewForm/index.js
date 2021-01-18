import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { ReviewFormWrapper } from './styles';
import { addReview } from '../../redux/actions/review';
import ReactStars from "react-rating-stars-component";
import { Input } from 'reactstrap';
import { useHistory } from 'react-router';

const ReviewForm = ({ productId, last }) => {

  const [values, setValues] = useState({
    title: "",
    description: "",
    stars: 0
  });
  const [done, setDone] = useState(false);
  const history = useHistory();


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(productId);
    setDone(true);
    dispatch(addReview(values, productId));

    console.log(last);
    if (last)
      history.push("/");

  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setValues({
      ...values,
      stars: newRating
    });
  };

  return (
    <ReviewFormWrapper onSubmit={handleSubmit}>
      {
        !done &&
        <>

          <label>
            Title:
            <Input name="title" label="Title" value={values.title} onChange={handleChange} />
          </label>
          {/* <label>
            Stars:
            <select name="stars" value={values.stars} onChange={handleChange}>
              <option value={1}>1 star</option>
              <option value={2}>2 stars</option>
              <option value={3}>3 stars</option>
              <option value={4}>4 stars</option>
              <option value={5}>5 stars</option>
            </select>
          </label> */}
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />
          <label>
            Description:
            <Input name="description" value={values.description} onChange={handleChange} />
          </label>
          <input type="submit" value="Send Review" />
        </>
      }
    </ReviewFormWrapper>
  );
};

export default ReviewForm;
