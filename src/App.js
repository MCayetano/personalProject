import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home/HomeIns';
import Autoins from './components/Auto/Autoins';
import Commercial from './components/Commercial/Commercial';
import DefensiveDriving from './components/DefensiveDriving/Defensivedriving';
import Auth from './components/Auth/Auth';
import Dash from './components/Dash/Dash';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
            <Auth />
        </Route>
        <Route exact path='/dash'>
            <Dash />
        </Route>
        <Route exact path='/commercial'>
            <Commercial />
        </Route>
        <Route exact path='/auto'>
            <Autoins />
        </Route>
        <Route exact path='/Home'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
