import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

// Components
import Product from '../Product';

const Catalogue = ({ products }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [categories, setCategories] = useState([]);
  const history = useHistory();


  async function getAll() {
    return axios
      .get(`${process.env.REACT_APP_API}/categories`)
      .then((response) => {
        return response.data;
      })
      .catch(() => {
        return undefined;
      });
  }

  useEffect(() => {
    (async () => {
      const result = await getAll();
      result && setCategories(result.sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1));
    })();
  }, []);

  return (
    <div>
      {
        products &&
        products.map(e => {
          const image = e.image ? e.image[0].url || undefined : undefined;
          return (
            <Product
              key={e.id}
              id={e.id}
              img={image}
              title={e.name}
              price={e.price}
              onClick={() => {
                history.push(`/products/${e.id}`);
              }}
            />
          );
        })
      }
      <span>Filtrar por categoría</span>
      <button onClick={() => setShowFilter(!showFilter)}>
        Filtrar {" "}
        <i
          className={[
            "fas",
            showFilter ? "fa-caret-up" : "fa-caret-down",
          ].join(" ")}
        ></i>
      </button>
      <ul>
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => history.push(`/products?category=${category.id}`)}
          >
            {category.name}
          </li>
        ))}
        <li
          key={'all'}
          onClick={() => history.push(`/products`)}
        >
          Mostrar todos los articulos
              </li>
      </ul>

    </div>
  );
};

export default Catalogue;