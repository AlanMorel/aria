import React from 'react';
import Banner from '../navigation/banner/Banner';

class Rankings extends React.Component {
    render() {
      return (
          <div>
              <Banner title="Rankings"></Banner>
              <main className="rankings"></main>
          </div>
      );
    }
}

export default Rankings;
