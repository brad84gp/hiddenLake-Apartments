import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import HomePage from './HomePage/homePage';
import Navigation from './Navigation/nav';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>

        <Route exact path="/" element={<HomePage />}>
          
        </Route>
      </Routes>
  
    </BrowserRouter>
  );
}

export default App;
