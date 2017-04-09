import React from 'react';
import Banner from '../navigation/banner/Banner';

class Downloads extends React.Component {
    render() {
      return (
          <div>
              <Banner title="Downloads"></Banner>
              <main className="downloads"></main>
          </div>
      );
    }
}

export default Downloads;
