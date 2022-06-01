import React, { useState, useEffect } from 'react';
import Header from './Header'
import Container from './Container'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Container />
    </div>
  );
}

export default App;
