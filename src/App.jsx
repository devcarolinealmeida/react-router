import React from 'react';
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Pagina404 from './pages/Page404';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path={'/'} element={<Home/>}/>
        <Route path={'/sobre'} element={<Sobre />}/>
        <Route path='*' element={<Pagina404 />}/>
      </Routes>
    </Router>
  );
}

export default App;
