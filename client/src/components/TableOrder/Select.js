import React from 'react';

const values = [
  'ON_CART',
  'CREATED',
  'CANCELLED',
  'PROCESSING',
  'SEND',
  'DELIVERED',
  'COMPLETED'
];

const Select = (props) => {
  return (
    <div className = 'container'>
      <select onChange = {(e) => props.handleChange(e, props.id, props.address, props.i)}>
        {
          values.map((val, i) => {
            if (props.status === val) {
              return (
                <option
                  class = 'option'
                  value = {`${val}`}
                  key = {i}
                  disabled
                  selected
                >
                  {val}
                </option>
              );
            } else {
              return (
                <option value = {`${val}`} key = {i}>
                  {val}
                </option>
              );
            }
          })
        }
      </select>
    </div>
  )
}

export default Select;