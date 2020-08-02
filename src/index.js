import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './styles/index.css';
import Landing from './views/Landing.jsx';
import Portafolio from './views/Portafolio.jsx';
import Resume from './views/Resume.jsx';
import * as serviceWorker from './serviceWorker';

function updateNavebar(e) {
  const links = document.getElementsByClassName('nav-link');
  for (let i = 0; i < links.length; i += 1) {
    if (e.target === links[i]) {
      e.target.style.textDecoration = 'underline';
    } else {
      links[i].style.textDecoration = 'none';
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="navbar">
          <Link className="nav-link" onClick={updateNavebar} style={{textDecoration: 'underline'}} to="/">ABOUT</Link>
          <Link className="nav-link" onClick={updateNavebar} to="/projects">PROJECTS</Link>
          <Link className="nav-link" onClick={updateNavebar} to="/resume">RESUME</Link>
      </div>

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
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
