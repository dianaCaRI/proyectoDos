import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pokemon from './Pokemon';
import Alumno from './Alumno';
import Rutas from './Rutas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Rutas />
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
        <Route path="/150245" element={<Alumno />} />
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
