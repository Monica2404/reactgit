import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import StateString from './Components/StateString';
//import Statenum from './Components/Statenum';
//import Statebool from './Components/Statebool';
//import Statepro from './Components/Statepro';
import App2 from './Components/App2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
