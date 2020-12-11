import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './routes/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

