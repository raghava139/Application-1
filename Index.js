import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RunAPP from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import MainStore from '../src/Proje/E-commerce.js/Redux/Store/MainStore'
ReactDOM.render(
  <React.StrictMode>
    <Provider store={MainStore}>
    <RunAPP />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
