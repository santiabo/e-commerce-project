import React from 'react';

const Input = ({ label, value, handleChange, ...otherProps }) => {
  return (
    <label>
      {lable}
      <input value={value} onChange={handleChange} {...otherProps} />
    </label>
  );
};

export default Input;
