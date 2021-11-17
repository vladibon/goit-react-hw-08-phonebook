import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'notiflix/dist/notiflix-aio-3.1.0.min.js';
import 'utils/notiflix-options';
import 'modern-normalize/modern-normalize.css';
import 'styles/base.scss';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
