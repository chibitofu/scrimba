import React from 'react';
import Search from "./Search";
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div className="container">
      <div>
        <Navbar />
        <Search />
      </div>
    </div>
  );
}

export default App;
