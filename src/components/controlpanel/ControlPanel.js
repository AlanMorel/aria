import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

class Downloads extends React.Component {

    componentDidMount() {
        Config.setTitle("Control Panel");
    }

    render() {

      return (
          <div>
              <Banner title="Control Panel" subtitle="Get the files you need to get in-game!" />
              <main className="downloads">
                  <h1>Installation Instructions</h1>
                  <ol>
                    <li>Download the Windows setup and client for {Config.server_name}.</li>
                    <li>Double-click the client after dropping it inside in the installation folder to start playing!</li>
                    <li>Login with your account credentials. If you haven't registered, please do so!</li>
                  </ol>
                  {setup}
                  {client}
              </main>
          </div>
      );
    }
}

export default Downloads;
