import React, { useState } from 'react';
import EditForm from '../EditForm';

export default function ProductForm() {
  const productos = [{
    name: 'prueba1',
    description: 'adsdfaskjfhalsfalsfhaoshf',
    price: 5.99,
    stock: 6,
    img: 'https//imagen.com'
  },
  {
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com'
  },
  {
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com'
  },
  {
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com'
  },
  {
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com'
  }
  ];

  const [visibility, setVisibility] = useState(false);

  return (
    <>
      <button type="button" className="btn btn-primary mt-3">New Product</button>
      <table className="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image URL</th>
            <th>DELETE-EDIT</th>
          </tr>
        </thead>

        <tbody>
          {productos && productos.map((e, i) =>
            <tr key={i}>
              <td>{e.name}</td>
              <td>{e.description}</td>
              <td>{e.price}</td>
              <td>{e.stock}</td>
              <td>{e.img}</td>
              <td type="button" className="btn btn-lg btn btn-danger" role="button">Delete</td>
              <td type="button" className="btn btn-lg btn-secondary" role="button" onClick={() => setVisibility(!visibility)} >Edit</td>
            </tr>
          )}
        </tbody>

      </table>
      <EditForm visibility={visibility} setVisibility={setVisibility} />
    </>
  );
}
