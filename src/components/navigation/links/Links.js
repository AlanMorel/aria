import React from 'react';
import { Link } from 'react-router-dom';
import Config from '../../../Config';

class Links extends React.Component {
    render() {
      return (
        <nav className="links">
          <ul>
            <li><Link to="/">Aria</Link></li>
            <li><Link to={{pathname: '/about'}}>About</Link></li>
            <li><Link to={{pathname: '/news'}}>News</Link></li>
            <li><Link to={{pathname: '/rankings'}}>Rankings</Link></li>
            <li><Link to={{pathname: '/join'}}>Join</Link></li>
            <li><Link to={{pathname: '/downloads'}}>Downloads</Link></li>
            <li><Link to={{pathname: Config.forum_link}}>Forum</Link></li>
            <li><Link to={{pathname: '/vote'}}>Vote</Link></li>
          </ul>
        </nav>
      );
    }
}

export default Links;
