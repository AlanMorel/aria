import React from 'react';
import { Link } from 'react-router-dom';

var categories = {
    rankings: ["Overall", "Fame", "Job"],
    news: ["General", "Announcement", "News", "Update", "Event", "Development", "Community"]
};

class Category extends React.Component {

    render() {
        console.log(this.props.type);

        var category = categories[this.props.type].map(function(category) {
            return (
                <li key={category}>{category}</li>
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
