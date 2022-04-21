import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  return (
    <>
      <Header isLoggedIn={false}/>
      <Login isLoggedIn={false} />
    </>
  );
}

export default App;
