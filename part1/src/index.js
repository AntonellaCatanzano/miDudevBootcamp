import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React DOM es una librería que te permite instalar todas las dependencias que se van a renderizar
const root = ReactDOM.createRoot(document.getElementById('root')); // le dice donde lo tiene qure renderizar
root.render(
  // Le dice que es lo que tiene que renderizar 
  <React.StrictMode>    
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
