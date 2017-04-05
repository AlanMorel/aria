import React from 'react';
import Axios from 'axios';
import Config from '../../Config';

class News extends React.Component {
  componentDidMount() {
    console.log(Config);
    Axios
      .get(Config.base_url + `posts/1.json`)
      .then(response => {
            const posts = response.data
            console.log(posts);
        });
  }

  render() {
    return <h1>News</h1>;
  }
}

export default News;
