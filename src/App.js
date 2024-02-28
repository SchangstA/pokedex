import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Pokedex from "./Pokedex.jsx"
import Search from "./Components/Search.jsx";

import './index.css';

const App = () => {
 return (
  <BrowserRouter>
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
      <header className="nav">
        <nav><Link to="/">Pokedex</Link></nav>
        <nav><Link to="/search">Search</Link></nav>
      </header>
    </div>
    <div style={{display: 'flex', alignContent: 'center', justifyContent: 'center'}}>
      <h1>Pokedex</h1>
    </div>
    <div className='pokedex-elements'>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  </BrowserRouter>
 );
}

export default App;
