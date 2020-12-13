import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';
import Catalogue from '../components/Catalogue';
import ProductTable from '../components/ProductTable';
import Product from '../components/Product';

const products = [{
  title: "Geforce RTX 3080",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: 799.99,
  amount: 300,
  images: [
    "https://asset.msi.com/resize/image/global/product/product_7_20200917182157_5f6338c5cd72a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    "https://www.venex.com.ar/products_images/1601906116_product_10_20200902111548_5f4f0e648ab77.png",
    "https://imagenes.coolmod.com/msi-geforce-rtx-3080-ventus-3x-oc-10gb-gddr6x-tarjeta-grafica-005.jpg"
  ]
},
{
  title: "Geforce RTX 3080",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: 799.99,
  amount: 300,
  images: [
    "https://asset.msi.com/resize/image/global/product/product_7_20200917182157_5f6338c5cd72a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    "https://www.venex.com.ar/products_images/1601906116_product_10_20200902111548_5f4f0e648ab77.png",
    "https://imagenes.coolmod.com/msi-geforce-rtx-3080-ventus-3x-oc-10gb-gddr6x-tarjeta-grafica-005.jpg"
  ]
},
{
  title: "Geforce RTX 3080",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: 799.99,
  amount: 300,
  images: [
    "https://asset.msi.com/resize/image/global/product/product_7_20200917182157_5f6338c5cd72a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    "https://www.venex.com.ar/products_images/1601906116_product_10_20200902111548_5f4f0e648ab77.png",
    "https://imagenes.coolmod.com/msi-geforce-rtx-3080-ventus-3x-oc-10gb-gddr6x-tarjeta-grafica-005.jpg"
  ]
},
{
  title: "Geforce RTX 3080",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: 799.99,
  amount: 300,
  images: [
    "https://asset.msi.com/resize/image/global/product/product_7_20200917182157_5f6338c5cd72a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    "https://www.venex.com.ar/products_images/1601906116_product_10_20200902111548_5f4f0e648ab77.png",
    "https://imagenes.coolmod.com/msi-geforce-rtx-3080-ventus-3x-oc-10gb-gddr6x-tarjeta-grafica-005.jpg"
  ]
},
{
  title: "Geforce RTX 3080",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: 799.99,
  amount: 300,
  images: [
    "https://asset.msi.com/resize/image/global/product/product_7_20200917182157_5f6338c5cd72a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    "https://www.venex.com.ar/products_images/1601906116_product_10_20200902111548_5f4f0e648ab77.png",
    "https://imagenes.coolmod.com/msi-geforce-rtx-3080-ventus-3x-oc-10gb-gddr6x-tarjeta-grafica-005.jpg"
  ]
},
{
  title: "Geforce RTX 3080",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: 799.99,
  amount: 300,
  images: [
    "https://asset.msi.com/resize/image/global/product/product_7_20200917182157_5f6338c5cd72a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    "https://www.venex.com.ar/products_images/1601906116_product_10_20200902111548_5f4f0e648ab77.png",
    "https://imagenes.coolmod.com/msi-geforce-rtx-3080-ventus-3x-oc-10gb-gddr6x-tarjeta-grafica-005.jpg"
  ]
},
{
  title: "Geforce RTX 3080",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: 799.99,
  amount: 300,
  images: [
    "https://asset.msi.com/resize/image/global/product/product_7_20200917182157_5f6338c5cd72a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    "https://www.venex.com.ar/products_images/1601906116_product_10_20200902111548_5f4f0e648ab77.png",
    "https://imagenes.coolmod.com/msi-geforce-rtx-3080-ventus-3x-oc-10gb-gddr6x-tarjeta-grafica-005.jpg"
  ]
},
{
  title: "Geforce RTX 3080",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: 799.99,
  amount: 300,
  images: [
    "https://asset.msi.com/resize/image/global/product/product_7_20200917182157_5f6338c5cd72a.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
    "https://www.venex.com.ar/products_images/1601906116_product_10_20200902111548_5f4f0e648ab77.png",
    "https://imagenes.coolmod.com/msi-geforce-rtx-3080-ventus-3x-oc-10gb-gddr6x-tarjeta-grafica-005.jpg"
  ]
}];

const category = [{
  name: "CPU"
},
{
  name: "CPU Cooler"
},
{
  name: "Motherboard"
},
{
  name: "Memory"
},
{
  name: "Storage"
},
{
  name: "Video Card"
},
{
  name: "Power Supply"
},
{
  name: "Case"
}];

const reviews = {
  average: 4.4,
  total: 40,
};


function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Switch>

          <Route exact to path='/' component={Home} />

          <Route path='/admin' component={ProductTable} />

          <Route path='/products' >
            <Catalogue product={products} category={category} reviews={reviews} />
          </Route>

          <Route path='/product/:id' render={({ match }) => <Product match={match} product={products[0]} category={category[5]} reviews={reviews} />} />

          <Route component={NotFound} />

        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
