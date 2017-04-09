import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/navigation/header/Header';
import Post from './components/post/Post';
import News from './components/news/News';
import Rankings from './components/rankings/Rankings';
import Join from './components/join/Join';
import Downloads from './components/downloads/Downloads';
import Vote from './components/vote/Vote';

import './stylesheets/App.css';

const App = () => (
  <Router>
    <div>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/news" component={News}/>
      <Route path="/post/:id" component={Post} />
      <Route exact path="/post" component={Post}/>
      <Route path="/rankings" component={Rankings}/>
      <Route path="/join" component={Join}/>
      <Route path="/downloads" component={Downloads}/>
      <Route path="/vote" component={Vote}/>
    </div>
  </Router>
);

export default App
