import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

// Components
import ProductEditForm from '../ProductEditForm';

// Style
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductTable() {

  /* const dataPaises = [
    { id: 1, nombre: "Filipinas", minutos: 241 },
    { id: 2, nombre: "Brasil", minutos: 225 },
    { id: 3, nombre: "Colombia", minutos: 216 },
    { id: 4, nombre: "Nigeria", minutos: 216 },
    { id: 5, nombre: "Argentina", minutos: 207 },
    { id: 6, nombre: "Indonesia", minutos: 195 },
    { id: 7, nombre: "Emiratos Árabes Unidos", minutos: 191 },
    { id: 8, nombre: "México", minutos: 190 },
    { id: 9, nombre: "Sudáfrica", minutos: 190 },
    { id: 10, nombre: "Egipto", minutos: 186 },
  ]; */
  const productos = [{
    id: 1,
    name: 'prueba1',
    description: 'adsdfaskjfhalsfalsfhaoshf',
    price: 5.99,
    stock: 6,
    img: 'https//imagen.com',
    category: 'Coolers'
  },
  {
    id: 2,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'Coolers'
  },
  {
    id: 3,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'Coolers'
  },
  {
    id: 4,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'Coolers'
  },
  {
    id: 5,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'Coolers'
  }
  ];

  const [data, setData] = useState(productos);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [productoSeleccionado, setProductoSeleccionado] = useState({
    id: '',
    name: '',
    description: '',
    price: '',
    stock: '',
    img: '',
    category: ''
  });

  const seleccionarProducto = (elemento, caso) => {
    setProductoSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const editar = () => {

    setData(data.map(d => {
      if (d.id === productoSeleccionado.id) {
        return productoSeleccionado;
      }

      return d;
    }));

    setModalEditar(false);
  };

  const eliminar = () => {
    setData(data.filter(producto => producto.id !== productoSeleccionado.id));
    setModalEliminar(false);
  };

  const abrirModalInsertar = () => {
    setProductoSeleccionado(null);
    setModalInsertar(true);
  };

  const insertar = () => {
    var valorInsertar = productoSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  };

  return (
    <div className="App">
      <h2>Lista de Productos</h2>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Nuevo Producto</button>
      <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Images</th>
            <th>Category</th>
            <th>Edit-Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento, i) => (
            <tr key={i}>
              <td>{elemento.id}</td>
              <td>{elemento.name}</td>
              <td>{elemento.description}</td>
              <td>{elemento.price}</td>
              <td>{elemento.stock}</td>
              <td id='imgBox'><img src={elemento.img} /></td>
              <td>{elemento.category}</td>
              <td><button className="btn btn-primary" onClick={() => seleccionarProducto(elemento, 'Editar')}>Editar</button> {"   "}
                <button className="btn btn-danger" onClick={() => seleccionarProducto(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <ProductEditForm
        modalEditar={modalEditar}
        setModalEditar={setModalEditar}
        editar={editar}
        productoSeleccionado={productoSeleccionado}
        handleChange={handleChange} />

      <Modal isOpen={modalEliminar}>
        <ModalBody>
          Estás Seguro que deseas eliminar el producto {productoSeleccionado && productoSeleccionado.nombre}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => eliminar()}>
            Sí
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => setModalEliminar(false)}
          >
            No
          </button>
        </ModalFooter>
      </Modal>


      <Modal isOpen={modalInsertar}>
        <ModalHeader>
          <div>
            <h3>Insertar Producto</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length - 1].id + 1}
            />
            <br />

            <label>Product</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={productoSeleccionado ? productoSeleccionado.name : ''}
              onChange={handleChange}
            />
            <br />

            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={productoSeleccionado ? productoSeleccionado.description : ''}
              onChange={handleChange}
            />
            <br />

            <label>Price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={productoSeleccionado ? productoSeleccionado.price : ''}
              onChange={handleChange}
            />
            <br />

            <label>Stock</label>
            <input
              className="form-control"
              type="text"
              name="stock"
              value={productoSeleccionado ? productoSeleccionado.stock : ''}
              onChange={handleChange}
            />
            <br />

            <label>Img URL</label>
            <input
              className="form-control"
              type="text"
              name="img"
              value={productoSeleccionado ? productoSeleccionado.img : ''}
              onChange={handleChange}
            />
            <br />
          </div>

          <label>Category</label>
          <input
            className="form-control"
            type="text"
            name="category"
            value={productoSeleccionado ? productoSeleccionado.category : ''}
            onChange={handleChange}
          />
          <br />
        </ModalBody>

        <ModalFooter>
          <button className="btn btn-primary"
            onClick={() => insertar()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProductTable;