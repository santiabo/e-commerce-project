import React from 'react';

export default function NewProduct() {
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
  ]

  return (
    <>
      <button type="button" className="btn btn-primary mt-3">New Product</button>
      <table className="table table-dark table-striped mt-3">
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Stock</td>
            <td>Image URL</td>
            <td>DELETE-EDIT</td>
          </tr>
        </thead>
        <tbody>
          {productos && productos.map((e) =>
            <tr>
              <td>{e.name}</td>
              <td>{e.description}</td>
              <td>{e.price}</td>
              <td>{e.stock}</td>
              <td>{e.img}</td>
              <button className="btn btn-danger">DELETE</button>
              <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">EDIT</button>
              <div className="modal" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                          <label for="name" className="form-label">Name</label>
                          <input type="text" className="form-control" id="name" aria-describedby="nameHelp" />
                          <div id="emailHelp" className="form-text">Enter a valid product name</div>
                        </div>
                        <div className="mb-3">
                          <label for="exampleInputPassword1" className="form-label">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                    <div classNameName="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

