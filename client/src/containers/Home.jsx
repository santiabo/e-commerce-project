import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Product from '../components/Product';
import Catalogue from '../components/Catalogue';

// Styles
import '../routes/App.css';

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

const Home = () => {

  return (
    <div className="App">
      <Switch>

        <Route path="/products">
          <Catalogue product={products} category={category} reviews={reviews} />
        </Route>

        <Route path="/product/:id">
          <Product product={products[0]} category={category[5]} reviews={reviews} />
        </Route>

      </Switch>
    </div>
  );
};
export default Home;