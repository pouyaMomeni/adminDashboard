import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js'
import { Provider } from 'react-redux';
import { store } from './store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

