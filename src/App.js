import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

const Links = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to={{pathname: '/about'}}>About</Link>
    <Link to={{pathname: '/contact'}}>Contact</Link>
  </nav>
)

const App = () => (
  <Router>
    <div>
      <Links/>
      <Route exact path="/" render={() => <h1>Home</h1>}/>
      <Route path="/about" render={() => <h1>Home</h1>}/>
      <Route path="/contact" render={() => <h1>Contact</h1>}/>
    </div>
  </Router>
);

export default App
