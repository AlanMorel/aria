import React from 'react';
import { Link } from 'react-router-dom';

class Pagination extends React.Component {

    getBase() {
        var url = '/' + this.props.type + '/';
        var params = this.props.params;

        for (var i in params) {
            if (!params[i] || !isNaN(params[i])) {
                break;
            }

            url += params[i] + '/';
        }

        return url;
    }

    render() {
        var base = this.getBase();

        var prev = this.props.page_info.prev;
        var current = this.props.page_info.current;
        var next = this.props.page_info.next;
        var last = this.props.page_info.last;

      return (
          <nav className="pagination">
              <div className="page-info">Page {current} / {last}</div>
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
