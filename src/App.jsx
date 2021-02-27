import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Generics/Navbar';
import Landing from './components/Landing/Landing';
import Portafolio from './components/Portafolio/Portafolio';
import Resume from './components/Resume/Resume';

import './styles/index.css';

function App() {
  return(
    <Router>
      <Navbar />

      <Switch>
        <Route path="/projects">
          <Portafolio />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;