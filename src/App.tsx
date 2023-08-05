import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Routes from './Routes';
import Contacts from './components/Contacts/Contacts';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes />
        <Contacts />
    </Router>
  );
}

export default App;
