import React from 'react';
import Banner from '../navigation/banner/Banner';
import Config from '../../Config';

class Home extends React.Component {
    render() {
      return (
          <div>
              <Banner title={Config.server_name}></Banner>
              <main class="home"></main>
          </div>
      );
    }
}

export default Home;
