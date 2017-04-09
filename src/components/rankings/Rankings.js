import React from 'react';
import Config from '../../Config';

import Banner from '../navigation/banner/Banner';

class Rankings extends React.Component {
    render() {
        return (
            <div>
                <Banner title="Rankings" subtitle={"See who's who in " + Config.server_name}></Banner>
                <main className="rankings"></main>
            </div>
        );
    }
}

export default Rankings;
