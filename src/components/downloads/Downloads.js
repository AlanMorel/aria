import React from 'react';
import Banner from '../navigation/banner/Banner';

class Downloads extends React.Component {
    render() {
      return (
          <div>
              <Banner title="Downloads" subtitle="Get the files you need to get in-game!"></Banner>
              <main className="downloads"></main>
          </div>
      );
    }
}

export default Downloads;
