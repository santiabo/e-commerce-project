import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function ProductTable() {
  const productos = [{
    id: 1,
    name: 'prueba1',
    description: 'adsdfaskjfhalsfalsfhaoshf',
    price: 5.99,
    stock: 6,
    img: 'https//imagen.com',
    category: 'Cooler'
  },
  {
    id: 2,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'Mother'
  },
  {
    id: 3,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'PC'
  },
  {
    id: 4,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'Keyboards'
  },
  {
    id: 5,
    name: 'prueba2',
    description: 'jaldfhalsnclie',
    price: 8.99,
    stock: 1,
    img: 'https//imagen2.com',
    category: 'CPU'
  }
  ];

  const categories = [
    {
      id: 1,
      name: 'Coolers',
      description: 'loajfandflajbfjlasf'
    },
    {
      id: 2,
      name: 'PC',
      description: 'sadajnsfljaslfjna'
    },
    {
      id: 3,
      name: 'Mother',
      description: 'asljfbasvalncpasnc'
    },
    {
      id: 4,
      name: 'Keyboards',
      description: 'askdmaskdm'
    },
    {
      id: 5,
      name: 'CPU',
      description: 'asfncndiaejfaeif'
    }
  ];
  //Prductos Hooks
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
  //Categorias Hooks
  const [dataCategories, setDataCategories] = useState(categories);
  const [modalEditarCategoria, setModalEditarCategoria] = useState(false);
  const [modalEliminarCategoria, setModalEliminarCategoria] = useState(false);
  const [modalInsertarCategoria, setModalInsertarCategoria] = useState(false);

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState({
    id: '',
    name: '',
    description: ''
  });

  //Productos
  const seleccionarProducto = (elemento, caso) => {
    setProductoSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true);
  };
  //Categorias
  const seleccionarCategoria = (elemento, caso) => {
    setCategoriaSeleccionada(elemento);
    (caso === 'Editar') ? setModalEditarCategoria(true) : setModalEliminarCategoria(true);
  };

  //Productos
  const handleChange = e => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  //Categorias
  const handleChangeCategory = e => {
    const { name, value } = e.target;
    setCategoriaSeleccionada((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  //Productos
  const editar = () => {
    setData(data.map(d => {
      if (d.id === productoSeleccionado.id) {
        return productoSeleccionado;
      }
      return d;
    }));

    setModalEditar(false);
  };
  //Categorias
  const editarCategoria = () => {
    var dataNueva = dataCategories;
    dataNueva.map(categoria => {
      if (categoria.id === categoriaSeleccionada.id) {
        categoria.name = categoriaSeleccionada.name;
        categoria.description = categoriaSeleccionada.description;
      }
    });
    setDataCategories(dataNueva);
    setModalEditarCategoria(false);
  };

  //Productos
  const eliminar = () => {
    setData(data.filter(producto => producto.id !== productoSeleccionado.id));
    setModalEliminar(false);
  };
  //Categorias
  const eliminarCategoria = () => {
    setDataCategories(dataCategories.filter(categoria => categoria.id !== categoriaSeleccionada.id));
    setModalEliminarCategoria(false);
  };

  //Productos
  const abrirModalInsertar = () => {
    setProductoSeleccionado(null);
    setModalInsertar(true);
  };
  //Categories
  const abrirModalInsertarCategoria = () => {
    setCategoriaSeleccionada(null);
    setModalInsertarCategoria(true);
  };

  //Productos
  const insertar = () => {
    var valorInsertar = productoSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  };
  //Categorias
  const insertarCategoria = () => {
    var valorInsertar = categoriaSeleccionada;
    valorInsertar.id = dataCategories[data.length - 1].id + 1;
    var dataNueva = dataCategories;
    dataNueva.push(valorInsertar);
    setDataCategories(dataNueva);
    setModalInsertarCategoria(false);
  };

  return (
    <div className="App">
      <h2>Lista de Productos</h2>
      <br />
      <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Nuevo Producto</button>{"   "}
      <button className="btn btn-primary" onClick={() => abrirModalInsertarCategoria()}>Add Category</button>
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
              <td id='imgBox'><img src={elemento.img} alt={elemento.name} /></td>
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

            <select
              className="custom-select"
              name="category"
              onChange={handleChange}
            >
              {dataCategories.map((e) =>
                <option value={e.name} name="category">{e.name}</option>
              )}
            </select>
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
            {/* <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data.length ? (data[data.length - 1].id + 1) : null}
            />
            <br /> */}

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

          <label>Categoria</label>
          <select
            className="custom-select"
            name="category"
            onChange={handleChange}
          >
            {dataCategories.map((e) =>
              <option value={e.name} name="category">{e.name}</option>
            )}
          </select>
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

      {/*Insertar Categoria Modal */}
      <Modal isOpen={modalInsertarCategoria}>
        <ModalHeader>
          <div>
            <h3>Insertar Categoria</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            {/* <label>ID</label>
            <input
              className="form-control"
              readOnly
              type="text"
              name="id"
              value={data[data.length - 1].id + 1}
            />
            <br /> */}

            <label>Categoria</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={categoriaSeleccionada ? categoriaSeleccionada.name : ''}
              onChange={handleChangeCategory}
            />
            <br />

            <label>Description</label>
            <input
              className="form-control"
              type="text"
              name="description"
              value={categoriaSeleccionada ? categoriaSeleccionada.description : ''}
              onChange={handleChangeCategory}
            />
            <br />
          </div>

        </ModalBody>

        <ModalFooter>
          <button className="btn btn-primary"
            onClick={() => insertarCategoria()}>
            Insertar
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertarCategoria(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ProductTable;