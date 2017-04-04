import React from 'react';
import { Link } from 'react-router-dom';

class Links extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">Home</Link>
        <Link to={{pathname: '/rankings'}}>Rankings</Link>
        <Link to={{pathname: '/news'}}>News</Link>
        <Link to={{pathname: '/join'}}>Join</Link>
        <Link to={{pathname: '/downloads'}}>Downloads</Link>
        <Link to={{pathname: '/forum'}}>Forum</Link>
        <Link to={{pathname: '/vote'}}>Vote</Link>
      </nav>
    );
  }
}

export default Links;
