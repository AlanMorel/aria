import React from 'react';
import { Link } from 'react-router-dom';

var categories = {
    rankings: ["All", "Overall", "Fame", "Job"],
    news: ["All", "General", "Announcement", "Update", "Event", "Community"]
};

class Category extends React.Component {

    render() {
        console.log(this.props.type);
        console.log(this.props.active);

        var base = '/' + this.props.type + '/';
        var activeName = this.props.active ? this.props.active.toLowerCase() : "all";

        var category = categories[this.props.type].map(function(category) {

            var active = category.toLowerCase() === activeName;
            var className = active ? "active" : "";
            var suffix = category === "All" ? "" : category.toLowerCase();

            return (
                <li key={category} className={className}>
                    <Link to={{pathname: base + suffix}}>{category}</Link>
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
