import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Autoins from './components/Auto/Autoins';
import Commercial from './components/Commercial/Commercial';
import Homeins from './components/Home/HomeIns';
import Auth from './components/Auth/Auth';
import Header from './components/Header';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Commercial />
      <Switch>
        <Route path='/Auto' components={Autoins}/>
        <Route path='/Home' components={Homeins}/>
        <Route path='/' exact component={Auth}/>
      </Switch>
    </div>
  );
}

export default App;
