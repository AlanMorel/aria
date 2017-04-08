import React from 'react';
import Banner from '../navigation/banner/Banner';

class Post extends React.Component {
    render() {
      return (
          <div>
              <Banner title="Post"></Banner>
              <main class="post"></main>
          </div>
      );
    }
}

export default Post;
