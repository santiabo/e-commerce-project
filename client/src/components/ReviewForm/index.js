import React from 'react';
import { ReviewFormWrapper } from './styles';

const ReviewForm = () => {

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

  return (
    <ReviewFormWrapper onSubmit={handleSubmit}>
      <label>
        Title:
        <input name="title" value={values.title} onChange={handleChange} />
      </label>
      <label>
        Stars:
        <select name="stars" value={values.stars} onSelect={handleChange}>
          <option>1 star</option>
          <option>2 stars</option>
          <option>3 stars</option>
          <option>4 stars</option>
          <option>5 stars</option>
        </select>
      </label>
      <label>
        Description:
        <textarea name="description" value={values.description} onChange={handleChange} />
      </label>
      <input type="button" value="Send Review" />
    </ReviewFormWrapper>
  );
};

export default ReviewForm;
