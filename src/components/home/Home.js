import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Banner title={Config.server_name} subtitle=""></Banner>
                <main className="home"></main>
            </div>
        );
    }
}

export default Home;
