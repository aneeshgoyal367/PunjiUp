import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import InvestorProfile from './pages/InvestorProfile';

import Header from './Components/Header';
ReactDOM.render(
  // <React.StrictMode>
  //  <Routes/>,
   <App/> ,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

