import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function ProductForm() {

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
    id:1,
    name: 'prueba1',
    description: 'adsdfaskjfhalsfalsfhaoshf',
    price: 5.99,
    stock: 6,
    img: 'https//imagen.com',
    category: 'Coolers'
  },
  {
    id:2,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'Coolers'
  },
  {
    id:3,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'Coolers'
  },
  {
    id:4,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'Coolers'
  },
  {
    id:5,
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
    id:'',
    name: '',
    description: '',
    price: '',
    stock:'',
    img:'',
    category:''
  });

  const seleccionarProducto = (elemento, caso) => {
    setProductoSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const editar = () => {
    var dataNueva = data;
    dataNueva.map(producto => {
      if (producto.id === productoSeleccionado.id) {
        producto.name = productoSeleccionado.name;
        producto.description = productoSeleccionado.description;
        producto.price = productoSeleccionado.price;
        producto.stock = productoSeleccionado.stock;
        producto.img = productoSeleccionado.img;
        producto.category = productoSeleccionado.category;
      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }

  const eliminar = () => {
    setData(data.filter(producto => producto.id !== productoSeleccionado.id));
    setModalEliminar(false);
  }

  const abrirModalInsertar = () => {
    setProductoSeleccionado(null);
    setModalInsertar(true);
  }

  const insertar = () => {
    var valorInsertar = productoSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }

  return (
    <div className="App">
      <h2>LISTA DE PRODUCTOS CHUSTO-WEBSITE</h2>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Nuevo Producto</button>
      <br /><br />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>description</th>
            <th>price</th>
            <th>stock</th>
            <th>img</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {data.map(elemento => (
            <tr>
              <td>{elemento.id}</td>
              <td>{elemento.name}</td>
              <td>{elemento.description}</td>
              <td>{elemento.price}</td>
              <td>{elemento.stock}</td>
              <td>{elemento.category}</td>
              <td><button className="btn btn-primary" onClick={() => seleccionarProducto(elemento, 'Editar')}>Editar</button> {"   "}
                <button className="btn btn-danger" onClick={() => seleccionarProducto(elemento, 'Eliminar')}>Eliminar</button></td>
            </tr>
          ))
          }
        </tbody>
      </table>

      <Modal isOpen={modalEditar}>
        <ModalHeader>
          <div>
            <h3>Editar Producto</h3>
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
              value={productoSeleccionado && productoSeleccionado.id}
            />
            <br />

            <label>Producto</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={productoSeleccionado && productoSeleccionado.name}
              onChange={handleChange}
            />
            <br />

            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={productoSeleccionado && productoSeleccionado.description}
              onChange={handleChange}
            />
            <br />

            <label>Price</label>
            <input
              className="form-control"
              type="text"
              name="price"
              value={productoSeleccionado && productoSeleccionado.price}
              onChange={handleChange}
            />
            <br />

            <label>Stock</label>
            <input
              className="form-control"
              type="text"
              name="stock"
              value={productoSeleccionado && productoSeleccionado.stock}
              onChange={handleChange}
            />
            <br />

            <label>Imagen URL</label>
            <input
              className="form-control"
              type="text"
              name="img"
              value={productoSeleccionado && productoSeleccionado.img}
              onChange={handleChange}
            />
            <br />

            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="category"
              value={productoSeleccionado && productoSeleccionado.category}
              onChange={handleChange}
            />
            <br />
          </div>
        </ModalBody>

        <ModalFooter>
          <button className="btn btn-primary" onClick={() => editar()}>
            Actualizar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalEditar(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>


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

export default ProductForm;