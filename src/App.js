import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/home/Home';
import About from './components/about/About';
import Header from './components/navigation/header/Header';
import Footer from './components/footer/Footer';
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
      <Join/>
      <Header/>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/news" component={News}/>
      <Route exact path="/news/:param1" component={News}/>
      <Route exact path="/news/:param1/:param2" component={News}/>
      <Route exact path="/post" component={Post}/>
      <Route exact path="/post/:id" component={Post} />
      <Route exact path="/rankings" component={Rankings}/>
      <Route exact path="/rankings/:param1" component={Rankings}/>
      <Route exact path="/rankings/:param1/:param2" component={Rankings}/>
      <Route exact path="/rankings/:param1/:param2/:param3" component={Rankings}/>
      <Route exact path="/join" component={Join}/>
      <Route exact path="/downloads" component={Downloads}/>
      <Route exact path="/vote" component={Vote}/>
      <Footer/>
    </div>
  </Router>
);

export default App
