import React from 'react';

// Styles
import '../routes/App.css';

const Home = () => {
  return (
    <div className="App">
      <div style={{ margin: "0 10vw" }}>
        <Switch>
          <Route path="/products">
            <Catalogue product={products} category={category} reviews={reviews} />
          </Route>
          <Route path="/product/:id">
            <Product product={products[0]} category={category[5]} reviews={reviews} />
          </Route>
          <Route exact path="/admin">
            <ProductForm>Nuevo Producto</ProductForm>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Home;