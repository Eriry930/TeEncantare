import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App'
import BreackFast from './Components/common/Views/BreackFast'
import Catalogue from './Components/common/Views/Catalogue'




ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    <Routes>
      {/* <Route path="/" element={<Header/>}> */}
        <Route index element={<App/>}/>
        <Route path="/catalogue" element={<Catalogue/>}/>
        <Route path="/breackfast" element={<BreackFast/>}/>
        <Route path="*" element={<Navigate replace to="/"/>}/>
      {/* </Route> */}
    </Routes>
    
  </HashRouter> 

    
  </React.StrictMode>,
  document.getElementById('root')
);

