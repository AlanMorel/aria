import React from 'react';
import Banner from '../navigation/banner/Banner';

class Vote extends React.Component {
    render() {
      return (
          <div>
              <Banner title="Vote"></Banner>
              <main className="vote"></main>
          </div>
      );
    }
}

export default Vote;
