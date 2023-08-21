import Menu from './components/menu/Menu';
import Maps from './components/Maps';
import React from 'react';
import './App.css';

function App() {

  return (
    <div className="App"> 
      <Menu/>
      <section className='container'>
        <Maps/>
      </section>
    </div>
  );
}

export default App;