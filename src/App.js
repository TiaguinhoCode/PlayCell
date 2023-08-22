import Menu from './components/menu/Menu';
import Maps from './components/maps/Maps';
import React from 'react';
import './App.css';
import { Card } from './components/cards/Card';

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