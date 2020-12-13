import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import NotFound from '../containers/NotFound';

import { useDispatch } from "react-redux";
import { getProduct, getProducts, addProduct, editProduct, removeProduct } from "../redux/actions/product";

const newProductTest = {
  "name": "New product from redux",
  "description": "asdasdadasda",
  "price": 56600,
  "stock": 350,
  "images": ["https://images-ext-2.discordapp.net/external/JIZXF5JUg1DtiYOuxAYgxsMybm1Klgvi9GWkMQGN4Qk/%3Ffit%3Dfill%26bg%3DFFFFFF%26w%3D700%26h%3D500%26auto%3Dformat%2Ccompress%26q%3D90%26trim%3Dcolor%26updated_at%3D1603481985%26w%3D1000/https/stockx.imgix.net/products/collectibles/MSI-GeForce-RTX-3080-DirectX-12-RTX-3080-VENTUS-3X-10G-10GB-320-Bit-GDDR6X-PCI-Express-40-HDCP-Black.jpg", "https://images-ext-2.discordapp.net/external/JIZXF5JUg1DtiYOuxAYgxsMybm1Klgvi9GWkMQGN4Qk/%3Ffit%3Dfill%26bg%3DFFFFFF%26w%3D700%26h%3D500%26auto%3Dformat%2Ccompress%26q%3D90%26trim%3Dcolor%26updated_at%3D1603481985%26w%3D1000/https/stockx.imgix.net/products/collectibles/MSI-GeForce-RTX-3080-DirectX-12-RTX-3080-VENTUS-3X-10G-10GB-320-Bit-GDDR6X-PCI-Express-40-HDCP-Black.jpg", "https://images-ext-2.discordapp.net/external/JIZXF5JUg1DtiYOuxAYgxsMybm1Klgvi9GWkMQGN4Qk/%3Ffit%3Dfill%26bg%3DFFFFFF%26w%3D700%26h%3D500%26auto%3Dformat%2Ccompress%26q%3D90%26trim%3Dcolor%26updated_at%3D1603481985%26w%3D1000/https/stockx.imgix.net/products/collectibles/MSI-GeForce-RTX-3080-DirectX-12-RTX-3080-VENTUS-3X-10G-10GB-320-Bit-GDDR6X-PCI-Express-40-HDCP-Black.jpg", "https://images-ext-2.discordapp.net/external/JIZXF5JUg1DtiYOuxAYgxsMybm1Klgvi9GWkMQGN4Qk/%3Ffit%3Dfill%26bg%3DFFFFFF%26w%3D700%26h%3D500%26auto%3Dformat%2Ccompress%26q%3D90%26trim%3Dcolor%26updated_at%3D1603481985%26w%3D1000/https/stockx.imgix.net/products/collectibles/MSI-GeForce-RTX-3080-DirectX-12-RTX-3080-VENTUS-3X-10G-10GB-320-Bit-GDDR6X-PCI-Express-40-HDCP-Black.jpg", "https://images-ext-2.discordapp.net/external/JIZXF5JUg1DtiYOuxAYgxsMybm1Klgvi9GWkMQGN4Qk/%3Ffit%3Dfill%26bg%3DFFFFFF%26w%3D700%26h%3D500%26auto%3Dformat%2Ccompress%26q%3D90%26trim%3Dcolor%26updated_at%3D1603481985%26w%3D1000/https/stockx.imgix.net/products/collectibles/MSI-GeForce-RTX-3080-DirectX-12-RTX-3080-VENTUS-3X-10G-10GB-320-Bit-GDDR6X-PCI-Express-40-HDCP-Black.jpg", "https://images-ext-2.discordapp.net/external/JIZXF5JUg1DtiYOuxAYgxsMybm1Klgvi9GWkMQGN4Qk/%3Ffit%3Dfill%26bg%3DFFFFFF%26w%3D700%26h%3D500%26auto%3Dformat%2Ccompress%26q%3D90%26trim%3Dcolor%26updated_at%3D1603481985%26w%3D1000/https/stockx.imgix.net/products/collectibles/MSI-GeForce-RTX-3080-DirectX-12-RTX-3080-VENTUS-3X-10G-10GB-320-Bit-GDDR6X-PCI-Express-40-HDCP-Black.jpg", "https://images-ext-2.discordapp.net/external/JIZXF5JUg1DtiYOuxAYgxsMybm1Klgvi9GWkMQGN4Qk/%3Ffit%3Dfill%26bg%3DFFFFFF%26w%3D700%26h%3D500%26auto%3Dformat%2Ccompress%26q%3D90%26trim%3Dcolor%26updated_at%3D1603481985%26w%3D1000/https/stockx.imgix.net/products/collectibles/MSI-GeForce-RTX-3080-DirectX-12-RTX-3080-VENTUS-3X-10G-10GB-320-Bit-GDDR6X-PCI-Express-40-HDCP-Black.jpg"]
};


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(2));
    dispatch(getProducts());
    dispatch(addProduct(newProductTest));
    dispatch(editProduct(2, { ...newProductTest, name: "Edited from Redux" }));
    dispatch(removeProduct(1));
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

