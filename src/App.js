import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Links from './components/navigation/Links';
import Post from './components/post/Post';
import News from './components/news/News';
import Rankings from './components/rankings/Rankings';
import Join from './components/join/Join';
import Downloads from './components/downloads/Downloads';
import Forum from './components/forum/Forum';
import Vote from './components/vote/Vote';

import './App.css';

const App = () => (
  <Router>
    <div>
      <Links/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/news" component={News}/>
      <Route path="/post" component={Post}/>
      <Route path="/rankings" component={Rankings}/>
      <Route path="/join" component={Join}/>
      <Route path="/downloads" component={Downloads}/>
      <Route path="/forum" component={Forum}/>
      <Route path="/vote" component={Vote}/>
    </div>
  </Router>
);

export default App
