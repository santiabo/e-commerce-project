import React from 'react';

export default function CategoryForm() {

  const [category, setCategory] = React.useState({
    name: '',
  });

  const handleInputChange = function (e) {
    setCategory({
      ...category,
      [e.target.name]: e.target.value
    });

  }

  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("mandando datos al servidor");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>New Category:</label>
        <input type="text" name="name" value={category.name} onChange={handleInputChange} />
      </div>
      <div><input type="submit" value="Submit" /></div>
    </form>
  )
}