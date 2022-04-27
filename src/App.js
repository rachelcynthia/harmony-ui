import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn === false ? <Login /> : <Register /> }
    </>
  );
}

export default App;
