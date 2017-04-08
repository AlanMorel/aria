import React from 'react';
import { NavLink } from 'react-router-dom';
import Config from '../../../Config';

class Links extends React.Component {
    render() {
      return (
        <nav className="links">
          <ul>
            <li><NavLink exact activeClassName="active" to="/">Aria</NavLink></li>
            <li><NavLink activeClassName="active" to={{pathname: '/about'}}>About</NavLink></li>
            <li><NavLink activeClassName="active" to={{pathname: '/news'}}>News</NavLink></li>
            <li><NavLink activeClassName="active" to={{pathname: '/rankings'}}>Rankings</NavLink></li>
            <li><NavLink activeClassName="active" to={{pathname: '/join'}}>Join</NavLink></li>
            <li><NavLink activeClassName="active" to={{pathname: '/downloads'}}>Downloads</NavLink></li>
            <li><NavLink activeClassName="active" to={{pathname: Config.forum_link}}>Forum</NavLink></li>
            <li><NavLink activeClassName="active" to={{pathname: '/vote'}}>Vote</NavLink></li>
          </ul>
        </nav>
      );
    }
}

export default Links;
