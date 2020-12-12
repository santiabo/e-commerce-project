import React from 'react';

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
              <td type="button" className="btn btn-lg btn-secondary" role="button">Edit</td>
              {/* <button className="btn btn-danger">DELETE</button>
              <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">EDIT</button>
              <div className="modal" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">Edit Product</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="name" className="form-label">Name</label>
                          <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                          <div id="emailHelp" className="form-text">Enter a valid product name</div>
                        </div>
                        <div className="mb-3">
                          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div> */}
            </tr>
          )}
        </tbody>

      </table>
    </>
  );
}
