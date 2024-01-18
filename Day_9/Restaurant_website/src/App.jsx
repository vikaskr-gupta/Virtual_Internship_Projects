// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Routes from './components/Routes';
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
