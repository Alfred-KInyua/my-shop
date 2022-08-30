import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Details from './components/pages/details/Details';
import Home from './components/pages/home/home';
import Nav from './components/pages/nav/Nav';

const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="details" element={<Details />} />
    </Routes>
  </Router>
);
export default App;
