import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from 'App';
import store from 'redux/store';
import 'notiflix/dist/notiflix-aio-3.1.0.min.js';
import 'utils/notiflix-options';
import 'modern-normalize/modern-normalize.css';
import 'styles/base.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
