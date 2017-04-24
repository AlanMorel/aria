import React from 'react';
import { Link } from 'react-router-dom';

var categories = {
    rankings: ["Overall", "Fame", "Job"],
    news: ["General", "Announcement", "Update", "Event", "Community"]
};

class Category extends React.Component {

    render() {
        console.log(this.props.type);
        console.log(this.props.active);

        var base = '/' + this.props.type + '/';
        var activeName = this.props.active ? this.props.active.toLowerCase() : "";

        var category = categories[this.props.type].map(function(category) {

            var active = category.toLowerCase() === activeName;
            var className = active ? "active" : "";

            return (
                <li key={category} className={className}>
                    <Link to={{pathname: base + category.toLowerCase()}}>{category}</Link>
                </li>
            );
        });

      return (
        <div className="category">
          <ul>
              {category}
          </ul>
      </div>
      );
    }
}

export default Category;
