import React from 'react';
import './App.css';
import Autoins from './components/Auto/Autoins';
import Commercial from './components/Commercial/Commercial';
import Homeins from './components/Home/HomeIns';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <Autoins />
      <Homeins />
      <Commercial />
    </div>
  );
}

export default App;
