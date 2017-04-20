import React from 'react';
import { Link } from 'react-router-dom';

class Pagination extends React.Component {
    render() {
        var base = '/' + this.props.type + '/';
        var prev = this.props.prev;
        var current = this.props.current;
        var next = this.props.next;
        var last = this.props.last;

      return (
        <nav className="pagination">
          <ul>
              <li><Link to={{pathname: base + '1'}}>First</Link></li>
              <li><Link to={{pathname: base + prev}}>Prev</Link></li>
              <li><Link to={{pathname: base + current}} className="current">Current</Link></li>
              <li><Link to={{pathname: base + next}}>Next</Link></li>
              <li><Link to={{pathname: base + last}}>Last</Link></li>
          </ul>
        </nav>
      );
    }
}

export default Pagination;
